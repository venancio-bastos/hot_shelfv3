export default function ThresholdConfigModal({
  productName,
  onClose,
}: {
  productName: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-[400px]">
        <h3 className="text-xl font-semibold mb-4">Threshold Config</h3>
        <p className="text-gray-700 mb-4">Adjust limits for: {productName}</p>

        <input
          type="number"
          className="w-full border px-2 py-1 rounded mb-4"
          placeholder="Enter new threshold"
        />

        <div className="flex justify-end gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
