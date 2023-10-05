import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromBracket, faBuildingColumns, faEnvelope, faShuffle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  faGooglePlusG = faGoogle
  faBuildingColumns = faBuildingColumns
  faArrowRigthFromBracket = faArrowRightFromBracket
  faShuffle = faShuffle
  faEmail = faEnvelope
  faUserPlus = faUserPlus
  password: string = ""
  email: string = ""

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }

  emailSignIn() {
    this.authService.SignIn(this.email, this.password)
    this.email = ""
    this.password = ""
  }

  emailSignUp() {
    this.authService.SignUp(this.email, this.password)
    this.email = ""
    this.password = ""
  }
}