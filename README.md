# Next.js SSR 项目

一个完整的 Next.js 14 服务端渲染(SSR)示例项目，集成 SQLite 数据库。

## 🚀 技术栈

- **Next.js 14** - React 框架，支持 SSR、SSG 和 ISR
- **TypeScript** - 类型安全的 JavaScript 超集
- **Tailwind CSS** - 实用优先的 CSS 框架
- **SQLite** - 轻量级数据库
- **Drizzle ORM** - 类型安全的 ORM
- **Bun** - 快速的 JavaScript 运行时

## 📦 项目结构

```
next-ssr/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── posts/             # 文章相关页面
│   │   ├── page.tsx       # 文章列表（SSR）
│   │   └── [id]/          # 文章详情（动态路由 + SSR）
│   └── about/             # 关于页面
├── lib/
│   └── db/                # 数据库相关
│       ├── schema.ts      # 数据库模型定义
│       ├── index.ts       # 数据库连接
│       ├── queries.ts     # 查询函数
│       └── seed.ts        # 数据库初始化脚本
├── db/
│   └── sqlite.db          # SQLite 数据库文件
├── drizzle.config.ts      # Drizzle 配置
├── next.config.js         # Next.js 配置
├── tailwind.config.ts     # Tailwind 配置
└── package.json
```

## 🛠️ 安装和运行

### 1. 安装依赖

```bash
bun install
```

### 2. 初始化数据库

```bash
# 创建数据库表结构
bun run db:push

# 插入示例数据
bun run db:seed
```

### 3. 启动开发服务器

```bash
bun run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 4. 构建生产版本

```bash
bun run build
bun run start
```

## ✨ 核心功能

### 服务端渲染 (SSR)

- ✅ 所有页面在服务端预渲染
- ✅ 首屏即可见完整内容
- ✅ SEO 友好
- ✅ 更快的首屏加载速度

### 数据库集成

- ✅ SQLite 轻量级数据库
- ✅ Drizzle ORM 类型安全
- ✅ 完整的 CRUD 操作示例
- ✅ 数据库迁移支持

### 页面示例

1. **首页** (`/`) - 项目介绍和功能展示
2. **文章列表** (`/posts`) - 从数据库获取并 SSR 渲染
3. **文章详情** (`/posts/[id]`) - 动态路由 + SSR
4. **关于页面** (`/about`) - 项目技术栈介绍

## 🎯 验证 SSR 效果

### 方法 1: 查看页面源代码

1. 访问任意页面
2. 右键点击 → "查看页面源代码"
3. 你会看到完整的 HTML 内容已经包含在源码中

### 方法 2: 禁用 JavaScript

1. 打开浏览器开发者工具
2. 禁用 JavaScript
3. 刷新页面
4. 内容依然可见（证明是服务端渲染）

### 方法 3: 网络面板

1. 打开开发者工具 → Network 标签
2. 刷新页面
3. 查看首个 HTML 请求，内容已经包含完整的页面数据

## 📝 可用命令

```bash
# 开发
bun run dev          # 启动开发服务器

# 构建
bun run build        # 构建生产版本
bun run start        # 启动生产服务器

# 数据库
bun run db:push      # 推送数据库 schema 变更
bun run db:studio    # 打开 Drizzle Studio（数据库管理界面）
bun run db:seed      # 初始化示例数据

# 代码质量
bun run lint         # 运行 ESLint
```

## 🎓 学习要点

通过这个项目，你可以学习：

1. **Next.js 14 App Router** - 新一代路由系统
2. **服务端渲染** - 理解 SSR 的原理和优势
3. **动态路由** - 实现 SEO 友好的 URL
4. **数据库集成** - 在 Next.js 中使用 ORM
5. **TypeScript** - 类型安全的开发体验
6. **现代化 UI** - Tailwind CSS 最佳实践

## 🔧 技术细节

### SSR 数据获取

```typescript
// 服务端组件自动支持 async/await
export default async function PostsPage() {
  const posts = await getAllPosts(); // 直接在服务端获取数据
  return <div>{/* 渲染内容 */}</div>;
}
```

### 数据库查询

```typescript
// 使用 Drizzle ORM 进行类型安全的查询
export async function getAllPosts() {
  return await db.select().from(posts).orderBy(desc(posts.createdAt));
}
```

## 📚 参考资料

- [Next.js 官方文档](https://nextjs.org/docs)
- [Drizzle ORM 文档](https://orm.drizzle.team/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Bun 官方文档](https://bun.sh/docs)

## 📄 许可证

MIT License

---

**祝你学习愉快！** 🎉
