"use client";
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("./atoms/map"), {
    ssr: false,
    loading: () => (
        <div className="bg-gray-50 w-full h-full rounded-2xl font-inter font-semibold"></div>
    ),
});

export default function MyMapContainer({
                                           lat,
                                           lng, adress
                                       }: {
    lat: string;
    lng: string;
    adress: string;
}) {
    return <MyMap lat={lat} lng={lng} adress={adress}/>;
}