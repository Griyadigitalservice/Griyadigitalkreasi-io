module.exports = {
    presets: [
        [
            'react-app',
            {
                runtime: 'automatic'
            }
        ]
    ],
    plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator'
    ]
};
