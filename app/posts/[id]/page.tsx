import { getPostById } from "@/lib/db/queries";
import { notFound } from "next/navigation";

export default async function PostDetailPage({
    params,
}: {
    params: { id: string };
}) {
    const post = await getPostById(parseInt(params.id));

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                    {post.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">👤</span>
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">📅</span>
                        <span>
                            {new Date(post.createdAt).toLocaleDateString(
                                "zh-CN",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </span>
                    </div>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {post.content}
                    </p>
                </div>
            </article>

            <div className="mt-8 flex gap-4">
                <a
                    href="/posts"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    ← 返回列表
                </a>
                <a
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    回到首页
                </a>
            </div>

            <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    🎯 动态路由 + SSR
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                    这个页面使用了 Next.js 的动态路由功能
                    ([id])，并在服务端获取数据渲染。每个文章都有独立的
                    URL，有利于 SEO 和分享。
                </p>
            </div>
        </div>
    );
}
