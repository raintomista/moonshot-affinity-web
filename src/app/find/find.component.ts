import { Component, OnInit } from '@angular/core';
import { FindService } from '../services/find.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  find: any = {
    max_age: '',
    min_age: '',
    username: '',
    location: ''
  };

  constructor(private findService: FindService) { }

  ngOnInit() {
  }

  onSubmitTemplateBased() {
    console.log(this.find)
    this.findService.get_user_stats(this.find.username).subscribe(data => {
      console.log(data);
    });
  }

}
