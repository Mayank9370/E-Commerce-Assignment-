"use client"

export const Receipt = ({ receipt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">Order Successful!</h2>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Order ID</p>
            <p className="font-bold">{receipt.id}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Customer Name</p>
            <p className="font-bold">{receipt.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-bold">{receipt.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Items</p>
            {receipt.items.map((item, idx) => (
              <p key={idx} className="text-sm">
                {item.productId?.name} x {item.quantity}
              </p>
            ))}
          </div>

          <div className="border-t-2 pt-4">
            <p className="text-sm text-gray-600">Total Amount</p>
            <p className="text-2xl font-bold text-green-600">${receipt.total.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">{new Date(receipt.timestamp).toLocaleString()}</p>
          </div>
        </div>

        <button onClick={onClose} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  )
}