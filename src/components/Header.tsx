import { Sun, Moon } from "lucide-react";

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
    <div className="bg-[#D91E2A] text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold">Hot Shelf</div>
        <div className="text-xl font-semibold">CONTINENTE</div>
      </div>
      <div className="text-lg">Loja: 1410 | Leiria - São Romão</div>
      <div className="flex items-center gap-4">
        <span className="text-sm">Olá, {currentUser.name}</span>
        <button
          onClick={onToggleDarkMode}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={onOpenAdminPanel}
          className="flex items-center gap-2 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
        >
          <img
            src={currentUser.photo}
            alt={currentUser.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">{currentUser.name}</span>
        </button>
      </div>
    </div>
  );
}
