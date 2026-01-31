"use client";

import { ArrowRight } from "lucide-react";

interface FlowDestination {
  icon: string;
  iconColor: string;
  bgColor: string;
  label: string;
  value: string;
  valueColor: string;
  arrowColor: string;
}

const destinations: FlowDestination[] = [
  {
    icon: "battery_charging_full",
    iconColor: "var(--success)",
    bgColor: "var(--battery-bg)",
    label: "Battery",
    value: "+1.2 kW",
    valueColor: "var(--success)",
    arrowColor: "var(--success)",
  },
  {
    icon: "home",
    iconColor: "var(--info)",
    bgColor: "var(--home-bg)",
    label: "Home",
    value: "2.8 kW",
    valueColor: "var(--info)",
    arrowColor: "var(--info)",
  },
  {
    icon: "bolt",
    iconColor: "var(--warning)",
    bgColor: "var(--grid-bg)",
    label: "Grid Export",
    value: "+1.4 kW",
    valueColor: "var(--warning)",
    arrowColor: "var(--warning)",
  },
];

export function EnergyFlow() {
  return (
    <div className="flex-1 bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm overflow-hidden flex flex-col h-full transition-colors">
      {/* Header */}
      <div className="p-6">
        <h3 className="font-primary text-lg font-semibold text-[var(--foreground)]">
          Energy Flow
        </h3>
      </div>

      {/* Flow Diagram */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="flex items-center gap-10">
          {/* Solar Source */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center border-[3px]"
              style={{
                backgroundColor: "var(--solar-bg)",
                borderColor: "var(--primary)"
              }}
            >
              <span
                className="material-symbols text-[36px]"
                style={{ color: "var(--primary)" }}
              >
                wb_sunny
              </span>
            </div>
            <span className="font-primary text-sm font-semibold text-[var(--foreground)]">
              Solar
            </span>
            <span className="font-secondary text-xs text-[var(--muted-foreground)]">
              4.2 kW
            </span>
          </div>

          {/* Arrows */}
          <div className="flex flex-col items-center justify-center gap-4">
            {destinations.map((dest, i) => (
              <ArrowRight
                key={i}
                className="w-6 h-6"
                style={{ color: dest.arrowColor }}
              />
            ))}
          </div>

          {/* Destinations */}
          <div className="flex flex-col gap-6">
            {destinations.map((dest, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: dest.bgColor }}
                >
                  <span
                    className="material-symbols text-[24px]"
                    style={{ color: dest.iconColor }}
                  >
                    {dest.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-primary text-sm font-semibold text-[var(--foreground)]">
                    {dest.label}
                  </span>
                  <span
                    className="font-secondary text-xs"
                    style={{ color: dest.valueColor }}
                  >
                    {dest.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
