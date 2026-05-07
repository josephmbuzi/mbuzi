export type SupabaseAuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  email: string;
};

type SupabasePasswordResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  user: {
    email?: string;
  };
};

export const adminSessionKey = "mbuzi-supabase-admin-session";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

function getAuthEndpoint(path: string) {
  if (!supabaseUrl) {
    return null;
  }

  return `${supabaseUrl.replace(/\/$/, "")}/auth/v1/${path}`;
}

function getAuthHeaders() {
  if (!supabasePublishableKey) {
    return null;
  }

  return {
    apikey: supabasePublishableKey,
    "Content-Type": "application/json",
  };
}

export function getStoredAdminSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const storedSession = window.localStorage.getItem(adminSessionKey);

  if (!storedSession) {
    return null;
  }

  try {
    const session = JSON.parse(storedSession) as SupabaseAuthSession;

    if (!session.accessToken || session.expiresAt <= Date.now()) {
      window.localStorage.removeItem(adminSessionKey);
      return null;
    }

    return session;
  } catch {
    window.localStorage.removeItem(adminSessionKey);
    return null;
  }
}

export function storeAdminSession(session: SupabaseAuthSession) {
  window.localStorage.setItem(adminSessionKey, JSON.stringify(session));
}

export function clearAdminSession() {
  window.localStorage.removeItem(adminSessionKey);
}

export async function signInAdmin(email: string, password: string) {
  const endpoint = getAuthEndpoint("token?grant_type=password");
  const headers = getAuthHeaders();

  if (!endpoint || !headers) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid admin email or password.");
  }

  const data = (await response.json()) as SupabasePasswordResponse;
  const session: SupabaseAuthSession = {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: Date.now() + data.expires_in * 1000,
    email: data.user.email ?? email,
  };

  storeAdminSession(session);
  return session;
}
