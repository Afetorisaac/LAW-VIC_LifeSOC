"use client";

import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const habits = [
  { id: 1, name: "Morning Meditation", streak: 5, completed: true, currency: "Energy/Health" },
  { id: 2, name: "Read 20 Pages", streak: 12, completed: false, currency: "Knowledge/Skill" },
  { id: 3, name: "Write in Journal", streak: 3, completed: true, currency: "Character/Integrity" },
  { id: 4, name: "Check Finances", streak: 1, completed: false, currency: "Financial" },
];

export function HabitList() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Daily Habits</CardTitle>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" /> New Habit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {habits.map((habit) => (
            <div 
              key={habit.id} 
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <Button 
                  variant={habit.completed ? "default" : "outline"} 
                  size="icon" 
                  className={habit.completed ? "bg-green-500 hover:bg-green-600" : ""}
                >
                  <Check className="h-4 w-4" />
                </Button>
                <div>
                  <h4 className="font-semibold">{habit.name}</h4>
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-blue-600 font-medium">
                      {habit.currency}
                    </span>
                    <span>• {habit.streak} day streak</span>
                  </div>
                </div>
              </div>
              <div className="flex -space-x-1">
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-6 h-6 rounded-full border-2 border-white ${
                      i < habit.streak % 7 ? "bg-green-400" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
