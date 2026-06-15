import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Zap, Wallet, Heart, BookOpen, UserCheck, Users, ShieldCheck } from "lucide-react";

const currencies = [
  { name: "Financial", icon: Wallet, color: "text-green-500", balance: "80%", description: "Stability and resources" },
  { name: "Time", icon: Clock, color: "text-blue-500", balance: "65%", description: "Efficient usage" },
  { name: "Attention", icon: Zap, color: "text-yellow-500", balance: "45%", description: "Focused efforts" },
  { name: "Trust", icon: ShieldCheck, color: "text-purple-500", balance: "90%", description: "Reliability & integrity" },
  { name: "Relationship", icon: Users, color: "text-pink-500", balance: "75%", description: "Deep connections" },
  { name: "Knowledge/Skill", icon: BookOpen, color: "text-indigo-500", balance: "55%", description: "Learning & growth" },
  { name: "Energy/Health", icon: Heart, color: "text-red-500", balance: "70%", description: "Physical & mental" },
  { name: "Character/Integrity", icon: UserCheck, color: "text-slate-700", balance: "95%", description: "Core values" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Holistic Overview</h1>
        <p className="text-slate-500">How you are spending your 8 core currencies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currencies.map((currency) => (
          <Card key={currency.name} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {currency.name}
              </CardTitle>
              <currency.icon className={`h-4 w-4 ${currency.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currency.balance}</div>
              <p className="text-xs text-slate-500 mt-1">
                {currency.description}
              </p>
              <div className="mt-4 w-full bg-slate-100 rounded-full h-1.5">
                <div 
                  className={`h-1.5 rounded-full ${currency.color.replace('text', 'bg')}`} 
                  style={{ width: currency.balance }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Completed &quot;Project Strategy&quot; session</p>
                    <p className="text-xs text-slate-500">2 hours ago • +15 Attention Currency</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    {15 + i}:00
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Scheduled Task {i}</p>
                    <p className="text-xs text-slate-500">Focus: Knowledge/Skill</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
