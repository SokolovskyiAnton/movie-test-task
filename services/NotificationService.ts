import { ElNotification } from "element-plus";

type NotificationTypes = 'info' | 'warning' | 'error';
export class NotificationService {
  static showMessage(text: string, type: NotificationTypes = 'error') {
    ElNotification({
      message: text,
      type: type
    })
  }
}