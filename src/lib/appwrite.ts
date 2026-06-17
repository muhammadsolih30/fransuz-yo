import { Client, Databases, ID, Query } from "appwrite";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT as string | undefined;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT as string | undefined;

export const APPWRITE_DB = import.meta.env.VITE_APPWRITE_DB as string | undefined;
export const APPWRITE_LEADS = import.meta.env.VITE_APPWRITE_COLLECTION as string | undefined;

/**
 * Appwrite ulanishi. .env to'ldirilmagan bo'lsa null bo'ladi va
 * ilova localStorage zaxira rejimida ishlaydi.
 */
let _databases: Databases | null = null;

if (endpoint && projectId && APPWRITE_DB && APPWRITE_LEADS) {
  const client = new Client().setEndpoint(endpoint).setProject(projectId);
  _databases = new Databases(client);
}

export const databases = _databases;
export const isAppwriteEnabled = !!_databases;
export { ID, Query };
