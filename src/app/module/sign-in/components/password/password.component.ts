import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  navigateBackToSingIn(){
    this.router.navigate(['/Password'], {relativeTo: this.route})
  }

}
