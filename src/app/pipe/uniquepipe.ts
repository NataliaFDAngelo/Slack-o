import { Pipe, PipeTransform } from "@angular/core";
import { Channel } from "../channel-principal/channel";

@Pipe({
    name: 'filterUnique'
})

export class UniquePipe implements PipeTransform {
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace)
    }
 
}