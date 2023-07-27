---
icon: article
title: Git常见工作流
date: 2023-07-24
category:
    - Git
tag:
    - Git
    - 版本管理工具
footer: ""
---
## 如何开始使用git管理项目？

一般来说，会选择使用github作为远程代码托管仓库。
所以使用git管理的大致流程是：

1. 从github上面新建一个仓库(repository)
2. 在本地使用git clone originUrl克隆远程仓库到本地
3. 在克隆下来的仓库中进行项目开发
4. 使用常见git命令进行版本控制，如：
    - `git add fileName` 添加fileName文件到git管理(git add .添加所有文件到git管理)
    - `git status` 查看当当前git暂存区状态
    - `git commit -m '提交注释内容......'` 提交所有更改为一个节点
    - `git push` 推送到远程仓库上面

一般来说，采用上述流程管理的项目不会出现本地远程提交历史不一致的冲突，也就是没有共同祖先拒绝合并这种情况。
