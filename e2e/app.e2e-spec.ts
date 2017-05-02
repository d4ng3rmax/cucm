import { CucmPage } from './app.po';

describe('cucm App', () => {
  let page: CucmPage;

  beforeEach(() => {
    page = new CucmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cucm works!');
  });
});
