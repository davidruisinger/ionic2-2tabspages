import {Page, NavController} from 'ionic-angular';
import {CustomerPage1} from '../customer-page1/customer-page1';
import {CustomerPage2} from '../customer-page2/customer-page2';


@Page({
  templateUrl: 'build/pages/tabs-customer/tabs-customer.html',
})
export class TabsCustomerPage {
  customerRoot1: any = CustomerPage1;
  customerRoot2: any = CustomerPage2;
  constructor(public nav: NavController) {}
}
