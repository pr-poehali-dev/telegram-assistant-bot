import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('commands');

  const commands = [
    {
      command: '/start',
      icon: 'Sparkles',
      title: 'Приветствие',
      description: 'Получите основную информацию о боте и его возможностях',
      example: 'Привет! Я AI-помощник для ответов на вопросы в чате',
      color: 'bg-gradient-to-br from-primary to-secondary'
    },
    {
      command: '/stats',
      icon: 'BarChart3',
      title: 'Статистика',
      description: 'Просмотрите данные использования бота и аналитику',
      example: 'Всего ответов: 1,234 • Активных чатов: 45',
      color: 'bg-gradient-to-br from-accent to-primary'
    },
    {
      command: '/history',
      icon: 'History',
      title: 'История',
      description: 'Посмотрите все предыдущие взаимодействия и ответы',
      example: 'Последние 50 запросов с AI-ответами',
      color: 'bg-gradient-to-br from-secondary to-accent'
    },
    {
      command: '/help',
      icon: 'HelpCircle',
      title: 'Помощь',
      description: 'Список всех доступных команд и инструкции',
      example: 'Доступно 12 команд для управления ботом',
      color: 'bg-gradient-to-br from-primary/80 to-secondary/80'
    }
  ];

  const stats = [
    { label: 'Всего ответов', value: '1,234', trend: '+12%', icon: 'MessageSquare', color: 'text-primary' },
    { label: 'Активных чатов', value: '45', trend: '+8%', icon: 'Users', color: 'text-secondary' },
    { label: 'Сегодня запросов', value: '89', trend: '+23%', icon: 'TrendingUp', color: 'text-accent' },
    { label: 'Средний рейтинг', value: '4.8', trend: '+0.3', icon: 'Star', color: 'text-yellow-500' }
  ];

  const recentHistory = [
    {
      id: 1,
      question: 'Как настроить webhook для бота?',
      answer: 'Для настройки webhook используйте метод setWebhook...',
      timestamp: '2 минуты назад',
      user: 'Александр'
    },
    {
      id: 2,
      question: 'Какие лимиты на API запросы?',
      answer: 'Telegram Bot API имеет лимит 30 сообщений в секунду...',
      timestamp: '5 минут назад',
      user: 'Мария'
    },
    {
      id: 3,
      question: 'Как добавить inline кнопки?',
      answer: 'Используйте InlineKeyboardMarkup для создания кнопок...',
      timestamp: '12 минут назад',
      user: 'Дмитрий'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-pulse-glow">
              <Icon name="Bot" size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Telegram AI Bot
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Умный помощник для автоматических ответов на вопросы участников чата
          </p>
          <div className="flex gap-3 justify-center mt-6">
            <Badge variant="secondary" className="text-sm py-1.5 px-4 animate-scale-in">
              <Icon name="Zap" size={14} className="mr-1" />
              Быстрые ответы
            </Badge>
            <Badge variant="outline" className="text-sm py-1.5 px-4 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Brain" size={14} className="mr-1" />
              AI-powered
            </Badge>
            <Badge variant="outline" className="text-sm py-1.5 px-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Globe" size={14} className="mr-1" />
              24/7 онлайн
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8 h-auto p-1 bg-card/50 backdrop-blur">
            <TabsTrigger value="commands" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white py-3">
              <Icon name="Terminal" size={18} className="mr-2" />
              Команды
            </TabsTrigger>
            <TabsTrigger value="stats" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white py-3">
              <Icon name="BarChart3" size={18} className="mr-2" />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white py-3">
              <Icon name="History" size={18} className="mr-2" />
              История
            </TabsTrigger>
          </TabsList>

          <TabsContent value="commands" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commands.map((cmd, index) => (
                <Card 
                  key={cmd.command} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 ${cmd.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 ${cmd.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon name={cmd.icon as any} size={28} className="text-white" />
                      </div>
                      <Badge variant="outline" className="font-mono text-xs">
                        {cmd.command}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-heading">{cmd.title}</CardTitle>
                    <CardDescription className="text-base">{cmd.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm text-foreground/80 flex items-start gap-2">
                        <Icon name="Quote" size={16} className="mt-0.5 text-primary flex-shrink-0" />
                        {cmd.example}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={stat.icon as any} size={24} className={stat.color} />
                      <Badge variant="secondary" className="text-xs">
                        {stat.trend}
                      </Badge>
                    </div>
                    <div className="text-3xl font-heading font-bold mb-1">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardTitle className="flex items-center gap-2 font-heading text-2xl">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  График активности
                </CardTitle>
                <CardDescription>Последние 7 дней</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { day: 'Пн', requests: 120, height: '60%' },
                    { day: 'Вт', requests: 145, height: '72%' },
                    { day: 'Ср', requests: 98, height: '49%' },
                    { day: 'Чт', requests: 167, height: '83%' },
                    { day: 'Пт', requests: 189, height: '94%' },
                    { day: 'Сб', requests: 134, height: '67%' },
                    { day: 'Вс', requests: 201, height: '100%' }
                  ].map((day, index) => (
                    <div key={day.day} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                      <div className="w-12 text-sm font-medium text-muted-foreground">{day.day}</div>
                      <div className="flex-1 bg-muted rounded-full h-10 overflow-hidden relative">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out flex items-center justify-end pr-4"
                          style={{ width: day.height }}
                        >
                          <span className="text-white text-sm font-semibold">{day.requests}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
                <CardTitle className="flex items-center gap-2 font-heading text-2xl">
                  <Icon name="MessageSquare" size={24} className="text-accent" />
                  Последние взаимодействия
                </CardTitle>
                <CardDescription>История AI-ответов на вопросы пользователей</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {recentHistory.map((item, index) => (
                    <div 
                      key={item.id} 
                      className="border-l-4 border-primary pl-6 pb-6 relative animate-fade-in hover:border-secondary transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                            {item.user[0]}
                          </div>
                          <div>
                            <p className="font-semibold">{item.user}</p>
                            <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Icon name="ExternalLink" size={16} />
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-start gap-2 mb-2">
                            <Icon name="HelpCircle" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <p className="font-medium text-sm">Вопрос:</p>
                          </div>
                          <p className="text-foreground/80 ml-6">{item.question}</p>
                        </div>
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/20">
                          <div className="flex items-start gap-2 mb-2">
                            <Icon name="Sparkles" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                            <p className="font-medium text-sm">AI Ответ:</p>
                          </div>
                          <p className="text-foreground/80 ml-6">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    <Icon name="RefreshCw" size={18} className="mr-2" />
                    Загрузить больше
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
