import { EduFeatures } from "@/app/[locale]/crm/_container/EduFeatures";
import { EduHero } from "@/app/[locale]/crm/_container/EduHero";
import { EduBenefits } from "@/app/[locale]/crm/_container/EduBenefits";
import { EduPricing } from "@/app/[locale]/crm/_container/EduPricing";
import { EduCTA } from "@/app/[locale]/crm/_container/EduCTA";
import PageHero from "@/ui/NavigationBar";
import { fetchData } from "@/lib/api";

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: { locale: string } }) {
    const { locale } = await params;

    const features = await fetchData('crm/features') || [];
    const benefits = await fetchData('crm/benefits') || [];
    const plans = await fetchData('crm/pricing') || [];
    const statsData = await fetchData('crm/stats');

    // Assume the first stat corresponds to the CRM benefit stats natively.
    const stats = statsData && statsData.length > 0 ? statsData[0] : null;

    return (
        <>
            <PageHero
                title="EduCRM"
                subtitle="Təhsil Müəssisələri üçün Ağıllı CRM"
                breadcrumbs={[{ label: "EduCRM" }]}
                background="white"
                align="left"
            />
            <EduHero
                title="Təhsil Müəssisələri üçün "
                highlight="Ağıllı CRM"
                description="Məktəblər, kurslar və təhsil mərkəzləri üçün hazırlanmış tam funksional idarəetmə sistemi."
                primaryCta={{ label: "Sistemə Daxil Ol", href: "#login" }}
                secondaryCta={{ label: "Demo İstə", href: "#demo" }}
                locale={locale}
                stats={stats}
            />
            <EduFeatures features={features} locale={locale} />
            <EduBenefits benefits={benefits} locale={locale} stats={stats} />
            <EduPricing plans={plans} locale={locale} />
            <EduCTA />
        </>
    );
}

