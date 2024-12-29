// import React, { useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Camera, Play, Pause, RotateCw } from 'lucide-react'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// export const CameraGrid = () => {
//   const [cameras, setCameras] = useState([
//     { id: 1, name: "Front Door", status: "Online", isPlaying: false },
//     { id: 2, name: "Back Yard", status: "Offline", isPlaying: false },
//     { id: 3, name: "Living Room", status: "Online", isPlaying: false },
//     { id: 4, name: "Kitchen", status: "Online", isPlaying: false },
//     { id: 5, name: "Garage", status: "Online", isPlaying: false },
//     { id: 6, name: "Driveway", status: "Offline", isPlaying: false },
//   ])

//   const togglePlayPause = (id) => {
//     setCameras(cameras.map(camera => 
//       camera.id === id ? { ...camera, isPlaying: !camera.isPlaying } : camera
//     ))
//   }

//   const refreshCamera = (id) => {
//     setCameras(cameras.map(camera => 
//       camera.id === id ? { ...camera, status: "Online" } : camera
//     ))
//   }

//   return (
//     <Card className="bg-background/10 backdrop-blur-md border-0 shadow-lg">
//       <CardHeader>
//         <CardTitle>Camera Feeds</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {cameras.map((camera) => (
//             <Card key={camera.id} className="bg-background/10 backdrop-blur-md border-0 shadow-lg">
//               <CardContent className="p-4">
//                 <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center mb-2">
//                   <Camera className="h-12 w-12 text-muted-foreground/50" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2 text-foreground">{camera.name}</h3>
//                 <p className={`text-sm ${camera.status === 'Online' ? 'text-green-400' : 'text-red-400'}`}>
//                   {camera.status}
//                 </p>
//                 <div className="mt-4 flex justify-between">
//                   <Button 
//                     variant="outline" 
//                     size="sm" 
//                     onClick={() => togglePlayPause(camera.id)}
//                     disabled={camera.status === 'Offline'}
//                     className="bg-background/20 hover:bg-background/40 border-0"
//                   >
//                     {camera.isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
//                     {camera.isPlaying ? 'Pause' : 'Play'}
//                   </Button>
//                   <Button 
//                     variant="outline" 
//                     size="sm" 
//                     onClick={() => refreshCamera(camera.id)}
//                     disabled={camera.status === 'Online'}
//                     className="bg-background/20 hover:bg-background/40 border-0"
//                   >
//                     <RotateCw className="h-4 w-4 mr-2" />
//                     Refresh
//                   </Button>
//                   <CameraDetailsDialog camera={camera} />
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// const CameraDetailsDialog = ({ camera }) => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button 
//           variant="outline" 
//           size="sm"
//           className="bg-background/20 hover:bg-background/40 border-0"
//         >
//           Details
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="bg-background/80 backdrop-blur-md border-0">
//         <DialogHeader>
//           <DialogTitle>{camera.name} Details</DialogTitle>
//         </DialogHeader>
//         <div className="space-y-4">
//           <p className="text-foreground">
//             <strong>Status:</strong>{' '}
//             <span className={camera.status === 'Online' ? 'text-green-400' : 'text-red-400'}>
//               {camera.status}
//             </span>
//           </p>
//           <p className="text-foreground"><strong>Resolution:</strong> 1080p</p>
//           <p className="text-foreground"><strong>Frame Rate:</strong> 30 fps</p>
//           <p className="text-foreground"><strong>Last Maintenance:</strong> 2023-05-15</p>
//           <p className="text-foreground"><strong>IP Address:</strong> 192.168.1.{camera.id}</p>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Play, Pause, RotateCw } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Paper } from '@mui/material'

export const CameraGrid = () => {
  const [cameras, setCameras] = useState([
    { id: 1, name: "Front Door", status: "Online", isPlaying: false },
    { id: 2, name: "Back Yard", status: "Offline", isPlaying: false },
    { id: 3, name: "Living Room", status: "Online", isPlaying: false },
    { id: 4, name: "Kitchen", status: "Online", isPlaying: false },
    { id: 5, name: "Garage", status: "Online", isPlaying: false },
    { id: 6, name: "Driveway", status: "Offline", isPlaying: false },
  ])

  const togglePlayPause = (id) => {
    setCameras(cameras.map(camera => 
      camera.id === id ? { ...camera, isPlaying: !camera.isPlaying } : camera
    ))
  }

  const refreshCamera = (id) => {
    // Simulate a camera refresh
    setCameras(cameras.map(camera => 
      camera.id === id ? { ...camera, status: "Online" } : camera
    ))
  }

  return (
    <Paper>
    <Card className="">
      <CardHeader>
        <CardTitle>Camera Feeds</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cameras.map((camera) => (
            <Card key={camera.id}>
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                  <Camera className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{camera.name}</h3>
                <p className={`text-sm ${camera.status === 'Online' ? 'text-green-500' : 'text-red-500'}`}>
                  {camera.status}
                </p>
                <div className="mt-4 flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => togglePlayPause(camera.id)}
                    disabled={camera.status === 'Offline'}
                  >
                    {camera.isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {camera.isPlaying ? 'Pause' : 'Play'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => refreshCamera(camera.id)}
                    disabled={camera.status === 'Online'}
                  >
                    <RotateCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                  <CameraDetailsDialog camera={camera} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
    </Paper>
  )
}

const CameraDetailsDialog = ({ camera }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{camera.name} Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p><strong>Status:</strong> {camera.status}</p>
          <p><strong>Resolution:</strong> 1080p</p>
          <p><strong>Frame Rate:</strong> 30 fps</p>
          <p><strong>Last Maintenance:</strong> 2023-05-15</p>
          <p><strong>IP Address:</strong> 192.168.1.{camera.id}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

