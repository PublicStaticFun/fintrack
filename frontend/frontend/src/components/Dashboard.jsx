import React from "react";

function Dashboard({ summary }) {
  if (!summary) return <p>Cargando resumen...</p>;

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Resumen mensual</h2>

      <p><strong>Total ingresos:</strong> ${summary.total_income}</p>
      <p><strong>Total gastos:</strong> ${summary.total_expense}</p>
      <p><strong>Balance:</strong> ${summary.balance}</p>
    </div>
  );
}

export default Dashboard;
