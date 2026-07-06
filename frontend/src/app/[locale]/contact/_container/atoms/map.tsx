"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Script from "next/script";

interface MapProps {
    lat: string;
    lng: string;
    adress: string
}

declare global {
    interface Window {
        ymaps: any;
    }
}

export default function MyMap({ lat, adress, lng }: MapProps) {
    const t = useTranslations();
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [shouldLoadScript, setShouldLoadScript] = useState(false);

    // ✅ Intersection Observer - görünəndə script yüklə
    useEffect(() => {
        const currentRef = mapRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadScript(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: "100px",
            },
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        }
    }, []);

    // ✅ Map initialize
    useEffect(() => {
        if (!isScriptLoaded || !shouldLoadScript || !mapRef.current) return;

        const initMap = () => {
            if (!window.ymaps) return;

            window.ymaps.ready(() => {
                const numericLat = Number(lat) || 40.417211;
                const numericLng = Number(lng) || 49.9349841;

                if (mapInstanceRef.current) {
                    mapInstanceRef.current.setCenter([numericLat, numericLng]);
                    return;
                }

                const map = new window.ymaps.Map(mapRef.current, {
                    center: [numericLat, numericLng],
                    zoom: 13,
                    controls: ["zoomControl", "fullscreenControl"],
                });

                const placemark = new window.ymaps.Placemark(
                    [numericLat, numericLng],
                    {
                        hintContent: 'Ofisimiz',
                        balloonContent: adress,
                    },
                    {
                        preset: "islands#blueDotIcon",
                        iconColor: "#00A8E8",
                    },
                );

                map.geoObjects.add(placemark);
                mapInstanceRef.current = map;
            });
        };

        initMap();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.destroy();
                mapInstanceRef.current = null;
            }
        };
    }, [isScriptLoaded, shouldLoadScript, lat, lng, t]);

    return (
        <>
            <Script
                src="https://api-maps.yandex.ru/2.1/?lang=az_AZ"
                strategy="lazyOnload"
                onLoad={() => setIsScriptLoaded(true)}
                onError={(e) => console.error("Yandex Maps yüklənmədi:", e)}
            />

            <div
                className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-blue-900/10 border border-slate-200">
                <div ref={mapRef} className="w-full h-full min-h-[400px]">
                    {/* Loading State */}
                    {!isScriptLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-10">
                            <div className="flex flex-col items-center gap-3">
                                <div
                                    className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
                                <p className="text-sm text-gray-700 font-medium">Xəritə yüklənir...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}