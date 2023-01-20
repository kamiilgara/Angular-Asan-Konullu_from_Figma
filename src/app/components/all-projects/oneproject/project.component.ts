import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allProjectsList } from 'src/app/allArrays';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  selectedProject: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.selectedProject = allProjectsList.find(i => i.id == id);
  }

  increase(item: any, id: any) {
    if (id == allProjectsList.length - 0) {
      document.getElementById("nextnews")?.classList.add("disabled")
    } else {
      item = allProjectsList[id]
      item.id++
      this.selectedProject = item
      console.log(this.selectedProject)
      document.getElementById("prevnews")?.classList.remove("disabled")
    }
  };

  decrease(item: any, id: any) {
    if (id == 0) {
      document.getElementById("prevnews")?.classList.add("disabled")
    } else {
      item = allProjectsList[id]
      item.id--
      this.selectedProject = item
      console.log(this.selectedProject)
      document.getElementById('nextnews')?.classList.remove("disabled")
    }
  };

}