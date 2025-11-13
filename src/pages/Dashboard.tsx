import { Outlet, useNavigate, useParams } from "react-router-dom";
import { mockData } from "../data/mockData";
import { profiles } from "../data/profilesData";
import { useState } from "react";
import Header from "../components/Header";
import AdminPanel from "../components/AdminPanel";
import { AlertTriangle, Eye, Flame, Package } from "lucide-react";
import { useAppContext } from "../context/AppContext";

function getDetectionStatus(
  d: (typeof mockData.detections)[0]
): "critical" | "alert" | "ok" {
  if (d.pontuacao_total < 50) return "critical";
  if (d.pontuacao_total < 70) return "alert";
  return "ok";
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { cameraId } = useParams();
  const { detections, currentUser, switchUser, isDarkMode, toggleDarkMode } =
    useAppContext();
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const criticalDetections = detections.filter(
    (d) => getDetectionStatus(d) === "critical"
  );
  const alertDetections = detections.filter(
    (d) => getDetectionStatus(d) === "alert"
  );

  const criticalCount = criticalDetections.length;
  const alertCount = alertDetections.length;

  const avgStock = Math.round(
    detections.reduce((sum, d) => sum + d.quantidade_pct, 0) / detections.length
  );
  const avgAttractiveness = Math.round(
    detections.reduce((sum, d) => sum + d.pontuacao_total, 0) /
      detections.length
  );

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`* { font-family: 'Comfortaa', cursive !important; }`}</style>

        <Header
          currentUser={currentUser}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
          onOpenAdminPanel={() => setShowAdminPanel(true)}
        />

        {showAdminPanel && (
          <AdminPanel
            currentUser={currentUser}
            onClose={() => setShowAdminPanel(false)}
            onSwitchUser={switchUser} // ✅ now matches type
            onUpdatePhoto={(photo) => setSelectedThresholdProduct(photo)}
          />
        )}

        {cameraId ? (
          <Outlet />
        ) : (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Sections Critical
                  </h3>
                  <Flame className="text-red-500" size={24} />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {Math.round((criticalCount / detections.length) * 100)}%
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{
                      width: `${(criticalCount / detections.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Sections on Alert
                  </h3>
                  <AlertTriangle className="text-yellow-500" size={24} />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {Math.round((alertCount / detections.length) * 100)}%
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{
                      width: `${(alertCount / detections.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-shadow`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Global Stock
                  </h3>
                  <Package className="text-blue-500" size={24} />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {avgStock}%
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${avgStock}%` }}
                  ></div>
                </div>
              </div>

              <div
                className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow transition-shadow`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Global Attractiveness
                  </h3>
                  <Eye className="text-green-500" size={24} />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {avgAttractiveness}%
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${avgAttractiveness}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">
                Live Shelf Monitor
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {Array.from(new Set(detections.map((d) => d.camera_id))).map(
                  (type) => {
                    console.log({ type });
                    const items = detections.filter(
                      (d) => d.camera_id === type
                    );
                    const worstScore = Math.min(
                      ...items.map((d) => d.pontuacao_total)
                    );
                    const status =
                      worstScore < 50
                        ? "Critical"
                        : worstScore < 70
                        ? "Warning"
                        : "Good";
                    const statusColor =
                      status === "Critical"
                        ? "bg-red-100 border-red-500"
                        : status === "Warning"
                        ? "bg-yellow-100 border-yellow-500"
                        : "bg-green-100 border-green-500";
                    const statusBadge =
                      status === "Critical"
                        ? "bg-red-500"
                        : status === "Warning"
                        ? "bg-yellow-500"
                        : "bg-green-500";

                    return (
                      <div
                        key={type}
                        onClick={() => navigate(`/shelf/${type}`)}
                        className={`${statusColor} border-2 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold">Frutas</h4>
                          <span
                            className={`${statusBadge} text-white text-xs px-2 py-1 rounded-full`}
                          >
                            {status}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Shelf 1</span>
                            <span className="font-semibold">
                              {Math.round(
                                items.reduce(
                                  (sum, d) => sum + d.quantidade_pct,
                                  0
                                ) / items.length
                              )}
                              %
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Stock:{" "}
                            <span className="font-semibold text-blue-600">
                              {Math.round(
                                items.reduce(
                                  (sum, d) => sum + d.quantidade_pct,
                                  0
                                ) / items.length
                              )}
                              %
                            </span>{" "}
                            | Attractiveness:{" "}
                            <span className="font-semibold text-green-600">
                              {Math.round(
                                items.reduce(
                                  (sum, d) => sum + d.pontuacao_total,
                                  0
                                ) / items.length
                              )}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold mb-4 dark:text-white">
                Product Overview
              </h3>
              <div className="space-y-4">
                {Array.from(new Set(detections.map((d) => d.product_name))).map(
                  (productName) => {
                    const items = detections.filter(
                      (d) => d.product_name === productName
                    );

                    const avgScore = Math.round(
                      items.reduce((sum, d) => sum + d.pontuacao_total, 0) /
                        items.length
                    );

                    const avgStock = Math.round(
                      items.reduce((sum, d) => sum + d.quantidade_pct, 0) /
                        items.length
                    );

                    return (
                      <div
                        key={productName}
                        className="border dark:border-gray-700 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold dark:text-white">
                            {productName}
                          </h4>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              avgScore >= 70
                                ? "bg-green-100 text-green-800"
                                : avgScore >= 50
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            Score: {avgScore}%
                          </span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {items.map((item) => (
                            <div
                              key={item.roi_id}
                              className="px-3 py-1 rounded-full text-xs font-semibold text-white transition-transform"
                              style={{
                                backgroundColor:
                                  item.pontuacao_total >= 70
                                    ? "#10B981" // green
                                    : item.pontuacao_total >= 50
                                    ? "#F59E0B" // yellow
                                    : "#EF4444", // red
                              }}
                            >
                              {item.roi_id}
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          Avg Stock: {avgStock}%
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
