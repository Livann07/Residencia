import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormControlDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataDbService } from '../../services/data-db.service';
import { usersU } from '../../models/users.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
