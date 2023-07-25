import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent {
  constructor(private router: Router) { }

  backToHome() {
      this.router.navigate(['home'])
  }
}
