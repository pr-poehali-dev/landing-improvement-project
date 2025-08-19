import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [currentQuality, setCurrentQuality] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState('gaming')
  
  const qualities = ['Качественный', 'Быстрый', 'Мощный', 'Дешевый']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuality((prev) => (prev + 1) % qualities.length)
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
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-green/20" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-neon-purple transition-all duration-500">
                    {qualities[currentQuality]}
                  </span>
                  <br />
                  и мощный хостинг
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-neon-purple hover:bg-neon-purple/80 text-black font-semibold">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Посмотреть тарифы
                </Button>
                <Button size="lg" variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Перейти в биллинг
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-neon-purple to-neon-green opacity-20 blur-3xl animate-glow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-pulse">👍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon as any} size={40} className="mx-auto mb-4 text-neon-purple" />
                  <div className="text-3xl font-bold text-neon-purple mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-transparent to-neon-green/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent">
              Наши преимущества
            </h3>
            <p className="text-muted-foreground text-lg">
              Причины по которым стоит выбрать именно нас
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-neon-purple/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-neon-purple/20">
                      <Icon name={advantage.icon as any} size={24} className="text-neon-purple" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-orange to-neon-purple bg-clip-text text-transparent">
              Наши тарифы
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Посмотрите тарифы, которые мы предлагаем
            </p>
            
            <Tabs value={selectedPlan} onValueChange={setSelectedPlan} className="w-fit mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-card/50">
                <TabsTrigger value="gaming" className="data-[state=active]:bg-neon-purple data-[state=active]:text-black">
                  <Icon name="Gamepad2" size={16} className="mr-2" />
                  Игровые тарифы
                </TabsTrigger>
                <TabsTrigger value="database" className="data-[state=active]:bg-neon-purple data-[state=active]:text-black">
                  <Icon name="Database" size={16} className="mr-2" />
                  Базы Данных
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentPlans.map((plan, index) => (
              <Card key={plan.name} className={`relative bg-card/50 border-border/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-slide-up ${index === 1 ? 'ring-2 ring-neon-purple' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neon-purple text-black">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className={`text-3xl font-bold text-${plan.color}`}>
                    {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-3">
                      <Icon name="Check" size={16} className="text-neon-green" />
                      <span>{spec}</span>
                    </div>
                  ))}
                  <Button className="w-full bg-neon-green hover:bg-neon-green/80 text-black font-semibold mt-6">
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