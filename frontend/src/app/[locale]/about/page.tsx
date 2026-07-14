import PageHero from "@/ui/NavigationBar";
import AboutHero from "./_component/Hero";
import AdvantagesSection from "./_component/AdvantagesSection";
import StrategicGoals from "./_component/StrategicGoals";
import FAQSection from "./_component/FAQSection";
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

  const pageHeroTitle = locale === 'az' ? 'Haqqımızda' 
                      : locale === 'ru' ? 'О нас' 
                      : locale === 'tr' ? 'Hakkımızda' 
                      : 'About Us';

  const pageHeroSubtitle = locale === 'az' ? 'Neyman Enterprise Technologies olaraq, bizneslərin rəqəmsal transformasiyasında tərəfdaşınızıq.'
                         : locale === 'ru' ? 'Как Neyman Enterprise Technologies, мы являемся вашим партнером в цифровой трансформации бизнеса.'
                         : locale === 'tr' ? 'Neyman Enterprise Technologies olarak, işletmelerin dijital dönüşümünde ortağınızız.'
                         : 'As Neyman Enterprise Technologies, we are your partner in digital business transformation.';

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
    </>
  );
}
