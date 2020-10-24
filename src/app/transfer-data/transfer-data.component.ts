import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-transfer-data',
  templateUrl: './transfer-data.component.html',
  styleUrls: ['./transfer-data.component.css']
})
export class TransferDataComponent implements OnInit {

@Input() userName
@Input() personalInfo
  constructor() { }

  ngOnInit(): void {
  }

}
