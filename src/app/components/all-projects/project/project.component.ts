import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allProjectsList } from 'src/app/allArrays';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  selectedProject:any;

  ngOnInit(): void {
    let id = +!!this.route.snapshot.paramMap.get('id');
    this.selectedProject = allProjectsList.find(i => i.id === id);
  }


}
