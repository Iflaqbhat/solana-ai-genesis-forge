
import { useState } from 'react';
import { Bell, Wallet, Sun, Moon, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  return (
    <header className="border-b border-terranode-slate/30 bg-card/70 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4 w-1/3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search nodes, analytics, stats..." 
              className="pl-10 bg-terranode-slate/20 border-terranode-slate/30 w-full"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-terranode-slate/20 relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-terranode-amber rounded-full"></span>
          </button>
          
          <Button variant="outline" size="sm" className="gap-2 border-terranode-slate/30">
            <Wallet className="h-4 w-4" />
            <span>Connect Wallet</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-full hover:bg-terranode-slate/20">
                {isDarkMode ? (
                  <Moon className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Sun className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setIsDarkMode(false)}>
                <Sun className="h-4 w-4 mr-2" />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsDarkMode(true)}>
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="h-8 w-8 rounded-full bg-terranode-teal flex items-center justify-center text-white font-medium">
            TN
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
