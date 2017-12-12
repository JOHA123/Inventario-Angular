import { InventarioPage } from './app.po';

describe('inventario App', () => {
  let page: InventarioPage;

  beforeEach(() => {
    page = new InventarioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
