import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  userName = '';
  submittedName = '';
  constructor() {}

  ngOnInit(): void {}

  onNameSubmit = () => {
    this.submittedName = this.userName;
    this.userName = '';
  };

  isUserNameValid = () => {
    return !(this.userName === '');
  };
}
