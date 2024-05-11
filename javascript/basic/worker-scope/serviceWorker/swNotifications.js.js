navigator.serviceWorker.register("sw.js");

const options = { tag: "greeting", body: "Hello World!"};

navigator.serviceWorker.ready.then((registration) => {
  registration.getNotifications(options).then((notifications) => {
    // Do Something With Notifications
    console.log(notifications)
  })
})