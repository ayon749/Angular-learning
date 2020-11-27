import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="Server is not created";
  serverName='Severtwo';
  serverCreated=false;
  servers=['server1','server 2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  OnCreateServer()
  {
    this.servers.push(this.serverName);
    this.serverCreated=true;
    this.serverCreationStatus="Server was created and server name is "+this.serverName;
  }

  

}
