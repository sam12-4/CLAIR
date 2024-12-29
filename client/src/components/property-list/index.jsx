// import React, { useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Plus, Search, Edit, Trash } from 'lucide-react'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Label } from "@/components/ui/label"

// export const PropertyList = () => {
//   const [properties, setProperties] = useState([
//     { id: 1, address: "123 Main St", owner: "John Doe", cameras: 2, lastCleaned: "2023-06-15" },
//     { id: 2, address: "456 Elm St", owner: "Jane Smith", cameras: 1, lastCleaned: "2023-06-14" },
//     { id: 3, address: "789 Oak Ave", owner: "Bob Johnson", cameras: 3, lastCleaned: "2023-06-13" },
//   ])
//   const [searchTerm, setSearchTerm] = useState("")

//   const filteredProperties = properties.filter(property => 
//     property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     property.owner.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   const addProperty = (newProperty) => {
//     setProperties([...properties, { id: properties.length + 1, ...newProperty }])
//   }

//   return (
//     <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
//       <CardHeader>
//         <div className="flex justify-between items-center">
//           <CardTitle>Property List</CardTitle>
//           <div className="flex space-x-2">
//             <div className="relative">
//               <Input 
//                 type="text" 
//                 placeholder="Search properties..." 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 bg-background/40 backdrop-blur-sm"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//             </div>
//             <AddPropertyDialog onAddProperty={addProperty} />
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredProperties.map((property) => (
//             <div 
//               key={property.id} 
//               className="rounded-lg border bg-background/40 backdrop-blur-sm shadow-sm p-4"
//             >
//               <h3 className="font-semibold text-lg mb-2 text-foreground">{property.address}</h3>
//               <p className="text-sm text-muted-foreground">Owner: {property.owner}</p>
//               <p className="text-sm text-muted-foreground">Cameras: {property.cameras}</p>
//               <p className="text-sm text-muted-foreground">Last Cleaned: {property.lastCleaned}</p>
//               <div className="mt-4 flex justify-end space-x-2">
//                 <Button 
//                   variant="secondary" 
//                   size="sm"
//                   className="bg-background/50 hover:bg-background/80"
//                 >
//                   <Edit className="h-4 w-4 mr-2" />
//                   Edit
//                 </Button>
//                 <Button 
//                   variant="secondary" 
//                   size="sm" 
//                   className="bg-background/50 hover:bg-background/80 text-rose-500 hover:text-rose-600"
//                 >
//                   <Trash className="h-4 w-4 mr-2" />
//                   Delete
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </div>
//   )
// }

// const AddPropertyDialog = ({ onAddProperty }) => {
//   const [newProperty, setNewProperty] = useState({ address: '', owner: '', cameras: 0, lastCleaned: '' })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onAddProperty(newProperty)
//     setNewProperty({ address: '', owner: '', cameras: 0, lastCleaned: '' })
//   }

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
//           <Plus className="h-4 w-4 mr-2" />
//           Add Property
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="bg-background/95 backdrop-blur-sm">
//         <DialogHeader>
//           <DialogTitle>Add New Property</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="address">Address</Label>
//             <Input 
//               id="address" 
//               value={newProperty.address} 
//               onChange={(e) => setNewProperty({...newProperty, address: e.target.value})}
//               required 
//               className="bg-background/50"
//             />
//           </div>
//           <div>
//             <Label htmlFor="owner">Owner</Label>
//             <Input 
//               id="owner" 
//               value={newProperty.owner} 
//               onChange={(e) => setNewProperty({...newProperty, owner: e.target.value})}
//               required 
//               className="bg-background/50"
//             />
//           </div>
//           <div>
//             <Label htmlFor="cameras">Number of Cameras</Label>
//             <Input 
//               id="cameras" 
//               type="number" 
//               value={newProperty.cameras} 
//               onChange={(e) => setNewProperty({...newProperty, cameras: parseInt(e.target.value)})}
//               required 
//               className="bg-background/50"
//             />
//           </div>
//           <div>
//             <Label htmlFor="lastCleaned">Last Cleaned Date</Label>
//             <Input 
//               id="lastCleaned" 
//               type="date" 
//               value={newProperty.lastCleaned} 
//               onChange={(e) => setNewProperty({...newProperty, lastCleaned: e.target.value})}
//               required 
//               className="bg-background/50"
//             />
//           </div>
//           <Button type="submit" className="w-full">Add Property</Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Paper } from "@mui/material";
import { Label } from "@/components/ui/label";

export const PropertyList = () => {
  const [properties, setProperties] = useState([
    { id: 1, address: "123 Main St", owner: "John Doe", cameras: 2, lastCleaned: "2023-06-15" },
    { id: 2, address: "456 Elm St", owner: "Jane Smith", cameras: 1, lastCleaned: "2023-06-14" },
    { id: 3, address: "789 Oak Ave", owner: "Bob Johnson", cameras: 3, lastCleaned: "2023-06-13" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties.filter(
    (property) =>
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addProperty = (newProperty) => {
    setProperties([...properties, { id: properties.length + 1, ...newProperty }]);
  };

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Property List</CardTitle>
          <div className="flex space-x-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            <AddPropertyDialog onAddProperty={addProperty} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="rounded-lg border bg-background/50 shadow-md p-4 hover:bg-background/70 transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-foreground">{property.address}</h3>
              <p className="text-sm text-muted-foreground">Owner: {property.owner}</p>
              <p className="text-sm text-muted-foreground">Cameras: {property.cameras}</p>
              <p className="text-sm text-muted-foreground">Last Cleaned: {property.lastCleaned}</p>
              <div className="mt-4 flex justify-end space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-background/50 hover:bg-background/80 text-foreground"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-background/50 hover:bg-background/80 text-rose-500 hover:text-rose-600"
                >
                  <Trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Paper>
  );
};

const AddPropertyDialog = ({ onAddProperty }) => {
  const [newProperty, setNewProperty] = useState({
    address: "",
    owner: "",
    cameras: 0,
    lastCleaned: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProperty(newProperty);
    setNewProperty({ address: "", owner: "", cameras: 0, lastCleaned: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background text-foreground shadow-lg rounded-lg border border-muted-foreground backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Add New Property</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="address" className="text-muted-foreground">
              Address
            </Label>
            <Input
              id="address"
              value={newProperty.address}
              onChange={(e) => setNewProperty({ ...newProperty, address: e.target.value })}
              required
              className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="owner" className="text-muted-foreground">
              Owner
            </Label>
            <Input
              id="owner"
              value={newProperty.owner}
              onChange={(e) => setNewProperty({ ...newProperty, owner: e.target.value })}
              required
              className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="cameras" className="text-muted-foreground">
              Number of Cameras
            </Label>
            <Input
              id="cameras"
              type="number"
              value={newProperty.cameras}
              onChange={(e) => setNewProperty({ ...newProperty, cameras: parseInt(e.target.value) })}
              required
              className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <Label htmlFor="lastCleaned" className="text-muted-foreground">
              Last Cleaned Date
            </Label>
            <Input
              id="lastCleaned"
              type="date"
              value={newProperty.lastCleaned}
              onChange={(e) => setNewProperty({ ...newProperty, lastCleaned: e.target.value })}
              required
              className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Add Property
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};


// import React, { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Plus, Search, Edit, Trash } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Paper } from "@mui/material";
// import { Label } from "@/components/ui/label";

// export const PropertyList = () => {
//   const [properties, setProperties] = useState([
//     { id: 1, address: "123 Main St", owner: "John Doe", cameras: 2, lastCleaned: "2023-06-15" },
//     { id: 2, address: "456 Elm St", owner: "Jane Smith", cameras: 1, lastCleaned: "2023-06-14" },
//     { id: 3, address: "789 Oak Ave", owner: "Bob Johnson", cameras: 3, lastCleaned: "2023-06-13" },
//   ]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredProperties = properties.filter(
//     (property) =>
//       property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       property.owner.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const addProperty = (newProperty) => {
//     setProperties([...properties, { id: properties.length + 1, ...newProperty }]);
//   };

//   return (
//     <Paper elevation={3} className="p-6 bg-background/10 rounded-lg shadow-md">
//       <CardHeader>
//         <div className="flex justify-between items-center">
//           <CardTitle className="text-lg font-semibold">Property List</CardTitle>
//           <div className="flex space-x-2">
//             <div className="relative">
//               <Input
//                 type="text"
//                 placeholder="Search properties..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary rounded-md"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
//             </div>
//             <AddPropertyDialog onAddProperty={addProperty} />
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredProperties.map((property) => (
//             <div
//               key={property.id}
//               className="rounded-lg border shadow-lg p-4 hover:bg-background/30 transition"
//             >
//               <h3 className="font-semibold text-lg mb-2 text-foreground">{property.address}</h3>
//               <p className="text-sm text-muted-foreground">Owner: {property.owner}</p>
//               <p className="text-sm text-muted-foreground">Cameras: {property.cameras}</p>
//               <p className="text-sm text-muted-foreground">Last Cleaned: {property.lastCleaned}</p>
//               <div className="mt-4 flex justify-end space-x-2">
//                 <Button
//                   variant="secondary"
//                   size="sm"
//                   className="bg-background/50 hover:bg-background/80 text-foreground"
//                 >
//                   <Edit className="h-4 w-4 mr-2" />
//                   Edit
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   size="sm"
//                   className="bg-background/50 hover:bg-background/80 text-rose-500 hover:text-rose-600"
//                 >
//                   <Trash className="h-4 w-4 mr-2" />
//                   Delete
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Paper>
//   );
// };

// const AddPropertyDialog = ({ onAddProperty }) => {
//   const [newProperty, setNewProperty] = useState({
//     address: "",
//     owner: "",
//     cameras: 0,
//     lastCleaned: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddProperty(newProperty);
//     setNewProperty({ address: "", owner: "", cameras: 0, lastCleaned: "" });
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
//           <Plus className="h-4 w-4 mr-2" />
//           Add Property
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="bg-background text-foreground shadow-lg rounded-lg border border-muted-foreground backdrop-blur-md">
//         <DialogHeader>
//           <DialogTitle className="text-lg font-bold">Add New Property</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="address" className="text-muted-foreground">
//               Address
//             </Label>
//             <Input
//               id="address"
//               value={newProperty.address}
//               onChange={(e) => setNewProperty({ ...newProperty, address: e.target.value })}
//               required
//               className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
//             />
//           </div>
//           <div>
//             <Label htmlFor="owner" className="text-muted-foreground">
//               Owner
//             </Label>
//             <Input
//               id="owner"
//               value={newProperty.owner}
//               onChange={(e) => setNewProperty({ ...newProperty, owner: e.target.value })}
//               required
//               className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
//             />
//           </div>
//           <div>
//             <Label htmlFor="cameras" className="text-muted-foreground">
//               Number of Cameras
//             </Label>
//             <Input
//               id="cameras"
//               type="number"
//               value={newProperty.cameras}
//               onChange={(e) => setNewProperty({ ...newProperty, cameras: parseInt(e.target.value) })}
//               required
//               className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
//             />
//           </div>
//           <div>
//             <Label htmlFor="lastCleaned" className="text-muted-foreground">
//               Last Cleaned Date
//             </Label>
//             <Input
//               id="lastCleaned"
//               type="date"
//               value={newProperty.lastCleaned}
//               onChange={(e) => setNewProperty({ ...newProperty, lastCleaned: e.target.value })}
//               required
//               className="bg-background/50 text-foreground border border-muted-foreground focus:ring-primary focus:border-primary"
//             />
//           </div>
//           <Button
//             type="submit"
//             className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
//           >
//             Add Property
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

