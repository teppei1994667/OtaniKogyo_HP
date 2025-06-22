import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config, {}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ApiClient: path.resolve(
        __dirname,
        "node_modules/sib-api-v3-sdk/src/ApiClient"
      ),
      model: path.resolve(__dirname, "node_modules/sib-api-v3-sdk/src/model"),
      // "api" 以下のモジュールも修正
      api: path.resolve(__dirname, "node_modules/sib-api-v3-sdk/src/api"),
    };
    return config;
  },
};

export default nextConfig;
