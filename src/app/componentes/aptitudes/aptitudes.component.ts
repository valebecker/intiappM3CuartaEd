import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  aptitudesList: any;
  constructor(private datosPortfolio:PortfolioService) { } //inyectamos el servicio para poder usar sus métodos

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      //this.aptitudesList = data.skills;
    });
  }
}
