import { db } from "./index";
import { posts } from "./schema";

async function seed() {
    console.log("🌱 开始初始化数据库...");

    // 清空现有数据
    await db.delete(posts);

    // 插入示例数据
    const samplePosts = [
        {
            title: "欢迎使用 Next.js SSR",
            content:
                "这是一个完整的 Next.js 服务端渲染项目示例。本文章通过 SSR 从 SQLite 数据库获取并渲染到页面中。",
            author: "系统管理员",
        },
        {
            title: "什么是服务端渲染(SSR)?",
            content:
                "服务端渲染是指在服务器上生成完整的 HTML 页面，然后发送给客户端。这样可以提升首屏加载速度，改善 SEO，并提供更好的用户体验。",
            author: "技术博主",
        },
        {
            title: "Next.js 的优势",
            content:
                "Next.js 提供了开箱即用的 SSR 支持、文件系统路由、API 路由、图片优化等功能。它是构建现代 React 应用的最佳选择之一。",
            author: "前端工程师",
        },
        {
            title: "Drizzle ORM 使用指南",
            content:
                "Drizzle 是一个轻量级的 TypeScript ORM，提供类型安全的数据库操作。它支持多种数据库，包括 SQLite、PostgreSQL 和 MySQL。",
            author: "数据库专家",
        },
    ];

    for (const post of samplePosts) {
        await db.insert(posts).values(post);
    }

    console.log(`✅ 成功插入 ${samplePosts.length} 条文章数据`);
    console.log("🎉 数据库初始化完成!");
    process.exit(0);
}

seed().catch((error) => {
    console.error("❌ 数据库初始化失败:", error);
    process.exit(1);
});
