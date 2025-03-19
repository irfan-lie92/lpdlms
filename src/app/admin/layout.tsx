import AdminSidebar from "@/components/admin-sidebar";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Check if user has admin role (you would need to implement this check based on your user roles in the database)
  const { data: userData } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  // Redirect non-admin users to dashboard
  if (!userData || userData.role !== "admin") {
    return redirect("/dashboard");
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
