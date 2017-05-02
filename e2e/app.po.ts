import { browser, element, by } from 'protractor';

export class CucmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cucm-root h1')).getText();
  }
}
