# gpt-ja-cli

日本語でGPT-4.1を活用できる、Web開発者向けCLIツール。

## セットアップ

```bash
pnpm add -D @shotanaka7/gpt-ja-cli
npx gpt-init
```

## 環境変数

`npx gpt-init` によって `.env` が自動で生成されます。
ただし、すでに `.env` がある場合には下記の環境変数を必ず指定してください。

```env
OPENAI_API_KEY=your-api-key // APIキー
OPENAI_MODEL=gpt-4.1 // 使用するモデル
```

## カスタムプロンプトの変更

`npx gpt-init` によってプロジェクト直下に `gptSystemPrompt.ts` がコピーされます。
GPTの動作方針を変更したい場合は、このファイルを編集してください。

## 使用方法

初期化は以下のコマンドで行います。

```bash
npx gpt-init
```

その後、以下のコマンドで使用します。

```bash
gpt {ファイル名} "{指示}"
```

※ 指示を省略した場合は、自動的にコードのレビューと改善点の提案を行います。

オプション：
- `--all`
  差分ではなくコード全文を出力します（デフォルトは変更部分のみの出力です）。

- `--apply`
  出力されたコードを対象ファイルに上書き保存します。必ず内容を確認した上で使用してください。

## 使用例

初期化の例：

```bash
npx gpt-init
```

コードレビューの例：

```bash
gpt index.html index.js "このHTMLとJSは連動していますか？不整合があれば修正してください。"
```

デフォルトでは差分出力（変更部分のみ）となります。
コード全文を出力させたい場合は `--all` を付けてください。

```bash
gpt index.html index.js "このHTMLとJSは連動していますか？不整合があれば修正してください。" --all
```

また、修正を直接反映させる場合は`--apply` を付けてください。

```bash
gpt src/index.js "カルーセルの処理でエラーが発生します。修正してください。" --apply
```
