import { redirect } from "next/navigation";
import { loginAdmin } from "@/lib/admin-auth";

export default function AdminLogin() {
  async function action(formData: FormData) {
    "use server";
    const ok = await loginAdmin(String(formData.get("username")), String(formData.get("password")));
    if (ok) redirect("/admin/dashboard");
  }

  return <div className="container-pad py-12"><h1 className="text-3xl font-semibold">Admin Login</h1><form action={action} className="mt-6 max-w-md space-y-3"><input name="username" className="w-full rounded border p-2" placeholder="Username" /><input name="password" type="password" className="w-full rounded border p-2" placeholder="Password" /><button className="rounded bg-brand-500 px-4 py-2 text-white">Sign in</button></form></div>;
}
