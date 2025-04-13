
import { Activity, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const transactions = [
  {
    id: "TX51...8fe3",
    type: "Reward",
    amount: "+2.45 SOL",
    time: "10 min ago",
    status: "confirmed"
  },
  {
    id: "TX32...7dc1",
    type: "Staking",
    amount: "-10.00 SOL",
    time: "2 hours ago",
    status: "confirmed"
  },
  {
    id: "TX91...3ba8",
    type: "Node Registration",
    amount: "-1.25 SOL",
    time: "5 hours ago",
    status: "confirmed"
  },
  {
    id: "TX12...9fe5",
    type: "Reward",
    amount: "+1.75 SOL",
    time: "1 day ago",
    status: "confirmed"
  }
];

const RecentTransactions = () => {
  return (
    <div className="bg-card-gradient rounded-lg overflow-hidden border border-terranode-teal/30">
      <div className="flex items-center justify-between bg-terranode-teal/10 p-4 border-b border-terranode-teal/30">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-terranode-teal" />
          <h3 className="font-semibold">Recent Transactions</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          View All
          <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </div>
      
      <div className="divide-y divide-terranode-slate/30">
        {transactions.map((tx, index) => (
          <div key={index} className="p-4 flex items-center justify-between hover:bg-terranode-slate/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{tx.type}</span>
                <span className="text-xs text-muted-foreground">{tx.id}</span>
              </div>
              <span className="text-xs text-muted-foreground">{tx.time}</span>
            </div>
            <div className="text-right">
              <div className={`text-sm font-medium ${
                tx.amount.startsWith('+') ? 'text-terranode-emerald' : 'text-terranode-amber'
              }`}>
                {tx.amount}
              </div>
              <span className="text-xs px-1.5 py-0.5 bg-terranode-emerald/20 text-terranode-emerald rounded">
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
