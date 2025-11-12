import { getAllPosts } from "@/lib/db/queries";

export default async function PostsPage() {
    const posts = await getAllPosts();

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                文章列表
            </h2>
            <div className="space-y-6">
                {posts.length === 0 ? (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4">
                        <p className="text-gray-700 dark:text-gray-300">
                            暂无文章。请先运行数据库初始化命令：
                            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded ml-2">
                                bun run db:seed
                            </code>
                        </p>
                    </div>
                ) : (
                    posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                        >
                            <a href={`/posts/${post.id}`}>
                                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                                    {post.title}
                                </h3>
                            </a>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                <span>👤 {post.author}</span>
                                <span>
                                    📅{" "}
                                    {new Date(post.createdAt).toLocaleDateString(
                                        "zh-CN"
                                    )}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                {post.content}
                            </p>
                            <a
                                href={`/posts/${post.id}`}
                                className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                            >
                                阅读全文 →
                            </a>
                        </article>
                    ))
                )}
            </div>

            <div className="mt-12 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    ✅ 验证 SSR 效果
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                        🔍 右键点击页面，选择"查看页面源代码"，你会看到完整的文章内容已经包含在
                        HTML 中
                    </li>
                    <li>
                        🚫 打开浏览器开发者工具，禁用
                        JavaScript，刷新页面后内容依然可见
                    </li>
                    <li>
                        ⚡️
                        这就是服务端渲染的强大之处：首屏加载快，SEO友好，用户体验好
                    </li>
                </ul>
            </div>
        </div>
    );
}
