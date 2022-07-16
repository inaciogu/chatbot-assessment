import express from 'express';

export default class App {
  public app: express.Express

  public API_URL: string

  constructor(API_URL = 'https://api.github.com') {
    this.app = express();
    this.API_URL = API_URL;
    this.router();
  }

  private router() {
    this.app.get('/', async (_req, res) => {
      try {
        //
      } catch (error: any) {
        console.log(error.message);
      }
    });
  }

  public start(PORT: string | number) {
    this.app.listen(PORT, () => {
      console.log(`This server is running on port: ${PORT}`);
    });
  }
}
