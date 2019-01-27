module.exports = {
    siteMetadata: {
        title: 'Belarusian cinematography portal',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
    ],
};
