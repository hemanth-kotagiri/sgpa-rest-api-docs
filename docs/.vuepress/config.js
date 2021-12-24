const fs = require("fs");
const path = require("path");

module.exports = {
  base: "/sgpa-rest-api-docs/",
  lang: "en-US",
  title: "Documentation",
  description: "Documentation for SGPA REST API",

  themeConfig: {
    navbar: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "API Reference",
        link: "/endpoints/",
      },
    ],
    repo: "https://github.com/hemanth-kotagiri/sgpa-rest-api",

    docsRepo: "https://github.com/hemanth-kotagiri/sgpa-rest-api-docs",
    docsBranch: "main",
    docsDir: "docs",
    sidebar: {
      "/": getSideBar("/", "Introduction"),
      "/endpoints/": getSideBar("/endpoints/", "API Reference"),
    },
  },
};

function getSideBar(folder, title, include_readme) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (file) =>
        file.toLocaleLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
        extension.includes(path.extname(file))
    );

  if (include_readme) {
    files.unshift("README.md");
  }

  return [{ text: title, children: files }];
}
