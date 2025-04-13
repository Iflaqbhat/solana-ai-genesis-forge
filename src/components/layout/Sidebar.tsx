
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Map, 
  Activity, 
  Database, 
  User, 
  ShoppingCart, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  LineChart
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItem = {
  title: string;
  path: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  { title: 'Dashboard', path: '/', icon: Home },
  { title: 'Node Map', path: '/node-map', icon: Map },
  { title: 'AI Optimizer', path: '/ai-optimizer', icon: Zap },
  { title: 'Analytics', path: '/analytics', icon: LineChart },
  { title: 'Staking', path: '/staking', icon: Database },
  { title: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
  { title: 'Profile', path: '/profile', icon: User },
  { title: 'Settings', path: '/settings', icon: Settings },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside 
      className={cn(
        "h-screen bg-card border-r border-terranode-slate/30 transition-all duration-300 flex flex-col shadow-xl",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-terranode-slate/30">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-terranode-emerald" />
            <span className="font-bold text-xl text-gradient">
              TerraNode
            </span>
          </div>
        )}
        {collapsed && <Activity className="h-6 w-6 text-terranode-emerald mx-auto" />}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded-full hover:bg-terranode-slate/20 text-muted-foreground"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>
      
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                  "hover:bg-terranode-slate/30",
                  location.pathname === item.path 
                    ? "bg-terranode-teal/20 text-terranode-emerald" 
                    : "text-muted-foreground"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  location.pathname === item.path && "text-terranode-emerald"
                )} />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-terranode-slate/30">
        <div className={cn(
          "rounded-lg bg-terranode-teal/20 p-3",
          collapsed ? "text-center" : ""
        )}>
          {!collapsed ? (
            <div>
              <div className="text-sm font-medium text-terranode-emerald mb-1">
                Connected: 72 Nodes
              </div>
              <div className="h-2 bg-terranode-slate/30 rounded-full">
                <div 
                  className="h-2 bg-terranode-emerald rounded-full animate-pulse-slow" 
                  style={{ width: '72%' }}
                />
              </div>
            </div>
          ) : (
            <div className="h-12 flex items-center justify-center">
              <Database className="h-5 w-5 text-terranode-emerald" />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
