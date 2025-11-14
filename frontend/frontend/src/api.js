import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

// =========================
// TRANSACCIONES
// =========================
export const getTransactions = () => api.get("transactions/");
export const createTransaction = (data) => api.post("transactions/", data);
export const deleteTransaction = (id) => api.delete(`transactions/${id}/`);
export const updateTransaction = (id, data) =>
  api.put(`transactions/${id}/`, data);

// =========================
// RESUMEN MENSUAL
// =========================
export const getMonthlySummary = () => api.get("transactions/summary/");

// =========================
// CATEGORÍAS
// =========================
export const getCategories = () => api.get("categories/");
