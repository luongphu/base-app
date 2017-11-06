import { FellowshipPage } from './app.po';

describe('fellowship App', () => {
  let page: FellowshipPage;

  beforeEach(() => {
    page = new FellowshipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
