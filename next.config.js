/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/(.*)",
                //source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    },
    //distDir: 'build',
    //output: 'export',
    reactStrictMode: true,
    swcMinify: false,
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
        '@mui/material': { 
            transform: '@mui/material/{{member}}',
        }
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        //unoptimized: true,
        remotePatterns: [
            // {
            //   protocol: 'https',
            //   hostname: 'comauto.com.br',
            //   port: '',
            //   pathname: '/catalogo/**',
            // },
            {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/**',
            },
        ],
    },
      // compiler: {
      //   styledComponents: true,
      // }
   
  }
    
  module.exports = nextConfig