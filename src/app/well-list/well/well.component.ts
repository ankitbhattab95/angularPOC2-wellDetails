import { Component, OnInit,Input,Output,EventEmitter,ViewChild, ElementRef} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {
  wellForm = new FormGroup({});
  
  @Input() clickedSourceId: number;
  @Output() reset= new EventEmitter<{name:string,type:string,source:number}>();
  @ViewChild('name', { static: true }) name:ElementRef; 
  @ViewChild('type', { static: true }) type:ElementRef; 
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.reset.emit({name:this.name.nativeElement.value,
                    type:this.type.nativeElement.value,
                    source:this.clickedSourceId});
    // console.log("child"+' '+this.name.nativeElement.value);
    // console.log("child"+' '+this.type.nativeElement.value);
  }
}
