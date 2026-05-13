'use client';
import { FaLink, FaCheck } from 'react-icons/fa6';
import { useState } from 'react';
import {FaShareAlt} from "react-icons/fa";
interface BlogShareButtonsProps {
    title: string;
    text?: string;
    showLabel?: boolean;
}
export const BlogShareButtons = ({ title, text, showLabel = true }: BlogShareButtonsProps) => {
    const [copied, setCopied] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    text: text || title,
                    url: shareUrl,
                });
                console.log('Uğurla paylaşıldı');
            } catch (err) {
                console.error('Paylaşım zamanı xəta:', err);
            }
        } else {
            // Əgər brauzer dəstəkləmirsə, alternativ olaraq linki kopyalayırıq
            copyToClipboard();
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Kopyalama xətası:', err);
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-3">
            {showLabel && (
                <span className="text-sm font-medium mr-2 text-slate-500">Paylaş:</span>
            )}
            <button
                onClick={handleNativeShare}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:text-[#00A8E8]"
                title="Paylaş"
            >
                <FaShareAlt className="w-4 h-4" />
                <span className="text-sm font-medium">Paylaş</span>
            </button>

            {/* Alternativ: Linki Kopyala Butonu */}
            <button
                onClick={copyToClipboard}
                className={`flex  cursor-pointer items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    copied
                        ? 'bg-green-50 text-green-600 border-green-200'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
                title="Linki kopyala"
            >
                {copied ? (
                    <>
                        <FaCheck className="w-4 h-4" />
                        <span className="text-sm font-medium">Kopyalandı</span>
                    </>
                ) : (
                    <>
                        <FaLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Linki kopyala</span>
                    </>
                )}
            </button>
        </div>
    );
};