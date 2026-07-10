import { Client, Databases, ID, Query } from "appwrite";

/**
 * Appwrite — ixtiyoriy zaxira (faqat .env bo'lsa).
 * Asosiy production backend: Neon + /api/leads
 */
const endpoint = (import.meta.env.VITE_APPWRITE_ENDPOINT as string | undefined)?.trim();
const projectId = (import.meta.env.VITE_APPWRITE_PROJECT as string | undefined)?.trim();

export const APPWRITE_DB = (import.meta.env.VITE_APPWRITE_DB as string | undefined)?.trim();
export const APPWRITE_LEADS = (import.meta.env.VITE_APPWRITE_COLLECTION as string | undefined)?.trim();

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
