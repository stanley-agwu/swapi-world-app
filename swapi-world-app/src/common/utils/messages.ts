interface NotificationItem {
  title: string;
  message: string;
}

interface INotification {
  error: NotificationItem;
  info: NotificationItem;
  success: NotificationItem;
}

export const Notification: INotification = {
  error: { title: 'Error', message: 'An error occurred while fetching data.' },
  info: { title: 'Information', message: 'Removed from favorites list.' },
  success: { title: 'Success', message: 'Added to favorites list.' },
};
