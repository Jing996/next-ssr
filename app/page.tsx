export default function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                    欢迎来到 Next.js SSR 项目
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                        这是一个完整的服务端渲染(SSR)项目示例，展示了 Next.js 14
                        的强大功能。
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">
                        ✨ 项目特色
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>
                            ⚡️ <strong>服务端渲染(SSR)</strong>：首屏即可见完整内容
                        </li>
                        <li>
                            🗄️ <strong>SQLite 数据库</strong>：轻量级本地数据存储
                        </li>
                        <li>
                            🔒 <strong>类型安全</strong>：TypeScript + Drizzle ORM
                        </li>
                        <li>
                            🎨 <strong>现代UI</strong>：Tailwind CSS 响应式设计
                        </li>
                        <li>
                            🚀 <strong>极速开发</strong>：Bun 运行时快速启动
                        </li>
                    </ul>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">
                        🎯 SSR 的优势
                    </h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li>
                                📊 <strong>SEO 友好</strong>
                                ：搜索引擎可以直接抓取完整的HTML内容
                            </li>
                            <li>
                                ⚡️ <strong>更快的首屏加载</strong>
                                ：用户立即看到内容，无需等待JavaScript加载
                            </li>
                            <li>
                                🌐 <strong>更好的性能</strong>
                                ：减少客户端计算，降低设备要求
                            </li>
                            <li>
                                📱 <strong>提升用户体验</strong>
                                ：即使在网络较慢的环境下也能快速显示
                            </li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white">
                        🚀 快速开始
                    </h3>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
                        <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                            <li>
                                1. 访问{" "}
                                <a
                                    href="/posts"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                                >
                                    文章列表页
                                </a>{" "}
                                查看从数据库获取的SSR内容
                            </li>
                            <li>
                                2. 点击任意文章标题查看详情（动态路由 + SSR）
                            </li>
                            <li>3. 右键查看页面源代码，验证SSR效果</li>
                            <li>4. 尝试禁用JavaScript，页面内容依然可见</li>
                        </ol>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="/posts"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            查看文章列表 →
                        </a>
                        <a
                            href="/about"
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            了解更多
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
