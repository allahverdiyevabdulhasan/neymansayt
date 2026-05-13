const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

export async function getColorizedTitle(title: string, color: string = 'text-brand') {
    if (!title) return '';
    // Replaces <span>text</span> with colorized span
    return title.replace(/<span>(.*?)<\/span>/g, `<span class="${color}">$1</span>`);
}

export async function fetchData(endpoint: string) {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}/`, {
            cache: 'no-store', // For real-time updates in dev
        });
        if (!response.ok) {
            if (response.status === 404) return null;
            throw new Error(`Failed to fetch ${endpoint}`);
        }
        return response.json();
    } catch (error) {
        console.error(`API Error (${endpoint}):`, error);
        return null;
    }
}

// Special for translation - Django modeltranslation returns fields like title_az, title_en
// This helper picks the right one based on locale
export function getTranslated(obj: any, field: string, locale: string) {
    if (!obj) return '';
    const key = `${field}_${locale}`;
    return obj[key] || obj[field] || '';
}
