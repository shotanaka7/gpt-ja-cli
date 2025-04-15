#!/usr/bin/env tsx
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = process.cwd();

function copyIfNotExists(srcName: string, dstName: string) {
  const src = path.resolve(__dirname, "..", srcName);
  const dst = path.resolve(root, dstName);

  if (!fs.existsSync(dst)) {
    fs.copyFileSync(src, dst);
    console.log(`✅ ${dstName} をプロジェクト直下に生成しました`);
  } else {
    console.log(`ℹ️ ${dstName} はすでに存在します（スキップ）`);
    if (dstName === ".env") {
      console.log("   ※ 必須項目: OPENAI_API_KEY と OPENAI_MODEL を.envに設定してください");
    }
  }
}

copyIfNotExists(".env.example", ".env");
copyIfNotExists("lib/systemMessage.ts", "systemMessage.ts");