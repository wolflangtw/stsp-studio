/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        DISCORD_CLIENT_ID: '1133696321828692078',
        DISCORD_CLIENT_SECRET: 'wigcWeEcpR4ulOC1ZUxgYT6Ag-_8VZL4',
    },
    async rewrites() {
        return [
            {
                source: '/Maps',
                destination: '/Maps/Map',
            },
            {
                source: '/About',
                destination: '/About/About',
            },
            {
                source: '/Copyright',
                destination: '/Copyright/Copyright'
            },
            {
                source: '/API/Team',
                destination: '/api/team.json',
            },
            {
                source: '/API/Map',
                destination: '/api/map.json',
            },
            {
                source: '/Join-us',
                destination: '/Join/Join',
            }
        ];
    },
}

module.exports = nextConfig
