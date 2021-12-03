module.exports = {
  env: { node: true },
  extends: ['@bettor-faster/eslint-config', 'plugin:node/recommended'],
  rules: { 'node/no-mixed-requires': 'warn' }
}
