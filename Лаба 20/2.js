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
let address = prompt('Введите адрес этого... как его:');
let numberOfSpots = prompt('Введите количество седух:');
let phoneNumber = prompt('Введите телефон парковки:');
let cost = prompt('Введите стоимость парковки:');
let parkingLot = new Parking(address, numberOfSpots, phoneNumber, cost);
console.log(parkingLot.getDetails());