---
title: 出门在外，口喷一下，APP 直接装手机
date: 2026-10-10T16:11:30+08:00
tags:
  - Codex
  - Android
  - Tailscale
  - ADB
summary: 通过远程 Codex、Tailscale 和 ADB TCP/IP，在手机上口喷需求，直接开发并安装 APK。
---

人在外面，掏出手机说一句话，一个新的 App 就直接出现在手机里。

## 原理

通过 ChatGPT App 的 Remote，或者网易 UU 等远程方式，连接电脑上的 Codex。

Codex 负责开发和构建 APK，剩下的问题就是：**如何让电脑远程安装 APK 到手机？**

答案是 **Tailscale + ADB TCP/IP**。

## 首次配置

1. 手机和电脑都安装 Tailscale，加入同一个虚拟局域网，确认互通。
2. 手机开启 USB 调试，首次通过 USB 连接电脑并授权。
3. 在电脑上运行 `adb tcpip 5555`，开启 ADB 网络调试。
4. 执行 `adb connect <手机的 Tailscale IP>:5555`，**测试连接是否成功**。这一步只需验证一次，后续由 Codex 自动连接。

## 日常使用

```text
手机口喷需求
→ 远程 Codex 开发
→ 构建 APK
→ ADB 连接手机并安装
```

全程不需要手动传输 APK。

## 注意事项

`adb tcpip 5555` 会开放网络调试端口，**不要在陌生 Wi-Fi 下保持开启**。

我的做法是把 USB 调试开关做成 Android 控制中心的快捷按钮，用完随手关闭。

没错，这个按钮也是通过上面这套方式远程开发、安装到手机里的。一顿口喷之后，控制中心就多了一个 USB 调试按钮。
