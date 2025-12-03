import Logo from "@/components/Logo";
import LogoRetro from "@/components/LogoRetro";
import LogoFuturistic from "@/components/LogoFuturistic";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Логотипы SANDRA KIDS</h1>
          <p className="text-gray-600">Три уникальных стиля для премиального детского бренда</p>
        </div>

        {/* Скандинавский стиль */}
        <div className="mb-12 animate-scale-in">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Скандинавский стиль</h2>
          <div className="bg-white rounded-3xl shadow-2xl p-16 mb-6 flex items-center justify-center">
            <Logo size="lg" showIcon={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
              <Logo size="sm" showIcon={true} />
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 flex items-center justify-center">
              <Logo size="md" variant="light" showIcon={true} />
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 flex items-center justify-center">
              <Logo size="md" variant="gradient" showIcon={false} />
            </div>
          </div>
        </div>

        {/* Ретро/Винтаж стиль */}
        <div className="mb-12 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Ретро стиль</h2>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-16 mb-6 flex items-center justify-center">
            <LogoRetro size="lg" showIcon={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-amber-50 rounded-xl shadow-lg p-6 flex items-center justify-center">
              <LogoRetro size="sm" showIcon={true} />
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl shadow-lg p-6 flex items-center justify-center">
              <LogoRetro size="md" variant="gradient" showIcon={true} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
              <LogoRetro size="md" variant="gradient" showIcon={false} />
            </div>
          </div>
        </div>

        {/* Футуристичный стиль */}
        <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Футуристичный стиль</h2>
          <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-3xl shadow-2xl p-16 mb-6 flex items-center justify-center">
            <LogoFuturistic size="lg" showIcon={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900 rounded-xl shadow-lg p-6 flex items-center justify-center">
              <LogoFuturistic size="sm" showIcon={true} />
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-xl shadow-lg p-6 flex items-center justify-center">
              <LogoFuturistic size="md" variant="gradient" showIcon={true} />
            </div>
            <div className="bg-black rounded-xl shadow-lg p-6 flex items-center justify-center">
              <LogoFuturistic size="md" variant="gradient" showIcon={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;