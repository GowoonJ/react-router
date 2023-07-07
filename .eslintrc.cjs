module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-curly-spacing': [1,
        {
          when: 'never',
          children: true
        }
      ],
    },
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      }
      // {
      //   selector: 'typeParameter',
      //   format: ['PascalCase'],
      //   prefix: ['T']
      // }
    ]
}
