#!/usr/bin/env tsx
import { OpenAI } from "openai";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

import { gptSystemPrompt } from "../gptSystemPrompt.js"; // ユーザールートのもの

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const model = process.env.OPENAI_MODEL || "gpt-4.1";

const args = process.argv.slice(2);
const isFullOutput = args.includes("--all");
const isApply = args.includes("--apply");
const filteredArgs = args.filter(arg => arg !== "--all" && arg !== "--apply");

const userPrompt = filteredArgs.pop() || "以下のコードをレビューし、改善点があれば指摘してください";
const filePaths = filteredArgs;

const fileContents = filePaths.map((path) => {
  const content = fs.readFileSync(path, "utf-8");
  return `【${path}】\n${content}`;
}).join("\n\n");

const historyPath = "./chat-history.json";
let messages: any[] = [];
if (fs.existsSync(historyPath)) {
  messages = JSON.parse(fs.readFileSync(historyPath, "utf-8"));
} else {
  messages.push(gptSystemPrompt);
}

const suffix = isFullOutput
  ? ""
  : "\n\n※出力は変更点のみ（差分）のコードだけにしてください。全体を再掲しないでください。";

messages.push({
  role: "user",
  content: `${userPrompt}${suffix}\n\n---\n\n${fileContents}`,
});

async function run() {
  const res = await openai.chat.completions.create({
    model,
    messages,
    temperature: 0.3,
  });

  const reply = res.choices[0].message;
  messages.push(reply);

  fs.writeFileSync(historyPath, JSON.stringify(messages, null, 2));

  console.log("\n\uD83D\uDCAC \u56DE\u7B54:\n");
  console.log(reply.content);

  if (isApply) {
    const fileEdits = reply.content.split(/【(.+?)】/g).filter(Boolean);
    for (let i = 0; i < fileEdits.length; i += 2) {
      const filename = fileEdits[i].trim();
      const code = fileEdits[i + 1]?.trim();
      if (fs.existsSync(filename)) {
        fs.writeFileSync(filename, code, "utf-8");
        console.log(`📝 ${filename} を上書きしました`);
      }
    }
  }

  console.log("\n\uD83D\uDCCA \u4F7F\u7528\u30C8\u30FC\u30AF\u30F3:");
  console.log(`- \u5165\u529B: ${res.usage?.prompt_tokens}`);
  console.log(`- \u51FA\u529B: ${res.usage?.completion_tokens}`);
  console.log(`- \u5408\u8A08: ${res.usage?.total_tokens}`);
}

run();