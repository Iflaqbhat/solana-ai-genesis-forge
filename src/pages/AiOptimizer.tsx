
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Zap, ArrowRight, LineChart, Cpu, Thermometer, Waves, Battery, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const AiOptimizer = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);
  
  const startOptimization = () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);
    
    const interval = setInterval(() => {
      setOptimizationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsOptimizing(false);
          return 100;
        }
        return prev + 5;
      });
    }, 500);
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">AI Optimizer</h1>
          <p className="text-muted-foreground">Use AI to optimize your mining operations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-terranode-indigo" />
                    <h2 className="text-xl font-bold">AI Optimization Engine</h2>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our AI engine analyzes your node performance metrics and blockchain data to 
                    optimize mining efficiency, power consumption, and reward earnings.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                      <div className="flex flex-col items-center text-center">
                        <Cpu className="h-8 w-8 text-terranode-emerald mb-2" />
                        <span className="text-sm font-medium">Performance</span>
                      </div>
                    </div>
                    <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                      <div className="flex flex-col items-center text-center">
                        <Thermometer className="h-8 w-8 text-terranode-amber mb-2" />
                        <span className="text-sm font-medium">Temperature</span>
                      </div>
                    </div>
                    <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                      <div className="flex flex-col items-center text-center">
                        <Waves className="h-8 w-8 text-terranode-indigo mb-2" />
                        <span className="text-sm font-medium">Network</span>
                      </div>
                    </div>
                    <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                      <div className="flex flex-col items-center text-center">
                        <Battery className="h-8 w-8 text-terranode-emerald mb-2" />
                        <span className="text-sm font-medium">Power</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    {isOptimizing ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Optimization in progress...</span>
                          <span className="text-sm font-medium">{optimizationProgress}%</span>
                        </div>
                        <Progress value={optimizationProgress} className="h-2" />
                        <p className="text-sm text-muted-foreground">The AI is analyzing your nodes and generating optimization recommendations.</p>
                      </div>
                    ) : (
                      <Button onClick={startOptimization} className="gap-2 bg-terranode-indigo hover:bg-terranode-indigo/90">
                        <Zap className="h-4 w-4" />
                        <span>Start Optimization Scan</span>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Tabs defaultValue="recommendations">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recommendations" className="mt-4 space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div 
                      key={i} 
                      className="p-4 bg-card-gradient rounded-lg border border-terranode-teal/30 card-hover"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">Optimize Node Group {String.fromCharCode(65 + i)}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Predicted improvement: +{12 - i * 3}% efficiency, +{8 - i * 2}% rewards
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          i === 0 
                            ? 'bg-terranode-amber/20 text-terranode-amber' 
                            : 'bg-terranode-emerald/20 text-terranode-emerald'
                        }`}>
                          {i === 0 ? 'High' : i === 1 ? 'Medium' : 'Low'} Priority
                        </span>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Affected Nodes:</span>
                          <span className="ml-2">{(i + 1) * 5}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Implementation Time:</span>
                          <span className="ml-2">{(i + 1) * 5} minutes</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm" className="mr-2 border-terranode-slate/30">Details</Button>
                        <Button size="sm" className="bg-terranode-indigo hover:bg-terranode-indigo/90">Apply</Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="history" className="mt-4">
                  <div className="bg-card-gradient rounded-lg border border-terranode-teal/30 overflow-hidden">
                    <div className="p-4 border-b border-terranode-teal/30">
                      <h3 className="font-medium">Optimization History</h3>
                    </div>
                    <div className="divide-y divide-terranode-slate/30">
                      {[1, 2, 3, 4].map((_, i) => {
                        const date = new Date();
                        date.setDate(date.getDate() - i);
                        
                        return (
                          <div key={i} className="p-4 flex justify-between items-center hover:bg-terranode-slate/10">
                            <div>
                              <div className="font-medium">{`Optimization Batch #${1000 + i}`}</div>
                              <div className="text-sm text-muted-foreground">{date.toLocaleDateString()}</div>
                            </div>
                            <div className="flex items-center">
                              <span className="text-terranode-emerald text-sm mr-4">+{15 - i * 2}% Efficiency</span>
                              <Button variant="ghost" size="sm">View</Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="mt-4">
                  <div className="bg-card-gradient rounded-lg border border-terranode-teal/30 p-4">
                    <h3 className="font-medium mb-4">Optimization Settings</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Optimization Priority</label>
                          <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                            <option>Balanced</option>
                            <option>Performance</option>
                            <option>Energy Efficiency</option>
                            <option>Thermal Management</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Auto-Optimization</label>
                          <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                            <option>Manual Only</option>
                            <option>High Priority Only</option>
                            <option>All Recommendations</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Scan Frequency</label>
                          <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                            <option>Once Daily</option>
                            <option>Twice Daily</option>
                            <option>Hourly</option>
                            <option>Manual Only</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Node Groups</label>
                          <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                            <option>All Nodes</option>
                            <option>Group A Only</option>
                            <option>Group B Only</option>
                            <option>Group C Only</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" className="mr-2 border-terranode-slate/30">Reset</Button>
                        <Button className="bg-terranode-emerald hover:bg-terranode-emerald/90">Save Settings</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div>
            <div className="bg-card-gradient rounded-lg border border-terranode-teal/30 overflow-hidden">
              <div className="p-4 border-b border-terranode-teal/30 flex items-center justify-between">
                <h3 className="font-medium">Performance Metrics</h3>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-4 space-y-4">
                {[
                  { name: 'Network Hashrate', value: '14.2 TH/s', increase: '3%', icon: LineChart },
                  { name: 'Power Efficiency', value: '89%', increase: '5%', icon: Battery },
                  { name: 'Avg. Temperature', value: '62°C', increase: '-2%', icon: Thermometer },
                  { name: 'Response Time', value: '32ms', increase: '-8%', icon: RefreshCw },
                ].map((metric, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-terranode-slate/20 flex items-center justify-center">
                        <metric.icon className="h-4 w-4 text-terranode-emerald" />
                      </div>
                      <span className="font-medium text-sm">{metric.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{metric.value}</div>
                      <div className="text-xs text-terranode-emerald">
                        {metric.increase.startsWith('-') ? '↓' : '↑'} {metric.increase}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 bg-card-gradient rounded-lg border border-terranode-teal/30 overflow-hidden">
              <div className="p-4 border-b border-terranode-teal/30">
                <h3 className="font-medium">AI Learning Progress</h3>
              </div>
              
              <div className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  The AI continuously learns from your node performance and network conditions.
                </p>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Node Performance Patterns</span>
                      <span className="text-xs">78%</span>
                    </div>
                    <Progress value={78} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Network Conditions</span>
                      <span className="text-xs">91%</span>
                    </div>
                    <Progress value={91} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Power Consumption Analysis</span>
                      <span className="text-xs">64%</span>
                    </div>
                    <Progress value={64} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Reward Optimization</span>
                      <span className="text-xs">85%</span>
                    </div>
                    <Progress value={85} className="h-1.5" />
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-xs text-terranode-emerald">
                    * AI model improved by 12% in the last 7 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AiOptimizer;
