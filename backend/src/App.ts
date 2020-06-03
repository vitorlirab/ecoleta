import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import Routes from './routes';

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes(): void {
    this.server.use(Routes);
    this.server.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
  }
}

export default new App().server;
