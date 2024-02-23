
let currentDate = new Date();


let currentMonth = currentDate.getMonth();

let season;
if (currentMonth >= 2 && currentMonth <= 4) {
  season = "весна";
} else if (currentMonth >= 5 && currentMonth <= 7) {
  season = "лето";
} else if (currentMonth >= 8 && currentMonth <= 10) {
  season = "осень";
} else {
  season = "зима";
}


switch (season) {
  case "весна":
    console.log("К весне относятся месяцы март, апрель и май");
    break;
  case "лето":
    console.log("К лету относятся месяцы июнь, июль и август");
    break;
  case "осень":
    console.log("К осени относятся месяцы сентябрь, октябрь и ноябрь");
    break;
  case "зима":
    console.log("К зиме относятся месяцы декабрь, январь и февраль");
    break;
}
