import { Presentation } from "@/ui/Presentation"; export const dynamic = 'force-dynamic'; export default async function Page({ params }: { params: { locale: string } }) { const { locale } = await params; return ( <Presentation locale={locale} /> );
}
