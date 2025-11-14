import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    description: '',
    transaction_type: 'income'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ title: '', amount: '', description: '', transaction_type: 'income' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-6">
      
      <input
        type="text"
        placeholder="Título"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border p-2 mr-2"
        required
      />

      <input
        type="number"
        placeholder="Monto"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        className="border p-2 mr-2"
        required
      />

      <input
        type="text"
        placeholder="Descripción"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="border p-2 mr-2"
      />

      <select
        value={formData.transaction_type}
        onChange={(e) => setFormData({ ...formData, transaction_type: e.target.value })}
        className="border p-2 mr-2"
      >
        <option value="income">Ingreso</option>
        <option value="expense">Gasto</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Agregar
      </button>
    </form>
  );
}

export default TransactionForm;
