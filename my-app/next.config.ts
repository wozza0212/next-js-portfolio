import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digimon.shadowsmith.com",
        port: "",
        pathname: "/img/**",
        search: "",
      },
    ],
  },
  /* config options here */
};

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "/digimon.shadowsmith.com/",
//         port: "",
//         pathname: "/img/**",
//         search: "",
//       },
//     ],
//   },
// };

export default nextConfig;
