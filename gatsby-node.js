const path = require("path");
const fetch = require("node-fetch");

const generateSlug = (data) => {
  const slug = data.toString();
  return slug;
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "JSONData") {
    const slug = generateSlug(node.id);

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions;

  const getInvoices = async () => {
    const url = "https://code-test.sandbox.waya.se";
    const response = await fetch(url + "/api/invoices", {
      headers: { Authorization: "UserKey o8H97f5Yy789oFds" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch invoices");
    }

    const data = await response.json();
    return data;
  };

  const data = await getInvoices();

  data.data.forEach((item) => {
    const slug = generateSlug(item.id.toString()); // Convert item.id to a string

    createPage({
      path: `/invoice/${slug}`,
      component: path.resolve("./src/templates/Invoice.tsx"),
      context: {
        slug,
      },
    });
  });
};
