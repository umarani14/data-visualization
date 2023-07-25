import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
  constructor(private router: Router) { }

  backToHome() {
      this.router.navigate(['home'])
  }
}
