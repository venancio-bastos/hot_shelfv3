import { Sun, Moon, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header({
  currentUser,
  isDarkMode,
  onToggleDarkMode,
  onOpenAdminPanel,
}: {
  currentUser: { name: string; role: string; photo: string };
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAdminPanel: () => void;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="font-bold text-xl text-gray-800 dark:text-gray-100"
        >
          🧠 SmartShelf AI
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Dashboard
          </Link>
          <Link
            to="/shelfgrid"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Shelf Grid
          </Link>
          <Link
            to="/analytics"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Analytics
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onToggleDarkMode}>
          {isDarkMode ? (
            <Sun className="text-yellow-400" size={20} />
          ) : (
            <Moon className="text-gray-700" size={20} />
          )}
        </button>

        <button onClick={onOpenAdminPanel}>
          <Settings className="text-gray-700 dark:text-gray-300" size={20} />
        </button>

        <img
          src={currentUser.photo}
          alt={currentUser.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
        />
      </div>
    </div>
  );
}
