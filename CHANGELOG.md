## [0.2.5] - 2025-04-15
### Fixed
- `dist/gpt-init.js` を `.cjs` 形式で出力するよう変更し、Node.js が CommonJS として正しく解釈するように修正
- `package.json` の `bin.gpt-init` を `dist/gpt-init.cjs` に変更し、`npx gpt-init` 実行時の構文エラーを解消

## [0.2.4] - 2025-04-15
### Fixed
- `dist/gpt-init.js` が CommonJS 形式でビルドされていなかった問題を修正し、`npx gpt-init` が正常に実行できるように対応
- `gpt-init.ts` から `import.meta.url` を排除し、`process.cwd()` によるディレクトリ解決に切り替え

## [0.2.2] - 2025-04-15
### Changed
- `gpt-init.ts` を事前にビルドし、`dist/gpt-init.js` として公開することで `tsx` なしで即時実行可能に変更
- `bin` エントリを `gpt-init.ts` → `dist/gpt-init.js` に変更
- `.gitignore` から `dist/` を除外し、npm公開対象に含めるよう修正
- `README.md` から `tsx` に関する記述を削除し、`npx gpt-init` に統一

## [0.2.1] - 2025-04-15
### Changed
- `tsx` を `dependencies` に移動し、CLIコマンドが依存環境で確実に動作するように修正
- `systemMessage.ts` を `gptSystemPrompt.ts` にリネーム
- README に `gpt-init` 実行手順を追記し、`pnpm exec` や `npx` での動作に関する注意を明示

## [0.2.0] - 2025-04-15
### Changed
- `systemMessage.ts` を `gptSystemPrompt.ts` にリネームし、用途を明確化
- 自動コピー機能（postinstall.js）を削除し、初期化コマンドに一本化

### Added
- `gpt-init` コマンドを新規追加（`.env` および `gptSystemPrompt.ts` を初期化）
- `--all` オプションで全文出力モードを追加（デフォルトは差分出力）
- `--apply` オプションで修正内容をファイルに自動上書き
- `README.md` に初期化コマンドと新オプションの説明を反映

## [0.1.2] - 2025-04-15
### Added
- `.env.example` をルートに移動
- `postinstall.js` による `.env` / `systemMessage.ts` の自動コピー機能
- `--apply` オプションで修正結果をファイルに上書き保存する機能

## [0.1.1] - 2025-04-15
### Added
- `gpt.ts`, `systemMessage.ts` を初めて含めた完全なパッケージとしてリリース