"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Calendar, 
  CheckSquare, 
  PieChart, 
  Settings, 
  Home,
  Tag,
  Clock,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Timetable", href: "/dashboard/timetable", icon: Calendar },
  { name: "Habits", href: "/dashboard/habits", icon: CheckSquare },
  { name: "Tags", href: "/dashboard/tags", icon: Tag },
  { name: "8 Currencies", href: "/dashboard/currencies", icon: PieChart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-slate-50 border-r w-64 pt-5 pb-4 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4 mb-8">
        <span className="text-2xl font-bold text-blue-600">LifeSOC</span>
      </div>
      <nav className="mt-5 flex-1 px-2 space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive ? "text-blue-700" : "text-slate-400 group-hover:text-slate-500"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="px-4 mt-auto">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            8 Currencies Status
          </h4>
          <div className="space-y-2">
             <div className="flex items-center justify-between text-xs">
                <span className="flex items-center text-slate-600">
                  <Clock className="w-3 h-3 mr-1 text-blue-500" /> Time
                </span>
                <span className="font-bold">85%</span>
             </div>
             <div className="flex items-center justify-between text-xs">
                <span className="flex items-center text-slate-600">
                  <Zap className="w-3 h-3 mr-1 text-yellow-500" /> Energy
                </span>
                <span className="font-bold">62%</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
