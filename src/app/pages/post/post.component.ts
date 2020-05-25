import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  mensajes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.mensajes = this.dataService.getData();

      // .subscribe((data: any[]) => {
      //   this.mensajes = data;
      //   console.log(data);
      // });
  }

  escuchaClick(id: number) {
    console.log(`Click en ${id}`);
  }
}
