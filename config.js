const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://styczynski.in/docs",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
		"logoLink": "https://github.com/styczynski/docs",
		"title": "styczynski.in the public docs",
		"githubUrl": "https://github.com/styczynski/docs",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "Hasura", "link": "https://hasura.io"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "styczynski.in the public docs",
		"description": "Public design docs, tutorials and guides repository",
		"ogImage": null,
		"docsLocation": "https://github.com/styczynski/docs/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
};

module.exports = config;