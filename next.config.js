const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    reactStrictMode: true,
    basePath: isProd ? '/youtube-transcriber' : '',
    trailingSlash: true
}
