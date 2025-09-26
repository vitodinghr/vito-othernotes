import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "VITODING.NOTES",
	// Your website's title and description (meta fields)
	title: "VITODING.NOTES",
	description:
		"Reading Notes Beyond Book Reviews - Dive into a world of insights, reflections, and knowledge as I share my reading journey through detailed notes and thoughtful analyses. Explore a curated collection of book summaries, thematic explorations, and personal takeaways that go beyond traditional reviews. Join me in uncovering the essence of each book and discovering new perspectives along the way.",
	// Your information!
	author: {
		name: "Vito",
		email: "haoran.ding@yahoo.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Blogsmith logo",
	},
};

export default siteData;
