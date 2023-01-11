import { GasCar } from "../Classes/GasCar";

describe("describeGasCar class here", () => {
  
    test("The team and fuel properties are set from the constructor parameter", () => {
        const newGasCar = new GasCar("Cristi",3);

        expect(newGasCar.team).toBe("Cristi");
        expect(newGasCar.fuel).toBe(3);
    })

    test("fuel defaults to 10, when the second constructor parameter is omitted", () => {
        const newGasCar = new GasCar("Cristi");
        
        expect(newGasCar.fuel).toBe(10);
    })

    test("The speed property starts at 0", () => {
        const newGasCar = new GasCar("Cristi",3);
        
        expect(newGasCar.speed).toBe(0);
    })

    test("Calling accelerate once brings speed to 2", () => {
        const newGasCar = new GasCar("Cristi",3);
        
        newGasCar.accelerate();

        expect(newGasCar.speed).toBe(2);

    })

    test("Calling accelerate twice brings speed to 4", () => {
        const newGasCar = new GasCar("Cristi",3);
        
        newGasCar.accelerate();
        newGasCar.accelerate();

        expect(newGasCar.speed).toBe(4);
    })

    test("Calling accelerate once reduces fuel by 1", () => {
        const newGasCar = new GasCar("Cristi",3);
        
        newGasCar.accelerate();

        expect(newGasCar.fuel).toBe(2);
    })

    test("Calling accelerate twice reduces fuel by 2", () => {
        const newGasCar = new GasCar("Cristi",3);
        
       newGasCar.accelerate();
       newGasCar.accelerate();

        expect(newGasCar.fuel).toBe(1);
    })

    test("isFuelEmpty returns true when fuel is 0", () => {
        const newGasCar = new GasCar("Cristi",0);
        
        expect(newGasCar.isfuelEmpty()).toBe(true);
    })

    test("isFuelEmpty returns false when fuel is greater than 0", () => {
        const newGasCar = new GasCar("Cristi",3);
        
        expect(newGasCar.isfuelEmpty()).toBe(false);
    })

})