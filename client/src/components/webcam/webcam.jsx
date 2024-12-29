import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function WebcamPopup({ onClose }) {
  const videoRef = useRef(null)
  const [stream, setStream] = useState(null)

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
          setStream(stream)
        })
        .catch(err => console.error("Error accessing webcam:", err))
    }

    return () => {
      stopCamera()
    }
  }, [])

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
  }

  const handleClose = () => {
    stopCamera()
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#2a2b33] rounded-lg overflow-hidden shadow-xl max-w-2xl w-full mx-4"
      >
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-auto rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c24] to-transparent pointer-events-none" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-white hover:bg-white hover:bg-opacity-20"
            onClick={handleClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="p-4 bg-[#1b1c24] bg-opacity-80 backdrop-blur-md">
          <h2 className="text-xl font-semibold text-white mb-2">Webcam Feed</h2>
          <p className="text-gray-300 text-sm">
            This is your live webcam feed. You can use this to monitor your surrounding.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

