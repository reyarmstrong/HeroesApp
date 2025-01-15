import { Component } from '@angular/core';

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
  ]

}
