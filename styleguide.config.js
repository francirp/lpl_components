const path = require('path');
const docgen = require('react-docgen');

module.exports = {
  title: 'LPL Components',
  updateWebpackConfig: webpackConfig => {
    webpackConfig.entry.push(path.join(__dirname, 'src/css/master.scss'));
    webpackConfig.module.loaders.push(
      {
        test: /(\.js$|\.jsx$)/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /(\.scss$|\.sass$)/,
        include: /src/,
        loaders: ['style', 'css', 'sass']
      }
    );
    return webpackConfig;
  },
  sections: [
    { name: 'Grid', components: 'src/js/framework/grid/**/*.js' },
    { name: 'Elements', components: 'src/js/framework/elements/**/*.js' },
    { name: 'Components', components: 'src/js/framework/components/**/*.js' },
    { name: 'Layout', components: 'src/js/framework/layout/**/*.js' },
  ],
  skipComponentsWithoutExample: true,
  getExampleFilename: componentpath => componentpath.replace(/\.js$/, '.examples.md'),
  resolver: docgen.resolver.findAllComponentDefinitions,
  styleguideDir: 'docs'
};

