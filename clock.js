

function updateclock(){

    const now = new Date()

    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours%12 || 12; // this line is used to convert 24 hour format to 12 hour format
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`
    document.getElementById("clock").textContent = timestring;
}

setInterval(updateclock, 1000);