import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  queryString: string = '';
  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.databaseService.getHighestDepartmentSalary();

  }

}
