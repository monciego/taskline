"use client";

import * as React from "react";
import {
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "@/components/sidebar/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardProps): JSX.Element => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          <Sidebar />
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80} className="flex flex-col">
            <div className="flex h-[52px] items-center justify-between px-4 py-2">
              <div></div>
              <ModeToggle />
            </div>
            <Separator />
            <div className="flex-1 overflow-auto p-4">{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TooltipProvider>
  );
};

export default DashboardLayout;
