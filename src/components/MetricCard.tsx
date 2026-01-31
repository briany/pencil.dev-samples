"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  trend?: {
    direction: "up" | "down";
    text: string;
    positive?: boolean;
  };
  progress?: {
    value: number;
    color: string;
  };
  status?: {
    color: string;
    text: string;
  };
}

export function MetricCard({
  icon,
  iconBg,
  label,
  value,
  trend,
  progress,
  status,
}: MetricCardProps) {
  return (
    <div className="flex-1 bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm overflow-hidden flex flex-col">
      {/* Icon Header */}
      <div className="p-5">
        <div
          className="w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 flex flex-col gap-3">
        <span className="font-secondary text-sm text-[var(--muted-foreground)]">
          {label}
        </span>
        <span className="font-primary text-[32px] font-bold text-[var(--foreground)]">
          {value}
        </span>

        {/* Trend indicator */}
        {trend && (
          <div className="flex items-center gap-1.5">
            {trend.direction === "up" ? (
              <TrendingUp
                className="w-4 h-4"
                style={{ color: trend.positive ? "var(--success-foreground)" : "var(--foreground)" }}
              />
            ) : (
              <TrendingDown
                className="w-4 h-4"
                style={{ color: trend.positive ? "var(--success-foreground)" : "var(--foreground)" }}
              />
            )}
            <span
              className="font-secondary text-xs"
              style={{ color: trend.positive ? "var(--success-foreground)" : "var(--foreground)" }}
            >
              {trend.text}
            </span>
          </div>
        )}

        {/* Progress bar */}
        {progress && (
          <div className="w-full h-4 bg-[var(--sidebar)] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${progress.value}%`,
                backgroundColor: progress.color,
              }}
            />
          </div>
        )}

        {/* Status indicator */}
        {status && (
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: status.color }}
            />
            <span className="font-secondary text-xs text-[var(--muted-foreground)]">
              {status.text}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
