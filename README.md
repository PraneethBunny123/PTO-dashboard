This App uses [Next.js](https://nextjs.org) App Router, TailwindCSS, ShadCn UI

## Getting Started

Install & Run:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Navigate to /dashboard route to view the PTO Dashboard.

## Approach
Components are small and single-purpose (TimerTracking, TimesheetTable, PtoSection, PtoDialog). State is kept local and the timer uses useState + useRef interval, and the PTO form uses a single ptoData object with a generic handleChange keyed off e.target.id. Shared types and mock data live in lib/ so they're easy to replace with real API calls. Non-dashboard nav routes (/reports, /team,) are static UI pages.

## Tradeoffs
Mock data — PTO balance and timesheet entries are hardcoded for simplicity. 
Local state — Simple and using refs, but if the timer needed to persist across navigation a shared store (Zustand / Context) would be needed.
No form validation — The PTO form uses native browser attributes only for simplicity. A production version would use React Hook Form + Zod and keep the dialog open on errors.
