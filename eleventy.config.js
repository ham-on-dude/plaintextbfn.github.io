module.exports = function(eleventyConfig) {
  // Copy your CSS or static assets straight through to the output folder if needed
  eleventyConfig.passthroughCopy("style.css"); // (if you separate your CSS out)

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
