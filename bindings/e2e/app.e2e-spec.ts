import { BindingsPage } from './app.po';

describe('bindings App', () => {
  let page: BindingsPage;

  beforeEach(() => {
    page = new BindingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
