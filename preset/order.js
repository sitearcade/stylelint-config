// vars

const orderBy = [
  'at-variables',
  'dollar-variables',
  'custom-properties',
  'less-mixins',
  'declarations',
  'rules',
  'at-rules',
];

// export

module.exports = {
  plugins: ['stylelint-order'],

  rules: {
    'order/order': [orderBy],
    'order/properties-order': null,
    'order/properties-alphabetical-order': null,
  },
};
