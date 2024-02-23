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

let parkingLot = new Parking('Beep Street', 121, '88005553535', '$300');
console.log(parkingLot.getDetails());