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
            <body className="antialiased">
                <header className="bg-blue-600 text-white shadow-lg">
                    <div className="container mx-auto px-4 py-6">
                        <h1 className="text-3xl font-bold">Next.js SSR 博客</h1>
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
                <main className="container mx-auto px-4 py-8">{children}</main>
                <footer className="bg-gray-800 text-white mt-12">
                    <div className="container mx-auto px-4 py-6 text-center">
                        <p>© 2024 Next.js SSR 项目 - 服务端渲染示例</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
