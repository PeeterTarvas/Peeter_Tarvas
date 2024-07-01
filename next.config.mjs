/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Peeter_Tarvas",
    output: "export",
    reactStrictMode: true,
    images: {
        domains: ['example.com'],
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