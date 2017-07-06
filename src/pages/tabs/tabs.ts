import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ReditPage } from '../redit/redit';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ReditPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;
  
  constructor() {

  }
}
