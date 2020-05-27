const CountryInput = "Напишите страну доставки";
const Cancel = "Отмена доставки";
const China = "Китай";
const Australia = "Австралия";
const India = "Индия";
const Jamaica = "Ямайка";
const SouthAmerica = "Южная Америка";
const DeliveryPrice = `Доставка в ${country} будет стоить ${priсe} кредитов`;
const OutOfDelivery = "В вашей стране доставка не доступна";

let message = prompt(CountryInput);
let priсe;
let country;

if (message === null) {
  message = Cancel;
} else {
  message.toLowerCase();
  message.toUpperCase[0];

  switch (country) {
    case China:
      priсe = 100;
      message = DeliveryPrice;
      break;

    case SouthAmerica:
      priсe = 250;
      message = DeliveryPrice;
      break;

    case Australia:
      priсe = 170;
      message = DeliveryPrice;
      break;

    case India:
      priсe = 80;
      message = DeliveryPrice;
      break;

    case Jamaica:
      priсe = 120;
      message = DeliveryPrice;
      break;

    default:
      message = OutOfDelivery;
  }
}

alert(message);
