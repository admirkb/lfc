import { LfcpModule } from './lfcp.module';

describe('LfcpModule', () => {
  let lfcpModule: LfcpModule;

  beforeEach(() => {
    lfcpModule = new LfcpModule();
  });

  it('should create an instance', () => {
    expect(lfcpModule).toBeTruthy();
  });
});
