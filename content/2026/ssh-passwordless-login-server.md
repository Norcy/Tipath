---
title: 如何实现 SSH 免密登录服务器？
date: 2026-10-24T15:07:00+08:00
tags:
  - SSH
  - 服务器
summary: 配置 SSH 密钥和快捷登录，以后连接服务器不用记 IP，也不用输入服务器密码。
---

每次连接服务器，都要输入 `ssh 用户名@服务器IP`，然后再输入密码，又要记 IP，又要输密码，非常麻烦。

其实只需要配置一次，以后一句 `ssh myserver` 就能直接登录。

## 1. 生成 SSH 密钥

检查本地是否已有公钥：

```bash
ls ~/.ssh/id_rsa.pub
```

没有的话，生成一个：

```bash
ssh-keygen -t rsa
```

## 2. 上传公钥到服务器

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub 用户名@服务器IP
```

输入一次服务器密码即可。

## 3. 配置快捷登录

在 `~/.ssh/config` 中添加：

```sshconfig
Host myserver
    HostName 服务器IP
    User 用户名
    Port 22
    IdentityFile ~/.ssh/id_rsa
```

## 4. 验证

```bash
ssh myserver
```

以后连接服务器，**不用记 IP，也不用输服务器密码。**
