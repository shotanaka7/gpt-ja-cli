#!/usr/bin/env node
#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// bin/gpt-init.ts
var import_fs = __toESM(require("fs"), 1);
var import_path = __toESM(require("path"), 1);
var __dirname = process.cwd();
function copyIfNotExists(srcName, dstName) {
  const src = import_path.default.resolve(__dirname, "..", srcName);
  const dst = import_path.default.resolve(__dirname, dstName);
  if (!import_fs.default.existsSync(dst)) {
    import_fs.default.copyFileSync(src, dst);
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
