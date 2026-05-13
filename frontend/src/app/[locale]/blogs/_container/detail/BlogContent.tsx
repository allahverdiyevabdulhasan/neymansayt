// components/blog/BlogContent.tsx

import {BlogShareButtons} from "@/app/[locale]/blogs/_container/detail/atoms/BlogShareButtons";

interface BlogContentProps {
    content: string;
    title: string;
}

export const BlogContent = ({content, title}: BlogContentProps) => {
    return (
        <section className="w-full bg-white py-8">
            <div className="container">
                <article>
                    <div
                        className="prose prose-lg prose-slate max-w-none
                prose-headings:text-slate-900
                prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-slate-600 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600
                prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6
                prose-blockquote:rounded-r-xl prose-blockquote:my-8
                prose-blockquote:not-italic prose-blockquote:text-slate-700
                prose-img:rounded-2xl prose-img:my-8
                prose-figure:my-8
                prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-slate-500 prose-figcaption:mt-2"
                        dangerouslySetInnerHTML={{__html: content}}
                    />
                </article>
            </div>
        </section>
    );
};