import { Detection } from "../App";

export default function ProductDetailsModal({
  detection,
  allDetections,
  onClose,
}: {
  detection: Detection;
  allDetections: Detection[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-[400px]">
        <h3 className="text-xl font-semibold mb-4">{detection.produto}</h3>
        <p className="text-gray-700">Score: {detection.pontuacao_total}</p>
        <p className="text-gray-700">Stock: {detection.stock}</p>

        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
