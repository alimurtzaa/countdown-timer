alert("TO START THE COUNTDOWN ENTER THE DATE, MONTH, YEAR!");
let date = prompt("Enter date");
let month = prompt("Enter month");
let year = prompt("Enter year");

let final = new Date(`${date} ${month}, ${year} 00:00:00`).getTime();


setInterval(function (){
    let current = new Date().getTime();

    let diff = final - current;
    let days = Math.floor(diff/(1000*60*60*24));
    console.log(days);
    let hrs = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let min = Math.floor((diff%(1000*60*60))/(1000*60));
    let sec = Math.floor((diff%(1000*60))/(1000));

    days = days < 10 ? "0"+ days : days;
    hrs = hrs < 10 ? "0"+ hrs : hrs;
    min = min < 10 ? "0"+ min : min;
    sec = sec < 10 ? "0"+ sec : sec;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hrs;
    document.getElementById("minutes").textContent = min;
    document.getElementById("seconds").textContent = sec;
} ,1000);


