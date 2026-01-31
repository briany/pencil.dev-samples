"use client";

import {
  Zap,
  Sun,
  BatteryCharging,
  House,
  Settings,
  Bell,
  ChevronDown,
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 rounded-full cursor-pointer transition-colors ${
        active
          ? "bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)]"
          : "text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)]/50"
      }`}
    >
      <span className={active ? "text-[var(--sidebar-accent-foreground)]" : "text-[var(--sidebar-foreground)]"}>
        {icon}
      </span>
      <span className="font-secondary text-base flex-1">{label}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-4">
      <span className="font-primary text-sm text-[var(--sidebar-foreground)]">
        {children}
      </span>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="w-[280px] h-full bg-[var(--sidebar)] flex flex-col border-r border-[var(--sidebar-border)]">
      {/* Header */}
      <div className="flex items-center justify-center h-[88px] px-8 py-6 border-b border-[var(--sidebar-border)]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
            <span className="material-symbols text-[20px] text-[var(--primary-foreground)]">
              solar_power
            </span>
          </div>
          <span className="font-primary text-base font-bold text-[var(--primary)]">
            ENERGI
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-0 flex flex-col">
        <SectionTitle>MONITORING</SectionTitle>
        <NavItem icon={<Zap className="w-6 h-6" />} label="Dashboard" active />
        <NavItem icon={<Sun className="w-6 h-6" />} label="Solar Production" />
        <NavItem icon={<BatteryCharging className="w-6 h-6" />} label="Battery Storage" />
        <NavItem icon={<House className="w-6 h-6" />} label="Consumption" />
        <NavItem icon={<Zap className="w-6 h-6" />} label="Grid Exchange" />

        <SectionTitle>SYSTEM</SectionTitle>
        <NavItem icon={<Settings className="w-6 h-6" />} label="Settings" />
        <NavItem icon={<Bell className="w-6 h-6" />} label="Alerts" />
      </nav>

      {/* Footer */}
      <div className="flex items-center gap-2 px-8 py-6">
        <div className="flex-1 flex flex-col gap-1">
          <span className="font-secondary text-base text-[var(--sidebar-accent-foreground)]">
            Home Owner
          </span>
          <span className="font-secondary text-base text-[var(--sidebar-foreground)]">
            System Online
          </span>
        </div>
        <ChevronDown className="w-6 h-6 text-[var(--sidebar-foreground)]" />
      </div>
    </aside>
  );
}
