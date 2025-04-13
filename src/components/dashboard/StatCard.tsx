
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: { value: string | number; positive: boolean };
  className?: string;
};

const StatCard = ({ title, value, icon, change, className }: StatCardProps) => {
  return (
    <div className={cn("stat-card card-hover", className)}>
      <div className="flex justify-between items-start mb-3">
        <p className="text-muted-foreground text-sm font-medium">{title}</p>
        <div className="text-terranode-emerald">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-bold">{value}</h3>
          {change && (
            <div className={cn(
              "text-xs font-medium flex items-center mt-1",
              change.positive ? "text-terranode-emerald" : "text-terranode-amber"
            )}>
              <span className={change.positive ? "text-terranode-emerald" : "text-terranode-amber"}>
                {change.positive ? '↑' : '↓'} {change.value}
              </span>
              <span className="text-muted-foreground ml-1">vs. last week</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
