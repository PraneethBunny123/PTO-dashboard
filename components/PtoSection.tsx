import { PtoDialog } from "./PtoDialog";

export default function PtoSection() {

  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold">PTO Section</h3>
      <div className="flex items-center justify-between rounded-lg border bg-card p-5">
        <div>
          <p className="text-sm text-muted-foreground">PTO Balance</p>
          <p className="mt-1 text-3xl font-semibold">7 <span className="text-base font-normal text-muted-foreground">days remaining</span></p>
          <p className="mt-0.5 text-xs text-muted-foreground">10 days used this year · 17 total</p>
        </div>
        <PtoDialog title="Request Time Off"/>
      </div>
    </section>
  );
}