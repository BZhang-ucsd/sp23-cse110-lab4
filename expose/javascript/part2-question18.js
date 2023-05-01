function printTime() {
    const d = new Date();
    const time = d.toLocaleTimeString();
    console.log(time);
}
  
setInterval(printTime, 1000);