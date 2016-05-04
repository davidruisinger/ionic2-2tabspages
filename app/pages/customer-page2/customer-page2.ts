import {Page, NavController} from 'ionic-angular';
import {TabsAdminPage} from '../tabs-admin/tabs-admin';

@Page({
  templateUrl: 'build/pages/customer-page2/customer-page2.html'
})
export class CustomerPage2 {
  constructor(public nav: NavController) {}

  goToAdminSection() {
    this.nav.rootNav.push(TabsAdminPage);
  }
}
