import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';
import { Producto } from 'src/app/models/producto';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-registrarcompra',
  templateUrl: './registrarcompra.component.html',
  styleUrls: ['./registrarcompra.component.css']
})
export class RegistrarcompraComponent implements OnInit {
  myControl = new FormControl();
  productos: Producto[];
  filteredOptions: Observable<string[]>;
  constructor(public _producto: ProductoService) {
   this._producto.lista().subscribe( (data: any) =>{
    this.productos = data;
    console.log(this.productos);
   });
  }


  ngOnInit() {
    /*this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );*/
  }
  /*private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.productos.filter(option => option.toLowerCase().includes(filterValue));
  }*/

}
