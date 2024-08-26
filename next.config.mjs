/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Peeter_Tarvas',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        loader: "akamai",
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;