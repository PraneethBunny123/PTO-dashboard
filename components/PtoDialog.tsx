"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { today } from "@/app/utils/utils";
import { InitialPtoData, PtoDialogProps } from "@/lib/types";
import { toast } from "sonner";

const initalPtoData: InitialPtoData = {
  startDate: today(),
  endDate: today(),
  note: ""
}

export function PtoDialog({ title }: PtoDialogProps) {
  const [ptoData, setPtoData] = useState(initalPtoData)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {id, value} = e.target
    setPtoData((prevData) => ({...prevData, [id]: value}))
  }

  function handleReset() {
    setPtoData(initalPtoData)
  }

  function handleSubmit() {
    console.log(ptoData);
    handleReset();
    toast.success("PTO request submitted successfully!")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={ptoData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                type="date"
                value={ptoData.endDate}
                min={ptoData.startDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="note">
              Note <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id="note"
              placeholder="Add a note for your manager…"
              value={ptoData.note}
              onChange={handleChange}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={handleReset}>Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}