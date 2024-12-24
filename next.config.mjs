/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    if (process.env.NODE_ENV === "production") {
      return [
        // Basic redirect
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "theladakhavenue.com", // Replace with your non-www domain
            },
          ],
          destination: "https://www.theladakhavenue.com", // Redirect to the www version
          permanent: true,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
