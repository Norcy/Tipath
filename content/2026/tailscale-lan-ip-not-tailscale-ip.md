---
title: Tailscale 使用小技巧：别用 Tailscale 给的 IP
date: 2026-10-10T22:53:00+08:00
tags:
  - Tailscale
  - 网络
  - Mac
summary: 使用家庭局域网 IP 配合 Tailscale 子网路由，让家里的设备在家和外出都能使用同一个地址。
---

## 问题

很多 App 需要填写家里设备的地址，比如 Paseo 连接 Mac。

如果直接填写 Mac 的 Tailscale IP（`100.x.x.x`），出门时可以正常连接，但回家关闭 Tailscale 后，即使手机和 Mac 在同一个 Wi-Fi 下，也无法访问。

原因是：`100.x.x.x` 属于 Tailscale 虚拟网络，关闭 Tailscale 后这个地址就不可用了。

## 解法

1. Mac 打开 Tailscale，进入 **Settings**，勾选 **Use Tailscale Subnets**。

2. 打开 Tailscale 管理后台 **Accounts → Admin Console → Machines**，找到对应的 Mac，点击 **Edit route settings**，勾选需要批准的子网路由并保存。

3. App（比如 Paseo）填写 Mac 的家庭局域网 IP，例如 `192.168.31.161`。

## 效果

配置完成后，无论在家还是外出，App 都可以使用同一个地址连接家里的设备：在家通过局域网直连，外出通过 Tailscale 子网路由访问。