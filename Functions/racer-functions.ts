import { IRacer } from "../Interfaces/IRacer";
import { SolarCar } from "../Classes/SolarCar";
import { GasCar } from "../Classes/GasCar";

export function findRacersWithEmptyFuel(racers:IRacer[]) : IRacer[] {
    let emptyFuelArray: IRacer[] = [];

    for(let r = 0; r <= racers.length; r++){
       if(racers[r].isFuelEmpty()){
            emptyFuelArray.push(racers[r]);
       }
    } 
    return emptyFuelArray;  
 }

export function findAverageSpeed(racers:IRacer[]): number {
    let num:number = 0;

    if(racers.length === 0){
        return 0;
    }

    for(let racer of racers) {
        num += racer.speed;
        };
        return num / racers.length;       
}

export function getFasterRacer(racerA:IRacer, racerB:IRacer) : IRacer | null {
    if(racerA.speed > racerB.speed){
        return racerA;
    }
    else if(racerA.speed < racerB.speed){
        return racerB;
    }
    else{
        return null;
    }
 }



