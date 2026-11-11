---
title: 解决 Codex CLI 无法弹出 AskUserQuestion 交互式选项菜单
date: 2026-11-11T16:09:00+08:00
tags:
  - Codex CLI
  - iTerm2
summary: 启用 default_mode_request_user_input，解决 Codex CLI 在 iTerm2 中无法弹出 AskUserQuestion 交互式选项菜单的问题。
---

**问题：** macOS iTerm2 中使用 Codex CLI 时，AskUserQuestion 无法弹出交互式选项菜单，只输出普通文本。

**解法：** 编辑 `~/.codex/config.toml`，添加（已有 `[features]` 则只添加第二行）：

```toml
[features]
default_mode_request_user_input = true
```

重启 Codex CLI 即可。
