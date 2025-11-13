import { useNavigate } from "react-router-dom";
import { mockData } from "../data/mockData";
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Trabalhador",
    role: "Worker",
    photo:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  });

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`* { font-family: 'Comfortaa', cursive !important; }`}</style>
      </div>
    </div>
  );
}

export default Dashboard;
