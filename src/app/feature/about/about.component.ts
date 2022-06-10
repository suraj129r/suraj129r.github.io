import { Component, OnInit } from '@angular/core';
import { PersonalInfo} from '../../shared/models/profile'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  products: any = []
  personalinfo: PersonalInfo = new PersonalInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
