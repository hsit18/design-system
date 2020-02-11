const { NODE_ENV } = process.env;

module.exports = api => {
  api.cache(true);

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: process.env.BABEL_ENV === 'cjs' ? 'commonjs' : false,
          targets: {
            node: 10,
          },
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  };

  if (NODE_ENV === 'test') {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        ['@babel/plugin-transform-modules-commonjs', { loose: true }],
      ],
    };
  }
  return {
    ...config,
    plugins: [
      ...config.plugins,
      ['babel-plugin-styled-components', { displayName: true }],
    ],
  };
};
