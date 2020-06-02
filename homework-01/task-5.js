const CountryInput = "Напишите страну доставки";
const Cancel = "Отмена доставки";
const CHINA = "Китай";
const AUS = "Австралия";
const IND = "Индия";
const JAM = "Ямайка";
const SAMERICA = "Южная Америка";
const DeliveryPrice = `Доставка в ${country} будет стоить ${priсe} кредитов`;
const OutOfDelivery = "В вашей стране доставка не доступна";

let message = prompt(CountryInput);
let priсe;
let country;

if (message === null) {
  message = Cancel;
} else {
  const search = country[0].toUpperCase() + country.slice(1).toLowerCase();

  switch (search) {
    case CHINA:
      priсe = 100;
      message = DeliveryPrice;
      break;

    case SAMERICA:
      priсe = 250;
      message = DeliveryPrice;
      break;

    case AUS:
      priсe = 170;
      message = DeliveryPrice;
      break;

    case IND:
      priсe = 80;
      message = DeliveryPrice;
      break;

    case JAM:
      priсe = 120;
      message = DeliveryPrice;
      break;

    default:
      message = OutOfDelivery;
  }
}

alert(message);
