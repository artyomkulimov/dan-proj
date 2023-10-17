import GetPair from "./GetPair";

export default function Page({ params }: { params: { slug: string } }) {
	return (
		<div>
			<p>
				<GetPair slug={params.slug}></GetPair>
			</p>
		</div>
	);
}
