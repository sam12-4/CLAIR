import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react'

export const ScheduleCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState([
    { id: 1, date: '2023-06-15', title: 'Clean 123 Main St', time: '10:00 AM' },
    { id: 2, date: '2023-06-17', title: 'Clean 456 Elm St', time: '2:00 PM' },
    { id: 3, date: '2023-06-20', title: 'Clean 789 Oak Ave', time: '11:00 AM' },
  ])

  const addEvent = (newEvent) => {
    setEvents([...events, { id: events.length + 1, ...newEvent }])
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const days = new Date(year, month + 1, 0).getDate()
    return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1))
  }

  const days = getDaysInMonth(currentDate)

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <Card className="bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Cleaning Schedule</CardTitle>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-semibold">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <Button variant="outline" size="sm" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <AddEventDialog onAddEvent={addEvent} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-semibold text-muted-foreground">{day}</div>
          ))}
          {days.map((day, index) => (
            <div 
              key={index} 
              className="aspect-square border border-border rounded-md p-1 overflow-hidden bg-muted/30"
            >
              <div className="text-sm text-muted-foreground">{day.getDate()}</div>
              {events
                .filter(event => new Date(event.date).toDateString() === day.toDateString())
                .map(event => (
                  <div 
                    key={event.id} 
                    className="text-xs bg-primary/30 text-primary-foreground rounded px-1 mt-1 truncate"
                  >
                    {event.title}
                  </div>
                ))
              }
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const AddEventDialog = ({ onAddEvent }) => {
  const [newEvent, setNewEvent] = useState({ date: '', title: '', time: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddEvent(newEvent)
    setNewEvent({ date: '', title: '', time: '' })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Cleaning
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Schedule New Cleaning</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input 
              id="date" 
              type="date"
              value={newEvent.date} 
              onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title" 
              value={newEvent.title} 
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="time">Time</Label>
            <Input 
              id="time" 
              type="time"
              value={newEvent.time} 
              onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
              required 
            />
          </div>
          <Button type="submit">Add Cleaning</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

