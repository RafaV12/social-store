module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'warn',
    'no-console': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either', // either check for `htmlFor` or `nesting`
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
  },
};
