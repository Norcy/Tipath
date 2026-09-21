---
title: AI 时代，3 分钟搭建一个技术博客
date: 2026-09-21
tags:
  - AI
  - GitHub
  - Astro
  - GitHub Actions
  - GitHub Pages
  - 工作流
summary: 用 ChatGPT、GitHub、Astro 和 GitHub Actions，几分钟搭起一个可以自动发布的技术博客。
---

十多年前，用 Hexo 搭一个技术博客，怎么也得折腾一两天：主题、样式、分支、部署、工作流，一样都少不了。

现在，用 AI，3 分钟左右就可以搭好。

一个最简单的技术博客，本质上就是：

```text
GitHub 仓库
+ Markdown 内容
+ Astro 静态页面
+ GitHub Actions 自动构建
+ GitHub Pages 发布
```

## 步骤

1. 在 ChatGPT 里连接 GitHub，并授权对应仓库。第一次如果 Pages 权限不足，手动开启一次 GitHub Pages 即可。
2. 直接告诉 ChatGPT：

> 帮我把这个仓库搭成一个技术博客。内容使用 Markdown，使用 Astro 生成静态页面，通过 GitHub Actions 自动构建并发布到 GitHub Pages。顺便把页面样式和内容目录一起初始化好。

## 最佳实践

记得在仓库里放一个 `AGENTS.md`，把你需要调教 AI 的一切东西都写进去。

## 如何写文章

以前写博客，通常得在电脑上手动新建、编辑一篇 Markdown。

现在不需要了。

你可以直接在 ChatGPT 里用豆包输入法口喷一篇文章，再让 GPT 操作 GitHub 仓库。

也可以继续用滴答清单、Obsidian 等工具记录，再想办法通过自动化同步进 GitHub。

总之，进 GitHub 仓库的路有千千万万条。

选一条最顺手的就行，怎么方便怎么来。
