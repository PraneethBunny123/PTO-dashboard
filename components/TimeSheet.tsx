import { timesheetEntries } from "@/lib/constants";
import { TimesheetStatus } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";


const statusVariant: Record<TimesheetStatus, "default" | "secondary" | "destructive"> = {
  Approved: "default",
  Pending: "secondary",
  Rejected: "destructive",
};

export default function TimesheetTable() {
  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold">Recent TimeSheet</h3> 
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Project</TableHead>
              <TableHead className="text-right">Hours</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {timesheetEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="text-sm">{entry.date}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{entry.project}</TableCell>
                <TableCell className="text-right text-sm tabular-nums">{entry.hours}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={statusVariant[entry.status]}>{entry.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}