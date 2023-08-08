import path from "path";
import webpack from "webpack";
import {
  BuildEnv,
  BuildMode,
  BuildOptions,
  BuildPaths,
} from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv): webpack.Configuration => {
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
  };

  return buildWebpackConfig(buildOptions);
};
