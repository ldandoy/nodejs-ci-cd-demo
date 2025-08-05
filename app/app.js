import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express in Docker!' });
});

export default app;