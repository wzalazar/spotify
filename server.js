const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

import Artists from './server/models/Artists';
import Images from './server/models/Images';
import Albums from './server/models/Albums';
import Tracks from './server/models/Tracks';

import { Graphite } from '@graphite/apollo-express';
const graphQLServer = Graphite.graphQLServer({ graphql: { PORT: 3000 }}, [ Artists, Albums, Tracks, Images ]);

app.prepare()
.then(() => {
  graphQLServer.get('/', async (req, res) => {
    const actualPage = '/index';
    app.render(req, res, actualPage);
  });

  graphQLServer.get('/about', async (req, res) => {
    const actualPage = '/about';
    app.render(req, res, actualPage);
  });

  graphQLServer.get('/commands', async (req, res) => {
    const actualPage = '/commands';
    app.render(req, res, actualPage);
  });

  graphQLServer.get('*', (req, res) => {
    return handle(req, res);
  });
})
.catch((ex) => {
  /* eslint-disable no-console */
  console.error(ex.stack);
  /* eslint-enable no-console */
  process.exit(1);
});
