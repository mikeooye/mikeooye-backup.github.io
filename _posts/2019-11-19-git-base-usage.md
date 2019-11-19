---
layout: post
title:  "git 常规语法"
date:   2019-11-19 14:03:12 +0800
categories: tech git
---

```bash
// 创建分支，一般由工具完成
$ git checkout master

$ git pull --rebase origin master
$ git checkout -b mybranch
$ git push origin mybranch

// 提交代码

$ git add --all
$ git commit -am "add my commit"

// 更新远程代码
$ git pull --rebase origin mybranch

// 冲突解决
$ git add .
$ git rebase --continue

// 提交
$ git push origin mybranch

// 开发完成rebase master,如果有冲突同上
$ git pull --rebase origin master
$ git push -f origin mybranch

// 合并分支，一般由工具完成
$ git checkout master
$ git merge --no-ff mybrach
$ git push origin master
$ git tag -a version -m "release version 0.0.1"
$ git push origin --tags
```
