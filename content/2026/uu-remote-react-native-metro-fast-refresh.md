---
title: UU 远程实现 React Native Metro 热刷新
date: 2026-11-18T14:55:00+08:00
tags:
  - React Native
  - Metro
  - UU远程
  - Android
summary: 通过 UU 端口映射，让连接本地 Mac 的 Android 手机访问远程 Mac 上的 Metro，实现 Fast Refresh。
---

人在外面，通过 Mac B 上的 [网易 UU 远程](/Tipath/tips/2026/netease-uu-remote-ai-essential/) 控制家里的 Mac A 开发 React Native。Metro 运行在 Mac A，Android 手机通过 USB 连接 Mac B。

想让手机实现 Fast Refresh，有两种方案：通过 Tailscale 直连，或者使用 **UU 端口映射**。本文介绍后者，无需 Tailscale。

## 原理

**Android → Mac B → UU 端口映射 → Mac A（Metro）**

## 配置

**1. UU 远程开启端口映射**

| 配置项 | 值 |
|---|---|
| 本地端口 | 8081 |
| 目标地址 | 127.0.0.1 |
| 目标端口 | 8081 |

**2. Mac B 执行**

```bash
adb reverse tcp:8081 tcp:8081
```

手机重连后可能需要重新执行。如果想省掉这个步骤，可以安装 [auto-device-reverse-port](https://github.com/Norcy/auto-device-reverse-port)，自动维护端口映射，一次配置，永久安逸：

```bash
npx auto-device-reverse-port install
```

## 注意

- Mac B 无需运行 Metro。
