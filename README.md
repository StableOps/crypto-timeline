# Crypto Timeline

加密行业关键节点时间线 — 从创世区块到稳定币立法，按时间脉络梳理协议升级、监管政策、安全事件与市场周期。

## 开发

```bash
npm install
npm run dev     # 开发服务器 http://localhost:4321
npm run build   # 构建到 dist/
```

## 添加事件

编辑 `src/data/zh.json` 和 `src/data/en.json` 中的 `events` 数组，按日期排序即可。

字段说明：
- `date` — 事件日期，格式 `YYYY-MM-DD`
- `cat` — 分类，可选 `protocol` `regulation` `security` `market` `stablecoin` `adoption`
- `imp` — 重要性，`major` 或 `minor`
- `title` — 事件标题
- `desc` — 事件描述

## 多语言

- `/` — 英文（默认）
- `/zh/` — 中文
- 浏览器语言为中文时自动跳转 `/zh/`

UI 文案在 `src/i18n/` 目录下。
