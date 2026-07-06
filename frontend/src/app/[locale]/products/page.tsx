import PageHero from "@/ui/NavigationBar";
import React from "react";
import Link from "next/link";
import { FaGraduationCap, FaQrcode } from "react-icons/fa6";

const products = [
    {
        id: "educrm",
        title: "EDU CRM",
        description: "Tədris mərkəzləri, kurslar və məktəblər üçün tələbə, müəllim və maliyyə idarəetmə sistemi. Avtomatlaşdırılmış davamiyyət və hesabat modulları ilə.",
        icon: <FaGraduationCap size={40} />,
        color: "indigo",
        href: "/educrm"
    },
    {
        id: "qrmenu",
        title: "QR Menu & Sifariş Sistemi",
        description: "Restoran və kafelər üçün rəqəmsal menyu, masadan sifariş və ödəniş inteqrasiyası. Müştəri məmnuniyyətini və xidmət sürətini artırın.",
        icon: <FaQrcode size={40} />,
        color: "emerald",
        href: "/qrmenu"
    }
];

export default function ProductsPage({ params }: { params: { locale: string } }) {
    const locale = params.locale;

    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Məhsullarımız"
                subtitle="Biznesinizin idarəedilməsini asanlaşdıran hazır rəqəmsal ekosistemlər"
                breadcrumbs={[{ label: "Məhsullar" }]}
                background="gradient"
                align="center"
            />
            
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {products.map((product) => (
                            <Link 
                                href={`/${locale}${product.href}`} 
                                key={product.id}
                                className="group relative block bg-white rounded-[2.5rem] p-10 lg:p-12 border border-slate-100 hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden hover:-translate-y-2"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-50 transition-colors duration-500 pointer-events-none" />
                                
                                <div className="relative z-10">
                                    <div className={`w-24 h-24 rounded-3xl flex items-center justify-center text-${product.color}-600 bg-${product.color}-50 mb-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                                        {product.icon}
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                                        {product.description}
                                    </p>
                                    <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:shadow-lg w-full sm:w-auto">
                                        Məhsulu İncələ
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
