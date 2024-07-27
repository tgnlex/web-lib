async function postFormData(url = "", data={}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors", // cors, no-cors, or same-origin
    cache: "default",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data,
  })
}

