import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
  @Input() datos: any;

  constructor() { }

  ngOnInit(){
  }

}
