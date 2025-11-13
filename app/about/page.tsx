export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                    关于本项目
                </h2>

                <div className="prose dark:prose-invert max-w-none">
                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                            📚 项目介绍
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            这是一个基于 Next.js 14 和 SQLite
                            的完整服务端渲染(SSR)示例项目。
                            项目展示了如何使用现代化的技术栈构建高性能、SEO
                            友好的 Web 应用。
                        </p>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                            🛠️ 技术栈
                        </h3>
                        <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">
                                    •
                                </span>
                                <div>
                                    <strong>Next.js 14</strong> - React 框架，支持
                                    SSR、SSG 和 ISR
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">
                                    •
                                </span>
                                <div>
                                    <strong>TypeScript</strong> - 类型安全的
                                    JavaScript 超集
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">
                                    •
                                </span>
                                <div>
                                    <strong>Tailwind CSS</strong> - 实用优先的 CSS
                                    框架
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">
                                    •
                                </span>
                                <div>
                                    <strong>SQLite + Drizzle ORM</strong> -
                                    轻量级数据库和类型安全的 ORM
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 dark:text-blue-400 font-bold">
                                    •
                                </span>
                                <div>
                                    <strong>Bun</strong> - 快速的 JavaScript
                                    运行时和包管理器
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                            ✨ 核心特性
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                                    🚀 服务端渲染
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    所有页面在服务端预渲染，提供极快的首屏加载速度
                                </p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                                    🗄️ 数据库集成
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    使用 SQLite 和 Drizzle ORM
                                    实现类型安全的数据操作
                                </p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                                    🎨 现代化 UI
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    基于 Tailwind CSS，支持深色模式，响应式设计
                                </p>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                                <h4 className="font-bold text-gray-800 dark:text-white mb-2">
                                    📊 SEO 优化
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    完整的 HTML 内容，搜索引擎友好
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                            📖 项目结构
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                            <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                                {`next-ssr/
├── app/                # Next.js App Router
│   ├── layout.tsx     # 根布局
│   ├── page.tsx       # 首页
│   ├── posts/         # 文章相关页面
│   └── about/         # 关于页面
├── lib/
│   └── db/            # 数据库相关
│       ├── schema.ts  # 数据库模型
│       ├── queries.ts # 查询函数
│       └── seed.ts    # 初始化数据
├── db/
│   └── sqlite.db      # SQLite 数据库
└── package.json`}
                            </pre>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                            🎯 学习目标
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            通过这个项目，你可以学习到：
                        </p>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                            <li>✓ 如何使用 Next.js 实现服务端渲染</li>
                            <li>✓ 如何集成和使用 SQLite 数据库</li>
                            <li>✓ 如何使用 Drizzle ORM 进行类型安全的数据操作</li>
                            <li>✓ 如何实现动态路由和数据获取</li>
                            <li>✓ 如何使用 Tailwind CSS 构建现代化 UI</li>
                            <li>✓ 如何优化 SEO 和性能</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                        href="/"
                        className=" hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                    >
                        ← 返回首页
                    </a>
                </div>
            </div>
        </div>
    );
}
