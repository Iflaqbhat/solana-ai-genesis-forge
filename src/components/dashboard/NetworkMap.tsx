
import { useState, useEffect } from 'react';

type Node = {
  id: string;
  x: number;
  y: number;
  size: number;
  status: 'active' | 'inactive' | 'syncing';
};

const generateNodes = (count: number): Node[] => {
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    nodes.push({
      id: `node-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      status: Math.random() > 0.85 
        ? 'syncing' 
        : Math.random() > 0.15 
          ? 'active' 
          : 'inactive'
    });
  }
  return nodes;
};

const NetworkMap = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  
  useEffect(() => {
    setNodes(generateNodes(50));
    
    // Simulate node status changes
    const interval = setInterval(() => {
      setNodes(prevNodes => {
        return prevNodes.map(node => {
          if (Math.random() > 0.95) {
            return {
              ...node,
              status: ['active', 'syncing', 'inactive'][Math.floor(Math.random() * 3)] as Node['status']
            };
          }
          return node;
        });
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Status color mapping
  const getStatusColor = (status: Node['status']) => {
    switch (status) {
      case 'active': return 'bg-terranode-emerald';
      case 'inactive': return 'bg-terranode-amber';
      case 'syncing': return 'bg-terranode-indigo';
      default: return 'bg-muted';
    }
  };
  
  return (
    <div className="h-[300px] bg-card-gradient rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(#115E59_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {nodes.map(node => (
        <div
          key={node.id}
          className={`absolute rounded-full animate-pulse-slow ${getStatusColor(node.status)}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size * 10}px`,
            height: `${node.size * 10}px`,
            opacity: node.status === 'inactive' ? 0.5 : 0.8,
            boxShadow: node.status === 'active' 
              ? `0 0 8px ${node.size * 2}px rgba(5, 150, 105, 0.3)` 
              : node.status === 'syncing'
                ? `0 0 8px ${node.size * 2}px rgba(79, 70, 229, 0.3)`
                : 'none'
          }}
        />
      ))}
      
      <div className="absolute bottom-4 right-4 bg-card py-1 px-3 rounded-md text-xs text-muted-foreground border border-terranode-slate/30">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-terranode-emerald rounded-full mr-1"></span>
            <span>Active</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-terranode-indigo rounded-full mr-1"></span>
            <span>Syncing</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-terranode-amber rounded-full mr-1"></span>
            <span>Inactive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
