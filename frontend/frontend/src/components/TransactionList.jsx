import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-3">Transacciones</h3>

      <ul>
        {transactions.map((t) => (
          <li key={t.id} className="border-b py-3">
            <div className="font-bold text-lg">
              {t.title}
            </div>

            <div className="flex items-center">
              <span className="mr-2">
                {t.transaction_type === 'income' ? '💰' : '💸'}
              </span>
              <span className="font-semibold">${t.amount}</span>
            </div>

            {t.description && (
              <div className="text-gray-600 text-sm mt-1">
                {t.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
