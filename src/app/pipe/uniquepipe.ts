import { Pipe, PipeTransform } from "@angular/core";
import { Channel } from "../channel-principal/channel";

@Pipe({
    name: 'filterUnique',
    pure: false
})

export class UniquePipe implements PipeTransform {
    transform(channelsNames: any[], filter: Channel): any{
        if (!channelsNames){
            return channelsNames;
        }
        return channelsNames.filter(channelsNames => channelsNames.channelName.indexOf(filter.channelName) !== -1);
    }
 
}