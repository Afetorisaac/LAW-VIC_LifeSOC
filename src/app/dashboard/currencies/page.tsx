"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { HolisticReportDownload } from "@/components/reports/HolisticReport";

const data = [
  { currency: "Financial", value: 80, full: 100 },
  { currency: "Time", value: 65, full: 100 },
  { currency: "Attention", value: 45, full: 100 },
  { currency: "Trust", value: 90, full: 100 },
  { currency: "Relationship", value: 75, full: 100 },
  { currency: "Knowledge", value: 55, full: 100 },
  { currency: "Health", value: 70, full: 100 },
  { currency: "Character", value: 95, full: 100 },
];

const weeklyTrend = [
  { name: "Mon", score: 65 },
  { name: "Tue", score: 72 },
  { name: "Wed", score: 68 },
  { name: "Thu", score: 85 },
  { name: "Fri", score: 80 },
  { name: "Sat", score: 90 },
  { name: "Sun", score: 95 },
];

export default function CurrenciesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">8 Currencies Analysis</h1>
          <p className="text-slate-500">In-depth look at your holistic life balance.</p>
        </div>
        <HolisticReportDownload data={data} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Holistic Profile</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="currency" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name="Current State"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Holistic Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <Card key={item.currency}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{item.currency}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}/100</div>
              <p className="text-xs text-slate-500 mt-1">
                {item.value > 80 ? "Excellent balance" : item.value > 50 ? "Healthy status" : "Needs attention"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
