
let parkingLot = {};

class Parking {
    constructor(address, numberOfSpots, phoneNumber, cost) {
        this.address = address;
        this.numberOfSpots = numberOfSpots;
        this.phoneNumber = phoneNumber;
        this.cost = cost;
    }
    getDetails() {
        return `Address: ${this.address}, 
        Number of spots: ${this.numberOfSpots}, 
        Phone number: ${this.phoneNumber}, 
        Cost: ${this.cost}`;
    }
}
function getAllStringProperties(obj) {
    let stringProperties = {};
    for (let prop in obj) {
        if (typeof obj[prop] === 'string') {
            stringProperties[prop] = obj[prop];
        }
    }
    return stringProperties;
}
function convertToJSON() {
    let address = prompt('Введите адрес этого... как его:');
    let numberOfSpots = prompt('Введите количество седух:');
    let phoneNumber = prompt('Введите телефон парковки:');
    let cost = prompt('Введите стоимость парковки:');
    parkingLot = new Parking(address, numberOfSpots, phoneNumber, cost);
    let jsonData = JSON.stringify(parkingLot);
    console.log(jsonData);
    let parsedObject = JSON.parse(jsonData);
    console.log(getAllStringProperties(parsedObject));
}