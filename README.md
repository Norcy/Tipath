# 小径 · Tipath

> 小径通幽，日有所进。小事之间，自有其法。

Tipath 是一个关于工作、学习、工具与效率的小经验库。

## 工作方式

```text
口述 / Markdown
→ GitHub
→ Astro 静态构建
→ GitHub Actions
→ GitHub Pages
```

内容保存在 `content/**/*.md`。每次提交到 `main` 后，工作流会自动构建并部署网站。

当前发布目标：GitHub Pages。

## 本地运行

```bash
npm install
npm run dev
```

构建静态文件：

```bash
npm run build
```

输出目录为 `dist/`。以后切换到自己的服务器时，只需要把这个目录部署到 Nginx 对应的网站目录即可。

## 内容格式

```md
---
title: 一条小经验
date: 2026-09-21
tags:
  - 工具
  - 效率
summary: 一句话概括这条经验。
---

正文。
```
