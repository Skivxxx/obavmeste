import React, { useState } from 'react';
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Bell, 
  Settings, 
  User, 
  ChevronDown,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight
} from 'lucide-react';

// Mock data for demonstration
const mockTransactions = [
  { id: 1, type: 'payment', amount: -150.00, description: 'Покупка в магазине', date: '2024-01-15', status: 'completed' },
  { id: 2, type: 'income', amount: 2500.00, description: 'Зарплата', date: '2024-01-14', status: 'completed' },
  { id: 3, type: 'payment', amount: -75.50, description: 'Оплата интернета', date: '2024-01-13', status: 'pending' },
  { id: 4, type: 'transfer', amount: -300.00, description: 'Перевод другу', date: '2024-01-12', status: 'completed' },
];

const mockCards = [
  { id: 1, number: '**** **** **** 1234', type: 'Visa', balance: 15420.50, currency: 'MDL' },
  { id: 2, number: '**** **** **** 5678', type: 'Mastercard', balance: 8750.25, currency: 'EUR' },
];

// Google Auth Configuration
const GOOGLE_CLIENT_ID = 'your-google-client-id.googleusercontent.com';

declare global {
  interface Window {
    google: any;
    gapi: any;
  }
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Google Sign-In
  React.useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleSignIn,
          auto_select: false,
          cancel_on_tap_outside: true,
        });
      }
    };

    // Load Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleSignIn;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleGoogleSignIn = (response: any) => {
    setIsLoading(true);
    try {
      // Decode the JWT token to get user info
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
      setUser({
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
      });
      
      setIsLoggedIn(true);
      console.log('Google Sign-In successful:', payload);
    } catch (error) {
      console.error('Google Sign-In error:', error);
      alert('Ошибка входа через Google. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignInClick = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    } else {
      alert('Google Sign-In не загружен. Попробуйте обновить страницу.');
    }
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        setUser({
          name: 'Пользователь',
          email: email,
          picture: null,
        });
        setIsLoggedIn(true);
      } else {
        alert('Пожалуйста, заполните все поля');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setEmail('');
    setPassword('');
    
    // Sign out from Google
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {/* Logo and Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Добро пожаловать</h1>
              <p className="text-gray-600">Войдите в свой аккаунт Oplata.md</p>
            </div>

            {/* Google Sign-In Button */}
            <button
              onClick={handleGoogleSignInClick}
              disabled={isLoading}
              className="w-full mb-6 bg-white border-2 border-gray-200 rounded-xl py-3 px-4 flex items-center justify-center space-x-3 hover:border-gray-300 hover:shadow-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium">
                {isLoading ? 'Загрузка...' : 'Продолжить с Google'}
              </span>
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">или</span>
              </div>
            </div>

            {/* Email Login Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Пароль
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Введите пароль"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isLoading ? 'Вход...' : 'Войти'}</span>
                {!isLoading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Нет аккаунта?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Зарегистрироваться
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Oplata.md</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                {user?.picture ? (
                  <img 
                    src={user.picture} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Добро пожаловать, {user?.name}!
          </h2>
          <p className="text-gray-600">Управляйте своими финансами легко и безопасно</p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {mockCards.map((card) => (
            <div key={card.id} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-blue-100 text-sm mb-1">{card.type}</p>
                  <p className="text-2xl font-mono">{card.number}</p>
                </div>
                <div className="w-12 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-blue-100 text-sm">Баланс</p>
                  <p className="text-2xl font-bold">{card.balance.toFixed(2)} {card.currency}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm">Действительна до</p>
                  <p className="font-mono">12/27</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: DollarSign, title: 'Перевод', desc: 'Отправить деньги', color: 'from-green-500 to-green-600' },
            { icon: CreditCard, title: 'Пополнить', desc: 'Пополнить карту', color: 'from-blue-500 to-blue-600' },
            { icon: TrendingUp, title: 'Инвестиции', desc: 'Управление портфелем', color: 'from-purple-500 to-purple-600' },
            { icon: Shield, title: 'Безопасность', desc: 'Настройки защиты', color: 'from-orange-500 to-orange-600' },
          ].map((action, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer group">
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-sm text-gray-500">{action.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Последние операции</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {mockTransactions.map((transaction) => (
              <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'income' ? 'bg-green-100 text-green-600' :
                      transaction.type === 'payment' ? 'bg-red-100 text-red-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {transaction.type === 'income' ? <TrendingUp className="w-5 h-5" /> :
                       transaction.type === 'payment' ? <DollarSign className="w-5 h-5" /> :
                       <CreditCard className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)} MDL
                    </p>
                    <p className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {transaction.status === 'completed' ? 'Завершено' : 'В обработке'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;