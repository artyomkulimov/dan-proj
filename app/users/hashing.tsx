const hashit = (tohash: string) => {
	let hash = 0;
	for (let i = 0; i < tohash.length; i += 20) {
		const chunk = tohash.slice(i, i + 20);
		if (chunk.length === 0) continue; // Skip empty chunks
		for (let j = 0; j < chunk.length; j++) {
			const chr = chunk.charCodeAt(j);
			hash = (hash << 5) - hash + chr;
		}
		hash |= 0;
	}
	// Ensure the hash is non-negative
	const nonNegativeHash = Math.abs(hash);
	// Convert the non-negative numeric hash to a base-36 string
	const hashString = nonNegativeHash.toString(36);
	return hashString;
};
export default hashit