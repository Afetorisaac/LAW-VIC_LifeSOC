import { WeeklyView } from "@/components/timetable/WeeklyView";

export default function TimetablePage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Timetable</h1>
          <p className="text-slate-500">Manage your weekly schedule and track time spent on activities.</p>
        </div>
      </div>
      <WeeklyView />
    </div>
  );
}
