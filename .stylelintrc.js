/** @type import('stylelint').Configuration */
module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
  ],
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'declaration-no-important': true,
  },
};
