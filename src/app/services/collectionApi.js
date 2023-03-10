import { createApi } from "@reduxjs/toolkit/query/react"
import axiosBaseQuery from "../axiosBaseQuery"

const collectionApi = createApi({
    tagTypes: ["TrackCollection", "AlbumCollection", "ArtistCollection"],
    baseQuery: axiosBaseQuery(),
    reducerPath: "collectionApi",
    refetchOnReconnect: true,
    keepUnusedDataFor: 5 * 60,
    endpoints(builder) {
        return {
            fetchTrackCollection: builder.query({
                query() {
                    return {
                        url: "/collection/tracks",
                        method: "GET"
                    }
                },

                providesTags: ["TrackCollection"]
            }),
            updateTrackCollection: builder.mutation({
                query(data) {
                    return {
                        url: `/collection/tracks`,
                        method: "PATCH",
                        data
                    }
                },

                invalidatesTags: ["TrackCollection"]
            }),
            fetchAlbumsCollection: builder.query({
                query() {
                    return {
                        url: "/collection/albums",
                        method: "GET"
                    }
                },

                providesTags: ["AlbumCollection"]
            }),
            updateAlbumsCollection: builder.mutation({
                query(data) {
                    return {
                        url: "/collection/albums",
                        method: "PATCH",
                        data
                    }
                },
                invalidatesTags: ["AlbumCollection"]
            }),
            fetchArtistsCollection: builder.query({
                query() {
                    return {
                        url: "/collection/artists",
                        method: "GET"
                    }
                },

                providesTags: ["ArtistCollection"]
            }),
            updateArtistsCollection: builder.mutation({
                query(data) {
                    return {
                        url: "/collection/artists",
                        method: "PATCH",
                        data
                    }
                },
                invalidatesTags: ["ArtistCollection"]
            })
        }
    }
})

export const {
    useFetchTrackCollectionQuery,
    useUpdateTrackCollectionMutation,
    useFetchAlbumsCollectionQuery,
    useUpdateAlbumsCollectionMutation,
    useFetchArtistsCollectionQuery,
    useUpdateArtistsCollectionMutation
} = collectionApi
export default collectionApi
