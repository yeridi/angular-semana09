import { Component, ViewChild } from '@angular/core';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  /* variables */
  art={
    codigo:0,
    descripcion:'',
    precio:''
  }
  articulos = [
    {codigo:1, descripcion:'Peru Kola', precio:'1.00'},
    {codigo:2, descripcion:'Inka Kola', precio:'1.50'},
    {codigo:3, descripcion:'Coca Kola', precio:'2.00'},
    {codigo:4, descripcion:'Jhon Walker', precio:'2.30'},
    {codigo:5, descripcion:'Agua Cielo', precio:'1.20'},
  ];

  registros(){
    return this.articulos.length>0;
  }
  delete(art:any){
    for(let x=0;x <this.articulos.length;x++){
      if(this.articulos[x].codigo == art.codigo){
        this.articulos.splice(x,1);
        return;
      }
    }
  }
  add(){
    for(let x=0;x<this.articulos.length;x++){
      if(this.articulos[x].codigo==this.art.codigo){
        alert("there is a article with that Code :(")
        return;
      }
    }  
    this.articulos.push({
      codigo:this.art.codigo,
      descripcion:this.art.descripcion,
      precio: this.art.precio
    });
    this.art.codigo=0;
    this.art.descripcion='';
    this.art.precio=''; 
  }
  select(art:any){
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio= art.precio;
  }
  modificar(){
    for(let x=0;x<this.articulos.length;x++){
      if(this.articulos[x].codigo = this.art.codigo){
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio = this.art.precio
        return;
      }
    }
    alert('Sorry, the code not exits')
  }
}
