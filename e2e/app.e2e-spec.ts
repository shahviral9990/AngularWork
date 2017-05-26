import { Ngdemo11Page } from './app.po';

describe('ngdemo11 App', () => {
  let page: Ngdemo11Page;

  beforeEach(() => {
    page = new Ngdemo11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
