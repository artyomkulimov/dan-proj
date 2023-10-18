"use client";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
	const [key, setKey] = useState("");
	useEffect(() => {
		let value;
		// Get the value from local storage if it exists
		value = localStorage.getItem(params.slug) || "";
		setKey(value);
	}, [params.slug]);
	return (
		<div>
			<p>
				{params.slug}: {key}
			</p>
		</div>
	);
}
