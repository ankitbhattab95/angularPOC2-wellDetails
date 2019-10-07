import { Component, OnInit } from '@angular/core';
import { CommentStmt } from '@angular/compiler';
import { chainedInstruction } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {
  // wellDetail:{
  //   name:string,
  //   type:string,
  //   source:number
  // }
  clickedSource:number;
  wellDetails: Array<{
    name:string,
    type:string,
    source:number
  }>=[{
    name:"well1",
    type:"rls",
    source:1111
  },{
    name:"well2",
    type:"esp",
    source:2222
  },{
    name:"well3",
    type:"esp",
    source:3333
  }]
  
  constructor() { }

  ngOnInit() {
  }
  resetSource(event){
    this.wellDetails.push({name:event.name,
                            type:event.type,
                            source:event.source})
    this.clickedSource = undefined;
  }
  sourceClicked(event){
    this.clickedSource=event.target.innerHTML;
    // console.log(event.target.innerHTML)
  }
}
