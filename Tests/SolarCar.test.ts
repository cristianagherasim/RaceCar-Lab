import { SolarCar } from "../Classes/SolarCar";

describe("describeSolarCar class here", () => {
  
    test("The team property is set from the constructor parameter", () => {
        const newSolarCar = new SolarCar("Cristi");
        expect(newSolarCar.team).toBe("Cristi");
    })

    test("The speed property starts at 0", () => {
        const newSolarCar = new SolarCar("Cristi");
        expect(newSolarCar.speed).toBe(0);
    })

    test("Calling accelerate once brings speed to 1", () => {
        const newSolarCar = new SolarCar("Cristi");
        
        newSolarCar.accelerate();
        
        expect(newSolarCar.speed).toBe(1);
    })

    test("Calling accelerate twice brings speed to 2", () => {
        const newSolarCar = new SolarCar("Cristi");

        newSolarCar.accelerate();
        newSolarCar.accelerate();

        expect(newSolarCar.speed).toBe(2);
    })

    test("isFuelEmpty returns false", () => {
        const newSolarCar = new SolarCar("Cristi");
        
        expect(newSolarCar.isfuelEmpty()).toBe(false);
    })


})