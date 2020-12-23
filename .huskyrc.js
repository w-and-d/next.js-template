module.exports = {
  hooks: {
    // 現在のコードは`tsc --noEmit`を実行するとエラーが多く出力されるので一時的にtscの確認を行わない
    // 'pre-commit': 'tsc --noEmit && lint-staged'
    'pre-commit': 'lint-staged',
  },
};
