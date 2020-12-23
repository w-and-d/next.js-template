module.exports = {
  '*.tsx': ['eslint --max-warnings=0 --fix', 'stylelint --max-warnings=0 --fix', 'prettier -cw'],
  '*.ts': ['eslint --max-warnings=0 --fix', 'prettier -cw'],
  '*.js': ['prettier -cw'],
};
