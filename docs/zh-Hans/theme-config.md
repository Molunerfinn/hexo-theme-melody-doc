# 主题配置 
-----

# 配置文件说明

* 站点配置文件`_config.yml`是 hexo 工作目录下的主配置文件
* `melody.yml` 是 `theme-melody` 的配置文件。它需要你手动将主题目录下的`_config.yml`文件复制到 hexo 工作目录的`source/_data/melody.yml`中。如果文件或者文件夹不存在，需要手动创建。

------

# 语言

配置站点 `_config.yml`

```yaml
language: en
```

默认语言是en.

## 语言支持列表

|     语言    |     作者    |
|-------------|-------------|
| default(en) | Molunerfinn |
| zh-Hans     | Molunerfinn |
| en          | Molunerfinn |

------

# 代码高亮主题

`theme-melody` 支持了[Material Theme](https://github.com/equinusocio/material-theme)全部4种代码高亮样式：

- default
- darker
- pale night
- light

配置`melody.yml`

```yaml
highlight: default # default/darker/pale night/light
```

## 截图

> default

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xjkx0j212k0h8gop.jpg)

> darker

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xhpzmj212o0ha77e.jpg)


> pale night

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xnytuj212m0h6whm.jpg)


> light

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xkvwmj212g0h8ad5.jpg)

## 支持代码复制

可以发现，在代码区域右上角有一个复制的图标。你可以点击这个图标就能够轻松将代码复制到你的粘贴板。

------

# 社交图标

在站点顶部设置一些你的社交图标。格式是`icon-name: url`。图标的名字你可以通过[font-awesome](http://fontawesome.io/icons/)的官网查询。

配置`melody.yml`

```yaml
social:
  github: https://github.com/Molunerfinn
  weibo: http://weibo.com/mybluedreams
  rss: https://Molunerfinn/atom.xml
  ...
```

## 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf1224d1j21z20xy0y7.jpg)

------

# 导航菜单

在右上角的区域是导航菜单项。Hexo有默认的`/`和`/archives`的路径。如果你想拥有其他比如`tags`和`categories`的页面，请按照下面步骤来操作：

1. 前往你的Hexo博客的根目录
2. 输入`hexo new page tags`
3. 你会找到`source/tags/index.md`这个文件
4. 修改这个文件：

```
---
title: tags
date: 2018-01-05 00:00:00
type: "tags"
---
```

!> type必须是`tags`！如果你要增加`categories`页面的话也是一样的。

然后配置`melody.yml`

```yaml
menu:
  Home: /
  Archives: /archives
  Tags: /tags
  Categories: /categories
```

你也可以修改菜单项名称：

比如：

```yaml
menu:
  Blog: /
  Posts: /archives
  MyTags: /tags
  MyCategories: /categories
```

## 截图

![](https://user-images.githubusercontent.com/12621342/34598665-08279518-f229-11e7-892d-9d869ca915b5.png)

------

# 顶部图

`顶部图`是`theme-melody`最神奇的配置项. 它拥有`true`、`false`或者`具体图片url`三种值.

配置`melody.yml`

```yaml
top_img: true  # false / 具体图片url
```

下面的截图展示了三种不同值的页面显示效果

- `top_img: true`

> 主页

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf1224d1j21z20xy0y7.jpg)

> 文章页

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf1226nrj21z20u2gr6.jpg)

- `top_img: false`

> 主页

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbeyeimscj21z20y0ju7.jpg)

> 文章页

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbeyf0x5sj21z20xoal5.jpg)

- `top_img: https://xxxxx.jpg`

> 主页

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf9wlz0qj21z20xy7wk.jpg)

> 文章页

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf9nwhm0j21z20ue1l0.jpg)

## 为特定的文章页配置特定的顶部图 

在你的文章`md`文件的头部，加入`top_img`项，然后输入你想要的顶部图的url即可。

```yaml
title: Hi, theme-melody!
tags:
  - hexo
  - hexo theme
top_img: https://xxxxxxx.jpg   # < top_img在这里插入
date: 2017-09-07
---
```

!> 这样操作过后，你的这篇文章的顶部图就不会受主题配置的顶部图的影响了。

------

# 文章相关项

这个选项是用来显示文章的相关信息的。

配置`melody.yml`

```yaml
post_meta:
  date_type: created # or updated 文章日期是创建日或者更新日
  categories: true # or false 是否显示分类
  tags: true # or false 是否显示标签
```

在文章页顶部你能看到文章的发表日期以及文章的分类。在文章页底部你能看到文章的标签。

下图显示了文章的标签所在的位置：

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbfrd1jhgj21z20ic791.jpg)

------

# 文章版权

!> 版本 1.1

为你的博客文章展示文章版权和许可协议。

配置`melody.yml`

```yaml
post_copyright:
  enable: true
  license: CC BY-NC-SA 3.0 # 协议名称
  license_url: https://creativecommons.org/licenses/by-nc-sa/3.0/ # 协议说明地址
```

## 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjmbmm3fq6j214g0980u1.jpg)

------

# 文章相关二维码

!> 版本 1.1

在你每篇文章的结尾，给读者展示你自己的二维码。二维码的图片url以及相关说明都取决于你。配置格式如下：

配置`melody.yml`

```yaml
QR_code:
  - itemlist:
      img: https://xxxx1.jpg
      text: 支付宝打赏
  - itemlist:
      img: https://xxxx2.jpg
      text: 微信打赏
```

## 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjmbuir86xj212w0egmzf.jpg)

------

# 文章广告区

!> 版本1.4

在你的文章页面里加上广告！你可以放置一个你自己想展示的广告或者也可以是个音乐播放器等等。这个区域你做主。

配置`melody.yml`

```yaml
adv:
  enable: true
  info: # 你想展示的内容
```

例如:

```yaml
adv:
  enable: true
  info: <a href="https://www.vultr.com/?ref=7231808"><img src="https://www.vultr.com/media/banner_1.png" width="728" height="90"></a>
```

## 截图 

![](https://user-images.githubusercontent.com/12621342/34594225-c3d1e0f8-f20a-11e7-9f0b-ed99e4f26305.png)

# 头像

配置`melody.yml`

```yaml
avatar: https://xxxx.jpg
```

## 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fj6lfovr5rj21z4132jx0.jpg)

------

# 友链

你可以在侧边栏配置相应的友情链接。格式如下：

配置`melody.yml`

```yaml
links_title: Links   # 配置友链的标题文字
links:
  Molunerfinn: https://molunerfinn.com # 名称：URL
  PiEgg: https://piegg.cn
  Elody: https://piegg.cn
```

## 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbg5ba0xxj20fs12ygo5.jpg)

------

# 目录

你的文章能够拥有一个清晰的目录列表。目录位于侧边栏，并且会随着滚动条的滚动自动展开目录结构。

配置`melody.yml`

```yaml
toc:
  enable: true # or false
```

## 截图

> `enable: true`

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbgcwyvbrj21z21307fh.jpg)

> `enable: false`

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbgf0xgvaj21yw12q14o.jpg)

------

# 博客年份

`since`是一个来展示你站点起始时间的选项。它位于页面的最底部。

配置`melody.yml`

```yaml
since: 2013
```

## 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbfw6qgedj21z20akmyw.jpg)
