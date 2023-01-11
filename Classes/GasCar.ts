import { IRacer } from "../Interfaces/IRacer";

export class GasCar implements IRacer {
    team: string;
    speed: number=0;
    fuel: number;

    constructor(team:string,fuel:number=10){
        this.team=team;
        this.fuel= fuel;
    }
    isFuelEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

    accelerate(): void {
        this.speed += 2;
        this.fuel -= 1;
    } 

    isfuelEmpty(): boolean {
        if(this.fuel <=0){
            return true;
        } 
        return false;
    }
}