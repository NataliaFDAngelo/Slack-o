import { Injectable } from "@angular/core";
import { Channel } from "./channel";

@Injectable({
    providedIn: 'root'   
})

export class ChannelService{

    retrieveAll(): Channel[] {
        return CHANNELS;
    }
   
}

var CHANNELS: Channel[] = [
    {
    id: 1,
    channelName: "Impacta",
    nickname: "Natalia",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, provident alias! Aspernatur error, voluptas incidunt illo ratione labore facere hic voluptatibus quia ipsam qui fuga vel repellat iste exercitationem sunt."
  },
  {
    id: 2,
    channelName: "Python",
    nickname: "Leonardo",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, provident alias! Aspernatur error, voluptas incidunt illo ratione labore facere hic voluptatibus quia ipsam qui fuga vel repellat iste exercitationem sunt."
  },
  {
    id: 3,
    channelName: "Diversos",
    nickname: "Rodrigo",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, provident alias! Aspernatur error, voluptas incidunt illo ratione labore facere hic voluptatibus quia ipsam qui fuga vel repellat iste exercitationem sunt."
  },
  {
    id: 4,
    channelName: "Pet",
    nickname: "Leia",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, provident alias! Aspernatur error, voluptas incidunt illo ratione labore facere hic voluptatibus quia ipsam qui fuga vel repellat iste exercitationem sunt."
  },
  {
    id: 5,
    channelName: "Pet",
    nickname: "Leia",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, provident alias! Aspernatur error, voluptas incidunt illo ratione labore facere hic voluptatibus quia ipsam qui fuga vel repellat iste exercitationem sunt."
  }
];
