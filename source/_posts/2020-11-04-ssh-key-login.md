---
title: 使用不同SSH key登錄
date: 2020-11-04 20:41:19
category: ssh
tags: ssh
photos:
---

{% asset_img banner banner/banner.jpeg %}

有用git的人們應該都會對ssh key有一定程度認識吧。如果要在同一部電腦使用不同的ssh key，除了使用手動轉換外，還可以在.ssh folder裡加上config file來自動識別不同的host使用不同的ssh key。

<!-- more -->

現在這邊有兩條ssh key,，分別是id_rsa_personal跟id_rsa_work，.ssh folder檔案如下：

```bash
id_rsa_personal
id_rsa_personal.pub
id_rsa_work
id_rsa_work.pub
```

如果想手動轉換的話，可以這樣做：

```bash
ssh-add -D
ssh-add ~/.ssh/id_rsa_personal
// 或是
ssh-add -D
ssh-add ~/.ssh/id_rsa_work
```

如果想根據host來識別使用不同ssh key的話﹐就要加上config file

```bash
vim ~/.ssh/config
```

config內容如下：

```bash
Host github
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_personal

Host *
    IdentityFile ~/.ssh/id_rsa_work
```

上面的指示如下：

- 如果是github.com的話，就使用id_rsa_personal這條ssh key
- 如果是其他host的話，就使用id_rsa_work

但有時候可能在github裡想做用不同的ssh key，這時就可以修改為：

```bash
Host github-personal
    HostName github.com
 ******   IdentityFile ~/.ssh/id_rsa_personal

Host github-work
    HostName github.com
    IdentityFile ~/.ssh/id_rsa_work
```

然後修改~/.gitconfig

```bash
vim ~/.gitconfig
```

.gitconfig內容如下：

```bash
[url "git@github-personal:username"]
    insteadOf = git@github.com:username
[url "git@github-work:workusername"]
    insteadOf = git@github.com:workusername
```

---

如果想使用不同的ssh key時都用上不同git config中的username跟email的話﹐抱歉這不太能做到 🤪。這跟git config讀取順序有關，git config讀取順序如下：

1. local repo裡的.git/config
2. global (~/.gitconfig)
3. system (/etc/gitconfig)

所以這個就只能在每個repo裡.git/config裡面修改了，只要在最底加上這些就可以了。

```bash
[user]
	name = {{username}}
	email = {{email}}
```