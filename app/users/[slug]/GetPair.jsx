"use client";
import React from "react";

const GetPair = (props) => {
	return (
		<div>
			{props.slug}: {localStorage.getItem(props.slug)}
		</div>
	);
};

export default GetPair;
