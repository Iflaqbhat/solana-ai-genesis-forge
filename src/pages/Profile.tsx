
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { User, Edit, ChevronRight, Bell, Shield, Lock, Database, CreditCard, LogOut } from 'lucide-react';
import { 
  Card, CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Progress } from '@/components/ui/progress';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-64 shrink-0">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-terranode-teal/20 flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-terranode-emerald" />
                  </div>
                  <h2 className="font-bold text-xl mb-1">Alex Johnson</h2>
                  <p className="text-muted-foreground text-sm mb-3">Member since Sep 2023</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-terranode-emerald/20 text-terranode-emerald text-xs rounded-full">Node Operator</span>
                    <span className="px-2 py-1 bg-terranode-amber/20 text-terranode-amber text-xs rounded-full">Tier 2</span>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 gap-1 border-terranode-slate/30">
                    <Edit className="h-3 w-3" />
                    <span>Edit Profile</span>
                  </Button>
                </div>
                
                <div className="border-t border-terranode-slate/30 my-4"></div>
                
                <div className="space-y-1">
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-between ${activeTab === 'overview' ? 'bg-terranode-slate/20' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <span>Overview</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-between ${activeTab === 'nodes' ? 'bg-terranode-slate/20' : ''}`}
                    onClick={() => setActiveTab('nodes')}
                  >
                    <span>My Nodes</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-between ${activeTab === 'rewards' ? 'bg-terranode-slate/20' : ''}`}
                    onClick={() => setActiveTab('rewards')}
                  >
                    <span>Rewards</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-between ${activeTab === 'settings' ? 'bg-terranode-slate/20' : ''}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <span>Settings</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="border-t border-terranode-slate/30 my-4"></div>
                
                <Button variant="ghost" className="w-full text-terranode-amber gap-2">
                  <LogOut className="h-4 w-4" />
                  <span>Disconnect Wallet</span>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="nodes">My Nodes</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-card-gradient border-terranode-teal/30">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Account Summary</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-terranode-slate/20 p-4 rounded-lg border border-terranode-slate/30">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-terranode-teal/20 flex items-center justify-center">
                            <Database className="h-5 w-5 text-terranode-emerald" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Active Nodes</div>
                            <div className="text-xl font-bold">24</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-terranode-slate/20 p-4 rounded-lg border border-terranode-slate/30">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-terranode-teal/20 flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-terranode-emerald" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Total Rewards</div>
                            <div className="text-xl font-bold">124.5 SOL</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-terranode-slate/20 p-4 rounded-lg border border-terranode-slate/30">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-terranode-teal/20 flex items-center justify-center">
                            <Shield className="h-5 w-5 text-terranode-emerald" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Reputation</div>
                            <div className="text-xl font-bold">
                              <span className="text-terranode-emerald">Excellent</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-sm font-medium mb-2">Account Level Progress</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Level 2</span>
                        <span>75/100 XP to Level 3</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>Reach Level 3 to unlock premium features and higher reward rates.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card-gradient border-terranode-teal/30">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Recent Activity</h3>
                      
                      <div className="space-y-4">
                        {[
                          { action: 'Node Added', date: '2023-12-15', details: 'Added Node-10045 to network' },
                          { action: 'Reward Claimed', date: '2023-12-12', details: '8.75 SOL transferred to wallet' },
                          { action: 'Settings Updated', date: '2023-12-10', details: 'Updated notification preferences' },
                          { action: 'Node Optimized', date: '2023-12-05', details: 'Applied AI optimization to Group A' },
                        ].map((activity, i) => (
                          <div key={i} className="flex items-center justify-between pb-3 border-b border-terranode-slate/30 last:border-0 last:pb-0">
                            <div>
                              <div className="font-medium">{activity.action}</div>
                              <div className="text-xs text-muted-foreground">{activity.details}</div>
                            </div>
                            <div className="text-sm text-muted-foreground">{activity.date}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card-gradient border-terranode-teal/30">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Wallet Info</h3>
                      
                      <div className="bg-terranode-slate/20 p-4 rounded-lg border border-terranode-slate/30 mb-4">
                        <div className="text-sm text-muted-foreground mb-1">Connected Wallet</div>
                        <div className="font-medium break-all">8v5PuG3GReBBx4HzfhZwjXzZ4wqCZ6AvBQpGkq8J6L2h</div>
                      </div>
                      
                      <h4 className="text-sm font-medium mb-2">Token Balances</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-terranode-amber/20 flex items-center justify-center">
                              <span className="text-xs font-medium text-terranode-amber">SOL</span>
                            </div>
                            <span>Solana</span>
                          </div>
                          <span className="font-medium">142.35</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-terranode-emerald/20 flex items-center justify-center">
                              <span className="text-xs font-medium text-terranode-emerald">TN</span>
                            </div>
                            <span>TerraNode Token</span>
                          </div>
                          <span className="font-medium">1,250.00</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="nodes" className="space-y-6">
                <Card className="bg-card-gradient border-terranode-teal/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-medium">My Nodes</h3>
                      <Button className="bg-terranode-emerald hover:bg-terranode-emerald/90">Add New Node</Button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent border-terranode-slate/30">
                            <TableHead>Node ID</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Uptime</TableHead>
                            <TableHead>Performance</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Array.from({ length: 5 }).map((_, i) => {
                            const active = Math.random() > 0.2;
                            const nodeId = `Node-${(10000 + i).toString().padStart(5, '0')}`;
                            const location = ['London', 'Tokyo', 'New York', 'Singapore', 'Berlin'][Math.floor(Math.random() * 5)];
                            const uptime = `${Math.floor(Math.random() * 10) + 90}%`;
                            const performance = Math.floor(Math.random() * 20) + 80;
                            
                            return (
                              <TableRow key={i} className="hover:bg-terranode-slate/10 border-terranode-slate/30">
                                <TableCell className="font-medium">{nodeId}</TableCell>
                                <TableCell>
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
                                </TableCell>
                                <TableCell>{location}</TableCell>
                                <TableCell>{uptime}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Progress value={performance} className="w-24 h-1.5" />
                                    <span className="text-xs">{performance}%</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Button variant="ghost" size="sm" className="h-8 text-xs">Manage</Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card-gradient border-terranode-teal/30">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Node Groups</h3>
                      
                      <div className="space-y-3">
                        {['Group A', 'Group B', 'Group C'].map((group, i) => (
                          <div 
                            key={i} 
                            className="p-3 bg-terranode-slate/20 rounded-lg border border-terranode-slate/30 flex justify-between items-center"
                          >
                            <div>
                              <div className="font-medium">{group}</div>
                              <div className="text-xs text-muted-foreground">{(8 - i * 2)} nodes</div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8">View</Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card-gradient border-terranode-teal/30">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Performance Overview</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Average Uptime</span>
                            <span>96.4%</span>
                          </div>
                          <Progress value={96.4} className="h-1.5" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Average Efficiency</span>
                            <span>89.2%</span>
                          </div>
                          <Progress value={89.2} className="h-1.5" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Network Contribution</span>
                            <span>76.8%</span>
                          </div>
                          <Progress value={76.8} className="h-1.5" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>AI Optimization</span>
                            <span>82.5%</span>
                          </div>
                          <Progress value={82.5} className="h-1.5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="rewards" className="space-y-6">
                <Card className="bg-card-gradient border-terranode-teal/30">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-6">Reward History</h3>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="hover:bg-transparent border-terranode-slate/30">
                            <TableHead>Date</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Transaction ID</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Array.from({ length: 8 }).map((_, i) => {
                            const date = new Date();
                            date.setDate(date.getDate() - i);
                            const formattedDate = date.toISOString().split('T')[0];
                            const type = ['Mining', 'Staking', 'Referral', 'Bonus'][Math.floor(Math.random() * 4)];
                            const amount = (Math.random() * 10).toFixed(2);
                            const status = Math.random() > 0.1 ? 'Completed' : 'Pending';
                            const txId = `TX${Math.random().toString(36).substring(2, 6)}...${Math.random().toString(36).substring(2, 6)}`;
                            
                            return (
                              <TableRow key={i} className="hover:bg-terranode-slate/10 border-terranode-slate/30">
                                <TableCell>{formattedDate}</TableCell>
                                <TableCell>{type} Reward</TableCell>
                                <TableCell className="text-terranode-emerald">+{amount} SOL</TableCell>
                                <TableCell>
                                  <span className={`px-2 py-1 text-xs rounded ${
                                    status === 'Completed' 
                                      ? 'bg-terranode-emerald/20 text-terranode-emerald' 
                                      : 'bg-terranode-amber/20 text-terranode-amber'
                                  }`}>
                                    {status}
                                  </span>
                                </TableCell>
                                <TableCell className="font-mono text-xs">{txId}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card-gradient border-terranode-teal/30">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Reward Stats</h3>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                            <div className="text-xs text-muted-foreground">Total Earned</div>
                            <div className="text-xl font-bold text-terranode-emerald">124.5 SOL</div>
                          </div>
                          <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                            <div className="text-xs text-muted-foreground">This Month</div>
                            <div className="text-xl font-bold text-terranode-emerald">18.2 SOL</div>
                          </div>
                          <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                            <div className="text-xs text-muted-foreground">Last Payout</div>
                            <div className="text-xl font-bold">2.45 SOL</div>
                          </div>
                          <div className="bg-terranode-slate/20 p-3 rounded-lg border border-terranode-slate/30">
                            <div className="text-xs text-muted-foreground">Avg. Daily</div>
                            <div className="text-xl font-bold">0.62 SOL</div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <p>Next reward payout estimated in 6 hours.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-card-gradient border-terranode-teal/30">
                    <CardContent className="p-6">
                      <h3 className="font-medium mb-4">Top Earning Nodes</h3>
                      
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
                            <div className="text-right text-terranode-emerald font-medium">
                              +{(10 - i).toFixed(2)} SOL
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-6">
                <Card className="bg-card-gradient border-terranode-teal/30">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-6">Account Settings</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-3">Profile Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm">Display Name</label>
                            <input 
                              type="text" 
                              value="Alex Johnson" 
                              className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm">Email</label>
                            <input 
                              type="email" 
                              value="alex.johnson@example.com" 
                              className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm">Timezone</label>
                            <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                              <option>UTC (GMT+0)</option>
                              <option>Pacific Time (GMT-8)</option>
                              <option>Eastern Time (GMT-5)</option>
                              <option>Central European Time (GMT+1)</option>
                              <option>Japan Standard Time (GMT+9)</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm">Language</label>
                            <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                              <option>English</option>
                              <option>Japanese</option>
                              <option>Spanish</option>
                              <option>German</option>
                              <option>French</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-terranode-slate/30">
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <Bell className="h-4 w-4 mr-2" />
                          Notification Preferences
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Email Notifications</label>
                            <div>
                              <input type="checkbox" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Node Status Alerts</label>
                            <div>
                              <input type="checkbox" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Reward Payouts</label>
                            <div>
                              <input type="checkbox" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">System Updates</label>
                            <div>
                              <input type="checkbox" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Marketing Communications</label>
                            <div>
                              <input type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-terranode-slate/30">
                        <h4 className="text-sm font-medium mb-3 flex items-center">
                          <Lock className="h-4 w-4 mr-2" />
                          Security Settings
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Two-Factor Authentication</label>
                            <Button variant="outline" size="sm" className="border-terranode-slate/30">Enable</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Transaction Confirmations</label>
                            <div>
                              <input type="checkbox" defaultChecked />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <label className="text-sm">Session Timeout</label>
                            <select className="p-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md text-sm">
                              <option>15 minutes</option>
                              <option>30 minutes</option>
                              <option>1 hour</option>
                              <option>4 hours</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end pt-4 border-t border-terranode-slate/30">
                        <Button variant="outline" className="mr-2 border-terranode-slate/30">Cancel</Button>
                        <Button className="bg-terranode-emerald hover:bg-terranode-emerald/90">Save Changes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
