
import { Database, Zap, LineChart, CreditCard } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import StatCard from '@/components/dashboard/StatCard';
import NetworkMap from '@/components/dashboard/NetworkMap';
import AiInsights from '@/components/dashboard/AiInsights';
import RecentTransactions from '@/components/dashboard/RecentTransactions';

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">TerraNode Genesis</h1>
          <p className="text-muted-foreground">AI-Powered Decentralized Mining Network</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard 
            title="Active Nodes" 
            value="72" 
            icon={<Database className="h-5 w-5" />}
            change={{ value: "12%", positive: true }}
          />
          <StatCard 
            title="Power Efficiency" 
            value="89%" 
            icon={<Zap className="h-5 w-5" />}
            change={{ value: "5%", positive: true }}
          />
          <StatCard 
            title="Network Hashrate" 
            value="14.2 TH/s" 
            icon={<LineChart className="h-5 w-5" />}
            change={{ value: "3%", positive: true }}
          />
          <StatCard 
            title="Rewards (30d)" 
            value="124.5 SOL" 
            icon={<CreditCard className="h-5 w-5" />}
            change={{ value: "8%", positive: true }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">Network Overview</h2>
                <NetworkMap />
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3">Recent Transactions</h2>
                <RecentTransactions />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-3">AI Insights</h2>
            <AiInsights />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
