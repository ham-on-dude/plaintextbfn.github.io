module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
