import axios from 'axios';
import express from 'express';

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language: string;
  owner: {
    id: number;
    login: string;
    avatar_url: string;
  },
}

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
        const { data } = await axios.get<Repository[]>(`${this.API_URL}/users/takenet/repos?&sort=created&direction=asc`);

        const response = data.filter((repo) => repo.language === 'C#').slice(0, 5);

        return res.status(200).json(response);
      } catch (error: any) {
        console.log(error.message);
        return res.status(200).json({ message: 'Internal server error' });
      }
    });
  }

  public start(PORT: string | number) {
    this.app.listen(PORT, () => {
      console.log(`This server is running on port: ${PORT}`);
    });
  }
}
