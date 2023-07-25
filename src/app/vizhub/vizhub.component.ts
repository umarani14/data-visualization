import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vizhub',
  templateUrl: './vizhub.component.html',
  styleUrls: ['./vizhub.component.css']
})
export class VizhubComponent {
  constructor(private router: Router) { }

  backToHome() {
      this.router.navigate(['home'])
  }
}
