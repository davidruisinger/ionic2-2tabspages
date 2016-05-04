import {App, Platform, IonicApp} from 'ionic-angular';
import {Type} from 'angular2/core';

import {TabsCustomerPage} from './pages/tabs-customer/tabs-customer';

@App({
  template: '<ion-nav id="root-nav" [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: Type = TabsCustomerPage;

  constructor(platform: Platform, public app: IonicApp) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }
}
