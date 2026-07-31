module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("assets"); // This tells Eleventy to copy your assets
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
