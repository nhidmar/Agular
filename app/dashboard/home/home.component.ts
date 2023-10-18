import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../services/client-data.service';
import { InformacionCliente } from './../models/informacion-cliente';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../services/can-exit.service';
declare function initJsFromTs(): any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, CanComponentDeactivate {

  informacionCliente?: InformacionCliente;//cuando no se inicializa usar ?:
  guardarDatos = false; //A modo de ejemplo
  constructor(
    private ClientDataService: ClientDataService,
    private authService: AuthService,
    private router : Router,
  ) { 
    this.ClientDataService.getInformacionCliente()
      .subscribe( data => {
        console.log('informacionCliente > data:', data);
        this.informacionCliente = data
      })
  }

  ngOnInit(): void {
    initJsFromTs();

  }
  logout() : void{
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  canDeactivate() : boolean{
    let descartarCambios = true; 
    if(!this.guardarDatos){
   const descartarCambios = confirm('Hay cambios sin guardar, ¿Desea salir?');
   if(descartarCambios){
    this.authService.logout()
   }
   return descartarCambios;
     }
    
     return true;
  }

  


}
