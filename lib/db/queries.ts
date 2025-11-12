import { db } from "./index";
import { posts, type NewPost } from "./schema";
import { eq, desc } from "drizzle-orm";

export async function getAllPosts() {
    return await db.select().from(posts).orderBy(desc(posts.createdAt));
}

export async function getPostById(id: number) {
    const result = await db.select().from(posts).where(eq(posts.id, id));
    return result[0] || null;
}

export async function createPost(data: NewPost) {
    const result = await db.insert(posts).values(data).returning();
    return result[0];
}

export async function deletePost(id: number) {
    await db.delete(posts).where(eq(posts.id, id));
}
