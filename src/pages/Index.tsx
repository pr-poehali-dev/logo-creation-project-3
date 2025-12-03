import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent tracking-tight">
            SANDRA KIDS
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#collections" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Коллекции
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              О бренде
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Контакты
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Icon name="Search" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Heart" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="ShoppingBag" size={20} />
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent">
              Стиль и комфорт
            </span>
            <br />
            для вашего ребёнка
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Премиальная детская одежда с минималистичным дизайном. 
            Качественные материалы, продуманные детали, современная эстетика.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-[#60A5FA] to-[#EC4899] hover:opacity-90 text-white">
              Смотреть коллекцию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              О бренде
            </Button>
          </div>
        </div>
      </section>

      <section id="collections" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Новая коллекция</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Весна-Лето 2025: свежие краски, лёгкие ткани и продуманные силуэты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {[
            { title: "Повседневная коллекция", desc: "Удобство на каждый день", icon: "Shirt" },
            { title: "Праздничная линия", desc: "Элегантность для особых случаев", icon: "Sparkles" },
            { title: "Спортивный стиль", desc: "Активность и свобода движений", icon: "Zap" },
            { title: "Аксессуары", desc: "Завершающие штрихи образа", icon: "Star" },
            { title: "Обувь", desc: "Комфорт и качество", icon: "Heart" },
            { title: "Новинки", desc: "Только что поступившие модели", icon: "TrendingUp" }
          ].map((item, idx) => (
            <Card 
              key={idx} 
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#EC4899] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name={item.icon as any} size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground mb-4">{item.desc}</p>
              <div className="flex items-center text-primary font-medium">
                Посмотреть
                <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="bg-card py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent">
                  SANDRA KIDS
                </span>
                {" "}— это философия
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Мы создаём одежду, в которой дети чувствуют себя свободно и уверенно. 
                Каждая деталь продумана до мелочей — от выбора гипоаллергенных тканей 
                до эргономичных кроёв.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Минимализм в дизайне сочетается с максимальным комфортом. 
                Наша миссия — делать детство ярче, не жертвуя качеством и стилем.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent mb-1">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">Натуральные ткани</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent mb-1">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">Довольных семей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent mb-1">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">Моделей в коллекции</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#60A5FA] to-[#EC4899] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Sparkles" size={120} className="text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Остались вопросы?</h3>
          <p className="text-muted-foreground mb-8">
            Мы с радостью ответим на все ваши вопросы и поможем с выбором
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-[#60A5FA] to-[#EC4899] hover:opacity-90 text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать нам
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#EC4899] bg-clip-text text-transparent mb-4">
                SANDRA KIDS
              </h4>
              <p className="text-sm text-muted-foreground">
                Премиальная детская одежда с минималистичным дизайном
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Покупателям</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Возврат и обмен</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Таблица размеров</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">О компании</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Связь</h5>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © 2025 SANDRA KIDS. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
