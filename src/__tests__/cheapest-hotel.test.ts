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
    let travelDates = [new Date('2009-03-26'), new Date('2009-03-27'), new Date('2009-03-28')];
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
    regularMap: Map<number, number>;
    rewardsMap: Map<number, number>;
    days_Map: Map<CustomerType, Map<number, number>>;
    rating: number;
    constructor(name: string, rating: number, [...rates]) {
        let [regular_weekday, rewards_weekday, regular_weekend, rewards_weekend] = [...rates];
        this.name = name;
        this.rating = rating;
        this.regular_weekday = regular_weekday;
        this.rewards_weekday = rewards_weekday;
        this.regular_weekend = regular_weekend;
        this.rewards_weekend = rewards_weekend;
        this.regularMap = new Map([
            [0, regular_weekend],
            [1, regular_weekday],
            [2, regular_weekday],
            [3, regular_weekday],
            [4, regular_weekday],
            [5, regular_weekday],
            [6, regular_weekend]
        ]);
        this.rewardsMap = new Map([
            [0, rewards_weekend],
            [1, rewards_weekday],
            [2, rewards_weekday],
            [3, rewards_weekday],
            [4, rewards_weekday],
            [5, rewards_weekday],
            [6, rewards_weekend]


        ]);
        this.days_Map = new Map([
            [CustomerType.Regular, this.regularMap],
            [CustomerType.Rewards, this.rewardsMap]
        ]);
    }

    findTariff(customerType: CustomerType, travelDates: Array<Date>) {
        let sum = 0;
        if (travelDates != null) {
            travelDates.map(date => {
                sum += this.days_Map.get(customerType).get(date.getDay());
            });

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