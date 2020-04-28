import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = 'Offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {}
  getServerStatus = () => this.serverStatus;

  getColor = () => {
    return this.serverStatus === 'online' ? 'green' : 'red';
  };
}
