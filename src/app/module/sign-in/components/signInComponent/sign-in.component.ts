import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

 public username : any = '';
 public password : any = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  navigateToSingUp(){
    this.router.navigate(['/signUp'], {relativeTo: this.route})
  }

  navigateBackToSingIn(){
    this.router.navigate(['/Password'], {relativeTo: this.route})
  }

  submit(){
    if(this.username === '' || this.password === ''
    ){
      alert('please fill in all field')
    }else{
      this.router.navigate(['/productPage'], {relativeTo: this.route})
    }
  }
}
