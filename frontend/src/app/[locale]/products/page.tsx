import PageHero from "@/ui/NavigationBar";
import React from "react";
import { Link } from "@/i18n/navigation";
import { FaGraduationCap, FaQrcode } from "react-icons/fa6";
import { fetchData, getTranslated } from "@/lib/api";

export default async function ProductsPage({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const products = await fetchData('products') || [];

    const title = locale === 'az' ? 'Məhsullarımız' 
                : locale === 'ru' ? 'Наши Продукты' 
                : locale === 'tr' ? 'Ürünlerimiz' 
                : 'Our Products';
                
    const subtitle = locale === 'az' ? 'Biznesinizin idarəedilməsini asanlaşdıran hazır rəqəmsal ekosistemlər'
                : locale === 'ru' ? 'Готовые цифровые экосистемы, упрощающие управление вашим бизнесом'
                : locale === 'tr' ? 'İşletmenizin yönetimini kolaylaştıran hazır dijital ekosistemler'
                : 'Ready-made digital ecosystems that simplify the management of your business';

    const breadcrumbLabel = locale === 'az' ? 'Məhsullar' 
                : locale === 'ru' ? 'Продукты' 
                : locale === 'tr' ? 'Ürünler' 
                : 'Products';

    return (
        <main className="min-h-screen bg-[#FAFAFC]">
            <PageHero
                title={title}
                subtitle={subtitle}
                breadcrumbs={[{ label: breadcrumbLabel }]}
                background="white"
                align="left"
            />
            
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/60 blur-[120px] rounded-full pointer-events-none" />

                <div className="container relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {products.map((product: any) => (
                            <Link 
                                // @ts-ignore
                                href={`/products/${product.slug}` as any} 
                                key={product.id}
                                className="group relative block bg-white rounded-[2.5rem] p-10 lg:p-12 border border-blue-50 hover:border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500 overflow-hidden hover:-translate-y-2"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100/60 transition-colors duration-500 pointer-events-none" />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-blue-600 bg-blue-50 mb-10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        {product.slug === 'educrm' ? <FaGraduationCap size={40} /> : <FaQrcode size={40} />}
                                    </div>
                                    <h3 className="text-3xl font-black text-blue-950 mb-6 group-hover:text-blue-700 transition-colors">
                                        {getTranslated(product, 'title', locale)}
                                    </h3>
                                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-lg flex-grow">
                                        {getTranslated(product, 'description', locale)}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-50 border border-slate-100 text-blue-950 font-bold rounded-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.3)] w-full sm:w-auto">
                                            {locale === 'en' ? 'View Product' : locale === 'ru' ? 'Смотреть продукт' : locale === 'tr' ? 'Ürünü İncele' : 'Məhsulu İncələ'}
                                        </div>
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
