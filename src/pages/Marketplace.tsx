
import MainLayout from '@/components/layout/MainLayout';
import { Search, Filter, SlidersHorizontal, Grid3X3, ListFilter, ShoppingCart, Award } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Card, CardContent, CardFooter, CardHeader, CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const categories = [
  { name: 'Mining Hardware', count: 42 },
  { name: 'Cooling Solutions', count: 18 },
  { name: 'Power Supplies', count: 24 },
  { name: 'Node Accessories', count: 35 },
  { name: 'Network Devices', count: 16 },
  { name: 'Software Licenses', count: 9 },
];

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  isFeatured?: boolean;
  inStock: boolean;
  efficiency?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'TerraNode TX3 Miner',
    description: 'High-performance mining hardware with optimized energy consumption.',
    price: 1299.99,
    rating: 4.8,
    image: 'miner-1',
    category: 'Mining Hardware',
    isFeatured: true,
    inStock: true,
    efficiency: 'A+'
  },
  {
    id: 2,
    name: 'Arctic Cooling System',
    description: 'Advanced cooling solution for mining operations in any environment.',
    price: 349.99,
    rating: 4.6,
    image: 'cooling-1',
    category: 'Cooling Solutions',
    inStock: true,
    efficiency: 'A'
  },
  {
    id: 3,
    name: 'PowerMax 1500W PSU',
    description: 'Reliable power supply unit with 80+ Platinum certification.',
    price: 249.99,
    rating: 4.7,
    image: 'psu-1',
    category: 'Power Supplies',
    inStock: true,
    efficiency: 'A+'
  },
  {
    id: 4,
    name: 'NetBoost Signal Amplifier',
    description: 'Enhance network connectivity for remote mining operations.',
    price: 89.99,
    rating: 4.4,
    image: 'network-1',
    category: 'Network Devices',
    inStock: true
  },
  {
    id: 5,
    name: 'TerraNode Pro Software License',
    description: 'Advanced mining software with AI optimization capabilities.',
    price: 199.99,
    rating: 4.9,
    image: 'software-1',
    category: 'Software Licenses',
    isFeatured: true,
    inStock: true
  },
  {
    id: 6,
    name: 'MiningRack 12-Bay',
    description: 'Professional rack for organizing multiple mining devices.',
    price: 179.99,
    rating: 4.5,
    image: 'accessory-1',
    category: 'Node Accessories',
    inStock: false
  },
];

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Marketplace</h1>
            <p className="text-muted-foreground">Hardware, software and services for your mining operations</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1 border-terranode-slate/30">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart (0)</span>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-64 space-y-6">
            <div className="bg-card-gradient rounded-lg border border-terranode-teal/30 p-4">
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-between font-normal hover:bg-terranode-slate/20">
                    <span>All Products</span>
                    <span className="text-muted-foreground">{products.length}</span>
                  </Button>
                </li>
                {categories.map((category) => (
                  <li key={category.name}>
                    <Button variant="ghost" className="w-full justify-between font-normal hover:bg-terranode-slate/20">
                      <span>{category.name}</span>
                      <span className="text-muted-foreground">{category.count}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card-gradient rounded-lg border border-terranode-teal/30 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Filters</h3>
                <Button variant="ghost" size="sm" className="h-8 p-0">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Price Range</h4>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number" 
                      placeholder="Min" 
                      className="h-8 bg-terranode-slate/20 border-terranode-slate/30" 
                    />
                    <span>-</span>
                    <Input 
                      type="number" 
                      placeholder="Max" 
                      className="h-8 bg-terranode-slate/20 border-terranode-slate/30" 
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Energy Efficiency</h4>
                  <div className="space-y-1">
                    {['A+', 'A', 'B', 'C'].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`efficiency-${rating}`}
                          className="mr-2"
                        />
                        <label htmlFor={`efficiency-${rating}`} className="text-sm">
                          {rating}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Availability</h4>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="in-stock"
                        className="mr-2"
                        defaultChecked
                      />
                      <label htmlFor="in-stock" className="text-sm">
                        In Stock
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="out-of-stock"
                        className="mr-2"
                      />
                      <label htmlFor="out-of-stock" className="text-sm">
                        Out of Stock
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-terranode-emerald hover:bg-terranode-emerald/90">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10 bg-terranode-slate/20 border-terranode-slate/30" 
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1 border-terranode-slate/30">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Sort</span>
                </Button>
                
                <Tabs 
                  value={viewMode} 
                  onValueChange={(v) => setViewMode(v as 'grid' | 'list')} 
                  className="w-[100px]"
                >
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="grid" className="p-2">
                      <Grid3X3 className="h-4 w-4" />
                    </TabsTrigger>
                    <TabsTrigger value="list" className="p-2">
                      <ListFilter className="h-4 w-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products
                  .filter(product => product.isFeatured)
                  .map(product => (
                    <Card key={product.id} className="bg-card-gradient border-terranode-teal/30 card-hover">
                      <CardHeader className="p-4 pb-0">
                        <div className="w-full h-48 bg-terranode-slate/20 rounded-md mb-3 flex items-center justify-center">
                          <div className="text-4xl text-terranode-emerald">
                            {product.category === 'Mining Hardware' && '🖥️'}
                            {product.category === 'Cooling Solutions' && '❄️'}
                            {product.category === 'Power Supplies' && '⚡'}
                            {product.category === 'Network Devices' && '📡'}
                            {product.category === 'Software Licenses' && '💿'}
                            {product.category === 'Node Accessories' && '🔧'}
                          </div>
                        </div>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          {product.efficiency && (
                            <Badge variant="outline" className="bg-terranode-emerald/20 text-terranode-emerald border-terranode-emerald/30">
                              {product.efficiency}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-lg font-bold">{product.price} SOL</p>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-terranode-amber mr-1" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full bg-terranode-emerald hover:bg-terranode-emerald/90">
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">All Products</h2>
              <TabsContent value="grid" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map(product => (
                    <Card key={product.id} className="bg-card-gradient border-terranode-teal/30 card-hover">
                      <CardHeader className="p-4 pb-0">
                        <div className="w-full h-36 bg-terranode-slate/20 rounded-md mb-3 flex items-center justify-center">
                          <div className="text-4xl text-terranode-emerald">
                            {product.category === 'Mining Hardware' && '🖥️'}
                            {product.category === 'Cooling Solutions' && '❄️'}
                            {product.category === 'Power Supplies' && '⚡'}
                            {product.category === 'Network Devices' && '📡'}
                            {product.category === 'Software Licenses' && '💿'}
                            {product.category === 'Node Accessories' && '🔧'}
                          </div>
                        </div>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          {product.efficiency && (
                            <Badge variant="outline" className="bg-terranode-emerald/20 text-terranode-emerald border-terranode-emerald/30">
                              {product.efficiency}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-lg font-bold">{product.price} SOL</p>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-terranode-amber mr-1" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button 
                          className="w-full bg-terranode-emerald hover:bg-terranode-emerald/90"
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list" className="mt-0">
                <div className="space-y-4">
                  {products.map(product => (
                    <Card key={product.id} className="bg-card-gradient border-terranode-teal/30 card-hover">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex items-center justify-center">
                          <div className="w-full h-36 bg-terranode-slate/20 rounded-md flex items-center justify-center">
                            <div className="text-4xl text-terranode-emerald">
                              {product.category === 'Mining Hardware' && '🖥️'}
                              {product.category === 'Cooling Solutions' && '❄️'}
                              {product.category === 'Power Supplies' && '⚡'}
                              {product.category === 'Network Devices' && '📡'}
                              {product.category === 'Software Licenses' && '💿'}
                              {product.category === 'Node Accessories' && '🔧'}
                            </div>
                          </div>
                        </div>
                        <div className="md:w-3/4 p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg">{product.name}</h3>
                            {product.efficiency && (
                              <Badge variant="outline" className="bg-terranode-emerald/20 text-terranode-emerald border-terranode-emerald/30">
                                {product.efficiency}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4">{product.description}</p>
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                              <div className="text-lg font-bold">{product.price} SOL</div>
                              <div className="flex items-center">
                                <Award className="h-4 w-4 text-terranode-amber mr-1" />
                                <span className="text-sm">{product.rating}</span>
                              </div>
                            </div>
                            <Button 
                              className="mt-4 md:mt-0 bg-terranode-emerald hover:bg-terranode-emerald/90"
                              disabled={!product.inStock}
                            >
                              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Marketplace;
