import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: false,

  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  sidebarItems = [
    {
      label: 'List',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Add',
      icon: 'add',
      url: './new-hero'
    },
    {
      label: 'Search',
      icon: 'search',
      url: './search'
    },
  ];

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
