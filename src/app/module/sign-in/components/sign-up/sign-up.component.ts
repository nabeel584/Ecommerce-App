import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import routes from 'src/app/routes';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public firstName : any = '';
  public lastName : any = '';
  public email : any = '';
  public password : any = '';
  public confirmPassword : any = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  navigateToSingIn(){
    this.router.navigate(['/signIn'], {relativeTo: this.route})
  }

  navigateBackToSingIn(){
    this.router.navigate(['/Password'], {relativeTo: this.route})
  }


  submit(){
    console.log(this.password);
  }
}
