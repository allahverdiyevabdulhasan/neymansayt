// components/ui/QRMenuPresentation.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
    FaChevronLeft, 
    FaChevronRight, 
    FaPlay, 
    FaExpand, 
    FaCompress, 
    FaBars, 
    FaXmark, 
    FaUtensils, 
    FaQrcode, 
    FaTv, 
    FaBell, 
    FaChartPie, 
    FaArrowRight,
    FaCircleCheck,
    FaTriangleExclamation,
    FaCheck
} from 'react-icons/fa6';

export const QRMenuPresentation = ({ locale = 'az' }: { locale?: string }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Interactive States
    // QR Simulator
    const [selectedCategory, setSelectedCategory] = useState<'kebab' | 'drink' | 'sweet'>('kebab');
    
    // KDS Simulator
    const [orders, setOrders] = useState([
        { id: 104, table: "Masa 4", items: "1x Quzu Antrikot, 1x Ayran", status: "Hazırlanır" },
        { id: 105, table: "Masa 12", items: "2x Adana Kebab, 1x Fanta", status: "Mətbəxdə" },
        { id: 106, table: "Masa 8", items: "1x Künefe, 1x Çay", status: "Mətbəxdə" }
    ]);

    // Waiter Call Simulator
    const [waiterCalls, setWaiterCalls] = useState<string[]>([]);
    
    // Finance State
    const [selectedPeriod, setSelectedPeriod] = useState<'day' | 'week' | 'month'>('day');

    // Demo Form
    const [demoName, setDemoName] = useState('');
    const [demoPhone, setDemoPhone] = useState('');
    const [demoRestaurant, setDemoRestaurant] = useState('');
    const [demoSubmitted, setDemoSubmitted] = useState(false);

    const totalSlides = 7;

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
            if (e.key === 'ArrowRight' || e.key === ' ' || e.code === 'Space') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : 0));
    };

    const goToSlide = (index: number) => {
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index);
        }
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                setIsFullscreen(true);
            }).catch(err => console.error(err));
        } else {
            document.exitFullscreen().then(() => {
                setIsFullscreen(false);
            });
        }
    };

    // Cycle KDS Order Status
    const cycleStatus = (id: number) => {
        setOrders(prev => prev.map(order => {
            if (order.id === id) {
                const nextStatus = order.status === "Mətbəxdə" ? "Hazırlanır" : order.status === "Hazırlanır" ? "Hazırdır" : "Mətbəxdə";
                return { ...order, status: nextStatus };
            }
            return order;
        }));
    };

    // Waiter Call trigger
    const triggerWaiterCall = (table: string) => {
        setWaiterCalls(prev => [table, ...prev].slice(0, 3));
    };

    const slidesMeta = [
        { title: "Avaz QR Menu & Giriş", cat: "Giriş" },
        { title: "Mövcud Restoran Problemləri", cat: "Problemlər" },
        { title: "Rəqəmsal İnteraktiv Menyu", cat: "Menyu Modulu" },
        { title: "Mətbəx Monitor Sistemi (KDS)", cat: "Mətbəx Həlləri" },
        { title: "Ağıllı Ofisiant Çağırışı", cat: "Xidmət Modulu" },
        { title: "Maliyyə & Masa Analitikası", cat: "Hesabatlar" },
        { title: "Pulsuz Sınaq & Qeydiyyat", cat: "Nəticə" }
    ];

    const currentMeta = slidesMeta[currentSlide];

    return (
        <div className="w-full min-h-screen bg-slate-100 text-slate-700 flex flex-col justify-center items-center overflow-hidden relative">
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none z-0" />

            {/* Presentation container */}
            <div className="w-full max-w-[1280px] h-[760px] rounded-3xl border border-slate-200 shadow-2xl bg-white relative z-10 flex flex-col overflow-hidden transition-all duration-300">
                
                {/* Header Bar */}
                <header className="h-[70px] border-b border-slate-200 px-8 flex justify-between items-center relative z-40 bg-slate-50">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 hover:text-blue-600 transition-all cursor-pointer"
                            aria-label="Menu"
                        >
                            <FaBars className="w-5 h-5" />
                        </button>
                        
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-base shadow-md shadow-blue-500/20">
                                A
                            </div>
                            <span className="font-extrabold text-lg tracking-tight text-slate-900">
                                Avaz <span className="text-blue-600 font-bold">QR Menu</span>
                            </span>
                        </div>

                        <span className="ml-4 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-100">
                            {currentMeta.cat}
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleFullscreen}
                            className="w-10 h-10 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer"
                            title="Tam Ekran"
                        >
                            {isFullscreen ? <FaCompress className="w-4 h-4" /> : <FaExpand className="w-4 h-4" />}
                        </button>
                    </div>
                </header>

                {/* Slides Viewport */}
                <main className="flex-grow relative overflow-hidden bg-white">
                    
                    {/* SLIDE 1: GİRİŞ */}
                    <section className={`absolute inset-0 p-12 flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out ${currentSlide === 0 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-10'}`} style={{ background: 'radial-gradient(circle at center, #ffffff 0%, #f0f7ff 100%)' }}>
                        <div className="max-w-4xl space-y-8">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-extrabold uppercase tracking-widest rounded-full border border-blue-100">
                                <FaUtensils className="w-4 h-4" />
                                <span>RESTORAN VƏ KAFELƏR ÜÇÜN RƏQƏMSAL HƏLL</span>
                            </span>
                            
                            <h1 className="text-6xl sm:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                                Premium <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">QR Menu & KDS</span>
                            </h1>
                            
                            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-500/20" />
                            
                            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                                Müştəriləriniz üçün interaktiv sifariş, mətbəx işçiləri üçün anlıq monitor və rəhbərlik üçün real vaxt hesabatları təqdim edən vahid ekosistem.
                            </p>

                            <button
                                onClick={() => goToSlide(1)}
                                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-500/20 flex items-center gap-3.5 mx-auto transition-transform hover:-translate-y-0.5 cursor-pointer"
                            >
                                <span>Təqdimata Başla</span>
                                <FaPlay className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </section>

                    {/* SLIDE 2: RESTORAN PROBLEMLƏRİ */}
                    <section className={`absolute inset-0 p-10 flex flex-col transition-all duration-700 ease-in-out ${currentSlide === 1 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-10'}`}>
                        <h2 className="text-3xl font-black text-slate-900 mb-6 border-b border-slate-200 pb-4 flex items-center gap-3">
                            <FaTriangleExclamation className="text-amber-500 w-8 h-8" />
                            <span>Klassik Restoranların 3 Kritik Problemi</span>
                        </h2>

                        <div className="grid grid-cols-3 gap-6 flex-grow items-stretch">
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-center space-y-4 hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center text-xl font-bold border border-rose-100">
                                    01
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Bahalı Çap və Kağız Xərcləri</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Hər mövsüm dəyişən yemək qiymətləri, yenilənən menyular səbəbindən yaranan yüksək dizayn və çap xərcləri.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-center space-y-4 hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center text-xl font-bold border border-rose-100">
                                    02
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Uzun Sifariş Gözləmə Müddəti</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Xüsusilə pik saatlarda ofisiantın gəlməsini gözləmək, sifarişin gec qeydə alınması və mətbəxə gec çatması müştəri narazılığına səbəb olur.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-center space-y-4 hover:-translate-y-1 transition-all">
                                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center text-xl font-bold border border-rose-100">
                                    03
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Maliyyə & Hesabat İtkisi</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Hansı masadan nə qədər ciro gəldiyini, ofisiantların xidmət sürətini və ən çox satılan yeməkləri dərhal görə bilməmək.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SLIDE 3: INTERAKTIV QR MENU SIMULATOR */}
                    <section className={`absolute inset-0 p-10 flex flex-col transition-all duration-700 ease-in-out ${currentSlide === 2 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-10'}`}>
                        <h2 className="text-3xl font-black text-slate-900 mb-4 border-b border-slate-200 pb-3 flex items-center gap-3">
                            <FaQrcode className="text-blue-600 w-8 h-8" />
                            <span>İnteraktiv QR Menyu Simulyatoru</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-8 items-center flex-grow">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900">Müştəri Mobil Ekranı Təcrübəsi</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Müştəri masadakı QR kodu skan edir, heç bir proqram yükləmədən zəngin fotoşəkilli, çoxdilli menyu ilə tanış olur və birbaşa sifariş verə bilir.
                                </p>
                                
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setSelectedCategory('kebab')} 
                                        className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${selectedCategory === 'kebab' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                                    >
                                        Kabablar
                                    </button>
                                    <button 
                                        onClick={() => setSelectedCategory('drink')} 
                                        className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${selectedCategory === 'drink' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                                    >
                                        İçkilər
                                    </button>
                                    <button 
                                        onClick={() => setSelectedCategory('sweet')} 
                                        className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${selectedCategory === 'sweet' ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                                    >
                                        Şirniyyatlar
                                    </button>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-center items-center min-h-[250px]">
                                <div className="w-56 bg-white border border-slate-200 rounded-3xl p-4 shadow-lg space-y-4">
                                    <div className="text-center font-black text-xs text-slate-900 border-b pb-2">AVAZ KEBAB MENYU</div>
                                    
                                    {selectedCategory === 'kebab' && (
                                        <div className="space-y-3 animate-fade-in">
                                            <div className="bg-slate-50 rounded-2xl p-2.5 flex items-center gap-2">
                                                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-xs">🥩</div>
                                                <div className="flex-grow">
                                                    <div className="text-[10px] font-bold text-slate-950">Adana Kebabı</div>
                                                    <div className="text-[9px] text-blue-600 font-bold">14.00 AZN</div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 rounded-2xl p-2.5 flex items-center gap-2">
                                                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-xs">🍖</div>
                                                <div className="flex-grow">
                                                    <div className="text-[10px] font-bold text-slate-950">Quzu Şaşlık</div>
                                                    <div className="text-[9px] text-blue-600 font-bold">18.50 AZN</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {selectedCategory === 'drink' && (
                                        <div className="space-y-3 animate-fade-in">
                                            <div className="bg-slate-50 rounded-2xl p-2.5 flex items-center gap-2">
                                                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-xs">🥤</div>
                                                <div className="flex-grow">
                                                    <div className="text-[10px] font-bold text-slate-950">Ev Yapımı Ayran</div>
                                                    <div className="text-[9px] text-blue-600 font-bold">2.50 AZN</div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 rounded-2xl p-2.5 flex items-center gap-2">
                                                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-xs">🧃</div>
                                                <div className="flex-grow">
                                                    <div className="text-[10px] font-bold text-slate-950">Soyuq Limonad</div>
                                                    <div className="text-[9px] text-blue-600 font-bold">4.00 AZN</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {selectedCategory === 'sweet' && (
                                        <div className="space-y-3 animate-fade-in">
                                            <div className="bg-slate-50 rounded-2xl p-2.5 flex items-center gap-2">
                                                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-xs">🥮</div>
                                                <div className="flex-grow">
                                                    <div className="text-[10px] font-bold text-slate-950">Antep Künefesi</div>
                                                    <div className="text-[9px] text-blue-600 font-bold">8.00 AZN</div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 rounded-2xl p-2.5 flex items-center gap-2">
                                                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-xs">🍰</div>
                                                <div className="flex-grow">
                                                    <div className="text-[10px] font-bold text-slate-950">Paxlava (3 ədəd)</div>
                                                    <div className="text-[9px] text-blue-600 font-bold">6.50 AZN</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SLIDE 4: KITCHEN DISPLAY SYSTEM (KDS) */}
                    <section className={`absolute inset-0 p-10 flex flex-col transition-all duration-700 ease-in-out ${currentSlide === 3 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-10'}`}>
                        <h2 className="text-3xl font-black text-slate-900 mb-4 border-b border-slate-200 pb-3 flex items-center gap-3">
                            <FaTv className="text-blue-600 w-8 h-8" />
                            <span>Mətbəx Monitor Sistemi (Kitchen Display System - KDS)</span>
                        </h2>

                        <p className="text-sm text-slate-600 mb-6">
                            Müştəri masadan sifariş verdiyi an, sifariş birbaşa mətbəxdəki monitora düşür. Kartların üzərinə klikləyərək sifarişin mərhələlərini simulyasiya edin (Mətbəxdə ➡️ Hazırlanır ➡️ Hazırdır).
                        </p>

                        <div className="grid grid-cols-3 gap-6 flex-grow items-stretch h-[200px]">
                            {orders.map(order => (
                                <button
                                    key={order.id}
                                    onClick={() => cycleStatus(order.id)}
                                    className="bg-slate-50 border border-slate-200 p-5 rounded-3xl text-left hover:border-blue-500 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-black text-slate-900">{order.table}</span>
                                            <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-100">#{order.id}</span>
                                        </div>
                                        <p className="text-xs font-medium text-slate-600 mb-4">{order.items}</p>
                                    </div>
                                    
                                    <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                                        <span className="text-[10px] text-slate-400">Status:</span>
                                        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                                            order.status === "Hazırdır" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                                            order.status === "Hazırlanır" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                                            "bg-blue-50 text-blue-600 border border-blue-100"
                                        }`}>{order.status}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* SLIDE 5: WAITER CALLING */}
                    <section className={`absolute inset-0 p-10 flex flex-col transition-all duration-700 ease-in-out ${currentSlide === 4 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-10'}`}>
                        <h2 className="text-3xl font-black text-slate-900 mb-4 border-b border-slate-200 pb-3 flex items-center gap-3">
                            <FaBell className="text-blue-600 w-8 h-8" />
                            <span>Ağıllı Ofisiant Çağırış Sistemi</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-8 items-center flex-grow">
                            <div className="space-y-6">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Müştəriləriniz masadakı rəqəmsal düyməyə və ya telefondakı QR menudan "Ofisiant Çağır" düyməsinə kliklədikdə, bu zəng dərhal ofisiantın ağıllı qol saatına və ya planşetə bildirilir.
                                </p>
                                
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => triggerWaiterCall("Masa 3")}
                                        className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-blue-500/20 cursor-pointer flex items-center gap-2"
                                    >
                                        <FaBell />
                                        <span>Masa 3-dən Çağır</span>
                                    </button>
                                    <button
                                        onClick={() => triggerWaiterCall("Masa 15")}
                                        className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-blue-500/20 cursor-pointer flex items-center gap-2"
                                    >
                                        <FaBell />
                                        <span>Masa 15-dən Çağır</span>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
                                <h3 className="text-sm font-bold text-slate-900 border-b pb-3 mb-4">Ofisiant Saatı Bildirişləri</h3>
                                {waiterCalls.length === 0 ? (
                                    <div className="text-center py-8 text-xs text-slate-400 font-medium">Hal-hazırda heç bir çağırış yoxdur. Test etmək üçün soldakı düymələrə klikləyin.</div>
                                ) : (
                                    <div className="space-y-2">
                                        {waiterCalls.map((table, idx) => (
                                            <div key={idx} className="bg-white border border-blue-100 rounded-2xl p-4 flex items-center justify-between text-xs animate-slide-in">
                                                <span className="font-bold text-blue-600">{table}</span>
                                                <span className="text-slate-500">Ofisiant Çağırır 🛎️</span>
                                                <span className="text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-100 animate-pulse">Yeni</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* SLIDE 6: FINANCIAL ANALYTICS */}
                    <section className={`absolute inset-0 p-10 flex flex-col transition-all duration-700 ease-in-out ${currentSlide === 5 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-10'}`}>
                        <h2 className="text-3xl font-black text-slate-900 mb-4 border-b border-slate-200 pb-3 flex items-center gap-3">
                            <FaChartPie className="text-blue-600 w-8 h-8" />
                            <span>Masa & Satış Analitikası (Finance Reports)</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-8 items-center flex-grow">
                            <div className="space-y-6">
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Restoran rəhbərliyi üçün güclü admin panel vasitəsilə masaların doluluq dərəcəsini, ən çox sifariş verilən kateqoriyaları və ümumi gündəlik/aylıq cironu real vaxt rejimində izləyin.
                                </p>
                                
                                <div className="flex gap-2">
                                    {(['day', 'week', 'month'] as const).map(period => (
                                        <button
                                            key={period}
                                            onClick={() => setSelectedPeriod(period)}
                                            className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${selectedPeriod === period ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                                        >
                                            {period === 'day' ? 'Bu Gün' : period === 'week' ? 'Bu Həftə' : 'Bu Ay'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 border-b pb-2">
                                    {selectedPeriod === 'day' ? 'Gündəlik Satış Raporu' : selectedPeriod === 'week' ? 'Həftəlik Satış Raporu' : 'Aylıq Satış Raporu'}
                                </h3>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-semibold text-slate-600">Ümumi Gəlir</span>
                                        <span className="text-blue-600 font-extrabold text-sm">
                                            {selectedPeriod === 'day' ? '1,420 AZN' : selectedPeriod === 'week' ? '9,840 AZN' : '42,500 AZN'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-semibold text-slate-600">Sifariş Sayı</span>
                                        <span className="text-slate-900 font-bold">
                                            {selectedPeriod === 'day' ? '74 sifariş' : selectedPeriod === 'week' ? '480 sifariş' : '2,150 sifariş'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-semibold text-slate-600">Ortalama Çek</span>
                                        <span className="text-slate-900 font-bold">19.20 AZN</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs border-t border-slate-100 pt-3">
                                        <span className="font-bold text-slate-900">Ən Populyar Yemək</span>
                                        <span className="text-emerald-600 font-extrabold">Adana Kebabı 🔥</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SLIDE 7: DEMO REQUEST FORM */}
                    <section className={`absolute inset-0 p-12 flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${currentSlide === 6 ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 pointer-events-none z-10'}`} style={{ background: 'radial-gradient(circle at center, #ffffff 0%, #f0f7ff 100%)' }}>
                        <div className="max-w-xl w-full text-center space-y-6">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-100">
                                <span>PULSUZ 14 GÜNLÜK SINAQ MƏRHƏLƏSİ</span>
                            </span>
                            
                            <h2 className="text-4xl font-black text-slate-900">Öz Restoranınızda Sınaqdan Keçirin!</h2>
                            <p className="text-sm text-slate-600 max-w-md mx-auto">
                                Avaz QR Menu ilə müştəri məmnuniyyətini artırın, xidməti sürətləndirin və restoran cironuzu 30% yüksəldin.
                            </p>

                            {demoSubmitted ? (
                                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 space-y-4 animate-fade-in">
                                    <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl mx-auto shadow-lg shadow-emerald-500/20">
                                        <FaCheck />
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-800">Sifarişiniz Qəbul Edildi!</h3>
                                    <p className="text-xs text-emerald-700">Mütəxəssislərimiz 2 saat ərzində sizinlə əlaqə saxlayıb quraşdırılmaya başlayacaq.</p>
                                </div>
                            ) : (
                                <form onSubmit={(e) => { e.preventDefault(); setDemoSubmitted(true); }} className="bg-white border border-slate-200 p-6 rounded-3xl shadow-xl space-y-4 text-left">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-extrabold uppercase text-slate-500">Adınız & Soyadınız</label>
                                            <input
                                                type="text"
                                                required
                                                value={demoName}
                                                onChange={(e) => setDemoName(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 text-slate-900"
                                                placeholder="Məs. Əli Məmmədov"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-extrabold uppercase text-slate-500">Əlaqə Nömrəsi</label>
                                            <input
                                                type="tel"
                                                required
                                                value={demoPhone}
                                                onChange={(e) => setDemoPhone(e.target.value)}
                                                className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 text-slate-900"
                                                placeholder="Məs. +994 50 123 45 67"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-extrabold uppercase text-slate-500">Restoran / Kafe Adı</label>
                                        <input
                                            type="text"
                                            required
                                            value={demoRestaurant}
                                            onChange={(e) => setDemoRestaurant(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 text-slate-900"
                                            placeholder="Məs. Avaz Kebab & Lounge"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                                    >
                                        <span>Pulsuz Sınaq Qurulsun</span>
                                        <FaArrowRight size={14} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </section>
                </main>

                {/* Footer Navigation Bar */}
                <footer className="h-[65px] border-t border-slate-200 px-8 flex justify-between items-center bg-slate-50 relative z-40">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className="px-4 py-2 border border-slate-200 rounded-xl font-bold text-xs flex items-center gap-2 cursor-pointer hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed text-slate-900"
                        >
                            <FaChevronLeft className="w-3 h-3" />
                            <span>Geri</span>
                        </button>
                        
                        <button
                            onClick={nextSlide}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
                        >
                            <span>{currentSlide === totalSlides - 1 ? 'Yenidən Başla' : 'İrəli'}</span>
                            <FaChevronRight className="w-3 h-3" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-grow max-w-[500px] mx-10 flex flex-col gap-1.5">
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden relative">
                            <div
                                className="h-full bg-blue-600 rounded-full transition-all duration-350"
                                style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                            />
                        </div>
                        <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            <span>Slayd {currentSlide + 1} / {totalSlides}</span>
                            <div className="flex items-center gap-1 opacity-70">
                                <span>İdarə:</span>
                                <kbd className="bg-slate-200 border border-slate-300 px-1 rounded-sm text-[9px] font-mono">◀</kbd>
                                <kbd className="bg-slate-200 border border-slate-300 px-1 rounded-sm text-[9px] font-mono">▶</kbd>
                                <kbd className="bg-slate-200 border border-slate-300 px-2.5 rounded-sm text-[9px] font-mono">Space</kbd>
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                        NeymanTech © 2026
                    </div>
                </footer>

                {/* Side Navigation Drawer */}
                <div className={`fixed top-0 bottom-0 left-0 w-[320px] z-100 flex flex-col border-r border-slate-200 shadow-2xl transition-all duration-400 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} bg-slate-50 text-slate-700`}>
                    <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                        <h3 className="font-extrabold text-base text-blue-600 tracking-tight uppercase tracking-wider">
                            Slaydların Siyahısı
                        </h3>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-red-500 transition-colors cursor-pointer"
                        >
                            <FaXmark className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto p-4">
                        <ul className="space-y-1.5 text-xs text-left">
                            {slidesMeta.map((slide, idx) => (
                                <li key={idx}>
                                    <button
                                        onClick={() => {
                                            goToSlide(idx);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`w-full p-2.5 rounded-xl flex items-center gap-3 transition-colors cursor-pointer ${currentSlide === idx
                                            ? 'bg-blue-600 text-white font-extrabold'
                                            : 'hover:bg-slate-100 hover:text-slate-900'
                                            }`}
                                    >
                                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${currentSlide === idx ? 'bg-slate-950 text-blue-400' : 'bg-slate-200'}`}>
                                            {idx + 1}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-left leading-tight text-[11px]">{slide.title}</span>
                                            <span className={`text-[9px] uppercase font-semibold ${currentSlide === idx ? 'text-blue-200' : 'text-slate-400'}`}>{slide.cat}</span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
