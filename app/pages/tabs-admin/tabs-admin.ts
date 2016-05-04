import {Page, NavController} from 'ionic-angular';
import {AdminPage1} from '../admin-page1/admin-page1';
import {AdminPage2} from '../admin-page2/admin-page2';

@Page({
  templateUrl: 'build/pages/tabs-admin/tabs-admin.html'
})
export class TabsAdminPage {
  adminRoot1: any = AdminPage1;
  adminRoot2: any = AdminPage2;
  constructor(public nav: NavController) {}
}
