module.exports = {
    plugins: {
        'postcss-modules': {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
        autoprefixer: {},
    },
};
