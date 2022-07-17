import App from './app';
import 'dotenv';

const app = new App();

app.start(process.env.PORT || 3001);
