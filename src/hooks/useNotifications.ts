'use client'

import { useNotificationStore } from '@/store/useNotificationStore'
import { useEffect } from 'react'

export default function useNotifications() {
  const { initializeNotifications, addNotification } = useNotificationStore()

  useEffect(() => {
    ;(async () => {
      const notifications = await fetch('/api/notifications')
      initializeNotifications(await notifications.json())
    })()

    const eventSource = new EventSource('/api/notifications/event')
    eventSource.onmessage = event => {
      const newNotification = JSON.parse(event.data)
      addNotification(newNotification)
    }
    return () => eventSource.close()
  }, [initializeNotifications, addNotification])

  return null
}
