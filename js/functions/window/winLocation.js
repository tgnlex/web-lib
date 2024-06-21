win = new Window()
location = Window.Location
function showLoc() {
  const logLines = [
    "Property (Typeof): Value",
    `location (${typeof location}): ${location}`,
  ];
  for (const prop in location) {
    logLines.push(
      `${prop} (${typeof location[prop]}): ${location[prop] || "n/a"}`,
    );
  }
  console.log(logLines.join("\n"));
}
