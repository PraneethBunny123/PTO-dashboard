import PtoSection from "@/components/PtoSection";
import TimesheetTable from "@/components/TimeSheet";
import TimeTracking from "@/components/TimeTracking";

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <h1 className="text-xl font-semibold">Good morning, User</h1>
        <p className="mt-1 text-sm">Wednesday, March 18</p>
      </div>

      <div className="space-y-6">
        <TimeTracking />
        <TimesheetTable />
        <PtoSection />
      </div>
    </main>
  );
}
