async function postJsonData(url = "", data={}) {
  const response = await fetch(url, {
    method: "POST", 
    mode: "cors", // cors, no-cors, or same-origin
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
    body: JSON.stringify(data)
  }); 
}
