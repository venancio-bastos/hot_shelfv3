import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Video, Package, MoreVertical } from "lucide-react";

const ShelfDetail = () => {
  const { cameraId } = useParams();
  const {
    detections,
    currentUser,
    setSelectedSlot,
    setSelectedThresholdProduct,
  } = useAppContext();

  const shelfDetections = detections.filter(
    (d) =>
      d.camera_id === cameraId ||
      d.roi_id === cameraId ||
      d.product_id === cameraId
  );

  console.log({ currentUser });

  const sortedDetections = [...shelfDetections].sort((a, b) => {
    const aY = a.roi_quad_px.top_left[1];
    const bY = b.roi_quad_px.top_left[1];
    if (Math.abs(aY - bY) > 50) {
      return aY - bY;
    }
    return a.roi_quad_px.top_left[0] - b.roi_quad_px.top_left[0];
  });

  const uniqueProducts = Array.from(
    new Set(sortedDetections.map((d) => d.product_name))
  )
    .map((name) => {
      const items = sortedDetections.filter((d) => d.product_name === name);
      const avgScore = Math.round(
        items.reduce((sum, d) => sum + d.pontuacao_total, 0) / items.length
      );
      const avgStock = Math.round(
        items.reduce((sum, d) => sum + d.quantidade_pct, 0) / items.length
      );
      return { name, avgScore, avgStock, items };
    })
    .sort((a, b) => a.avgScore - b.avgScore);

  if (sortedDetections.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600 dark:text-gray-300">
        <h2 className="text-2xl font-semibold mb-2">No data found</h2>
        <p>There are no shelf detections for ID: {cameraId}</p>
      </div>
    );
  }

  return (
    <div className="p-6 flex gap-6">
      <div className="flex-1">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Shelf Grid ({cameraId})
          </h2>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {sortedDetections.map((detection) => {
              const bgColor =
                detection.pontuacao_total >= 70
                  ? "bg-green-100 dark:bg-green-900"
                  : detection.pontuacao_total >= 50
                  ? "bg-yellow-100 dark:bg-yellow-900"
                  : "bg-red-100 dark:bg-red-900";

              return (
                <div
                  key={detection.roi_id}
                  onClick={() => setSelectedSlot(detection)}
                  className={`${bgColor} rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all`}
                >
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {detection.product_name}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Stock:
                      </span>
                      <span className="font-semibold">
                        {detection.quantidade_pct}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Score:
                      </span>
                      <span className="font-semibold">
                        {detection.pontuacao_total}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="w-full bg-[#D91E2A] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#B91825] transition-colors">
            <Video size={20} />
            Live View
          </button>
        </div>
      </div>

      <div className="w-96">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow sticky top-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Products</h2>
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {uniqueProducts.map((product) => (
              <div
                key={product.name}
                className="border dark:border-gray-700 rounded-lg p-4 relative"
              >
                {currentUser.role === "Administrator" && (
                  <button
                    onClick={() => setSelectedThresholdProduct(product.name)}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <MoreVertical size={18} />
                  </button>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <Package size={28} className="text-gray-500" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm dark:text-white">
                      {product.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                        product.avgScore >= 70
                          ? "bg-green-100 text-green-800"
                          : product.avgScore >= 50
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.avgScore >= 70
                        ? "Bom"
                        : product.avgScore >= 50
                        ? "Razoável"
                        : "Mau"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 dark:text-gray-400">
                        Stock
                      </span>
                      <span className="font-semibold dark:text-white">
                        {product.avgStock}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${product.avgStock}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 dark:text-gray-400">
                        Attractiveness
                      </span>
                      <span className="font-semibold dark:text-white">
                        {product.avgScore}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${product.avgScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShelfDetail;
