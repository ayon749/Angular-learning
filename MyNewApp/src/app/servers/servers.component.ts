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

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  OnCreateServer()
  {
    this.serverCreationStatus="Server was created and server name is "+this.serverName;
  }

  

}
