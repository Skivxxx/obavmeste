import React, { useState } from 'react';
import { Menu, X, Search, Bell, User, CreditCard, Smartphone, Wifi, Zap, Car, Home, ShoppingCart, Gamepad2, Gift, Plus, Mail, ArrowLeft, Building, Receipt, Star, ChevronDown, ChevronUp, ArrowRight, CheckCircle, AlertCircle, Info, Clock, Shield, Users, Plane, Flower2, GraduationCap, Ticket, Heart, ShoppingBag } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentService, setCurrentService] = useState<any>(null);
  const [paymentData, setPaymentData] = useState({
    accountNumber: '',
    amount: '',
    email: ''
  });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [transferData, setTransferData] = useState({
    fromCard: '',
    toCard: '',
    amount: '',
    purpose: '',
    senderName: '',
    senderPhone: '',
    recipientName: '',
    recipientPhone: '',
    senderCard: '',
    receiverCard: ''
  });

  const popularServices = [
    { name: 'Loteria', logo: '/LOTERIAlogo.png', color: 'bg-white', id: 'loteria' },
    { name: 'Orange', logo: '/orange-logo.png', color: 'bg-white', id: 'orange' },
    { name: 'eCredit', logo: '💳', color: 'bg-blue-500', id: 'ecredit' },
    { name: 'InfoCom', logo: '📺', color: 'bg-gray-600', id: 'infocom' },
    { name: 'Premier Energy', logo: '⚡', color: 'bg-green-600', id: 'premier' },
    { name: 'Avon', logo: '💄', color: 'bg-pink-500', id: 'avon' },
    { name: 'Moldcell', logo: '/moldcell-logo.png', color: 'bg-white', id: 'moldcell' },
    { name: 'Iute', logo: '/iute-logo.png', color: 'bg-white', id: 'iute' },
    { name: 'RCA Verde', logo: '🚗', color: 'bg-green-500', id: 'rca' },
    { name: 'Carte Verde', logo: '🚗', color: 'bg-emerald-500', id: 'carte' },
    { name: 'Moldovagaz', logo: '🔥', color: 'bg-blue-600', id: 'gas' },
    { name: 'Termoelectrica', logo: '🏭', color: 'bg-orange-600', id: 'termo' },
    { name: 'MicroInvest', logo: '💰', color: 'bg-teal-600', id: 'micro' },
    { name: 'Sebo', logo: '🏪', color: 'bg-yellow-500', id: 'sebo' },
    { name: 'Fee-Nord', logo: '🏢', color: 'bg-gray-700', id: 'fee' },
    { name: 'InfoSapr', logo: '📊', color: 'bg-indigo-600', id: 'info' },
  ];

  const categories = [
    { 
      name: 'Telefonia mobilă', 
      icon: Smartphone, 
      count: '45+', 
      gradient: 'from-blue-500 to-cyan-400',
      id: 'mobile',
      services: [
        { name: 'ORANGE', logo: '🟠', color: 'bg-orange-500', description: 'Reîncărcări și facturi Orange', id: 'orange' },
        { name: 'MOLDCELL', logo: '🟣', color: 'bg-purple-600', description: 'Servicii Moldcell', id: 'moldcell' },
        { name: 'SIMTRAVEL', logo: '✈️', color: 'bg-blue-500', description: 'SIM pentru călătorii', id: 'simtravel' },
        { name: 'MOLDTELECOM', logo: '📞', color: 'bg-red-600', description: 'Servicii Moldtelecom', id: 'moldtelecom' }
      ]
    },
    { 
      name: 'Servicii comunale', 
      icon: Building, 
      count: '30+', 
      gradient: 'from-green-500 to-emerald-400', 
      id: 'utilities',
      services: [
        { name: 'PREMIER ENERGY', logo: '⚡', color: 'bg-green-600', description: 'Facturi energie electrică', id: 'premier' },
        { name: 'MOLDOVAGAZ', logo: '🔥', color: 'bg-blue-600', description: 'Facturi gaze naturale', id: 'gas' },
        { name: 'TERMOELECTRICA', logo: '🏭', color: 'bg-orange-600', description: 'Încălzire centralizată', id: 'termo' },
        { name: 'APĂCANAL', logo: '💧', color: 'bg-cyan-500', description: 'Servicii de apă și canalizare', id: 'apacanal' }
      ]
    },
    { 
      name: 'Operatori internet și TV', 
      icon: Wifi, 
      count: '25+', 
      gradient: 'from-purple-500 to-pink-400', 
      id: 'internet',
      services: [
        { name: 'MOLDTELECOM', logo: '📡', color: 'bg-red-600', description: 'Internet și TV digital', id: 'moldtelecom-internet' },
        { name: 'STARNET', logo: '🌟', color: 'bg-purple-600', description: 'Internet de mare viteză', id: 'starnet' },
        { name: 'SUN COMMUNICATIONS', logo: '☀️', color: 'bg-yellow-500', description: 'Servicii de telecomunicații', id: 'sun' },
        { name: 'ARAX', logo: '📺', color: 'bg-blue-500', description: 'TV prin cablu și internet', id: 'arax' }
      ]
    },
    { 
      name: 'Plăți de stat', 
      icon: Receipt, 
      count: '20+', 
      gradient: 'from-orange-500 to-red-400', 
      id: 'government',
      services: [
        { name: 'FISC', logo: '🏛️', color: 'bg-gray-600', description: 'Impozite și taxe de stat', id: 'fisc' },
        { name: 'CNAM', logo: '🏥', color: 'bg-green-600', description: 'Asigurări medicale obligatorii', id: 'cnam' },
        { name: 'CNPF', logo: '👥', color: 'bg-blue-600', description: 'Contribuții sociale', id: 'cnpf' },
        { name: 'PRIMĂRIA', logo: '🏢', color: 'bg-purple-600', description: 'Taxe locale și amenzi', id: 'primaria' }
      ]
    },
    { 
      name: 'Plata creditelor', 
      icon: CreditCard, 
      count: '15+', 
      gradient: 'from-teal-500 to-blue-400', 
      id: 'credit',
      services: [
        { name: 'MAIB', logo: '🏦', color: 'bg-blue-600', description: 'Credite și împrumuturi MAIB', id: 'maib' },
        { name: 'VICTORIABANK', logo: '🏛️', color: 'bg-green-600', description: 'Produse de credit Victoria Bank', id: 'victoriabank' },
        { name: 'MICROINVEST', logo: '💰', color: 'bg-teal-600', description: 'Microfinanțare și credite', id: 'microinvest' },
        { name: 'EXIMBANK', logo: '💳', color: 'bg-purple-600', description: 'Servicii bancare Eximbank', id: 'eximbank' }
      ]
    },
    { 
      name: 'Jocuri', 
      icon: Gamepad2, 
      count: '12+', 
      gradient: 'from-indigo-500 to-purple-400', 
      id: 'games',
      services: [
        { name: 'STEAM', logo: '🎮', color: 'bg-gray-800', description: 'Jocuri PC și console', id: 'steam' },
        { name: 'PLAYSTATION', logo: '🎯', color: 'bg-blue-600', description: 'PlayStation Network', id: 'playstation' },
        { name: 'XBOX', logo: '🎲', color: 'bg-green-600', description: 'Xbox Live și Game Pass', id: 'xbox' },
        { name: 'MOBILE GAMES', logo: '📱', color: 'bg-purple-600', description: 'Jocuri mobile și aplicații', id: 'mobile-games' }
      ]
    },
    { 
      name: 'E-commerce', 
      icon: ShoppingBag, 
      count: '50+', 
      gradient: 'from-pink-500 to-rose-400', 
      id: 'ecommerce',
      services: [
        { name: 'DARWIN', logo: '🛒', color: 'bg-orange-500', description: 'Magazin online Darwin', id: 'darwin' },
        { name: 'ENTER', logo: '💻', color: 'bg-blue-600', description: 'Electronice și tehnică', id: 'enter' },
        { name: 'LINELLA', logo: '🛍️', color: 'bg-green-600', description: 'Supermarket online', id: 'linella' },
        { name: 'FASHION', logo: '👗', color: 'bg-pink-500', description: 'Modă și accesorii', id: 'fashion' }
      ]
    },
    { 
      name: 'Turism', 
      icon: Plane, 
      count: '8+', 
      gradient: 'from-cyan-500 to-teal-400', 
      id: 'tourism',
      services: [
        { name: 'BOOKING', logo: '🏨', color: 'bg-blue-600', description: 'Rezervări hoteluri', id: 'booking' },
        { name: 'AVIASALES', logo: '✈️', color: 'bg-cyan-500', description: 'Bilete de avion', id: 'aviasales' },
        { name: 'RENT A CAR', logo: '🚗', color: 'bg-green-600', description: 'Închirieri auto', id: 'rent-car' },
        { name: 'EXCURSII', logo: '🗺️', color: 'bg-purple-600', description: 'Tururi și excursii', id: 'excursii' }
      ]
    },
    { 
      name: 'Frumusețe și Sănătate', 
      icon: Flower2, 
      count: '35+', 
      gradient: 'from-green-400 to-cyan-400', 
      id: 'beauty',
      services: [
        { name: 'AVON', logo: '💄', color: 'bg-pink-500', description: 'Cosmetice și parfumuri', id: 'avon' },
        { name: 'ORIFLAME', logo: '🌸', color: 'bg-purple-500', description: 'Produse de frumusețe', id: 'oriflame' },
        { name: 'FARMACIA', logo: '💊', color: 'bg-green-600', description: 'Medicamente și suplimente', id: 'farmacia' },
        { name: 'SPA SERVICES', logo: '🧴', color: 'bg-blue-500', description: 'Servicii spa și wellness', id: 'spa' }
      ]
    },
    { 
      name: 'Cursuri', 
      icon: GraduationCap, 
      count: '18+', 
      gradient: 'from-blue-400 to-indigo-400', 
      id: 'courses',
      services: [
        { name: 'UDEMY', logo: '📚', color: 'bg-purple-600', description: 'Cursuri online diverse', id: 'udemy' },
        { name: 'COURSERA', logo: '🎓', color: 'bg-blue-600', description: 'Educație universitară', id: 'coursera' },
        { name: 'LIMBA ENGLEZĂ', logo: '🗣️', color: 'bg-green-600', description: 'Cursuri de limbi străine', id: 'english' },
        { name: 'IT ACADEMY', logo: '💻', color: 'bg-orange-500', description: 'Cursuri de programare', id: 'it-academy' }
      ]
    },
    { 
      name: 'Loteria', 
      icon: Ticket, 
      count: '5+', 
      gradient: 'from-yellow-500 to-orange-400', 
      id: 'lottery',
      services: [
        { name: 'LOTERIA NAȚIONALĂ', logo: '🎯', color: 'bg-red-500', description: 'Bilete loterie națională', id: 'loteria' },
        { name: 'NOROC', logo: '🍀', color: 'bg-green-500', description: 'Jocuri de noroc Noroc', id: 'noroc' },
        { name: 'LOTO', logo: '🎲', color: 'bg-blue-500', description: 'Loto și jocuri numerice', id: 'loto' },
        { name: 'INSTANT', logo: '⚡', color: 'bg-yellow-500', description: 'Jocuri instant câștigătoare', id: 'instant' }
      ]
    },
    { 
      name: 'Donații', 
      icon: Heart, 
      count: '10+', 
      gradient: 'from-red-400 to-pink-400', 
      id: 'donations',
      services: [
        { name: 'CARITAS', logo: '❤️', color: 'bg-red-500', description: 'Organizație caritabilă', id: 'caritas' },
        { name: 'COPII ÎN DIFICULTATE', logo: '👶', color: 'bg-blue-500', description: 'Ajutor pentru copii', id: 'copii' },
        { name: 'MEDICI FĂRĂ FRONTIERE', logo: '🏥', color: 'bg-green-500', description: 'Asistență medicală', id: 'medici' },
        { name: 'PROTECȚIA ANIMALELOR', logo: '🐕', color: 'bg-purple-500', description: 'Îngrijirea animalelor', id: 'animale' }
      ]
    },
  ];

  const getServiceFields = (serviceId: string) => {
    const serviceFields: { [key: string]: Array<{ name: string; label: string; type: string; placeholder?: string; options?: string[] }> } = {
      orange: [
        { name: 'phoneNumber', label: 'Номер телефона (79xxxxxx)/Счёт:', type: 'text', placeholder: '79xxxxxxx' }
      ],
      moldcell: [
        { name: 'phoneNumber', label: 'Номер телефона (79xxxxxx)/Счёт:', type: 'text', placeholder: '79xxxxxxx' }
      ],
      carte: [
        { name: 'validityPeriod', label: 'Срок действия:', type: 'select', options: ['1 месяц', '3 месяца', '6 месяцев', '12 месяцев'] },
        { name: 'direction', label: 'Направление:', type: 'select', options: ['Румыния', 'Болгария', 'Венгрия', 'Другие страны ЕС'] },
        { name: 'techPassportNumber', label: 'Номер техпаспорта:', type: 'text', placeholder: 'Введите номер техпаспорта' },
        { name: 'idnp', label: 'IDNP:', type: 'text', placeholder: 'Введите IDNP' }
      ],
      rca: [
        { name: 'validityPeriod', label: 'Срок действия:', type: 'select', options: ['15 дней', '1 месяц', '2 месяца', '3 месяца', '6 месяцев', '12 месяцев'] },
        { name: 'direction', label: 'Направление:', type: 'select', options: ['Румыния', 'Болгария', 'Венгрия', 'Другие страны ЕС'] },
        { name: 'techPassportNumber', label: 'Номер техпаспорта:', type: 'text', placeholder: 'Введите номер техпаспорта' },
        { name: 'idnp', label: 'IDNP:', type: 'text', placeholder: 'Введите IDNP' }
      ],
      premier: [
        { name: 'accountNumber', label: 'Номер лицевого счёта:', type: 'text', placeholder: 'Введите номер счёта' }
      ],
      gas: [
        { name: 'accountNumber', label: 'Номер лицевого счёта:', type: 'text', placeholder: 'Введите номер счёта' }
      ],
      termo: [
        { name: 'accountNumber', label: 'Номер лицевого счёта:', type: 'text', placeholder: 'Введите номер счёта' }
      ]
    };

    return serviceFields[serviceId] || [
      { name: 'accountNumber', label: 'Номер счёта:', type: 'text', placeholder: 'Введите номер счёта' }
    ];
  };

  const handleServiceClick = (serviceId: string, serviceName?: string, serviceLogo?: string, serviceColor?: string) => {
    // Find service in popular services first
    let service = popularServices.find(s => s.id === serviceId);
    
    // If not found in popular services, search in categories
    if (!service && serviceName) {
      service = {
        id: serviceId,
        name: serviceName,
        logo: serviceLogo || '🔷',
        color: serviceColor || 'bg-blue-500'
      };
    }
    
    // If still not found, search through all category services
    if (!service) {
      for (const category of categories) {
        if (category.services) {
          const foundService = category.services.find(s => s.id === serviceId);
          if (foundService) {
            service = {
              id: foundService.id,
              name: foundService.name,
              logo: foundService.logo,
              color: foundService.color
            };
            break;
          }
        }
      }
    }

    if (service) {
      setCurrentService(service);
      setCurrentPage('payment');
      setCurrentStep(1);
      setPaymentData({ accountNumber: '', amount: '', email: '' });
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    // Find the category to check if it has services
    const category = categories.find(cat => cat.id === categoryId);
    if (category && category.services) {
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({ ...prev, [field]: value }));
  };

  const handleTransferInputChange = (field: string, value: string) => {
    setTransferData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else {
      // Handle final payment
      console.log('Process payment:', paymentData);
    }
  };

  const handleCancel = () => {
    setCurrentPage('home');
    setCurrentService(null);
    setCurrentStep(1);
  };

  const handleCardTransfer = () => {
    setCurrentPage('transfer');
  };

  const handleTransferSubmit = () => {
    console.log('Transfer data:', transferData);
    // Handle transfer logic here
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Helper function to determine if we should show services after this row
  const shouldShowServicesAfterRow = (rowIndex: number, categoryId: string) => {
    const itemsPerRow = 4; // xl:grid-cols-4
    const categoryIndex = categories.findIndex(cat => cat.id === categoryId);
    const rowOfCategory = Math.floor(categoryIndex / itemsPerRow);
    return rowIndex === rowOfCategory && expandedCategory === categoryId;
  };

  // Helper function to get categories for a specific row
  const getCategoriesForRow = (rowIndex: number) => {
    const itemsPerRow = 4;
    const startIndex = rowIndex * itemsPerRow;
    return categories.slice(startIndex, startIndex + itemsPerRow);
  };

  // Calculate total number of rows
  const totalRows = Math.ceil(categories.length / 4);

  const renderTransferPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header - same as main page */}
        <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    OPLATA.MD
                  </h1>
                  <p className="text-xs text-slate-500">Plătește serviciile online</p>
                </div>
              </div>

              {/* Search */}
              <div className="hidden md:flex flex-1 max-w-lg mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Căutare rapidă a serviciilor..."
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                </div>
                <button className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                  OK
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
                </button>
                <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                  <User className="w-6 h-6" />
                </button>
                <button className="hidden md:block px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  Ieșire
                </button>
                <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  Ro
                </button>
                <button 
                  className="md:hidden p-2 text-slate-600"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Căutare servicii..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
              />
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8 text-sm text-slate-600">
            <button 
              onClick={() => setCurrentPage('home')}
              className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Назад</span>
            </button>
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="hidden md:block px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              LOGIN
            </button>
          </div>

          {/* Transfer Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 p-8 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <CreditCard className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">Transfer rapid</h1>
                  <p className="text-blue-100">Transferă bani instant între carduri bancare</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Instant</h3>
                    <p className="text-sm text-slate-600">Transfer în timp real</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Securizat</h3>
                    <p className="text-sm text-slate-600">Protecție SSL 256-bit</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Convenabil</h3>
                    <p className="text-sm text-slate-600">24/7 disponibil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8">
              <div className="max-w-2xl mx-auto space-y-8">
                {/* Card Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">Informații carduri</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Sender Card - Blue Card Style */}
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-white font-bold text-lg">De pe cardul</h4>
                        <div className="flex gap-2">
                          <div className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                            <span className="text-white font-bold text-sm">VISA</span>
                          </div>
                          <div className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full -ml-1"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Fields */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Cardul expeditorului
                          </label>
                          <input
                            type="text"
                            placeholder="Numărul cardului expeditorului"
                            value={transferData.senderCard}
                            onChange={(e) => setTransferData({...transferData, senderCard: e.target.value})}
                            className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-white font-medium mb-2 text-sm">
                              Valabil până la
                            </label>
                            <input
                              type="text"
                              placeholder="MM/AA"
                              className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                            />
                          </div>
                          <div>
                            <label className="block text-white font-medium mb-2 text-sm">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="CVV"
                              className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Numele și prenumele expeditorului
                          </label>
                          <input
                            type="text"
                            placeholder="Numele și prenumele expeditorului"
                            className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Adresa
                          </label>
                          <input
                            type="text"
                            placeholder="Adresa expeditorului"
                            className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Oraș
                          </label>
                          <input
                            type="text"
                            placeholder="Orașul expeditorului"
                            className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Țara
                          </label>
                          <input
                            type="text"
                            placeholder="Republica Moldova"
                            className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                          />
                        </div>
                      </div>
                      
                      {/* Decorative Circle */}
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">A</span>
                      </div>
                    </div>

                    {/* Receiver Card - Blue Card Style */}
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-2xl shadow-xl relative overflow-hidden">
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-white font-bold text-lg">La cardul</h4>
                        <div className="flex gap-2">
                          <div className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                            <span className="text-white font-bold text-sm">VISA</span>
                          </div>
                          <div className="bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full -ml-1"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Fields */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Cardul destinatarului
                          </label>
                          <input
                            type="text"
                            placeholder="Cardul destinatarului"
                            value={transferData.receiverCard}
                            onChange={(e) => setTransferData({...transferData, receiverCard: e.target.value})}
                            className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-white font-medium mb-2 text-sm">
                            Numele și prenumele destinatarului
                          </label>
                          <input
                            type="text"
                            placeholder="Numele și prenumele destinatarului"
                            className="w-full px-4 py-3 bg-white/95 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                          />
                        </div>
                        
                        <div className="space-y-4">
                          <div className="col-span-2">
                            <label className="block text-white font-medium mb-2 text-sm">
                              Suma
                            </label>
                            <div className="flex">
                              <input
                                type="number"
                                placeholder="0.00"
                                value={transferData.amount}
                                onChange={(e) => setTransferData({...transferData, amount: e.target.value})}
                                className="flex-1 px-4 py-3 bg-white/95 border-0 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500 font-medium"
                              />
                              <div className="bg-white/95 px-4 py-3 rounded-r-lg border-l border-gray-200">
                                <span className="text-gray-800 font-medium">MDL</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-span-2">
                            <label className="block text-white font-medium mb-2 text-sm">
                              Comision
                            </label>
                            <div className="flex">
                              <input
                                type="text"
                                placeholder="0.00"
                                readOnly
                                className="flex-1 px-4 py-3 bg-white/95 border-0 rounded-l-lg focus:outline-none text-gray-800 font-medium"
                              />
                              <div className="bg-white/95 px-4 py-3 rounded-r-lg border-l border-gray-200">
                                <span className="text-gray-800 font-medium">MDL</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-span-2">
                            <label className="block text-white font-medium mb-2 text-sm">
                              Total cu comision
                            </label>
                            <div className="flex">
                              <input
                                type="text"
                                placeholder="0.00"
                                readOnly
                                className="flex-1 px-4 py-3 bg-white/95 border-0 rounded-l-lg focus:outline-none text-gray-800 font-medium"
                              />
                              <div className="bg-white/95 px-4 py-3 rounded-r-lg border-l border-gray-200">
                                <span className="text-gray-800 font-medium">MDL</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Agreement Checkbox */}
                  <div className="flex items-center gap-3 mt-6">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="agreement" className="text-sm text-gray-600">
                      Sunt de acord cu{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        Termenii și condițiile serviciului
                      </a>
                    </label>
                  </div>
                </div>

                {/* Transfer Details */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-slate-800 flex items-center">
                    <Receipt className="w-5 h-5 mr-2 text-blue-600" />
                    Detalii transfer
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Suma (MDL) *
                      </label>
                      <input
                        type="number"
                        value={transferData.amount}
                        onChange={(e) => handleTransferInputChange('amount', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="0.00"
                        min="1"
                        step="0.01"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Scopul transferului
                      </label>
                      <select
                        value={transferData.purpose}
                        onChange={(e) => handleTransferInputChange('purpose', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Selectează scopul</option>
                        <option value="personal">Transfer personal</option>
                        <option value="family">Ajutor familial</option>
                        <option value="business">Plată pentru servicii</option>
                        <option value="gift">Cadou</option>
                        <option value="other">Altul</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-slate-800 flex items-center">
                    <User className="w-5 h-5 mr-2 text-blue-600" />
                    Informații de contact
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Numele expeditorului *
                      </label>
                      <input
                        type="text"
                        value={transferData.senderName}
                        onChange={(e) => handleTransferInputChange('senderName', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Ion Popescu"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefon expeditor *
                      </label>
                      <input
                        type="tel"
                        value={transferData.senderPhone}
                        onChange={(e) => handleTransferInputChange('senderPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="+373 XX XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Numele destinatarului *
                      </label>
                      <input
                        type="text"
                        value={transferData.recipientName}
                        onChange={(e) => handleTransferInputChange('recipientName', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="Maria Ionescu"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefon destinatar
                      </label>
                      <input
                        type="tel"
                        value={transferData.recipientPhone}
                        onChange={(e) => handleTransferInputChange('recipientPhone', e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                        placeholder="+373 XX XXX XXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Commission Info */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-2">Informații despre comision</h3>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Comision: 1.5% din suma transferului (min. 5 MDL)</li>
                        <li>• Transferul se efectuează instant</li>
                        <li>• Suport 24/7 pentru orice întrebări</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6">
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    Anulează
                  </button>
                  <button
                    onClick={handleTransferSubmit}
                    disabled={!transferData.fromCard || !transferData.toCard || !transferData.amount || !transferData.senderName || !transferData.senderPhone || !transferData.recipientName}
                    className="flex-1 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:shadow-none"
                  >
                    Continuă transferul
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPaymentPage = () => {
    if (!currentService) return null;

    const serviceFields = getServiceFields(currentService.id);

    if (currentStep === 1) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Header - same as main page */}
          <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      OPLATA.MD
                    </h1>
                    <p className="text-xs text-slate-500">Plătește serviciile online</p>
                  </div>
                </div>

                {/* Search */}
                <div className="hidden md:flex flex-1 max-w-lg mx-8">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Căutare rapidă a serviciilor..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                    />
                  </div>
                  <button className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                    OK
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <button className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
                  </button>
                  <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <User className="w-6 h-6" />
                  </button>
                  <button className="hidden md:block px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    Ieșire
                  </button>
                  <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    Ro
                  </button>
                  <button 
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden px-4 pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Căutare servicii..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                />
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:flex lg:gap-8">
              {/* Left Sidebar - same as main page */}
              <div className="lg:w-80 mb-8 lg:mb-0">
                {/* RCA Direct Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">Achită RCA direct prin</h3>
                      <div className="text-blue-600 font-bold text-lg mb-2">OPLATA.MD</div>
                      <div className="w-full h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-3 flex items-center justify-center">
                        <Receipt className="w-8 h-8 text-slate-400" />
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                        ASIGURARE
                      </button>
                    </div>
                  </div>
                </div>

                {/* App Download */}
                <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-6 text-white mb-6 shadow-lg">
                  <h3 className="font-semibold mb-2">Descarcă aplicația</h3>
                  <p className="text-slate-300 text-sm mb-4">Oplata.md</p>
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                    <span>Get it on</span>
                    <span className="font-bold">Google Play</span>
                  </button>
                </div>

                {/* Services */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                    SERVICII NOI
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="text-2xl font-bold">eSIM</div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-500 to-blue-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="text-sm font-medium">VINIETA BULGARIA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 mb-6 text-sm text-slate-600">
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-semibold text-slate-800">Оплата {currentService.name}</span>
                </div>

                {/* Payment Form */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                  <div className="max-w-2xl">
                    {/* Service Info */}
                    <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-200">
                      <div className={`w-20 h-20 ${currentService.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <div className="text-white text-center">
                          <div className="text-2xl">{currentService.logo}</div>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-800">{currentService.name}</h2>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6">
                      {serviceFields.map((field, index) => (
                        <div key={index}>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            {field.label}
                          </label>
                          {field.type === 'select' ? (
                            <select
                              value={paymentData[field.name as keyof typeof paymentData] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full max-w-md px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                            >
                              <option value="">Выберите...</option>
                              {field.options?.map((option, optionIndex) => (
                                <option key={optionIndex} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              value={paymentData[field.name as keyof typeof paymentData] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="w-full max-w-md px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                              placeholder={field.placeholder}
                            />
                          )}
                        </div>
                      ))}

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Suma de plată (MDL):
                        </label>
                        <input
                          type="number"
                          value={paymentData.amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          className="w-full max-w-md px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                          placeholder=""
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 mt-8">
                      <button
                        onClick={handleCancel}
                        className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                      >
                        Отмена
                      </button>
                      <button
                        onClick={handleContinue}
                        disabled={!paymentData.amount || serviceFields.some(field => !paymentData[field.name as keyof typeof paymentData])}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:shadow-none"
                      >
                        Продолжить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Header - same as main page */}
          <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      OPLATA.MD
                    </h1>
                    <p className="text-xs text-slate-500">Plătește serviciile online</p>
                  </div>
                </div>

                {/* Search */}
                <div className="hidden md:flex flex-1 max-w-lg mx-8">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Căutare rapidă a serviciilor..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                    />
                  </div>
                  <button className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                    OK
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <button className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
                  </button>
                  <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <User className="w-6 h-6" />
                  </button>
                  <button className="hidden md:block px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    Ieșire
                  </button>
                  <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    Ro
                  </button>
                  <button 
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden px-4 pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Căutare servicii..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                />
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:flex lg:gap-8">
              {/* Left Sidebar - same as main page */}
              <div className="lg:w-80 mb-8 lg:mb-0">
                {/* RCA Direct Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">Achită RCA direct prin</h3>
                      <div className="text-blue-600 font-bold text-lg mb-2">OPLATA.MD</div>
                      <div className="w-full h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-3 flex items-center justify-center">
                        <Receipt className="w-8 h-8 text-slate-400" />
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                        ASIGURARE
                      </button>
                    </div>
                  </div>
                </div>

                {/* App Download */}
                <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-6 text-white mb-6 shadow-lg">
                  <h3 className="font-semibold mb-2">Descarcă aplicația</h3>
                  <p className="text-slate-300 text-sm mb-4">Oplata.md</p>
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                    <span>Get it on</span>
                    <span className="font-bold">Google Play</span>
                  </button>
                </div>

                {/* Services */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                    SERVICII NOI
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="text-2xl font-bold">eSIM</div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-500 to-blue-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="text-sm font-medium">VINIETA BULGARIA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 mb-6 text-sm text-slate-600">
                  <button 
                    onClick={() => setCurrentStep(1)}
                    className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-semibold text-slate-800">Подтверждение оплаты {currentService.name}</span>
                </div>

                {/* Confirmation Form */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                  <div className="max-w-2xl">
                    {/* Service Info */}
                    <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-200">
                      <div className={`w-20 h-20 ${currentService.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <div className="text-white text-center">
                          <div className="text-2xl">{currentService.logo}</div>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-800">{currentService.name}</h2>
                        <p className="text-slate-600">Подтверждение данных</p>
                      </div>
                    </div>

                    {/* Confirmation Details */}
                    <div className="space-y-6 mb-8">
                      <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        Детали платежа
                      </h3>
                      
                      <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                        {serviceFields.map((field, index) => {
                          const value = paymentData[field.name as keyof typeof paymentData];
                          if (value) {
                            return (
                              <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                                <span className="text-slate-600">{field.label}</span>
                                <span className="font-medium text-slate-800">{value}</span>
                              </div>
                            );
                          }
                          return null;
                        })}
                        <div className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                          <span className="text-slate-600">Сумма к оплате:</span>
                          <span className="font-bold text-lg text-blue-600">{paymentData.amount} MDL</span>
                        </div>
                      </div>
                    </div>

                    {/* Email Section */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-8">
                      <div className="flex items-start space-x-3 mb-4">
                        <Mail className="w-5 h-5 text-amber-600 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-amber-800 mb-1">Email для подтверждения</h3>
                          <p className="text-sm text-amber-700">Укажите email для получения чека и подтверждения платежа</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-amber-800 mb-2">
                          Email адрес *
                        </label>
                        <input
                          type="email"
                          value={paymentData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full max-w-md px-4 py-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                          placeholder="example@email.com"
                        />
                        {paymentData.email && !isValidEmail(paymentData.email) && (
                          <p className="text-red-600 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            Введите корректный email адрес
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                      >
                        Назад
                      </button>
                      <button
                        onClick={handleContinue}
                        disabled={!paymentData.email || !isValidEmail(paymentData.email)}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium shadow-lg hover:shadow-xl disabled:shadow-none"
                      >
                        Продолжить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Header - same as main page */}
          <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      OPLATA.MD
                    </h1>
                    <p className="text-xs text-slate-500">Plătește serviciile online</p>
                  </div>
                </div>

                {/* Search */}
                <div className="hidden md:flex flex-1 max-w-lg mx-8">
                  <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Căutare rapidă a serviciilor..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                    />
                  </div>
                  <button className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                    OK
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <button className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <ShoppingCart className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
                  </button>
                  <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <User className="w-6 h-6" />
                  </button>
                  <button className="hidden md:block px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    Ieșire
                  </button>
                  <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                    Ro
                  </button>
                  <button 
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden px-4 pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Căutare servicii..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                />
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="lg:flex lg:gap-8">
              {/* Left Sidebar - same as main page */}
              <div className="lg:w-80 mb-8 lg:mb-0">
                {/* RCA Direct Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1">Achită RCA direct prin</h3>
                      <div className="text-blue-600 font-bold text-lg mb-2">OPLATA.MD</div>
                      <div className="w-full h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-3 flex items-center justify-center">
                        <Receipt className="w-8 h-8 text-slate-400" />
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                        ASIGURARE
                      </button>
                    </div>
                  </div>
                </div>

                {/* App Download */}
                <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-6 text-white mb-6 shadow-lg">
                  <h3 className="font-semibold mb-2">Descarcă aplicația</h3>
                  <p className="text-slate-300 text-sm mb-4">Oplata.md</p>
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                    <span>Get it on</span>
                    <span className="font-bold">Google Play</span>
                  </button>
                </div>

                {/* Services */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-blue-600 mr-2" />
                    SERVICII NOI
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="text-2xl font-bold">eSIM</div>
                    </div>
                    <div className="bg-gradient-to-r from-teal-500 to-blue-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="text-sm font-medium">VINIETA BULGARIA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 mb-6 text-sm text-slate-600">
                  <button 
                    onClick={() => setCurrentStep(2)}
                    className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-semibold text-slate-800">Способ оплаты {currentService.name}</span>
                </div>

                {/* Payment Method Selection */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
                  <div className="max-w-2xl">
                    {/* Service Info */}
                    <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-200">
                      <div className={`w-20 h-20 ${currentService.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <div className="text-white text-center">
                          <div className="text-2xl">{currentService.logo}</div>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-800">{currentService.name}</h2>
                        <p className="text-slate-600">Выберите способ оплаты</p>
                      </div>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
                      <h3 className="font-semibold text-slate-800 mb-4">Итого к оплате</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Сумма платежа:</span>
                          <span className="font-medium">{paymentData.amount} MDL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Комиссия:</span>
                          <span className="font-medium">0.00 MDL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Email:</span>
                          <span className="font-medium">{paymentData.email}</span>
                        </div>
                        <div className="border-t border-slate-200 pt-2 mt-2">
                          <div className="flex justify-between">
                            <span className="font-semibold text-slate-800">Итого:</span>
                            <span className="font-bold text-lg text-blue-600">{paymentData.amount} MDL</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold text-slate-800">Способы оплаты</h3>
                      
                      {/* Bank Cards */}
                      <div className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-800">Банковские карты</h4>
                            <p className="text-sm text-slate-600">Visa, Mastercard, МИР</p>
                          </div>
                          <div className="flex space-x-2">
                            <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                            <div className="w-8 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                          </div>
                        </div>
                      </div>

                      {/* PayPal */}
                      <div className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">PP</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-800">PayPal</h4>
                            <p className="text-sm text-slate-600">Безопасные платежи через PayPal</p>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Payments */}
                      <div className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-800">Мобильные платежи</h4>
                            <p className="text-sm text-slate-600">Apple Pay, Google Pay, Samsung Pay</p>
                          </div>
                        </div>
                      </div>

                      {/* Terminals */}
                      <div className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Building className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-800">Терминалы</h4>
                            <p className="text-sm text-slate-600">Оплата через терминалы самообслуживания</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                      >
                        Назад
                      </button>
                      <button
                        onClick={handleContinue}
                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                      >
                        Оплатить {paymentData.amount} MDL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  if (currentPage === 'transfer') {
    return renderTransferPage();
  }

  if (currentPage === 'payment') {
    return renderPaymentPage();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-slate-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  OPLATA.MD
                </h1>
                <p className="text-xs text-slate-500">Plătește serviciile online</p>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Căutare rapidă a serviciilor..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                />
              </div>
              <button className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 font-medium">
                OK
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
                <User className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden md:block px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                LOGIN
              </button>
              <button className="hidden md:block px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Ieșire
              </button>
              <button className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Ro
              </button>
              <button 
                className="md:hidden p-2 text-slate-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Căutare servicii..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Left Sidebar */}
        <div className="lg:flex lg:gap-8">
          <div className="lg:w-80 mb-8 lg:mb-0">
            {/* RCA Direct Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1">Achită RCA direct prin</h3>
                  <div className="text-blue-600 font-bold text-lg mb-2">OPLATA.MD</div>
                  <div className="w-full h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-3 flex items-center justify-center">
                    <Receipt className="w-8 h-8 text-slate-400" />
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                    ASIGURARE
                  </button>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-2xl p-6 text-white mb-6 shadow-lg">
              <h3 className="font-semibold mb-2">Descarcă aplicația</h3>
              <p className="text-slate-300 text-sm mb-4">Oplata.md</p>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                <span>Get it on</span>
                <span className="font-bold">Google Play</span>
              </button>
            </div>

            {/* Services */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center">
                <Star className="w-5 h-5 text-blue-600 mr-2" />
                SERVICII NOI
              </h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="text-2xl font-bold">eSIM</div>
                </div>
                <div className="bg-gradient-to-r from-teal-500 to-blue-400 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="text-sm font-medium">VINIETA BULGARIA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Popular Services */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Plăți frecvente</h2>
                <button className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
                  Adaugă serviciul tău
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {popularServices.map((service, index) => (
                  <div 
                    key={index}
                    onClick={() => handleServiceClick(service.id)}
                    className="group bg-white/60 hover:bg-white border border-white/40 rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer backdrop-blur-sm aspect-square"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-4 w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                      <img 
                        src={service.id === 'loteria' ? '/LOTERIAlogo.png' : `https://via.placeholder.com/48x48/f3f4f6/6b7280?text=${service.name.charAt(0)}`}
                        alt={service.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transfer Card */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div 
                onClick={handleCardTransfer}
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Transfer de la card la card</h3>
                  <CreditCard className="w-8 h-8" />
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-6 bg-red-500 rounded shadow-sm"></div>
                  <div className="w-8 h-6 bg-orange-400 rounded shadow-sm"></div>
                  <span className="text-sm opacity-90">mastercard</span>
                </div>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2.5 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20">
                  Transfer acum
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-blue-400 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Solicită Credit</h3>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    💰
                  </div>
                </div>
                <p className="text-white/90 text-sm mb-4">Obține creditul de care ai nevoie rapid și simplu</p>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2.5 rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20">
                  Aplică acum
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Categorii</h2>
              
              <div className="space-y-6">
                {Array.from({ length: totalRows }, (_, rowIndex) => (
                  <div key={rowIndex}>
                    {/* Categories Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {getCategoriesForRow(rowIndex).map((category, index) => (
                        <div 
                          key={index}
                          onClick={() => handleCategoryClick(category.id)}
                          className="group bg-white/80 hover:bg-white border border-slate-200/60 hover:border-blue-300/60 rounded-lg transition-all duration-200 hover:shadow-md cursor-pointer backdrop-blur-sm aspect-square w-[90%] mx-auto p-2"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                              <category.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                              <div className="flex flex-col items-center justify-center h-full">
                                {category.name}
                              </div>
                            </h3>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-slate-500">{category.count} servicii</span>
                              {category.services ? (
                                expandedCategory === category.id ? 
                                  <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all duration-200" /> :
                                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-all duration-200" />
                              ) : (
                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Services Dropdown - appears after the row containing the expanded category */}
                    {categories.map(category => 
                      shouldShowServicesAfterRow(rowIndex, category.id) && category.services ? (
                        <div key={category.id} className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedCategory === category.id 
                            ? 'max-h-96 opacity-100 mt-4' 
                            : 'max-h-0 opacity-0'
                        }`}>
                          <div className="bg-gradient-to-br from-slate-100/80 via-blue-50/60 to-cyan-50/80 backdrop-blur-sm rounded-xl shadow-md border border-slate-200/50 p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                              {category.services.map((service, serviceIndex) => (
                                <div 
                                  key={serviceIndex}
                                  onClick={() => handleServiceClick(service.id, service.name, service.logo, service.color)}
                                  className="group bg-white/80 hover:bg-white border border-slate-200/60 hover:border-blue-300/60 rounded-lg p-3 transition-all duration-200 hover:shadow-md cursor-pointer backdrop-blur-sm"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center text-white text-lg shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                                      {service.logo}
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                                        {service.name}
                                      </h4>
                                      <p className="text-xs text-slate-500 mt-1">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-slate-300 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">OPLATA.MD</h3>
                  <p className="text-xs text-slate-400">© 2018 "Paynet Services" SRL</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-4">Licența BNR Nr. 0000536</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Despre noi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contactează-ne</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terminale și parteneri</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Politica de Confidențialitate</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Termeni și Condiții</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Termeni și Condiții P2P</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarife</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Setări cookies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Plăți securizate</h4>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-400 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">MC</div>
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">VISA</div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">P</div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">M</div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Bun venit pe OPLATA.MD</h2>
              <p className="text-slate-600">
                Introdu adresa ta de e-mail pentru a te autentifica sau a te înregistra:
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresa de e-mail"
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Google Auth Button */}
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-slate-700 font-medium">Continuă cu Google</span>
              </button>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  Sunt de acord cu{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Termenii și Condițiile
                  </a>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setIsLoginModalOpen(false)}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Înapoi</span>
                </button>
                <button
                  disabled={!email || !agreeToTerms}
                  className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Continuă cu e-mailul
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;