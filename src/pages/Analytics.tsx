
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { 
  BarChart, LineChart, CircleHelpIcon, Download, CalendarRange, 
  TrendingUp, TrendingDown, ChartPieIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Card, CardContent
} from '@/components/ui/card';
import { 
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

// Sample data
const revenueData = [
  { name: 'Jan', revenue: 1200 },
  { name: 'Feb', revenue: 1900 },
  { name: 'Mar', revenue: 3000 },
  { name: 'Apr', revenue: 1780 },
  { name: 'May', revenue: 2390 },
  { name: 'Jun', revenue: 3490 },
  { name: 'Jul', revenue: 2800 },
];

const nodePerformanceData = [
  { name: '1', group_a: 4000, group_b: 2400, group_c: 3200 },
  { name: '2', group_a: 3000, group_b: 1398, group_c: 2800 },
  { name: '3', group_a: 2000, group_b: 9800, group_c: 2290 },
  { name: '4', group_a: 2780, group_b: 3908, group_c: 2000 },
  { name: '5', group_a: 1890, group_b: 4800, group_c: 2181 },
  { name: '6', group_a: 2390, group_b: 3800, group_c: 2500 },
  { name: '7', group_a: 3490, group_b: 4300, group_c: 2100 },
];

const distributionData = [
  { name: 'Mining Rewards', value: 65 },
  { name: 'Staking Rewards', value: 25 },
  { name: 'Network Fees', value: 10 },
];

const COLORS = ['#059669', '#D97706', '#4F46E5'];

const Analytics = () => {
  const [timeframe, setTimeframe] = useState('month');
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Monitoring network performance and rewards</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <Tabs 
              value={timeframe} 
              onValueChange={setTimeframe} 
              className="w-[300px]"
            >
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button variant="outline" className="gap-1 border-terranode-slate/30">
              <CalendarRange className="h-4 w-4" />
              <span>Custom Range</span>
            </Button>
            
            <Button variant="outline" className="gap-1 border-terranode-slate/30">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card-gradient border-terranode-teal/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-muted-foreground text-sm font-medium">Total Revenue</p>
                <TrendingUp className="h-5 w-5 text-terranode-emerald" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold">124.5 SOL</h3>
                  <div className="text-xs font-medium flex items-center mt-1">
                    <span className="text-terranode-emerald">↑ 12%</span>
                    <span className="text-muted-foreground ml-1">vs. last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card-gradient border-terranode-teal/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-muted-foreground text-sm font-medium">Average Efficiency</p>
                <TrendingUp className="h-5 w-5 text-terranode-emerald" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold">89%</h3>
                  <div className="text-xs font-medium flex items-center mt-1">
                    <span className="text-terranode-emerald">↑ 5%</span>
                    <span className="text-muted-foreground ml-1">vs. last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card-gradient border-terranode-teal/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-muted-foreground text-sm font-medium">Operating Costs</p>
                <TrendingDown className="h-5 w-5 text-terranode-amber" />
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold">32.1 SOL</h3>
                  <div className="text-xs font-medium flex items-center mt-1">
                    <span className="text-terranode-amber">↓ 8%</span>
                    <span className="text-muted-foreground ml-1">vs. last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-terranode-emerald" />
                    <h3 className="font-bold">Revenue Trend</h3>
                  </div>
                  <CircleHelpIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={revenueData}>
                      <XAxis 
                        dataKey="name" 
                        stroke="#64748b" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#64748b" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(value) => `${value} SOL`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          borderColor: '#115E59',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#059669" 
                        strokeWidth={2} 
                        dot={{ r: 4, strokeWidth: 2 }}
                        activeDot={{ r: 6 }}
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-terranode-amber" />
                    <h3 className="font-bold">Node Group Performance</h3>
                  </div>
                  <CircleHelpIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={nodePerformanceData}>
                      <XAxis 
                        dataKey="name" 
                        stroke="#64748b" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#64748b" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          borderColor: '#115E59',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }} 
                      />
                      <Legend />
                      <Bar dataKey="group_a" name="Group A" fill="#059669" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="group_b" name="Group B" fill="#D97706" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="group_c" name="Group C" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ChartPieIcon className="h-5 w-5 text-terranode-emerald" />
                    <h3 className="font-bold">Revenue Distribution</h3>
                  </div>
                  <CircleHelpIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="h-[250px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={distributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {distributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          borderColor: '#115E59',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Top Performing Nodes</h3>
                </div>
                
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-3 bg-terranode-slate/20 rounded-lg border border-terranode-slate/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-terranode-emerald/20 flex items-center justify-center">
                          <span className="text-sm font-medium text-terranode-emerald">{i + 1}</span>
                        </div>
                        <div>
                          <div className="font-medium">Node-{(10000 + i).toString().padStart(5, '0')}</div>
                          <div className="text-xs text-muted-foreground">
                            {['London', 'Tokyo', 'New York', 'Singapore'][i % 4]}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{(98 - i * 2).toFixed(1)}%</div>
                        <div className="text-xs text-terranode-emerald">+{(8 - i).toFixed(1)} SOL</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full mt-4 text-sm">
                  View All Nodes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;
