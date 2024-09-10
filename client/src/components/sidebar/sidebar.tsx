"use client";

import { Button } from "@/components/ui/button";
import { ResizablePanel } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NavProps } from "@/types";
import {
  Inbox,
  Rows2,
  Settings2,
  SquareGanttChart,
  User,
  Users,
} from "lucide-react";
import * as React from "react";

const Nav = ({ isCollapsed, links }: NavProps) => {
  return (
    <div className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => (
          <Button
            key={index}
            variant={link.variant}
            className={cn(
              "w-full justify-start",
              isCollapsed && "h-9 w-9 justify-center p-0",
            )}
          >
            <link.icon className="h-4 w-4" />
            {!isCollapsed && (
              <>
                <span className="ml-2">{link.title}</span>
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" && "text-background",
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </>
            )}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <ResizablePanel
      defaultSize={20}
      collapsible={true}
      minSize={15}
      maxSize={30}
      onCollapse={() => setIsCollapsed(true)}
      onExpand={() => setIsCollapsed(false)}
      className={cn(
        "flex flex-col",
        isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out",
      )}
    >
      <div
        className={cn(
          "mx-4 flex h-[52px] items-center",
          isCollapsed ? "h-[52px]" : "px-2",
        )}
      >
        <Rows2 className="h-6 w-6" />
        {!isCollapsed && (
          <span className="ml-2 text-lg font-semibold">Taskline</span>
        )}
      </div>
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Timeline",
            label: "",
            icon: SquareGanttChart,
            variant: "ghost",
          },
          {
            title: "Users",
            label: "30",
            icon: User,
            variant: "ghost",
          },
          {
            title: "Teams",
            label: "8",
            icon: Users,
            variant: "ghost",
          },
          {
            title: "Settings",
            label: "",
            icon: Settings2,
            variant: "ghost",
          },
        ]}
      />
    </ResizablePanel>
  );
}
