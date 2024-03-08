const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
	// Include assets in output folder
	eleventyConfig.addPassthroughCopy("src/assets/");

	// Returns the current year
	// Usage: {% year %}
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// Markdown to HTML filter
	const md = new markdownIt({
		html: true,
	});
	eleventyConfig.addFilter("markdown", (content) => {
		return md.render(content);
	});

	// Returns the first image of a post
	// Usage: {{ post.content | preview }}
	eleventyConfig.addFilter("preview", (post) => {
		const response = post;
		const regex = /<img.*?src="(.*?)"/;
		const corresp = regex.exec(response);
		return corresp ? corresp[1] : "";
	});

	// Returns the first paragraph of a post
	// Usage: {{ post.content | excerpt | safe }}
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
