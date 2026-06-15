"use client";

import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 16 }, (_, i) => i + 7); // 7 AM to 10 PM

export function WeeklyView() {

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-2xl font-bold">Weekly Timetable</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">June 15 - June 21, 2026</span>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button className="ml-4">
            <Plus className="mr-2 h-4 w-4" /> Add Event
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-8 border rounded-lg overflow-hidden bg-white">
          {/* Time column header */}
          <div className="bg-slate-50 border-b border-r p-2 text-center text-xs font-semibold text-slate-500">
            Time
          </div>
          
          {/* Day headers */}
          {days.map((day) => (
            <div key={day} className="bg-slate-50 border-b border-r last:border-r-0 p-2 text-center text-xs font-semibold text-slate-500">
              {day}
            </div>
          ))}

          {/* Grid rows */}
          {hours.map((hour) => (
            <>
              <div key={`hour-${hour}`} className="border-b border-r p-2 text-center text-xs text-slate-400">
                {hour}:00
              </div>
              {days.map((day) => (
                <div 
                  key={`${day}-${hour}`} 
                  className="border-b border-r last:border-r-0 min-h-[60px] relative group hover:bg-slate-50 transition-colors"
                >
                  {/* Event placeholders could go here */}
                  {day === "Mon" && hour === 9 && (
                    <div className="absolute inset-x-1 top-1 bottom-1 bg-blue-100 border-l-4 border-blue-500 rounded p-1 text-[10px] leading-tight overflow-hidden z-10">
                      <div className="font-bold text-blue-700">Project Strategy</div>
                      <div className="text-blue-600">9:00 - 10:30</div>
                    </div>
                  )}
                  {day === "Wed" && hour === 14 && (
                    <div className="absolute inset-x-1 top-1 bottom-1 bg-emerald-100 border-l-4 border-emerald-500 rounded p-1 text-[10px] leading-tight overflow-hidden z-10">
                      <div className="font-bold text-emerald-700">Health: Gym Session</div>
                      <div className="text-emerald-600">14:00 - 15:30</div>
                    </div>
                  )}
                </div>
              ))}
            </>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
