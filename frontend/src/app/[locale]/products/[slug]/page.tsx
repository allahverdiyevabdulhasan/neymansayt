import React from "react";
import { notFound } from "next/navigation";
import { redirect } from "@/i18n/navigation";
import { fetchData } from "@/lib/api";
import { ProductNavbar } from "./_components/ProductNavbar";
import { ProductHero } from "./_components/ProductHero";
import { ProductFeatures } from "./_components/ProductFeatures";
import { ProductBenefits } from "./_components/ProductBenefits";
import { ProductPricing } from "./_components/ProductPricing";
import { ProductCTA } from "./_components/ProductCTA";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string, locale: string } }) {
    const { slug, locale } = await params;
    const product = await fetchData(`products/${slug}`);
    
    if (!product) return {};

    const title = product.name || '';
    const description = product.hero_description || '';
    
    const keywords = [title, "Neyman", "Süni İntellekt", "Rəqəmsal Həllər", "Veb sayt yaradılması"];
    if (slug.toLowerCase().includes('qr')) keywords.push("QR Menyu", "qr menu", "rəqəmsal menyu", "Restoran sistemi");
    if (slug.toLowerCase().includes('crm') || slug.toLowerCase().includes('edu')) keywords.push("Education CRM", "Təhsil idarəetmə", "Edu CRM", "Kurs sistemi");

    return {
        title: `${title} | Neyman Technologies`,
        description: description?.substring(0, 160),
        keywords
    };
}

export default async function ProductDetailPage({ params }: { params: { slug: string, locale: string } }) {
    const { slug, locale } = await params;
    
    // Fetch product details from the API using slug
    const productData = await fetchData(`products/${slug}`);

    if (!productData) {
        notFound();
    }

    if (productData.slug && productData.slug !== slug) {
        // @ts-ignore
        redirect({ href: `/products/${productData.slug}` as any, locale });
    }

    const themeColor = productData.theme_color || 'blue';
    const fontFamily = productData.font_family || 'Inter';

    return (
        <main 
            className="min-h-screen relative"
            style={{ 
                fontFamily: `var(--font-${fontFamily.toLowerCase()}), sans-serif`
            }}
        >
            <ProductNavbar product={productData} locale={locale} />
            
            <div className="pt-20"> {/* Offset for the fixed navbar */}
                <ProductHero product={productData} locale={locale} />
                <ProductFeatures features={productData.features} themeColor={themeColor} locale={locale} />
                <ProductBenefits benefits={productData.benefits} stats={productData.stats} themeColor={themeColor} locale={locale} />
                <ProductPricing plans={productData.pricing_plans} themeColor={themeColor} locale={locale} />
                <ProductCTA product={productData} locale={locale} />
            </div>
        </main>
    );
}
