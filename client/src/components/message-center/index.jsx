import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

export const MessageCenter = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", message: "When is the next cleaning scheduled?", time: "10:30 AM", isRead: true },
    { id: 2, sender: "System", message: "Camera offline at 456 Elm St", time: "11:45 AM", isRead: false },
    { id: 3, sender: "Jane Smith", message: "Can we reschedule tomorrow's cleaning?", time: "2:15 PM", isRead: false },
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isRead: true
      }])
      setNewMessage("")
    }
  }

  return (
    <Card className="h-[calc(100vh-2rem)] bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Message Center</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full">
        <ScrollArea className="flex-1 pr-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-start space-x-3 p-3 ${message.isRead ? 'bg-muted/50' : 'bg-primary/20'} rounded-lg mb-2`}>
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.sender}`} />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{message.sender}</p>
                <p className="text-sm text-muted-foreground">{message.message}</p>
              </div>
              <div className="flex-shrink-0 text-xs text-muted-foreground">{message.time}</div>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={sendMessage} className="mt-4">
          <Label htmlFor="newMessage" className="sr-only">New Message</Label>
          <div className="flex mt-2">
            <Input 
              id="newMessage" 
              placeholder="Type your message..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="ml-2">Send</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
