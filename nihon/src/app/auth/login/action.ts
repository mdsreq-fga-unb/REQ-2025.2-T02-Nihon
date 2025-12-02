"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();

  // Login padrão do Supabase (e-mail + senha)
  const { error } = await supabase.auth.signInWithPassword({
    email: username,
    password,
  });

  if (error) {
    redirect(`/auth/login`);
  }

  // sucesso → redirecionar
  redirect("/auth/admin/products");
}
