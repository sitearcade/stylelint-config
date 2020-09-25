// export

module.exports = {
  root: true,
  processors: ['stylelint-processor-styled-components'],

  extends: [
    './preset/stylelint.js',
    './preset/order.js',
    './preset/animation.js',
    './preset/custom-media.js',

    'stylelint-config-styled-components', // always last!
  ],

  rules: {},
};