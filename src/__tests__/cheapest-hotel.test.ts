test('should return Lakewood for regular customer on weekdays', () => {
    //given
    let customerType = CustomerType.Regular;
    let travelDates = [new Date('2009-03-16'), new Date('2009-03-17'), new Date('2009-03-18')]
    //when

    //then
    expect(findCheapestHotel(customerType, travelDates)).toBe('Lakewood');



});

test('should return Bridgewood for regular customer for weekdays and weekends', () => {
    //given
    let customerType = CustomerType.Regular;
    let travelDates = [new Date('2009-03-20'), new Date('2009-03-21'), new Date('2009-03-21')]
    //when

    //then
    expect(findCheapestHotel(customerType, travelDates)).toBe('Bridgewood');
})

test('should return Ridgewood for rewards customer on weekdays and weekends', () => {
    //given
    let customerType = CustomerType.Rewards;
    let travelDates = [new Date('2009-03-26'), new Date('2009-03-27'), new Date('2009-03-28')]
    //when

    //then
    expect(findCheapestHotel(customerType, travelDates)).toBe('Ridgewood');


})
enum CustomerType {
    Regular,
    Rewards
}

class Hotel {

    name: string;
    regular_weekday: number;
    rewards_weekday: number;
    regular_weekend: number;
    rewards_weekend: number;
    rating: number;
    constructor(name: string, rating: number, [...rates]) {
        let [regular_weekday, rewards_weekday, regular_weekend, rewards_weekend] = [...rates];
        this.name = name;
        this.rating = rating;
        this.regular_weekday = regular_weekday;
        this.rewards_weekday = rewards_weekday;
        this.regular_weekend = regular_weekend;
        this.rewards_weekend = rewards_weekend;
    }

    findTariff(customerType: CustomerType, travelDates: Array<Date>) {
        if (customerType == CustomerType.Regular) {
            let weekends = travelDates.filter(date => (date.getDay() == 0 || date.getDay() == 6));
            let weekdays = travelDates.filter(date => (date.getDay() != 0 && date.getDay() != 6));

            let sum = 0;

            if (weekends.length != 0) {
                for (let i = 0; i < weekends.length; i++) {
                    sum += this.regular_weekend;
                }
            }

            if (weekdays.length != 0) {
                for (let i = 0; i < weekdays.length; i++) {
                    sum += this.regular_weekday;
                }
            }
            console.log("hotel name:" + this.name + " " + sum)
            return sum;
        }

        if (customerType == CustomerType.Rewards) {

            let weekends = travelDates.filter(date => (date.getDay() == 0 || date.getDay() == 6));
            let weekdays = travelDates.filter(date => (date.getDay() != 0 && date.getDay() != 6));


            let sum = 0;

            if (weekends.length != 0) {

                for (let i = 0; i < weekends.length; i++) {
                    sum += this.rewards_weekend;

                }
            }

            if (weekdays.length != 0) {
                for (let i = 0; i < weekdays.length; i++) {
                    sum += this.rewards_weekday;
                }
            }
            console.log("hotel name:" + this.name + " " + sum)
            return sum;

        }
        return -1;
    }
}

function findCheapestHotel(customerType: CustomerType, travelDates: Array<Date>) {

    let hotels = [new Hotel('Lakewood', 3, [110, 80, 90, 80]),
    new Hotel('Bridgewood', 4, [160, 110, 60, 50]),
    new Hotel('Ridgewood', 5, [220, 100, 150, 40])
    ];
    let cheapestHotel = null;
    let cheapestTariff = 10000000;

    hotels.forEach(hotel => {
        console.log(hotel);
        let tariff = hotel.findTariff(customerType, travelDates);
        if (cheapestTariff > tariff) {
            cheapestTariff = tariff;
            cheapestHotel = hotel;
        } else if (cheapestTariff == tariff) {
            if (cheapestHotel.rating < hotel.rating) {
                cheapestHotel = hotel;
                cheapestTariff = tariff;
            }
        }
    });
    return cheapestHotel.name;

}