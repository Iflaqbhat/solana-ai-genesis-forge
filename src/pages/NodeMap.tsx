
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Search, Filter, Download, PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NodeMap = () => {
  const [view, setView] = useState<'map' | 'list'>('map');
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Node Map</h1>
            <p className="text-muted-foreground">Monitor and manage your mining nodes</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1 border-terranode-slate/30">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1 border-terranode-slate/30">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
            <Button className="gap-1 bg-terranode-emerald hover:bg-terranode-emerald/90">
              <PlusCircle className="h-4 w-4" />
              <span>Add Node</span>
            </Button>
          </div>
        </div>
        
        <div className="w-full flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by node ID, location, status..." 
              className="pl-10 bg-terranode-slate/20 border-terranode-slate/30"
            />
          </div>
          
          <Tabs defaultValue="all" className="w-[300px]">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Tabs value={view} onValueChange={(v) => setView(v as 'map' | 'list')}>
          <TabsList>
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="map" className="mt-4">
            <div className="bg-card-gradient h-[600px] rounded-lg border border-terranode-slate/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-[radial-gradient(#115E59_1px,transparent_1px)] [background-size:20px_20px]"></div>
              </div>
              
              {/* World map background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-[80%] h-[80%] border-2 border-terranode-slate/50 rounded-full"></div>
                <div className="absolute w-[60%] h-[60%] border-2 border-terranode-slate/30 rounded-full"></div>
                <div className="absolute w-[40%] h-[40%] border-2 border-terranode-slate/20 rounded-full"></div>
              </div>
              
              {/* Sample nodes */}
              {Array.from({ length: 50 }).map((_, i) => {
                const size = Math.random() * 10 + 5;
                const x = Math.random() * 80 + 10;
                const y = Math.random() * 80 + 10;
                const active = Math.random() > 0.2;
                
                return (
                  <div 
                    key={i}
                    className={`absolute rounded-full ${active ? 'bg-terranode-emerald animate-pulse-slow' : 'bg-terranode-amber'}`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      left: `${x}%`,
                      top: `${y}%`,
                      boxShadow: active ? `0 0 ${size/2}px rgba(5, 150, 105, 0.5)` : 'none'
                    }}
                  />
                );
              })}
              
              <div className="absolute bottom-4 right-4 bg-card py-1 px-3 rounded-md text-xs text-muted-foreground border border-terranode-slate/30">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-terranode-emerald rounded-full mr-1"></span>
                    <span>Active</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-terranode-amber rounded-full mr-1"></span>
                    <span>Inactive</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="mt-4">
            <div className="bg-card-gradient rounded-lg border border-terranode-slate/30 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-terranode-slate/30">
                    <th className="text-left p-4 text-sm font-medium">Node ID</th>
                    <th className="text-left p-4 text-sm font-medium">Location</th>
                    <th className="text-left p-4 text-sm font-medium">Status</th>
                    <th className="text-left p-4 text-sm font-medium">Uptime</th>
                    <th className="text-left p-4 text-sm font-medium">Rewards</th>
                    <th className="text-left p-4 text-sm font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-terranode-slate/30">
                  {Array.from({ length: 10 }).map((_, i) => {
                    const active = Math.random() > 0.2;
                    const nodeId = `Node-${(10000 + i).toString().padStart(5, '0')}`;
                    const location = ['London', 'Tokyo', 'New York', 'Singapore', 'Berlin'][Math.floor(Math.random() * 5)];
                    const uptime = `${Math.floor(Math.random() * 100)}%`;
                    const rewards = `${(Math.random() * 10).toFixed(2)} SOL`;
                    
                    return (
                      <tr key={i} className="hover:bg-terranode-slate/10">
                        <td className="p-4 text-sm">{nodeId}</td>
                        <td className="p-4 text-sm">{location}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2 py-1 text-xs rounded ${
                            active 
                              ? 'bg-terranode-emerald/20 text-terranode-emerald' 
                              : 'bg-terranode-amber/20 text-terranode-amber'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full mr-1 ${
                              active ? 'bg-terranode-emerald' : 'bg-terranode-amber'
                            }`} />
                            {active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="p-4 text-sm">{uptime}</td>
                        <td className="p-4 text-sm">{rewards}</td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm" className="text-xs">Manage</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default NodeMap;
