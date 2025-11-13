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
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Change Profile:
          </label>
          <div className="flex gap-2">
            <button
              className={`px-3 py-1 rounded ${
                currentUser.role === "Worker"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => onSwitchUser("worker")}
            >
              Worker
            </button>
            <button
              className={`px-3 py-1 rounded ${
                currentUser.role === "Administrator"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => onSwitchUser("administrator")}
            >
              Admin
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Change Photo (URL):
          </label>
          <input
            type="text"
            className="w-full border rounded px-2 py-1"
            placeholder="https://..."
            onBlur={(e) => onUpdatePhoto(e.target.value)}
          />
        </div>

        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
