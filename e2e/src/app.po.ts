import { browser, by, element } from 'protractor';

export class AppPage {
  /**
   * Add tsdoc
   * @todo
   */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /**
   * Add tsdoc
   * @todo
   */
  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
