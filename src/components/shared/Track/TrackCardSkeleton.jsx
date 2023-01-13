import tw from "tailwind-styled-components";

export const TextSkeleton = tw.div`h-2 w-32 rounded-full bg-base-content opacity-20`;
export const ThumbnailSketon = tw.div`h-14 w-14 rounded-lg bg-base-content opacity-20`;

const TrackCardSkeleton = () => {
	return (
		<tr className="table-row">
			<td className="animate-pulse"></td>
			<td colSpan={2} className="animate-pulse">
				<div className="flex items-center gap-2">
					<ThumbnailSketon />
					<div className="flex flex-col gap-4">
						<TextSkeleton />
						<TextSkeleton />
					</div>
				</div>
			</td>
			<td className="animate-pulse ">
				<TextSkeleton />
			</td>
			<td className="animate-pulse ">
				<TextSkeleton />
			</td>
			<td className="animate-pulse ">
				<TextSkeleton />
			</td>
		</tr>
	);
};

export default TrackCardSkeleton;
