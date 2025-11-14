import React, { useEffect, useState } from "react";
import {
  getTransactions,
  createTransaction,
  deleteTransaction,
  getMonthlySummary,
  getCategories,
} from "./api";
import axios from "axios";

import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [tRes, sRes, cRes] = await Promise.all([
        getTransactions(),
        getMonthlySummary(),
        getCategories(),
      ]);

      setTransactions(tRes.data);
      setSummary(sRes.data);
      setCategories(cRes.data);
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  const handleCreateTransaction = async (data) => {
    try {
      await createTransaction(data);
      loadData();
    } catch (error) {
      console.error("Error creando transacción:", error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await deleteTransaction(id);
      loadData();
    } catch (error) {
      console.error("Error eliminando transacción:", error);
    }
  };

  // Función para agregar
  const handleAddTransaction = (newData) => {
    axios.post("http://localhost:8000/api/transactions/", newData)
      .then((res) => {
        setTransactions([...transactions, res.data]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <Dashboard summary={summary} />
      <TransactionForm categories={categories} onSubmit={handleCreateTransaction} onAdd={handleAddTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={handleDeleteTransaction} />
    </div>
  );
}

export default App;
