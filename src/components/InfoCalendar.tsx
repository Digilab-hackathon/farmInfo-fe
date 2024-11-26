'use client'

import dayjs from 'dayjs'
import { Calendar, dayjsLocalizer, ToolbarProps } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

interface Event {
  title: string
  start: Date
  end: Date
}

interface Resource {
  someField: unknown
}

const events: Event[] = [
  {
    title: '회의',
    start: dayjs('2024-11-25T10:00:00').toDate(),
    end: dayjs('2024-11-25T12:00:00').toDate()
  },
  {
    title: '프로젝트 개발',
    start: dayjs('2024-11-26').toDate(),
    end: dayjs('2024-11-28').toDate()
  }
]

const CustomToolbar = (toolbar: ToolbarProps<Event, Resource>) => {
  const label = dayjs(toolbar.label).format('YYYY년 MM월')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <button onClick={() => toolbar.onNavigate('PREV')}>{'<'}</button>
      <button onClick={() => toolbar.onNavigate('TODAY')}>{label}</button>
      <button onClick={() => toolbar.onNavigate('NEXT')}>{'>'}</button>
    </div>
  )
}

const InfoCalendar = () => {
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        views={['month']}
        defaultView="month"
        startAccessor="start"
        endAccessor="end"
        components={{
          toolbar: CustomToolbar
        }}
      />
    </div>
  )
}

export default InfoCalendar
