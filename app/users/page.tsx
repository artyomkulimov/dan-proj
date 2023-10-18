"use client";

import React, { useState } from "react";
import hashit from "./hashing";

const CreateReferral = () => {
	const [username, setUsername] = useState("");
	const [key, setKey] = useState("");
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		localStorage.setItem(username, hashit(username).toString());
		let value;
		value = localStorage.getItem(username) || "";
		setKey(value);
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<label>
					<span>username</span>
					<input
						required
						type="text"
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<button type="submit" className="btn btn-blue">
					hello
				</button>
				<p>
					{username}: {key}
				</p>
			</form>

			<button
				onClick={() => {
					localStorage.clear();
				}}
				className="btn btn-blue"
			>
				clear the storage
			</button>
		</>
	);
};

export default CreateReferral;
