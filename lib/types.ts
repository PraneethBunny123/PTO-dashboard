import { today } from "@/app/utils/utils";

export type TimesheetStatus = "Approved" | "Pending" | "Rejected";

export interface TimesheetEntry {
  id: number;
  date: string;
  hours: number;
  project: string;
  status: TimesheetStatus;
}

export type PtoDialogProps = {
  title: string
}

export type InitialPtoData = {
  startDate: ReturnType<typeof today>;
  endDate: ReturnType<typeof today>;
  note?: string
}
