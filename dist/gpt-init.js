#!/usr/bin/env tsx
#!/usr/bin/env node

// bin/gpt-init.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var root = process.cwd();
function copyIfNotExists(srcName, dstName) {
  const src = path.resolve(__dirname, "..", srcName);
  const dst = path.resolve(root, dstName);
  if (!fs.existsSync(dst)) {
    fs.copyFileSync(src, dst);
    console.log(`\u2705 ${dstName} \u3092\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u76F4\u4E0B\u306B\u751F\u6210\u3057\u307E\u3057\u305F`);
  } else {
    console.log(`\u2139\uFE0F ${dstName} \u306F\u3059\u3067\u306B\u5B58\u5728\u3057\u307E\u3059\uFF08\u30B9\u30AD\u30C3\u30D7\uFF09`);
    if (dstName === ".env") {
      console.log("   \u203B \u5FC5\u9808\u9805\u76EE: OPENAI_API_KEY \u3068 OPENAI_MODEL \u3092.env\u306B\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044");
    }
  }
}
copyIfNotExists(".env.example", ".env");
copyIfNotExists("lib/systemMessage.ts", "systemMessage.ts");
