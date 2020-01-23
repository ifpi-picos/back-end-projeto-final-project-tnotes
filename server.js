const Config = require('./src/config/config');
const setupApp = require('./src/app');

const PORTA = process.env.PORT || 3000;

setupApp()
  .then((app) => app.listen(PORTA, () => console.info(`app running on port ${Config.PORT}`)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
