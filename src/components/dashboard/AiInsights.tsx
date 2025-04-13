
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insights = [
  {
    title: "Optimize node #173 power consumption",
    description: "AI analysis indicates a 15% efficiency gain by adjusting cooling parameters.",
    gain: "+15% efficiency",
    priority: "high"
  },
  {
    title: "Reallocate resources from region C",
    description: "Lower performance-to-cost ratio detected in region C nodes.",
    gain: "+8% ROI",
    priority: "medium"
  },
  {
    title: "Upgrade firmware on 12 nodes",
    description: "New firmware available with security patches and performance improvements.",
    gain: "+5% hashrate",
    priority: "medium"
  }
];

const AiInsights = () => {
  return (
    <div className="bg-card-gradient rounded-lg overflow-hidden border border-terranode-teal/30">
      <div className="flex items-center justify-between bg-terranode-indigo/10 p-4 border-b border-terranode-teal/30">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-terranode-indigo" />
          <h3 className="font-semibold">AI Optimization Insights</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          View All
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
      
      <div className="p-4 space-y-3">
        {insights.map((insight, index) => (
          <div 
            key={index} 
            className="p-3 bg-terranode-slate/20 rounded-md border border-terranode-slate/30 card-hover"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-sm">{insight.title}</h4>
              <span 
                className={`text-xs px-2 py-0.5 rounded ${
                  insight.priority === 'high' 
                    ? 'bg-terranode-amber/20 text-terranode-amber' 
                    : 'bg-terranode-emerald/20 text-terranode-emerald'
                }`}
              >
                {insight.priority}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">{insight.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-terranode-emerald text-xs font-medium">{insight.gain}</span>
              <Button variant="ghost" size="sm" className="h-7 text-xs">Apply</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiInsights;
