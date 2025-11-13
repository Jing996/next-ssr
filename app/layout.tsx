import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Next.js SSR 项目",
    description: "基于 Next.js 14 的服务端渲染项目，集成 SQLite 数据库",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
            <body className="antialiased relative">
                {/* 装饰性光晕元素 */}
                <div className="decorative-element top-20 left-10 w-64 h-64 rotate-scale"></div>
                <div className="decorative-element top-40 right-20 w-96 h-96 rotate-scale" style={{ animationDelay: '5s' }}></div>
                <div className="decorative-element bottom-20 left-1/3 w-80 h-80 rotate-scale" style={{ animationDelay: '10s' }}></div>

                <header className="glass-effect text-white shadow-lg gradient-overlay">
                    <div className="container mx-auto px-4 py-6">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Next.js SSR 博客
                        </h1>
                        <nav className="mt-4 space-x-4">
                            <a href="/" className="hover:underline">
                                首页
                            </a>
                            <a href="/posts" className="hover:underline">
                                文章列表
                            </a>
                            <a href="/about" className="hover:underline">
                                关于
                            </a>
                        </nav>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8 relative">
                    {/* 主内容区域的装饰性渐变 */}
                    <div className="absolute inset-0 gradient-overlay pointer-events-none"></div>
                    <div className="relative z-10">
                        {children}
                    </div>
                </main>

                <footer className="glass-effect text-white mt-12 gradient-overlay">
                    <div className="container mx-auto px-4 py-6 text-center">
                        <p>© 2024 Next.js SSR 项目 - 服务端渲染示例</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
