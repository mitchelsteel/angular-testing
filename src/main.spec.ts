import { App } from './main';

describe('App', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  it('should have initial count of 0', () => {
    expect(app.count()).toBe(0);
  });

  it('should update count after 3 seconds', (done) => {
    setTimeout(() => {
      expect(app.count()).toBe(1);
      done();
    }, 3000);
  });

  it('should calculate doubleCount correctly', () => {
    expect(app.doubleCount()).toBe(0);
    app.count.set(2);
    expect(app.doubleCount()).toBe(4);
  });
});
