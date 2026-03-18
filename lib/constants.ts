import { TimesheetEntry } from "./types";

export const NAV_LINKS = ["Dashboard", "Reports", "Team"];

export const timesheetEntries: TimesheetEntry[] = [
  { id: 1, date: "Mon, Mar 17", hours: 8.0, project: "Project Alpha", status: "Approved" },
  { id: 2, date: "Tue, Mar 11", hours: 7.5, project: "Project Beta", status: "Approved" },
  { id: 3, date: "Wed, Mar 12", hours: 8.5, project: "Project Alpha", status: "Pending" },
  { id: 4, date: "Thu, Mar 13", hours: 6.0, project: "Internal", status: "Pending" },
  { id: 5, date: "Fri, Mar 14", hours: 7.0, project: "Project Beta", status: "Approved" },
  { id: 6, date: "Mon, Mar 10", hours: 5.5, project: "Internal", status: "Rejected" },
];