import { X } from "lucide-react";

export default function AdminPanel({
  currentUser,
  profiles,
  onClose,
  onSwitchUser,
  onUpdatePhoto,
}: {
  currentUser: any;
  profiles: any;
  onClose: () => void;
  onSwitchUser: (role: "worker" | "administrator") => void;
  onUpdatePhoto: (url: string) => void;
}) {
  const photoOptions = [
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
    "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">
            Painel de Utilizador
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img
            src={currentUser.photo}
            alt={currentUser.name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold dark:text-white">
            {currentUser.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{currentUser.role}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white">
              Mudar Perfil
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => onSwitchUser("worker")}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Trabalhador
              </button>
              <button
                onClick={() => onSwitchUser("administrator")}
                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Administrador
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white">
              Mudar Foto
            </label>
            <div className="grid grid-cols-4 gap-2">
              {photoOptions.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => onUpdatePhoto(photo)}
                  className="border-2 border-transparent hover:border-[#D91E2A] rounded-lg overflow-hidden transition-colors"
                >
                  <img
                    src={photo}
                    alt={`Option ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
