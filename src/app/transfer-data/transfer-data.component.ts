import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transfer-data',
  templateUrl: './transfer-data.component.html',
  styleUrls: ['./transfer-data.component.css']
})
export class TransferDataComponent implements OnInit {

@Input() userName
@Input() personalInfo
@Input() arrayData
@Output() callParent :EventEmitter <any>  =new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log('arrayData=>>>', this.arrayData)
  }


  onClick(){
    this.callParent.emit('hello')

  }
}
