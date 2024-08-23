/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Peeter_Tarvas",
    output: "export",
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;