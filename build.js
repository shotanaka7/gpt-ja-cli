import { build } from "esbuild";

build({
  entryPoints: ["bin/gpt-init.ts"],
  outfile: "dist/gpt-init.js",
  bundle: true,
  platform: "node",
  target: "node18",
  format: "esm",
  banner: {
    js: "#!/usr/bin/env node",
  },
});
