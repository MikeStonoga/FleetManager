import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { VolvoColors } from '@commons/colors';
import { ICONS } from '@commons/icons/icons';
import { TranslationService } from '@commons/translations/translation.service';
import { SdkIcon, SdkIconConfiguration } from "@sdk/icon/sdk-icon";
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SdkIcon
],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent 
implements OnInit {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  errorMessage = '';

  private router = inject(Router);
  private auth = inject(AuthenticationService);

  public readonly loginIcon = new SdkIconConfiguration({
    name: ICONS.Login,
    color: VolvoColors.Black
  });

  private readonly translationService = inject(TranslationService);
  public readonly userLabel = this.translationService.translation.login.user;
  public readonly passwordLabel = this.translationService.translation.login.password;
  public readonly enterLabel = this.translationService.translation.login.enter;

  ngOnInit() {
    this.auth.checkSession();
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/restricted-area']);
    }
  }


  submit() {
    const { username, password } = this.form.value;
    if (!username || !password) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    const success = this.auth.login(username, password);
    console.log('Login result:', success); // 👀

    if (!success) {
      this.errorMessage = 'Usuário ou senha inválidos.';
    }
  }

}
