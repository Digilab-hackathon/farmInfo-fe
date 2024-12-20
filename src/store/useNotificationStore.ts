import { create } from 'zustand'

// 알림 객체 구조 정의
interface Notification {
  id: number
  message: string
  isRead: boolean
}

// 알림 상태 관리하는 데 필요한 데이터와 메서드 정의
interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  initializeNotifications: (notifications: Notification[]) => void
  addNotification: (notification: Notification) => void
  markAsRead: (id: number) => void
}

// 알림 상태 관리하는 스토어
export const useNotificationStore = create<NotificationState>(set => ({
  notifications: [],
  unreadCount: 0,
  initializeNotifications: notifications =>
    set({
      notifications,
      unreadCount: notifications.filter(notif => !notif.isRead).length
    }),
  addNotification: notification =>
    set(state => ({
      notifications: [...state.notifications, notification],
      unreadCount: state.unreadCount + 1
    })),
  markAsRead: id =>
    set(state => ({
      notifications: state.notifications.map(notif =>
        notif.id === id ? { ...notif, isRead: true } : notif
      ),
      unreadCount: state.unreadCount - 1
    }))
}))
