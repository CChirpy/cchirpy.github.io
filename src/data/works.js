// Load environment variables from a .env file
require("dotenv").config();

// Import necessary modules
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

// Initialize
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({
	notionClient: notion,
	config: { parseChildPages: false },
});

module.exports = async () => {
	// Fetch the database
	const databaseId = process.env.NOTION_ID;
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			property: "Status",
			status: {
				does_not_equal: "Hidden",
			},
		},
		sorts: [
			{
				property: "Year",
				direction: "descending",
			},
		],
	});
	// console.log(response.results);
	// console.log(response.results[0].properties['']);

	// Convert Notion pages to Markdown and extract relevant data
	const worksPromises = response.results.map(async (result) => {
		const mdblocks = await n2m.pageToMarkdown(result.id);
		const mdstring = n2m.toMarkdownString(mdblocks).parent;
		return {
			name: result.properties["Name"].title[0].plain_text,
			description: result.properties["Description"].rich_text[0].plain_text,
			year: result.properties["Year"].formula.number,
			status: result.properties["Status"].status.name,
			tags: result.properties["Tags"].multi_select.map((tag) => tag.name),
			tools: result.properties["Tools"].multi_select.map((tag) => tag.name),
			organization: result.properties["Organization"].select?.name || null,
			website: result.properties["Website"].url || null,
			content: mdstring,
		};
	});
	const works = await Promise.all(worksPromises);

	// console.log(works);
	return works;
};
