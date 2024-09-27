// /**
//  * @type {import("@types/eslint").Linter.BaseConfig}
//  */
// module.exports = {
//   extends: ['@remix-run/eslint-config', 'plugin:hydrogen/recommended'],
//   rules: {
//     'hydrogen/prefer-image-component': 'off',
//     'no-useless-escape': 'off',
//     'no-case-declarations': 'off',
//     'no-console': ['warn', {allow: ['warn', 'error']}],
//   },
// };
/**
 * @type {import("@types/eslint").Linter.BaseConfig}
 */
module.exports = {
  extends: ['@remix-run/eslint-config', 'plugin:hydrogen/recommended'],
  plugins: ['import'], // 确保这里包含 import 插件
  rules: {
    'hydrogen/prefer-image-component': 'off',
    'no-useless-escape': 'off',
    'no-case-declarations': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};