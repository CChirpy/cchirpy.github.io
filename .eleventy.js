module.exports = function (eleventyConfig) {
	// Include assets in output folder.
	eleventyConfig.addPassthroughCopy("src/assets/");

	// Returns the first paragraph of a post.
	eleventyConfig.addFilter("excerpt", (post) => {
		const response = post;
		const regex = /<p>(.*?)<\/p>/;
		const corresp = regex.exec(response);
		return corresp ? corresp[1] : "";
	});

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "includes",
			data: "data",
		},
	};
};
