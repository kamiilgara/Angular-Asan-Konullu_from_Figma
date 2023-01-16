import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allProjectsList } from 'src/app/allArrays';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  selectedProject:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get('id');
    this.selectedProject = allProjectsList.find(i => i.id == id) ;
  }

}