import { X } from "lucide-react";
import { Detection } from "../context/AppContext";
import { useState } from "react";

interface ThresholdConfigModalProps {
  product: Detection;
  onClose: () => void;
}

interface ThresholdSettings {
  good: number;
  warning: number;
  critical: number;
}

export const ThresholdConfigModal = ({
  product,
  onClose,
}: ThresholdConfigModalProps) => {
  const [stockThresholds, setStockThresholds] = useState<ThresholdSettings>({
    good: 70,
    warning: 40,
    critical: 20,
  });

  const [qualityThresholds, setQualityThresholds] = useState<ThresholdSettings>(
    {
      good: 80,
      warning: 60,
      critical: 40,
    }
  );

  const [organizationThresholds, setOrganizationThresholds] =
    useState<ThresholdSettings>({
      good: 75,
      warning: 50,
      critical: 30,
    });

  const [contextThresholds, setContextThresholds] = useState<ThresholdSettings>(
    {
      good: 75,
      warning: 50,
      critical: 30,
    }
  );

  const handleSave = () => {
    console.log("Saving thresholds:", {
      product: product.product_name,
      stock: stockThresholds,
      quality: qualityThresholds,
      organization: organizationThresholds,
      context: contextThresholds,
    });
    onClose();
  };

  // Helper to render sliders with color gradient
  const Slider = ({
    label,
    thresholds,
    setThresholds,
    currentValue,
    colors,
  }: {
    label: string;
    thresholds: ThresholdSettings;
    setThresholds: (value: ThresholdSettings) => void;
    currentValue: number;
    colors: { good: string; warning: string; critical: string };
  }) => {
    const createGradient = (value: number, color: string) =>
      `linear-gradient(to right, ${color} 0%, ${color} ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`;

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-semibold text-gray-700">{label}</h4>
          <span className="text-sm text-gray-600">
            Current: {currentValue}%
          </span>
        </div>
        <div className="space-y-3">
          {(["good", "warning", "critical"] as const).map((key) => (
            <div key={key}>
              <label className="flex justify-between text-xs text-gray-600 mb-1">
                <span>
                  {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                  {key === "good"
                    ? "(above)"
                    : key === "warning"
                    ? "(above)"
                    : "(below)"}
                </span>
                <span className={`font-medium`} style={{ color: colors[key] }}>
                  {thresholds[key]}%
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={thresholds[key]}
                onChange={(e) =>
                  setThresholds({
                    ...thresholds,
                    [key]: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 rounded-lg cursor-pointer"
                style={{
                  background: createGradient(thresholds[key], colors[key]),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              Configure Alerts
            </h2>
            <p className="text-sm text-gray-600">{product.product_name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              Set threshold values to define when alerts should be triggered for
              this product. Values above 'Good' will show as healthy, between
              'Warning' and 'Good' as cautionary, and below 'Critical' as
              requiring immediate attention.
            </p>
          </div>

          <Slider
            label="Stock Levels"
            thresholds={stockThresholds}
            setThresholds={setStockThresholds}
            currentValue={product.quantidade_pct}
            colors={{
              good: "#16a34a",
              warning: "#facc15",
              critical: "#dc2626",
            }}
          />

          <Slider
            label="Quality"
            thresholds={qualityThresholds}
            setThresholds={setQualityThresholds}
            currentValue={product.qualidade_pct}
            colors={{
              good: "#16a34a",
              warning: "#facc15",
              critical: "#dc2626",
            }}
          />

          <Slider
            label="Organization"
            thresholds={organizationThresholds}
            setThresholds={setOrganizationThresholds}
            currentValue={product.organizacao_pct}
            colors={{
              good: "#16a34a",
              warning: "#facc15",
              critical: "#dc2626",
            }}
          />

          <Slider
            label="Context (Lighting & Cleanliness)"
            thresholds={contextThresholds}
            setThresholds={setContextThresholds}
            currentValue={product.contexto_pct}
            colors={{
              good: "#16a34a",
              warning: "#facc15",
              critical: "#dc2626",
            }}
          />

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default function ThresholdConfigModal({
//   productName,
//   onClose,
// }: {
//   productName: string;
//   onClose: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-10">
//       <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-[400px]">
//         <h3 className="text-xl font-semibold mb-4">Threshold Config</h3>
//         <p className="text-gray-700 mb-4">Adjust limits for: {productName}</p>

//         <input
//           type="number"
//           className="w-full border px-2 py-1 rounded mb-4"
//           placeholder="Enter new threshold"
//         />

//         <div className="flex justify-end gap-2">
//           <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
//             Cancel
//           </button>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
