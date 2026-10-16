---
title: 一劳永逸解决 Codex 每次提交 Git 的权限问题
date: 2026-10-16T21:32:00+08:00
tags:
  - Codex
  - Git
summary: 通过调整 Codex 权限配置，解决 Git 提交时写入 .git/index 无权限的问题。
---

每次 Codex 遇到 Git 相关操作，总是会提示写入 `.git/index` 无权限，非常恶心。

## 1. 删除旧配置

编辑 `~/.codex/config.toml`，删除：

```toml
sandbox_mode = "workspace-write"

[sandbox_workspace_write]
network_access = true
```

## 2. 添加权限配置

在文件顶部添加：

```toml
default_permissions = "project-git"
```

然后添加：

```toml
[permissions.project-git]
extends = ":workspace"

[permissions.project-git.filesystem.":workspace_roots"]
".git" = "write"
".git/**" = "write"

[permissions.project-git.network]
enabled = true
```

## 3. 重启 Codex
