import { createBrowserClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export function supabaseUser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}

export function supabaseUserClientSide() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}

export function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Backwards-compatible named export used across the app.
// Returns a client configured for public (client-side) usage.
export function createClient(url?: string, key?: string) {
  return createSupabaseClient(
    url ?? process.env.NEXT_PUBLIC_SUPABASE_URL!,
    key ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}