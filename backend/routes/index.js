import routes from './calc.cjs';

const constructorMethod = (app) => {
  app.use('', routes);
  app.use('*', (req, res) => {
    res.status(404).json({error: 'Route Not found'});
  });
};

export default constructorMethod;