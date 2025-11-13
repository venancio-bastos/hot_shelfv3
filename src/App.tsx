import { useState } from 'react';
import { Sun, Moon, Video, Package, Eye, AlertTriangle, Flame, MoreVertical, X } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = {
  "detections": [
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "20923_1",
      "product_id": "20923",
      "product_name": "BANANA DA MADEIRA CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 60,
      "qualidade_pct": 90,
      "organizacao_pct": 70,
      "contexto_pct": 75,
      "insights": "meio cheio, bananas em bom estado, organizado, iluminação razoável",
      "confidence": 0.85,
      "roi_quad_px": {
        "top_left": [370, 179],
        "top_right": [633, 171],
        "bottom_right": [629, 248],
        "bottom_left": [384, 255]
      },
      "pontuacao_total": 72,
      "indice_var": 4
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11908_2",
      "product_id": "11908",
      "product_name": "BANANA CAT I CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 20,
      "qualidade_pct": 80,
      "organizacao_pct": 40,
      "contexto_pct": 50,
      "insights": "a esvaziar, algumas bananas com manchas, amontoado, iluminação fraca",
      "confidence": 0.75,
      "roi_quad_px": {
        "top_left": [299, 350],
        "top_right": [464, 347],
        "bottom_right": [479, 438],
        "bottom_left": [331, 438]
      },
      "pontuacao_total": 45,
      "indice_var": 2
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11908_3",
      "product_id": "11908",
      "product_name": "BANANA CAT I CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 15,
      "qualidade_pct": 70,
      "organizacao_pct": 30,
      "contexto_pct": 45,
      "insights": "vazio, bananas com alguns defeitos, caótico, sujo e escuro",
      "confidence": 0.7,
      "roi_quad_px": {
        "top_left": [327, 464],
        "top_right": [478, 464],
        "bottom_right": [495, 555],
        "bottom_left": [366, 553]
      },
      "pontuacao_total": 38,
      "indice_var": 2
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11908_4",
      "product_id": "11908",
      "product_name": "BANANA CAT I CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 75,
      "qualidade_pct": 85,
      "organizacao_pct": 80,
      "contexto_pct": 80,
      "insights": "quase cheio, bananas em bom estado, bem organizado, boa iluminação",
      "confidence": 0.9,
      "roi_quad_px": {
        "top_left": [462, 349],
        "top_right": [635, 347],
        "bottom_right": [630, 437],
        "bottom_left": [477, 438]
      },
      "pontuacao_total": 80,
      "indice_var": 4
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11908_5",
      "product_id": "11908",
      "product_name": "BANANA CAT I CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 70,
      "qualidade_pct": 90,
      "organizacao_pct": 80,
      "contexto_pct": 85,
      "insights": "quase cheio, boa qualidade, bem organizado, boa iluminação",
      "confidence": 0.85,
      "roi_quad_px": {
        "top_left": [476, 454],
        "top_right": [630, 452],
        "bottom_right": [624, 551],
        "bottom_left": [495, 552]
      },
      "pontuacao_total": 80,
      "indice_var": 4
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11908_6",
      "product_id": "11908",
      "product_name": "BANANA CAT I CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 10,
      "qualidade_pct": 80,
      "organizacao_pct": 20,
      "contexto_pct": 30,
      "insights": "vazio, qualidade média, desorganizado, sujo",
      "confidence": 0.75,
      "roi_quad_px": {
        "top_left": [650, 334],
        "top_right": [812, 331],
        "bottom_right": [785, 428],
        "bottom_left": [642, 433]
      },
      "pontuacao_total": 35,
      "indice_var": 2
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11906_7",
      "product_id": "11906",
      "product_name": "CITRINOS DO ALGARVE IGP LARANJA 70/95 KG",
      "fruit_type": "oranges",
      "quantidade_pct": 80,
      "qualidade_pct": 95,
      "organizacao_pct": 85,
      "contexto_pct": 80,
      "insights": "bem cheio, excelente qualidade, bem organizado, limpo",
      "confidence": 0.9,
      "roi_quad_px": {
        "top_left": [642, 431],
        "top_right": [785, 427],
        "bottom_right": [749, 546],
        "bottom_left": [632, 551]
      },
      "pontuacao_total": 86,
      "indice_var": 4
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11908_8",
      "product_id": "11908",
      "product_name": "BANANA CAT I CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 60,
      "qualidade_pct": 85,
      "organizacao_pct": 75,
      "contexto_pct": 70,
      "insights": "quase cheio, boa qualidade, organizado, iluminação razoável",
      "confidence": 0.8,
      "roi_quad_px": {
        "top_left": [832, 333],
        "top_right": [972, 329],
        "bottom_right": [931, 419],
        "bottom_left": [803, 427]
      },
      "pontuacao_total": 72,
      "indice_var": 4
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "11906_9",
      "product_id": "11906",
      "product_name": "CITRINOS DO ALGARVE IGP LARANJA 70/95 KG",
      "fruit_type": "oranges",
      "quantidade_pct": 75,
      "qualidade_pct": 90,
      "organizacao_pct": 80,
      "contexto_pct": 85,
      "insights": "quase cheio, boa qualidade, bem organizado, boa iluminação",
      "confidence": 0.88,
      "roi_quad_px": {
        "top_left": [803, 426],
        "top_right": [931, 418],
        "bottom_right": [873, 533],
        "bottom_left": [765, 543]
      },
      "pontuacao_total": 82,
      "indice_var": 4
    },
    {
      "image_name": "1751001268.jpg",
      "camera_id": "6215",
      "roi_id": "20923_10",
      "product_id": "20923",
      "product_name": "BANANA DA MADEIRA CNT KG",
      "fruit_type": "bananas",
      "quantidade_pct": 70,
      "qualidade_pct": 85,
      "organizacao_pct": 75,
      "contexto_pct": 80,
      "insights": "meio cheio, boa qualidade, arranjo razoável, boa iluminação",
      "confidence": 0.85,
      "roi_quad_px": {
        "top_left": [639, 181],
        "top_right": [897, 184],
        "bottom_right": [876, 257],
        "bottom_left": [635, 258]
      },
      "pontuacao_total": 76,
      "indice_var": 4
    }
  ]
};

type Detection = typeof data.detections[0];

function App() {
  const [page, setPage] = useState<'dashboard' | 'shelfgrid' | 'analytics'>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: 'Trabalhador',
    role: 'Worker',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  });
  const [selectedSlot, setSelectedSlot] = useState<Detection | null>(null);
  const [highlightedRoi, setHighlightedRoi] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'critical' | 'alert'>('all');
  const [selectedThresholdProduct, setSelectedThresholdProduct] = useState<string | null>(null);

  const profiles = {
    worker: {
      name: 'Trabalhador',
      role: 'Worker',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    administrator: {
      name: 'Administrador',
      role: 'Administrator',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <style>{`* { font-family: 'Comfortaa', cursive !important; }`}</style>

        <Header
          currentUser={currentUser}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onOpenAdminPanel={() => setShowAdminPanel(true)}
        />

        {showAdminPanel && (
          <AdminPanel
            currentUser={currentUser}
            profiles={profiles}
            onClose={() => setShowAdminPanel(false)}
            onSwitchUser={(role: 'worker' | 'administrator') => setCurrentUser(profiles[role])}
            onUpdatePhoto={(photo: string) => setCurrentUser({ ...currentUser, photo })}
          />
        )}

        {page === 'dashboard' && (
          <DashboardPage
            detections={data.detections}
            currentUser={currentUser}
            onNavigateToShelfGrid={(status?: 'critical' | 'alert') => {
              if (status) setFilterStatus(status);
              setPage('shelfgrid');
            }}
            onNavigateToAnalytics={() => setPage('analytics')}
            onHighlightRoi={(roiId: string) => {
              setHighlightedRoi(roiId);
              setPage('shelfgrid');
              setTimeout(() => setHighlightedRoi(null), 2000);
            }}
          />
        )}

        {page === 'shelfgrid' && (
          <ShelfGridPage
            detections={data.detections}
            currentUser={currentUser}
            filterStatus={filterStatus}
            highlightedRoi={highlightedRoi}
            onSlotClick={(detection: Detection) => setSelectedSlot(detection)}
            onThresholdConfig={(productName: string) => setSelectedThresholdProduct(productName)}
          />
        )}

        {page === 'analytics' && currentUser.role === 'Administrator' && (
          <AnalyticsPage detections={data.detections} />
        )}

        {selectedSlot && (
          <ProductDetailsModal
            detection={selectedSlot}
            allDetections={data.detections}
            onClose={() => setSelectedSlot(null)}
            onNavigateToRoi={(roiId: string) => {
              setSelectedSlot(null);
              setHighlightedRoi(roiId);
              setTimeout(() => setHighlightedRoi(null), 2000);
            }}
          />
        )}

        {selectedThresholdProduct && (
          <ThresholdConfigModal
            productName={selectedThresholdProduct}
            onClose={() => setSelectedThresholdProduct(null)}
          />
        )}
      </div>
    </div>
  );
}

function Header({ currentUser, isDarkMode, onToggleDarkMode, onOpenAdminPanel }: {
  currentUser: { name: string; role: string; photo: string };
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAdminPanel: () => void;
}) {
  return (
    <header className="bg-[#D91E2A] text-white px-6 py-4 flex items-center justify-between">
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
          <img src={currentUser.photo} alt={currentUser.name} className="w-8 h-8 rounded-full" />
          <span className="text-sm">{currentUser.name}</span>
        </button>
      </div>
    </header>
  );
}

function AdminPanel({ currentUser, profiles, onClose, onSwitchUser, onUpdatePhoto }: {
  currentUser: { name: string; role: string; photo: string };
  profiles: { worker: typeof currentUser; administrator: typeof currentUser };
  onClose: () => void;
  onSwitchUser: (role: 'worker' | 'administrator') => void;
  onUpdatePhoto: (photo: string) => void;
}) {
  const photoOptions = [
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">Painel de Utilizador</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img src={currentUser.photo} alt={currentUser.name} className="w-24 h-24 rounded-full mb-4" />
          <h3 className="text-xl font-semibold dark:text-white">{currentUser.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{currentUser.role}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white">Mudar Perfil</label>
            <div className="flex gap-2">
              <button
                onClick={() => onSwitchUser('worker')}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Trabalhador
              </button>
              <button
                onClick={() => onSwitchUser('administrator')}
                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Administrador
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white">Mudar Foto</label>
            <div className="grid grid-cols-4 gap-2">
              {photoOptions.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => onUpdatePhoto(photo)}
                  className="border-2 border-transparent hover:border-[#D91E2A] rounded-lg overflow-hidden transition-colors"
                >
                  <img src={photo} alt={`Option ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardPage({ detections, currentUser, onNavigateToShelfGrid, onNavigateToAnalytics, onHighlightRoi }: {
  detections: Detection[];
  currentUser: { name: string; role: string; photo: string };
  onNavigateToShelfGrid: (status?: 'critical' | 'alert') => void;
  onNavigateToAnalytics: () => void;
  onHighlightRoi: (roiId: string) => void;
}) {
  const criticalCount = detections.filter(d => d.pontuacao_total < 50).length;
  const alertCount = detections.filter(d => d.pontuacao_total >= 50 && d.pontuacao_total < 70).length;
  const goodCount = detections.filter(d => d.pontuacao_total >= 70).length;

  const avgStock = Math.round(detections.reduce((sum, d) => sum + d.quantidade_pct, 0) / detections.length);
  const avgAttractiveness = Math.round(detections.reduce((sum, d) => sum + d.pontuacao_total, 0) / detections.length);

  const statusData = [
    { name: 'Critical', value: criticalCount, color: '#EF4444' },
    { name: 'Warning', value: alertCount, color: '#F59E0B' },
    { name: 'Good', value: goodCount, color: '#10B981' }
  ];

  const categoryData = Array.from(new Set(detections.map(d => d.fruit_type))).map(type => {
    const items = detections.filter(d => d.fruit_type === type);
    return {
      name: type === 'bananas' ? 'Frutas' : type === 'oranges' ? 'Citrinos' : type,
      Stock: Math.round(items.reduce((sum, d) => sum + d.quantidade_pct, 0) / items.length),
      Attractiveness: Math.round(items.reduce((sum, d) => sum + d.pontuacao_total, 0) / items.length)
    };
  });

  const productGroups = detections.reduce((acc, d) => {
    if (!acc[d.product_name]) {
      acc[d.product_name] = [];
    }
    acc[d.product_name].push(d);
    return acc;
  }, {} as Record<string, Detection[]>);

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div
          onClick={() => onNavigateToShelfGrid('critical')}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Sections Critical</h3>
            <Flame className="text-red-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{Math.round((criticalCount / detections.length) * 100)}%</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(criticalCount / detections.length) * 100}%` }}></div>
          </div>
        </div>

        <div
          onClick={() => onNavigateToShelfGrid('alert')}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow cursor-pointer hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Sections on Alert</h3>
            <AlertTriangle className="text-yellow-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{Math.round((alertCount / detections.length) * 100)}%</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(alertCount / detections.length) * 100}%` }}></div>
          </div>
        </div>

        <div
          onClick={currentUser.role === 'Administrator' ? onNavigateToAnalytics : undefined}
          className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow ${currentUser.role === 'Administrator' ? 'cursor-pointer hover:shadow-lg' : 'cursor-not-allowed opacity-60'} transition-shadow`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Global Stock</h3>
            <Package className="text-blue-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{avgStock}%</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${avgStock}%` }}></div>
          </div>
        </div>

        <div
          onClick={currentUser.role === 'Administrator' ? onNavigateToAnalytics : undefined}
          className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow ${currentUser.role === 'Administrator' ? 'cursor-pointer hover:shadow-lg' : 'cursor-not-allowed opacity-60'} transition-shadow`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Global Attractiveness</h3>
            <Eye className="text-green-500" size={24} />
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{avgAttractiveness}%</p>
          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${avgAttractiveness}%` }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Overall Section Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Stock vs. Attractiveness by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Stock" fill="#3B82F6" />
              <Bar dataKey="Attractiveness" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Live Shelf Monitor</h3>
        <div className="grid grid-cols-3 gap-4">
          {Array.from(new Set(detections.map(d => d.fruit_type))).map(type => {
            const items = detections.filter(d => d.fruit_type === type);
            const worstScore = Math.min(...items.map(d => d.pontuacao_total));
            const status = worstScore < 50 ? 'Critical' : worstScore < 70 ? 'Warning' : 'Good';
            const statusColor = status === 'Critical' ? 'bg-red-100 border-red-500' : status === 'Warning' ? 'bg-yellow-100 border-yellow-500' : 'bg-green-100 border-green-500';
            const statusBadge = status === 'Critical' ? 'bg-red-500' : status === 'Warning' ? 'bg-yellow-500' : 'bg-green-500';

            return (
              <div
                key={type}
                onClick={() => onNavigateToShelfGrid()}
                className={`${statusColor} border-2 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{type === 'bananas' ? 'Frutas' : type === 'oranges' ? 'Citrinos' : type}</h4>
                  <span className={`${statusBadge} text-white text-xs px-2 py-1 rounded-full`}>{status}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Shelf 1</span>
                    <span className="font-semibold">{Math.round(items.reduce((sum, d) => sum + d.quantidade_pct, 0) / items.length)}%</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Stock: <span className="font-semibold text-blue-600">{Math.round(items.reduce((sum, d) => sum + d.quantidade_pct, 0) / items.length)}%</span> |
                    Attractiveness: <span className="font-semibold text-green-600">{Math.round(items.reduce((sum, d) => sum + d.pontuacao_total, 0) / items.length)}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Product Overview</h3>
        <div className="space-y-4">
          {Object.entries(productGroups).map(([productName, items]) => {
            const avgScore = Math.round(items.reduce((sum, d) => sum + d.pontuacao_total, 0) / items.length);
            return (
              <div key={productName} className="border dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold dark:text-white">{productName}</h4>
                  <span className={`text-sm px-3 py-1 rounded-full ${avgScore >= 70 ? 'bg-green-100 text-green-800' : avgScore >= 50 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                    Score: {avgScore}%
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {items.map((item) => (
                    <button
                      key={item.roi_id}
                      onClick={() => onHighlightRoi(item.roi_id)}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white transition-transform hover:scale-110"
                      style={{
                        backgroundColor: item.pontuacao_total >= 70 ? '#10B981' : item.pontuacao_total >= 50 ? '#F59E0B' : '#EF4444'
                      }}
                    >
                      {item.roi_id}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ShelfGridPage({ detections, currentUser, filterStatus, highlightedRoi, onSlotClick, onThresholdConfig }: {
  detections: Detection[];
  currentUser: { name: string; role: string; photo: string };
  filterStatus: 'all' | 'critical' | 'alert';
  highlightedRoi: string | null;
  onSlotClick: (detection: Detection) => void;
  onThresholdConfig: (productName: string) => void;
}) {
  let filteredDetections = detections;
  if (filterStatus === 'critical') {
    filteredDetections = detections.filter(d => d.pontuacao_total < 50);
  } else if (filterStatus === 'alert') {
    filteredDetections = detections.filter(d => d.pontuacao_total >= 50 && d.pontuacao_total < 70);
  }

  const sortedDetections = [...filteredDetections].sort((a, b) => {
    const aY = a.roi_quad_px.top_left[1];
    const bY = b.roi_quad_px.top_left[1];
    if (Math.abs(aY - bY) > 50) {
      return aY - bY;
    }
    return a.roi_quad_px.top_left[0] - b.roi_quad_px.top_left[0];
  });

  const uniqueProducts = Array.from(new Set(filteredDetections.map(d => d.product_name))).map(name => {
    const items = filteredDetections.filter(d => d.product_name === name);
    const avgScore = Math.round(items.reduce((sum, d) => sum + d.pontuacao_total, 0) / items.length);
    const avgStock = Math.round(items.reduce((sum, d) => sum + d.quantidade_pct, 0) / items.length);
    return { name, avgScore, avgStock, items };
  }).sort((a, b) => a.avgScore - b.avgScore);

  return (
    <div className="p-6 flex gap-6">
      <div className="flex-1">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Shelf Grid</h2>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {sortedDetections.map((detection) => {
              const bgColor = detection.pontuacao_total >= 70 ? 'bg-green-100 dark:bg-green-900' :
                              detection.pontuacao_total >= 50 ? 'bg-yellow-100 dark:bg-yellow-900' :
                              'bg-red-100 dark:bg-red-900';
              const isHighlighted = highlightedRoi === detection.roi_id;

              return (
                <div
                  key={detection.roi_id}
                  onClick={() => onSlotClick(detection)}
                  className={`${bgColor} rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all ${isHighlighted ? 'animate-pulse ring-4 ring-blue-500' : ''}`}
                >
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{detection.product_name}</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Stock:</span>
                      <span className="font-semibold">{detection.quantidade_pct}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Score:</span>
                      <span className="font-semibold">{detection.pontuacao_total}%</span>
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
              <div key={product.name} className="border dark:border-gray-700 rounded-lg p-4 relative">
                {currentUser.role === 'Administrator' && (
                  <button
                    onClick={() => onThresholdConfig(product.name)}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    <MoreVertical size={18} />
                  </button>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <Package size={28} className="text-gray-500" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm dark:text-white">{product.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${product.avgScore >= 70 ? 'bg-green-100 text-green-800' : product.avgScore >= 50 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {product.avgScore >= 70 ? 'Bom' : product.avgScore >= 50 ? 'Razoável' : 'Mau'}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Stock</span>
                      <span className="font-semibold dark:text-white">{product.avgStock}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${product.avgStock}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Attractiveness</span>
                      <span className="font-semibold dark:text-white">{product.avgScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${product.avgScore}%` }}></div>
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
}

function ProductDetailsModal({ detection, allDetections, onClose, onNavigateToRoi }: {
  detection: Detection;
  allDetections: Detection[];
  onClose: () => void;
  onNavigateToRoi: (roiId: string) => void;
}) {
  const otherSlots = allDetections.filter(d => d.product_name === detection.product_name && d.roi_id !== detection.roi_id);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">{detection.product_name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold mb-3 dark:text-white">Slot: {detection.roi_id}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Stock</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 h-3 rounded-full">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${detection.quantidade_pct}%` }}></div>
                  </div>
                  <span className="font-semibold text-sm dark:text-white">{detection.quantidade_pct}%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Quality</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 h-3 rounded-full">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: `${detection.qualidade_pct}%` }}></div>
                  </div>
                  <span className="font-semibold text-sm dark:text-white">{detection.qualidade_pct}%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Organization</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 h-3 rounded-full">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: `${detection.organizacao_pct}%` }}></div>
                  </div>
                  <span className="font-semibold text-sm dark:text-white">{detection.organizacao_pct}%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Context</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-600 h-3 rounded-full">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: `${detection.contexto_pct}%` }}></div>
                  </div>
                  <span className="font-semibold text-sm dark:text-white">{detection.contexto_pct}%</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="text-sm text-gray-700 dark:text-gray-300">{detection.insights}</div>
            </div>
          </div>

          {otherSlots.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3 dark:text-white">Other Slots with this Product</h3>
              <div className="space-y-2">
                {otherSlots.map((slot) => (
                  <button
                    key={slot.roi_id}
                    onClick={() => {
                      onClose();
                      onNavigateToRoi(slot.roi_id);
                    }}
                    className="w-full text-left p-3 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold dark:text-white">{slot.roi_id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${slot.pontuacao_total >= 70 ? 'bg-green-100 text-green-800' : slot.pontuacao_total >= 50 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        Score: {slot.pontuacao_total}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Stock: {slot.quantidade_pct}% | Quality: {slot.qualidade_pct}%
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ThresholdConfigModal({ productName, onClose }: {
  productName: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">Configure Thresholds</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400">
            <X size={24} />
          </button>
        </div>

        <h3 className="font-semibold mb-4 dark:text-white">{productName}</h3>

        <div className="space-y-4">
          {['Stock', 'Quality', 'Organization', 'Context'].map((metric) => (
            <div key={metric} className="border dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold mb-3 dark:text-white">{metric}</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <label className="w-24 text-sm dark:text-gray-300">Good:</label>
                  <input type="number" defaultValue={70} className="flex-1 px-3 py-1 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">%</span>
                </div>
                <div className="flex items-center gap-3">
                  <label className="w-24 text-sm dark:text-gray-300">Razoável:</label>
                  <input type="number" defaultValue={50} className="flex-1 px-3 py-1 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">%</span>
                </div>
                <div className="flex items-center gap-3">
                  <label className="w-24 text-sm dark:text-gray-300">Mau:</label>
                  <input type="number" defaultValue={30} className="flex-1 px-3 py-1 border dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors dark:text-white">
            Cancel
          </button>
          <button onClick={onClose} className="flex-1 px-4 py-2 bg-[#D91E2A] text-white rounded-lg hover:bg-[#B91825] transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function AnalyticsPage({ detections }: { detections: Detection[] }) {
  const [selectedStore, setSelectedStore] = useState('1410');
  const [radius, setRadius] = useState('10km');

  const stores = [
    { id: '1410', name: 'Leiria - São Romão', score: 72 },
    { id: '1420', name: 'Leiria - Centro', score: 68 },
    { id: '1430', name: 'Marinha Grande', score: 75 },
    { id: '1440', name: 'Pombal', score: 65 },
    { id: '1450', name: 'Alcobaça', score: 70 }
  ];

  const comparisonData = stores.map(store => ({
    name: store.name,
    Score: store.score,
    Stock: store.score - Math.floor(Math.random() * 10),
    Attractiveness: store.score + Math.floor(Math.random() * 5)
  }));

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Analytics Dashboard</h2>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white">Current Store</label>
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg dark:text-white">
              Loja 1410 - Leiria
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white">Compare With</label>
            <select
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
              className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            >
              {stores.filter(s => s.id !== '1410').map(store => (
                <option key={store.id} value={store.id}>{store.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 dark:text-white">Radial Analysis</label>
            <select
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="w-full px-4 py-2 border dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            >
              <option value="10km">10 km</option>
              <option value="20km">20 km</option>
              <option value="50km">50 km</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Store Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Score" fill="#D91E2A" />
              <Bar dataKey="Stock" fill="#3B82F6" />
              <Bar dataKey="Attractiveness" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex gap-3">
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Export as CSV
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Export as XLSX
          </button>
          <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Export to Sheets
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;