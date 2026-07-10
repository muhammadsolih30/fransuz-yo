import { Client, Databases, ID, Query } from "appwrite";

/**
 * Appwrite client sozlamalari (public IDs — maxfiy kalit emas).
 * Vercel'da env bo'lmasa ham production sync ishlashi uchun defaultlar bor.
 * Env berilsa, u ustunlik qiladi.
 */
const endpoint =
  (import.meta.env.VITE_APPWRITE_ENDPOINT as string | undefined)?.trim() ||
  "https://nyc.cloud.appwrite.io/v1";
const projectId =
  (import.meta.env.VITE_APPWRITE_PROJECT as string | undefined)?.trim() ||
  "6a31cd310009155066e1";

export const APPWRITE_DB =
  (import.meta.env.VITE_APPWRITE_DB as string | undefined)?.trim() ||
  "6a327bb100302400b95a";
export const APPWRITE_LEADS =
  (import.meta.env.VITE_APPWRITE_COLLECTION as string | undefined)?.trim() ||
  "6a327bb100302400b95a";

let _databases: Databases | null = null;

if (endpoint && projectId && APPWRITE_DB && APPWRITE_LEADS) {
  const client = new Client().setEndpoint(endpoint).setProject(projectId);
  _databases = new Databases(client);
}

export const databases = _databases;
export const isAppwriteEnabled = !!_databases;
export const APPWRITE_ENDPOINT = endpoint;
export const APPWRITE_PROJECT = projectId;
export { ID, Query };
