import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio: any;
  persona : Persona = new Persona("","");
  constructor(private datosPortfolio:PortfolioService) { } //inyectamos el servicio para poder usar sus métodos

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.persona = data;
    });
  }

}
