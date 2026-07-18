"use client";

import { usePathname } from 'next/navigation';
import React from 'react';

export default function SEOProvider() {
    const pathname = usePathname();
    const cleanPath = pathname === '/' ? '' : pathname;
    const canonicalUrl = `https://neymantech.com${cleanPath}`;

    // Generate BreadcrumbList
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    
    const itemListElement = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://neymantech.com"
        }
    ];

    let currentPath = "";
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        // Simple formatting for breadcrumb name: replace hyphens with spaces and capitalize
        const name = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        itemListElement.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": name,
            "item": `https://neymantech.com${currentPath}`
        });
    });

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
    };

    return (
        <>
            <link rel="canonical" href={canonicalUrl} />
            {pathSegments.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}
        </>
    );
}
