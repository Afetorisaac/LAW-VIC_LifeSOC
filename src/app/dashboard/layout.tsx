import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white shadow-sm border-b py-4 px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-slate-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
               {/* User profile / Logout would go here */}
               <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                 JD
               </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
