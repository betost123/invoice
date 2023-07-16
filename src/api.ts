import { Invoice } from "./models";

export const getInvoices = async () => {
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

export const getInvoice = async (id: number | string) => {
  const url = "https://code-test.sandbox.waya.se";
  const response = await fetch(url + `/api/invoices/${id}`, {
    headers: { Authorization: "UserKey o8H97f5Yy789oFds" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch invoices");
  }

  const data = await response.json();
  return data;
};

export const updateInvoice = async (
  id: number | string,
  updatedInvoice: Invoice,
  onSuccess: () => void
) => {
  const url = "https://code-test.sandbox.waya.se";

  try {
    const response = await fetch(`${url}/api/invoices/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "UserKey o8H97f5Yy789oFds",
      },
      body: JSON.stringify(updatedInvoice),
    });

    if (!response.ok) {
      throw new Error("Failed to update invoice");
    }

    console.log("Invoice updated successfully");
    onSuccess();
  } catch (error) {
    console.error(error);
  }
};
