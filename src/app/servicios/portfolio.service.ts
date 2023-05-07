import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<Persona> {

    return this.http.get<Persona>('https://portfoliovaleria.onrender.com/ver/miperfil');
    //return this.http.get<Persona>('http://localhost:8080/ver/miperfil');
    //return this.http.get('../assets/data/data.json');
  }
}
