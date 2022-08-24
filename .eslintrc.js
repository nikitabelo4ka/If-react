module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'max-len': 'off',
        'no-alert': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'jest/no-deprecated-functions': 'off',
    },
    extends: 'airbnb-base',
    plugins: ['babel', 'import', 'react'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
};
