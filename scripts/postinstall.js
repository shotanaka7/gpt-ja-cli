import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// .env.example をコピー
const envSrc = path.resolve(__dirname, "../.env.example");
const envDst = path.resolve(process.cwd(), ".env");

if (!fs.existsSync(envDst)) {
  fs.copyFileSync(envSrc, envDst);
  console.log("✅ .env をプロジェクト直下にコピーしました");
} else {
  console.log("ℹ️ .env は既に存在しています。コピーはスキップしました");
  console.log("   ※ 必須項目: OPENAI_API_KEY と OPENAI_MODEL を.envに設定してください");
}

// systemMessage.ts をコピー
const msgSrc = path.resolve(__dirname, "../lib/systemMessage.ts");
const msgDst = path.resolve(process.cwd(), "systemMessage.ts");

if (!fs.existsSync(msgDst)) {
  fs.copyFileSync(msgSrc, msgDst);
  console.log("✅ systemMessage.ts をプロジェクト直下にコピーしました");
} else {
  console.log("ℹ️ systemMessage.ts は既に存在しています。コピーはスキップしました");
}
