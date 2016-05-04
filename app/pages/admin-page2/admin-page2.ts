import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/admin-page2/admin-page2.html'
})
export class AdminPage2 {
  constructor(public nav: NavController) {}

  goToCustomerSection() {
    this.nav.rootNav.pop();
  }
}
