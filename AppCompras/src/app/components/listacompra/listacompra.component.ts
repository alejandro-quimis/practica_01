import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../../services/compras/compras.service';

@Component({
  selector: 'app-listacompra',
  templateUrl: './listacompra.component.html',
  styleUrls: ['./listacompra.component.css']
})
export class ListacompraComponent implements OnInit {

  public compras:[] = [];
  constructor(public _comprasService: ComprasService) {
    
    _comprasService.lista().subscribe((e: any) => {
      this.compras = e;
    });
   }

  ngOnInit() {
  }

}
