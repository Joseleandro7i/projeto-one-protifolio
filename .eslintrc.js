module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'jsx-a11y', 
    'prettier'
  ],
  rules: {
    'jsx-a11y/alt-text': 2,
    'jsx-a11y/anchor-has-content': 2,
    'prettier/prettier': 'error',
  },
};
