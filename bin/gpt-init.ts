const path = require("path");
const fs = require("fs");

// パッケージの絶対パスを取得（このスクリプト自身の場所）
const here = path.dirname(__filename);
const projectRoot = process.cwd();

function copyIfNotExists(srcName, dstName) {
  const src = path.resolve(here, "..", srcName);      // ← パッケージ内のファイルを探す
  const dst = path.resolve(projectRoot, dstName);     // ← 呼び出し元のプロジェクト直下に出力

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
copyIfNotExists("lib/gptSystemPrompt.ts", "gptSystemPrompt.ts");