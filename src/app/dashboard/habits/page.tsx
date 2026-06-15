import { HabitList } from "@/components/habits/HabitList";

export default function HabitsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Habit Tracker</h1>
        <p className="text-slate-500">Build consistency and track your progress across different life currencies.</p>
      </div>
      <HabitList />
    </div>
  );
}
