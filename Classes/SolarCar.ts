import { IRacer } from "../Interfaces/IRacer";

export class SolarCar implements IRacer {

    team:string;
    speed:number=0;

    constructor(team:string){
        this.team=team;
    }
    isFuelEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

    accelerate():void {
        this.speed += 1;
    } 
    isfuelEmpty():boolean{
        return false;
    }
}