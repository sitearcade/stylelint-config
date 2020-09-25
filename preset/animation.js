// export

module.exports = {
  plugins: ['stylelint-high-performance-animation'],

  rules: {
    'plugin/no-low-performance-animation-properties': [true, {ignore: 'paint-properties'}],
  },
};
