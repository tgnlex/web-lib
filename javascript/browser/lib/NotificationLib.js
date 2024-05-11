export const createNotification = (title, message) => {
  const notification = new Notification(title, {message});
  return notification;
}
export const sendNotification = (notification) => {
  let i = 0;
  const interval = setInterval(() => {
    notification;
    if (i === 9) {
      clearInterval(interval);
    }
    i++
  }, 200);
}
export const sendDefaultNotification = () => {
  let defaultNotification = createNotification("Blank Notification", "")
  sendNotification(defaultNotification)
}
const requestPermission = async () => {
  const permission = await Notification.requestPermission();
    if (permission === "granted") {
      return 1;
    } else if (permission === "denied") {
      console.log('Permission Request Denied')
      return 0;
    } else {
      console.log('Error occured while requesting permission')
      return 0;
    }
}
const validateAndSendNotification = (notification) => {
  if (notification === Notification) {
    console.log('[NotificationValidator]: Validation Passed! Calling sendNotification()')
    sendNotification(notification) 
  } else {
    console.log('[NotificationValidator]: Error! notification is not a valid Notification object')
  }
}

export const NotificationEvent = async (notification) => {
  console.log('[NotificationEvent]: Checking if Client Browser supports notifications...')
  if ("Notification" in window) {
    console.log('[NotificationEvent]: Checking initial permission setttings')
    // If Client Supports Notifications, Check Initial Perm Settings
    if (Notification.permission === "granted") {
      console.log('[NotificationEvent()]: Permission already granted, calling validator.')
      validateAndSendNotification(notification);
    } else {
      console.log('[NotificationEvent()]: User has not yet granted permission, Running permission request....')
      const perms = await requestPermission();
      console.log('[NotificationEvent]: Permisson Recieved! Calling validator.')
      if (perms === 1) {
        validateAndSendNotification(notification);
      }
    }
  } else {
    console.log("Client browser does not support desktop notifications")
  }
}

export const setNotificationListener = (selector, notification) => {
  const btn = document.querySelector(`${selector}`)
  btn.addEventListener('click', NotificationEvent(notification))
}
