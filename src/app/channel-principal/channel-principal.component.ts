import { Component, OnInit } from '@angular/core';
import { Channel } from './channel';
import { ChannelService } from './channel.service';

@Component({
  selector: 'app-channel-principal',
  templateUrl: './channel-principal.component.html',
  styleUrls: ['./channel-principal.component.css']
})

export class ChannelPrincipalComponent implements OnInit {

  

  filtreredChannel : Channel[] = [];

  _channels: Channel[] = [];

  _filterBy: string = '';

  inputChannel: string = '';

  inputName: string = '';

  inputMessage: string = '';
  
  constructor(private channelService : ChannelService){ }

  ngOnInit(): void {
    this._channels = this.channelService.retrieveAll();
    this.filtreredChannel = this._channels;
  }

  set filter(value: string){
    this._filterBy = value;

    this.filtreredChannel = this._channels.filter((channel: Channel) => channel.channelName.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

  }

  get filter() {
    return this._filterBy;
  }

  saveMessage() {
    alert('Salvando: \n' + 'Channel: ' +  this.inputChannel + ' \n Nickname: ' + this.inputName  + ' \n Message: ' + this.inputMessage);
  }

}
