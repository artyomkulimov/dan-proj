"use client";

import { useEffect } from "react";

export default function Page({ params }: { params: { slug: string } }) {
	let referrals = localStorage.getItem(params.slug + "_ref");
	useEffect(() => {
		if (referrals) {
			let ref = parseInt(referrals) + 1;
            localStorage.setItem(params.slug + "_ref", ref.toString());
		} else {
			console.log("what");
		}
	}, [params.slug, referrals]);

	return (
		<div>
			<p>{params.slug}</p>
			<p>
				Your referral has been used:{" "}
				{localStorage.getItem(params.slug + "_ref")} times!
			</p>
		</div>
	);
}
