import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers({
  paths,
}: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      pages: path.resolve(paths.src, "pages"),
    },
  };
}
