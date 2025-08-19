import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [currentQuality, setCurrentQuality] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState('gaming')
  const [isTextVisible, setIsTextVisible] = useState(true)
  
  const qualities = ['Качественный', 'Быстрый', 'Мощный', 'Дешевый']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false)
      setTimeout(() => {
        setCurrentQuality((prev) => (prev + 1) % qualities.length)
        setIsTextVisible(true)
      }, 200)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: '0', label: 'платных услуг', icon: 'CreditCard' },
    { number: '0', label: 'бесплатных услуг', icon: 'Upload' },
    { number: '0', label: 'Пользователей', icon: 'Users' }
  ]

  const advantages = [
    {
      title: 'Стоимость',
      description: 'Мы гарантируем хорошее качество услуг при низких ценах.',
      icon: 'DollarSign'
    },
    {
      title: 'Производительность',
      description: 'Мы используем только качественное оборудование, которое способно обеспечивать высокую скорость для ваших услуг.',
      icon: 'Zap'
    },
    {
      title: 'Надежность',
      description: 'Наши сервера обеспечивают аптайм на уровне 99.9%, гарантируя доступность ваших услуг 24/7.',
      icon: 'Shield'
    },
    {
      title: 'Поддержка',
      description: 'Вы можете полагаться на быструю техническую поддержку, которая готова помочь вам в любых вопросах.',
      icon: 'Headphones'
    }
  ]

  const gamingPlans = [
    {
      name: 'MC-Free',
      price: '0 ₽ / месяц',
      specs: ['60% CPU', '1.5 GB ОЗУ', '5 GB ПЗУ'],
      color: 'neon-purple'
    },
    {
      name: 'MC-Starter',
      price: '149 ₽ / месяц',
      specs: ['100% CPU', '2 GB ОЗУ', '10 GB ПЗУ'],
      color: 'neon-green'
    },
    {
      name: 'MC-Pro',
      price: '299 ₽ / месяц',
      specs: ['150% CPU', '4 GB ОЗУ', '20 GB ПЗУ'],
      color: 'neon-orange'
    }
  ]

  const databasePlans = [
    {
      name: 'DB-Basic',
      price: '199 ₽ / месяц',
      specs: ['1 vCPU', '1 GB ОЗУ', '10 GB SSD'],
      color: 'neon-purple'
    },
    {
      name: 'DB-Standard',
      price: '399 ₽ / месяц',
      specs: ['2 vCPU', '4 GB ОЗУ', '50 GB SSD'],
      color: 'neon-green'
    },
    {
      name: 'DB-Premium',
      price: '799 ₽ / месяц',
      specs: ['4 vCPU', '8 GB ОЗУ', '100 GB SSD'],
      color: 'neon-orange'
    }
  ]

  const currentPlans = selectedPlan === 'gaming' ? gamingPlans : databasePlans

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">QiwzyHost</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" size="sm">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Биллинг
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Услуги
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Discord
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 hero-gradient">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className={`inline-block text-neon-purple transition-all duration-300 ${isTextVisible ? 'text-fade-in' : 'text-fade-out'}`}>
                    {qualities[currentQuality]}
                  </span>
                  <br />
                  <span className="text-white">и мощный хостинг</span>
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/80 text-black font-semibold glow-effect rounded-xl px-8 py-4 text-lg border-0">
                  <Icon name="CreditCard" size={20} className="mr-3" />
                  Посмотреть тарифы
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 rounded-xl px-8 py-4 text-lg backdrop-blur-sm">
                  <Icon name="ShoppingCart" size={20} className="mr-3" />
                  Перейти в биллинг
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-neon-purple/30 via-neon-green/20 to-neon-orange/20 blur-3xl animate-glow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl animate-pulse filter drop-shadow-2xl">👍</div>
                </div>
                <div className="absolute inset-0 rounded-full border border-neon-purple/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/80 border-border/30 backdrop-blur-md hover:border-neon-purple/50 transition-all duration-500 animate-slide-up hover:scale-105 rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-neon-purple/10">
                    <Icon name={stat.icon as any} size={32} className="text-neon-purple" />
                  </div>
                  <div className="text-4xl font-bold text-neon-purple mb-3 font-mono">{stat.number}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-green/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent">
              Наши преимущества
            </h3>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Причины по которым стоит выбрать именно нас
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-card/80 border-border/30 backdrop-blur-md hover:border-neon-purple/50 transition-all duration-500 animate-slide-up hover:scale-105 rounded-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-2xl bg-neon-purple/20 border border-neon-purple/30">
                      <Icon name={advantage.icon as any} size={28} className="text-neon-purple" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{advantage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-orange/5 via-transparent to-neon-purple/5" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-orange to-neon-purple bg-clip-text text-transparent">
              Наши тарифы
            </h3>
            <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto">
              Посмотрите тарифы, которые мы предлагаем
            </p>
            
            <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="w-fit mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-card/80 backdrop-blur-md rounded-2xl p-2 border border-border/30">
                <TabsTrigger value="gaming" className="data-[state=active]:bg-neon-purple data-[state=active]:text-black rounded-xl px-6 py-3 text-lg font-semibold transition-all duration-300">
                  <Icon name="Gamepad2" size={18} className="mr-3" />
                  Игровые тарифы
                </TabsTrigger>
                <TabsTrigger value="database" className="data-[state=active]:bg-neon-purple data-[state=active]:text-black rounded-xl px-6 py-3 text-lg font-semibold transition-all duration-300">
                  <Icon name="Database" size={18} className="mr-3" />
                  Базы Данных
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
            {currentPlans.map((plan, index) => (
              <Card key={plan.name} className={`relative bg-card/80 border-border/30 backdrop-blur-md hover:scale-105 transition-all duration-500 animate-slide-up rounded-3xl overflow-hidden ${index === 1 ? 'ring-2 ring-neon-purple glow-effect scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-neon-purple text-black px-6 py-2 text-sm font-bold rounded-full">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <CardTitle className="text-3xl font-bold mb-4">{plan.name}</CardTitle>
                  <CardDescription className="text-4xl font-bold text-neon-purple mb-2">
                    {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-6 pb-8">
                  {plan.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-4 text-lg">
                      <div className="w-2 h-2 rounded-full bg-neon-green" />
                      <span className="text-gray-200">{spec}</span>
                    </div>
                  ))}
                  <Button className="w-full bg-neon-green hover:bg-neon-green/80 text-black font-bold mt-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">QiwzyHost.ru</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>ИНП Паступков Данила Викторович</p>
                <p>ИНН:</p>
                <p className="mt-4">2025 - 2025</p>
                <p>Мы никак не связаны с Minecraft, Mojang Studios или Microsoft</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Документы</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors block">Политика конфиденциальности</a>
                <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors block">Условия обслуживания</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors block">Мы в Discord</a>
                <a href="#" className="text-muted-foreground hover:text-neon-purple transition-colors block">Мы в Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index