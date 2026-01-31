"use client";

import { Sidebar } from "@/components/Sidebar";
import { MetricCard } from "@/components/MetricCard";
import { EnergyFlow } from "@/components/EnergyFlow";
import { ProductionChart } from "@/components/ProductionChart";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Dashboard() {
  return (
    <div className="h-full w-full flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6 p-8 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-primary text-[28px] font-bold text-[var(--foreground)]">
              Energy Dashboard
            </h1>
            <p className="font-secondary text-sm text-[var(--muted-foreground)]">
              Real-time monitoring of your home energy system
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-primary text-sm text-[var(--muted-foreground)]">
              Jan 30, 2026 • 2:45 PM
            </span>
            <button className="h-10 px-4 font-primary text-sm font-medium bg-[var(--card)] border border-[var(--border)] rounded-full shadow-sm hover:bg-[var(--sidebar)] transition-colors">
              Refresh
            </button>
            <ThemeToggle />
          </div>
        </header>

        {/* Metrics Row */}
        <div className="flex gap-4">
          <MetricCard
            icon={
              <span
                className="material-symbols text-[24px]"
                style={{ color: "var(--primary)" }}
              >
                wb_sunny
              </span>
            }
            iconBg="var(--solar-bg)"
            label="Solar Production"
            value="4.2 kW"
            trend={{
              direction: "up",
              text: "+12% from yesterday",
              positive: true,
            }}
          />
          <MetricCard
            icon={
              <span
                className="material-symbols text-[24px]"
                style={{ color: "var(--success)" }}
              >
                battery_charging_full
              </span>
            }
            iconBg="var(--battery-bg)"
            label="Battery Level"
            value="87%"
            progress={{
              value: 87,
              color: "var(--success)",
            }}
          />
          <MetricCard
            icon={
              <span
                className="material-symbols text-[24px]"
                style={{ color: "var(--info)" }}
              >
                home
              </span>
            }
            iconBg="var(--home-bg)"
            label="Home Consumption"
            value="2.8 kW"
            trend={{
              direction: "down",
              text: "-8% from yesterday",
              positive: true,
            }}
          />
          <MetricCard
            icon={
              <span
                className="material-symbols text-[24px]"
                style={{ color: "var(--warning)" }}
              >
                bolt
              </span>
            }
            iconBg="var(--grid-bg)"
            label="Grid Status"
            value="Exporting"
            status={{
              color: "var(--success)",
              text: "1.4 kW to grid",
            }}
          />
        </div>

        {/* Bottom Row */}
        <div className="flex-1 flex gap-4 min-h-0">
          <EnergyFlow />
          <ProductionChart />
        </div>
      </main>
    </div>
  );
}
