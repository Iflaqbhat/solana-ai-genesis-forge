
import MainLayout from '@/components/layout/MainLayout';
import { Settings as SettingsIcon, Bell, Shield, Database, LineChart, Activity, Save } from 'lucide-react';
import { 
  Card, CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your system preferences and configurations</p>
        </div>
        
        <Tabs defaultValue="general">
          <TabsList className="grid grid-cols-5 w-full mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="nodes">Node Settings</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <SettingsIcon className="h-5 w-5 text-terranode-emerald" />
                  <h3 className="font-medium">General Settings</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Username</label>
                      <Input 
                        type="text" 
                        value="Alex Johnson" 
                        className="bg-terranode-slate/20 border-terranode-slate/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input 
                        type="email" 
                        value="alex.johnson@example.com" 
                        className="bg-terranode-slate/20 border-terranode-slate/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Language</label>
                      <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                        <option>English</option>
                        <option>Japanese</option>
                        <option>Spanish</option>
                        <option>German</option>
                        <option>French</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Timezone</label>
                      <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                        <option>UTC (GMT+0)</option>
                        <option>Pacific Time (GMT-8)</option>
                        <option>Eastern Time (GMT-5)</option>
                        <option>Central European Time (GMT+1)</option>
                        <option>Japan Standard Time (GMT+9)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">Appearance</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Dark Mode</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Compact View</label>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">High Contrast</label>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-terranode-slate/30">
                    <Button variant="outline" className="mr-2 border-terranode-slate/30">Reset to Default</Button>
                    <Button className="gap-2 bg-terranode-emerald hover:bg-terranode-emerald/90">
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Bell className="h-5 w-5 text-terranode-emerald" />
                  <h3 className="font-medium">Notification Settings</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Notification Channels</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Email Notifications</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">In-App Notifications</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">SMS Alerts</label>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Browser Push Notifications</label>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">Notification Types</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Node Status Changes</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Reward Payouts</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Security Alerts</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">System Updates</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Performance Warnings</label>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="text-sm">Newsletter & Announcements</label>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">Notification Frequency</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm block mb-2">Daily Summary Time</label>
                        <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>8:00 AM</option>
                          <option>12:00 PM</option>
                          <option>4:00 PM</option>
                          <option>8:00 PM</option>
                        </select>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm">Quiet Hours</label>
                          <span className="text-sm text-muted-foreground">10:00 PM - 7:00 AM</span>
                        </div>
                        <div className="h-10 flex items-center">
                          <Slider 
                            defaultValue={[22, 7]} 
                            max={24} 
                            step={1}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>12 AM</span>
                          <span>12 PM</span>
                          <span>12 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-terranode-slate/30">
                    <Button variant="outline" className="mr-2 border-terranode-slate/30">Reset to Default</Button>
                    <Button className="gap-2 bg-terranode-emerald hover:bg-terranode-emerald/90">
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="h-5 w-5 text-terranode-emerald" />
                  <h3 className="font-medium">Security Settings</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Account Security</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Two-Factor Authentication</label>
                          <span className="text-xs text-muted-foreground">Secure your account with 2FA</span>
                        </div>
                        <Button variant="outline" className="border-terranode-slate/30">Enable</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Transaction Signing</label>
                          <span className="text-xs text-muted-foreground">Require signature for all transactions</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Session Timeout</label>
                          <span className="text-xs text-muted-foreground">Automatically log out after inactivity</span>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>15 minutes</option>
                          <option>30 minutes</option>
                          <option>1 hour</option>
                          <option>4 hours</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">API Access</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">API Key Access</label>
                          <span className="text-xs text-muted-foreground">Enable API access to your account</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium block">Active API Keys</label>
                        <div className="p-3 bg-terranode-slate/20 rounded-lg border border-terranode-slate/30">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-mono text-xs overflow-hidden text-ellipsis">API_KEY_9f37b5cf8e6d...</div>
                              <div className="text-xs text-muted-foreground">Created: 2023-11-15</div>
                            </div>
                            <Button variant="outline" size="sm" className="text-xs border-terranode-slate/30">Revoke</Button>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs mt-2 border-terranode-slate/30">Generate New API Key</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">Wallet Security</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Withdrawal Confirmations</label>
                          <span className="text-xs text-muted-foreground">Require email confirmation for withdrawals</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Whitelist Addresses</label>
                          <span className="text-xs text-muted-foreground">Only allow withdrawals to whitelisted addresses</span>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Transaction Limits</label>
                          <span className="text-xs text-muted-foreground">Set daily withdrawal limits</span>
                        </div>
                        <Input 
                          type="number" 
                          defaultValue="100" 
                          className="w-24 h-8 bg-terranode-slate/20 border-terranode-slate/30" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-terranode-slate/30">
                    <Button className="gap-2 bg-terranode-emerald hover:bg-terranode-emerald/90">
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nodes" className="space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Database className="h-5 w-5 text-terranode-emerald" />
                  <h3 className="font-medium">Node Settings</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Default Node Configuration</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Auto Restart</label>
                        <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>On Error</option>
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Never</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Update Policy</label>
                        <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Automatic</option>
                          <option>Manual</option>
                          <option>Security Only</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Performance Mode</label>
                        <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Balanced</option>
                          <option>Maximum Performance</option>
                          <option>Energy Efficient</option>
                          <option>Custom</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Telemetry</label>
                        <select className="w-full px-3 py-2 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Full</option>
                          <option>Basic</option>
                          <option>Minimal</option>
                          <option>Disabled</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">Resource Allocation</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-medium">CPU Allocation</label>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Slider defaultValue={[75]} max={100} step={5} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-medium">Memory Allocation</label>
                          <span className="text-sm text-muted-foreground">60%</span>
                        </div>
                        <Slider defaultValue={[60]} max={100} step={5} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-medium">Storage Allocation</label>
                          <span className="text-sm text-muted-foreground">50%</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={5} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <label className="text-sm font-medium">Network Bandwidth</label>
                          <span className="text-sm text-muted-foreground">80%</span>
                        </div>
                        <Slider defaultValue={[80]} max={100} step={5} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">Backup & Recovery</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Automatic Backups</label>
                          <span className="text-xs text-muted-foreground">Regular backups of node configuration</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Backup Frequency</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Backup Retention</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>1 Month</option>
                          <option>3 Months</option>
                          <option>6 Months</option>
                          <option>1 Year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-terranode-slate/30">
                    <Button variant="outline" className="mr-2 border-terranode-slate/30">Apply to All Nodes</Button>
                    <Button className="gap-2 bg-terranode-emerald hover:bg-terranode-emerald/90">
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="h-5 w-5 text-terranode-emerald" />
                  <h3 className="font-medium">Advanced Settings</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">AI Optimization</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Auto Optimization</label>
                          <span className="text-xs text-muted-foreground">Allow AI to optimize nodes automatically</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Optimization Frequency</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Daily</option>
                          <option>Weekly</option>
                          <option>On Demand</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Optimization Priority</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Balanced</option>
                          <option>Performance</option>
                          <option>Energy Efficiency</option>
                          <option>Reward Maximization</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">Network Settings</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Preferred Network Region</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Auto (Lowest Latency)</option>
                          <option>North America</option>
                          <option>Europe</option>
                          <option>Asia Pacific</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Connection Type</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Standard</option>
                          <option>High Performance</option>
                          <option>Resilient</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">P2P Connections</label>
                          <span className="text-xs text-muted-foreground">Maximum peer-to-peer connections</span>
                        </div>
                        <Input 
                          type="number" 
                          defaultValue="50" 
                          className="w-24 h-8 bg-terranode-slate/20 border-terranode-slate/30" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-terranode-slate/30">
                    <h4 className="text-sm font-medium">System Logs</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Log Level</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>Info</option>
                          <option>Debug</option>
                          <option>Warning</option>
                          <option>Error</option>
                          <option>Verbose</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Log Retention</label>
                        </div>
                        <select className="px-3 py-1 bg-terranode-slate/20 border border-terranode-slate/30 rounded-md">
                          <option>7 Days</option>
                          <option>14 Days</option>
                          <option>30 Days</option>
                          <option>90 Days</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-medium block">Enable Performance Metrics</label>
                          <span className="text-xs text-muted-foreground">Collect detailed performance data</span>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-4 border-t border-terranode-slate/30">
                    <Button variant="outline" className="mr-2 border-terranode-slate/30 text-terranode-amber">Reset All Settings</Button>
                    <Button className="gap-2 bg-terranode-emerald hover:bg-terranode-emerald/90">
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;
