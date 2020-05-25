import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-singular',
  templateUrl: './post-singular.component.html',
  styleUrls: ['./post-singular.component.css']
})
export class PostSingularComponent implements OnInit {

  @Input() mensaje: any;
  @Output() clickPostSingular = new EventEmitter<number>(); //

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPostSingular.emit( this.mensaje.id );
  }

}
