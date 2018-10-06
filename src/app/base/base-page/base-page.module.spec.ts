import { BasePageModule } from './base-page.module';

describe('BasePageModule', () => {
  let basePageModule: BasePageModule;

  beforeEach(() => {
    basePageModule = new BasePageModule();
  });

  it('should create an instance', () => {
    expect(basePageModule).toBeTruthy();
  });
});
