import { createContext, useContext, useState, ReactNode } from "react";
import { mockData } from "../data/mockData";
export type Detection = (typeof mockData.detections)[0];

type User = {
  name: string;
  role: "worker" | "administrator";
  photo: string;
};

type FilterType = "all" | "critical" | "alert";

type AppContextType = {
  detections: Detection[];
  currentFilter: FilterType;
  setCurrentFilter: (filter: FilterType) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentUser: User;
  switchUser: (role: "worker" | "administrator") => void;
  selectedSlot: Detection | null;
  setSelectedSlot: (d: Detection | null) => void;
  selectedThresholdProduct: string | null;
  setSelectedThresholdProduct: (p: string | null) => void;
  thresholdModalProduct: string | null;
  openThresholdModal: (productName: string) => void;
  closeThresholdModal: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Detection | null>(null);
  const [selectedThresholdProduct, setSelectedThresholdProduct] = useState<
    string | null
  >(null);
  const [currentFilter, setCurrentFilter] = useState<FilterType>("all");

  const [currentUser, setCurrentUser] = useState<User>({
    name: "Trabalhador",
    role: "worker",
    photo:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  });

  const profiles = {
    worker: {
      name: "Trabalhador",
      role: "worker" as const,
      photo:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
    administrator: {
      name: "Administrador",
      role: "administrator" as const,
      photo:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    },
  };

  function getDetectionStatus(d: Detection): "critical" | "alert" | "ok" {
    if (d.pontuacao_total < 50) return "critical";
    if (d.pontuacao_total < 75) return "alert";
    return "ok";
  }

  const filteredDetections = mockData.detections.filter((d) => {
    if (currentFilter === "all") return true;
    return getDetectionStatus(d) === currentFilter;
  });
  const [thresholdModalProduct, setThresholdModalProduct] = useState<
    string | null
  >(null);

  return (
    <AppContext.Provider
      value={{
        detections: filteredDetections,
        currentFilter,
        setCurrentFilter,
        isDarkMode,
        toggleDarkMode: () => setIsDarkMode((d) => !d),
        currentUser,
        switchUser: (role) => setCurrentUser(profiles[role]),
        selectedSlot,
        setSelectedSlot,
        selectedThresholdProduct,
        setSelectedThresholdProduct,
        thresholdModalProduct,
        openThresholdModal: (productName: string) =>
          setThresholdModalProduct(productName),
        closeThresholdModal: () => setThresholdModalProduct(null),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppContext must be used inside <AppProvider>");
  return ctx;
}
