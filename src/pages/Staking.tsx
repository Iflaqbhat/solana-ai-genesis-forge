
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Database, ArrowRight, AlertCircle, CheckCircle, Clock, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { 
  Card, CardContent
} from '@/components/ui/card';
import { 
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const Staking = () => {
  const [stakeAmount, setStakeAmount] = useState(50);
  const [stakeDuration, setStakeDuration] = useState(6);
  
  const durationToAPY = (months: number) => {
    // Base APY plus bonus for longer lock periods
    return 12 + (months - 1) * 0.5;
  };
  
  const calculateRewards = () => {
    const apy = durationToAPY(stakeDuration);
    const monthlyReturn = (stakeAmount * (apy / 100)) / 12;
    return monthlyReturn * stakeDuration;
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Staking</h1>
          <p className="text-muted-foreground">Stake your SOL to earn rewards and support the network</p>
        </div>
        
        <Alert className="bg-terranode-indigo/10 border-terranode-indigo/30">
          <AlertCircle className="h-4 w-4 text-terranode-indigo" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            Staking helps secure the TerraNode network and earns you rewards. The longer you stake, the higher your returns.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-terranode-emerald" />
                    <h2 className="text-xl font-bold">Stake SOL</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Amount to Stake (SOL)</label>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Slider 
                            value={[stakeAmount]} 
                            onValueChange={(values) => setStakeAmount(values[0])} 
                            max={100} 
                            step={1}
                          />
                        </div>
                        <div className="w-16 h-10 flex items-center justify-center border border-terranode-slate/30 rounded-md bg-terranode-slate/20">
                          {stakeAmount}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>1 SOL</span>
                        <span>100 SOL</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Staking Period (Months)</label>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <Slider 
                            value={[stakeDuration]} 
                            onValueChange={(values) => setStakeDuration(values[0])} 
                            min={1}
                            max={12} 
                            step={1}
                          />
                        </div>
                        <div className="w-16 h-10 flex items-center justify-center border border-terranode-slate/30 rounded-md bg-terranode-slate/20">
                          {stakeDuration}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>1 month</span>
                        <span>12 months</span>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Estimated APY</span>
                        <span className="font-medium text-terranode-emerald">
                          {durationToAPY(stakeDuration).toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Lock Period</span>
                        <span className="font-medium">
                          {stakeDuration} month{stakeDuration > 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Network Fee</span>
                        <span className="font-medium">0.001 SOL</span>
                      </div>
                      <div className="border-t border-terranode-slate/30 my-3"></div>
                      <div className="flex justify-between text-sm font-medium">
                        <span>Estimated Rewards</span>
                        <span className="text-terranode-emerald">
                          +{calculateRewards().toFixed(2)} SOL
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-terranode-slate/20 p-5 rounded-lg border border-terranode-slate/30 flex flex-col">
                    <h3 className="font-medium mb-3">Stake Summary</h3>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Amount</span>
                        <span className="font-medium">{stakeAmount} SOL</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{stakeDuration} months</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">APY</span>
                        <span className="font-medium">{durationToAPY(stakeDuration).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Est. Rewards</span>
                        <span className="font-medium text-terranode-emerald">
                          {calculateRewards().toFixed(2)} SOL
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Return</span>
                        <span className="font-medium">
                          {(stakeAmount + calculateRewards()).toFixed(2)} SOL
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-t border-terranode-slate/30 my-4"></div>
                    
                    <div className="text-center text-xs text-muted-foreground mb-4">
                      By staking, you agree to the locking period terms.
                    </div>
                    
                    <Button className="w-full bg-terranode-emerald hover:bg-terranode-emerald/90">
                      Stake Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card className="bg-card-gradient border-terranode-teal/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="h-5 w-5 text-terranode-emerald" />
                    <h3 className="font-medium">Benefits of Longer Staking</h3>
                  </div>
                  
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-terranode-emerald mt-0.5" />
                      <span>Higher APY returns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-terranode-emerald mt-0.5" />
                      <span>Priority node allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-terranode-emerald mt-0.5" />
                      <span>Marketplace discounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-terranode-emerald mt-0.5" />
                      <span>Governance voting rights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card-gradient border-terranode-teal/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-terranode-amber" />
                    <h3 className="font-medium">APY Comparison</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>1-3 Months</span>
                        <span>12% APY</span>
                      </div>
                      <Progress value={40} className="h-1.5" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>4-6 Months</span>
                        <span>14% APY</span>
                      </div>
                      <Progress value={50} className="h-1.5" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>7-9 Months</span>
                        <span>16% APY</span>
                      </div>
                      <Progress value={65} className="h-1.5" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>10-12 Months</span>
                        <span>18% APY</span>
                      </div>
                      <Progress value={80} className="h-1.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Your Staking Portfolio</h3>
                
                <div className="text-center py-4">
                  <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-terranode-teal/20 border border-terranode-teal/30 mb-3">
                    <Database className="h-8 w-8 text-terranode-emerald" />
                  </div>
                  <h4 className="text-xl font-bold">85.75 SOL</h4>
                  <p className="text-sm text-muted-foreground">Total Staked</p>
                </div>
                
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Stakes</span>
                    <span>3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Earned Rewards</span>
                    <span className="text-terranode-emerald">+12.32 SOL</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. APY</span>
                    <span>15.2%</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full border-terranode-slate/30">
                    View Staking History
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card-gradient border-terranode-teal/30">
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Active Stakes</h3>
                
                <div className="space-y-4">
                  {[
                    { amount: 50, duration: 12, start: '2023-09-15', apy: 18, progress: 25 },
                    { amount: 25, duration: 6, start: '2023-11-03', apy: 14, progress: 50 },
                    { amount: 10.75, duration: 3, start: '2023-12-20', apy: 12, progress: 75 },
                  ].map((stake, i) => (
                    <div 
                      key={i} 
                      className="p-3 bg-terranode-slate/20 rounded-lg border border-terranode-slate/30"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{stake.amount} SOL</span>
                        <span className="text-sm text-terranode-emerald">{stake.apy}% APY</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {stake.duration} month lock • Started {stake.start}
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Lock progress</span>
                          <span>{stake.progress}%</span>
                        </div>
                        <Progress value={stake.progress} className="h-1" />
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full mt-4 text-sm">
                  View All Stakes
                  <ArrowRight className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Staking;
