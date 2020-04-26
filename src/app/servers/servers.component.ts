import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Init value';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer = () => {
    this.serverCreated = true;
    this.serverCreationStatus = `
    Server was created.
    Server name is ${this.serverName}.
    `;
  };
  onUpdateServerName = (event: Event) => {
    this.serverName = (<HTMLInputElement>event.target).value;
  };
}
