"use client";

interface BarData {
  label: string;
  height: number;
  colorVar: string;
  active?: boolean;
}

const bars: BarData[] = [
  { label: "6am", height: 40, colorVar: "var(--chart-low)" },
  { label: "8am", height: 80, colorVar: "var(--chart-medium)" },
  { label: "10am", height: 140, colorVar: "var(--chart-high)" },
  { label: "12pm", height: 180, colorVar: "var(--chart-peak)" },
  { label: "2pm", height: 160, colorVar: "var(--chart-high)", active: true },
  { label: "4pm", height: 120, colorVar: "var(--chart-medium)" },
  { label: "6pm", height: 60, colorVar: "var(--chart-low)" },
];

export function ProductionChart() {
  return (
    <div className="flex-1 bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)] shadow-sm overflow-hidden flex flex-col h-full transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <h3 className="font-primary text-lg font-semibold text-[var(--foreground)]">
          Today&apos;s Production
        </h3>
        <span className="font-secondary text-sm text-[var(--muted-foreground)]">
          32.4 kWh total
        </span>
      </div>

      {/* Chart */}
      <div className="flex-1 flex items-end justify-between gap-2 p-6 pt-0">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-2"
          >
            <div
              className="w-full rounded-t-[var(--radius-sm)] transition-all duration-300"
              style={{
                height: `${bar.height}px`,
                backgroundColor: bar.colorVar,
                border: bar.active ? "2px solid var(--chart-peak)" : "none",
              }}
            />
            <span
              className={`font-primary text-[10px] ${
                bar.active
                  ? "font-bold text-[var(--primary)]"
                  : "text-[var(--muted-foreground)]"
              }`}
            >
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
