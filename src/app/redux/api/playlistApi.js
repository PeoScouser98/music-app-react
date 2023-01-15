import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const playlistApi = createApi({
	reducerPath: "playlists",
	tagTypes: ["Playlists", "UserPlaylists"],
	refetchOnReconnect: true,
	refetchOnMountOrArgChange: true,
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) headers.set("token", token);
			return headers;
		},
	}),
	endpoints: (builder) => {
		return {
			fetchUserPlaylists: builder.query({
				query: (userId) => `/playlist/${userId}`,
				providesTags: ["UserPlaylists"],
			}),
			fetchAllPlaylist: builder.query({
				query: (limit) => `/playlist?limit=${limit}`,
				providesTags: ["Playlists"],
			}),
			addToPlaylist: builder.mutation({
				query: (id, payload) => {
					return {
						url: `/playlist/${id}`,
						method: "PATCH",
						body: payload,
					};
				},
				invalidatesTags: ["UserPlaylists", "Playlists"],
			}),
			updateUserPlaylist: builder.mutation({
				query: (id, payload) => {
					return {
						url: `/playlist/${id}`,
						method: "PATCH",
						body: payload,
					};
				},
				invalidatesTags: ["UserPlaylists"],
			}),
		};
	},
});

export const {
	useFetchAllPlaylistQuery,
	useFetchUserPlaylistsQuery,
	useAddToPlaylistMutation,
	useUpdateUserPlaylistMutation,
} = playlistApi;
export default playlistApi;
