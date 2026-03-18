"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/app/utils/utils";

export default function TimerTracking() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  function toggle() {
    if (running) {
      setRunning(false);
    } else {
      setRunning(true);
    }
  }

  function reset() {
    setElapsed(0)
    setRunning(false)
  }

  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold">Tracking Section</h3>
      <div className="flex items-center justify-between rounded-lg border bg-card p-5">
        <div>
          <p className="text-sm text-muted-foreground">Todays timer</p>
          <p className="mt-1 font-mono text-3xl font-semibold tabular-nums">
            {formatTime(elapsed)}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={toggle}
            variant={running ? "default" : "default"}
          >
            {running ? "Pause" : "Start"}
          </Button>
          <Button 
            variant="secondary" 
            onClick={reset}
            disabled={running}
          >
            Reset
          </Button>
        </div>
      </div>
    </section>
  );
}
