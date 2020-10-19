
import fs from "fs";
import scss from "rollup-plugin-scss"
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const isProd = process.env.NODE_ENV === "production";

function copyAndWatch(fileIn, fileOut) {
    return {
        name: "copy-and-watch",
        async buildStart() {
            this.addWatchFile(fileIn);
        },
        async generateBundle() {
            this.emitFile({
                type: "asset",
                fileName: fileOut,
                source: fs.readFileSync(fileIn)
            });
        }
    }
}

export default {
    input: "src/js/main.js",
    output: [
      {
        file: "dist/main.js",
        format: "cjs"
      },
      {
        file: "dist/main.min.js",
        format: "iife",
        name: "version",
      }
    ],
    plugins: [
        scss({
            include: ["src/**/*.scss"],
            watch: "src/styles"
        }),
        copyAndWatch("src/index.html", "index.html"),
        babel({ babelHelpers: "bundled" }),
        isProd && terser()
    ]
};