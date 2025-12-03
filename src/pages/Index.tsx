import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Логотип SANDRA KIDS</h1>
          <p className="text-gray-600">Премиальный детский бренд</p>
        </div>

        {/* Основная демонстрация */}
        <div className="bg-white rounded-3xl shadow-2xl p-16 mb-8 flex items-center justify-center animate-scale-in">
          <Logo size="lg" showIcon={true} />
        </div>

        {/* Варианты размеров */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-sm text-gray-500 mb-4 font-medium">Маленький</p>
            <Logo size="sm" showIcon={true} />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm text-gray-500 mb-4 font-medium">Средний</p>
            <Logo size="md" showIcon={true} />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-gray-500 mb-4 font-medium">Большой</p>
            <Logo size="lg" showIcon={true} />
          </div>
        </div>

        {/* Варианты цветов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-white/60 mb-4 font-medium">На тёмном фоне</p>
            <Logo size="md" variant="light" showIcon={true} />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-gray-500 mb-4 font-medium">С градиентом</p>
            <Logo size="md" variant="gradient" showIcon={true} />
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-gray-500 mb-4 font-medium">Без иконки</p>
            <Logo size="md" variant="gradient" showIcon={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;