module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'comma-dangle': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-no-bind': 'off'
    },
    'globals': {
        'fetch': false
    }
};
