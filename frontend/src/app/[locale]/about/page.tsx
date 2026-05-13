import PageHero from "@/ui/NavigationBar";
import AboutHero from "./_component/Hero";
import AdvantagesSection from "./_component/AdvantagesSection";
import StrategicGoals from "./_component/StrategicGoals";
import FAQSection from "./_component/FAQSection";
import ContactCTA from "@/ui/ContactCTA";
import PartnersSection from "../(home)/_components/PartnersSection";
import { fetchData, getTranslated } from "@/lib/api";

export default async function AboutPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const contentData = await fetchData('about/content');
  const advantagesData = await fetchData('about/advantages');
  const statsData = await fetchData('about/stats');
  const faqData = await fetchData('about/faqs'); // If needed
  const partnersData = await fetchData('home/partners');

  const content = contentData && contentData.length > 0 ? contentData[0] : null;

  const partners = partnersData ? partnersData.map((p: any) => ({
    id: p.id,
    name: getTranslated(p, 'name', locale),
    industry: getTranslated(p, 'industry', locale),
    description: getTranslated(p, 'description', locale),
    logo: p.logo,
    website: p.website,
    since: p.since_year
  })) : [];

  const pageHeroTitle = getTranslated(content, 'hero_title', locale) || "Haqqımızda";
  const pageHeroSubtitle = getTranslated(content, 'hero_description', locale) || "Neyman Enterprise Technologies olaraq, bizneslərin rəqəmsal transformasiyasında tərəfdaşınızıq.";

  return (
    <>
      <PageHero
        title={pageHeroTitle}
        subtitle={pageHeroSubtitle}
        breadcrumbs={[{ label: pageHeroTitle }]}
        background="white"
        align="left"
      />
      <AboutHero content={content} locale={locale} />
      <StrategicGoals stats={statsData} content={content} locale={locale} />
      <AdvantagesSection advantages={advantagesData} locale={locale} />
      <FAQSection faqs={faqData} locale={locale} />
      <PartnersSection partners={partners} locale={locale} />
      <ContactCTA />
    </>
  );
}
