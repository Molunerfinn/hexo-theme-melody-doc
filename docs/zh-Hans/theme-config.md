---
sidebarDepth: 1
---

# 主题配置 
-----

## 配置文件说明

* 站点配置文件`_config.yml`是 hexo 工作目录下的主配置文件
* `melody.yml` 是 `theme-melody` 的配置文件。它需要你手动将主题目录下的`_config.yml`文件复制到 hexo 工作目录的`source/_data/melody.yml`中。如果文件或者文件夹不存在，需要手动创建。

------

## 语言

配置站点 `_config.yml`

```yaml
language: en
```

默认语言是en.

### 语言支持列表

|     语言    |     作者    |
|-------------|-------------|
| default(en) | Molunerfinn |
| zh-Hans     | Molunerfinn |
| en          | Molunerfinn |

------

## 自定义主题色 <Badge text="v1.5.6+" />

现在你可以修改大部分主题用到的颜色，改成你所喜欢的任何颜色。

配置`melody.yml`，比如：

::: warning
颜色值必须被双引号包裹，就像`"#000"`而不是`#000`。否则将会在构建的时候报错！
:::

```yaml
theme_color:
  enable: true # or false -> to use the default theme
  main: "#000"
  paginator: "#000"
  button_hover: "#49B1F5"
  text_selection: "#000"
  link_color: "#000"
  hr_color: "#000"
  meta_color: "#000"
```

### 截图

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/new_theme_for_melody.png)

------

## 代码高亮主题

`theme-melody` 支持了[Material Theme](https://github.com/equinusocio/material-theme)全部5种代码高亮样式：

- default
- darker
- pale night
- light
- ocean (从v1.5.5开始支持)

配置`melody.yml`

```yaml
highlight_theme: default # default/darker/pale night/light
```

### 截图

> default

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbc7xjkx0j212k0h8gop.jpg)

> darker

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbc7xhpzmj212o0ha77e.jpg)


> pale night

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbc7xnytuj212m0h6whm.jpg)


> light

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbc7xkvwmj212g0h8ad5.jpg)

> ocean

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/ocean-highlight.png)

### 支持代码复制

可以发现，在代码区域右上角有一个复制的图标。你可以点击这个图标就能够轻松将代码复制到你的粘贴板。

------

## 代码换行 <Badge text="v1.5.6+" />

在默认情况下，`hexo-highlight`在编译的时候不会实现代码自动换行。如果你不希望在代码块的区域里有横向滚动条的话，那么你可以考虑开启这个功能。

配置`melody.yml`

```yaml
code_word_wrap: true
```

然后找到你站点的hexo配置文件`_config.yml`，你能看到类似如下`highlight`的配置：

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:
  # ...
```

请将`line_number`改成`false`:

```yaml
highlight:
  enable: true
  line_number: false # <- 改这里
  auto_detect: false
  tab_replace:
```

接着运行一下`hexo clean`后再运行`hexo g`生成新的文章。

看下效果吧：

### 截图

> 设置`code_word_wrap`之前:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/no_code_wrap_for_melody.png)

> 设置`code_word_wrap`之后:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/code_wrap_for_melody.png)

------

## 社交图标

::: warning 注意!
从版本v1.6开始, 社交图标的格式是`图标名 前缀: url` 而不是 `图标名: url`, **一定要注意**!
:::

在站点顶部设置一些你的社交图标。格式是`图标名 前缀: url`。

Hexo-theme-melody 支持 [font-awesome v4](https://fontawesome.com/v4.7.0/) 和 [font-awesome v5](https://fontawesome.com/icons?from=io). 默认开启的是`v4`版本。

### v4 版本

如果你只想使用 `v4` 的图标, 你只要访问 [font-awesome v4](https://fontawesome.com/v4.7.0/) 去找图标名，并且图标前缀通常就是 `fa`.

举个例子, 配置 `melody.yml`：

```yaml
social:
  github fa: https://github.com/Molunerfinn
  weibo fa: http://weibo.com/mybluedreams
  rss fa: https://Molunerfinn/atom.xml
  ...
```

就够了。

### v5 版本

如果你还想使用 `v5` 版本的图标, 你需要访问 [font-awesome v5 free icons](https://fontawesome.com/icons?d=gallery&m=free) 去找图标名, 并且前缀有可能是 `fab`,`fas` 等等, 你需要写对前缀名，否则图标将无法显示。

![20190219160257.png](https://i.loli.net/2019/02/19/5c6bb8312779d.png)

同时你需要把 `font-awesome v5`的链接添加到`melody.yml`：

举个例子, 配置 `melody.yml`：

```yaml
social:
  github fab: https://github.com/Molunerfinn
  weibo fab: http://weibo.com/mybluedreams
  rss fas: https://Molunerfinn/atom.xml
  ...

// ...

cdn:
  css:
    fontawesome: https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css
    fontawesomev5: https://use.fontawesome.com/releases/v5.7.2/css/all.css
  // ...
```

### 截图

![](https://user-images.githubusercontent.com/12621342/34635719-8aaf7276-f2ce-11e7-9361-35aac9b5dab1.png)

------

## 导航菜单

在右上角的区域是导航菜单项。Hexo有默认的`/`和`/archives`的路径。如果你想拥有其他比如`tags`和`categories`的页面，请按照下面步骤来操作：

1. 前往你的Hexo博客的根目录
2. 输入`hexo new page tags`
3. 你会找到`source/tags/index.md`这个文件
4. 修改这个文件：

> 更多关于创建页面相关的请参考[主题页面](/zh-Hans/theme-pages.md)的详细介绍。

```
---
title: 标签
date: 2018-01-05 00:00:00
type: "tags"
---
```

::: warning
type必须是`tags`！如果你要增加`categories`页面的话也是一样的。
:::

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

### 截图

![](https://user-images.githubusercontent.com/12621342/34598665-08279518-f229-11e7-892d-9d869ca915b5.png)

------

## 自动节选 <Badge text="v1.5.0+" />

现在，从版本1.5开始，如果你没有在`melody.yml`里设置`auto_excerpt`的选项，你的文章将会在首页上完整地展现出来。如果你在文章里加上了`<!-- more -->`标记，那么它将会被替换成`阅读更多`的一个按钮。如果你不想在每篇文章里都加上`<!-- more -->`这个标记，那么你可以通过设置`auto_excerpt`来自动帮你生成文章节选。（默认取前150个字）

::: warning
注意：如果开启了自动节选功能，代码块的显示将有可能不正常。所以如果在首页想显示代码的请不要开启这个功能！
:::

配置`melody.yml`：

```yaml
auto_excerpt:
  enable: true
  length: 150
```


------

## 顶部图

`顶部图`是`theme-melody`最神奇的配置项. 它拥有`true`、`false`或者`具体图片url`三种值.

配置`melody.yml`

```yaml
top_img: true  # false / 具体图片url
```

下面的截图展示了三种不同值的页面显示效果

- `top_img: true`

> 主页

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbf1224d1j21z20xy0y7.jpg)

> 文章页

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbf1226nrj21z20u2gr6.jpg)

- `top_img: false`

> 主页

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbeyeimscj21z20y0ju7.jpg)

> 文章页

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbeyf0x5sj21z20xoal5.jpg)

- `top_img: https://xxxxx.jpg`

> 主页

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbf9wlz0qj21z20xy7wk.jpg)

> 文章页

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbf9nwhm0j21z20ue1l0.jpg)

### 为特定的文章页配置特定的顶部图 

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

::: tip
这样操作过后，你的这篇文章的顶部图就不会受主题配置的顶部图的影响了。
:::

------

## 文章相关项

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

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbfrd1jhgj21z20ic791.jpg)

------

## 文章版权 <Badge text="v1.1.0+" />

为你的博客文章展示文章版权和许可协议。

配置`melody.yml`

```yaml
post_copyright:
  enable: true
  license: CC BY-NC-SA 3.0 # 协议名称
  license_url: https://creativecommons.org/licenses/by-nc-sa/3.0/ # 协议说明地址
```

### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjmbmm3fq6j214g0980u1.jpg)

------

## 文章相关二维码 <Badge text="v1.1.0+" />

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

### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjmbuir86xj212w0egmzf.jpg)

------

## 文章广告区 <Badge text="v1.4.0+" />

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

### 截图 

![](https://user-images.githubusercontent.com/12621342/34594225-c3d1e0f8-f20a-11e7-9f0b-ed99e4f26305.png)

## 头像

配置`melody.yml`

```yaml
avatar: https://xxxx.jpg
```

### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fj6lfovr5rj21z4132jx0.jpg)

------

## Follow Me 按钮 <Badge text="v1.5.4+" />

配置`melody.yml`

```yaml
follow:
  enable: true
  url: 'https://github.com/USERNAME'
  text: 'Follow Me'
```

### 截图

![](https://user-images.githubusercontent.com/12621342/39968647-22a87a3a-5703-11e8-9e61-2b5b540f98a7.png)

------

## 友链

你可以在侧边栏配置相应的友情链接。格式如下：

配置`melody.yml`

```yaml
links_title: Links   # 配置友链的标题文字
links:
  Molunerfinn: https://molunerfinn.com # 名称：URL
  PiEgg: https://piegg.cn
  Elody: https://piegg.cn
```

### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbg5ba0xxj20fs12ygo5.jpg)

------

## 目录

你的文章能够拥有一个清晰的目录列表。目录位于侧边栏，并且会随着滚动条的滚动自动展开目录结构。

> 从版本v1.5.6开始，你可以选择是否显示目录前的章节数字。

配置`melody.yml`

```yaml
toc:
  enable: true # or false
  number: true # or false. 版本v1.5.6新增
```

### 为特定的文章配置特定的目录章节数字

在你的文章`md`文件的头部，加入`toc_number`项，并配置`true`或者`false`即可。

```yaml
title: Hi, theme-melody!
tags:
  - hexo
  - hexo theme
toc_number: false   # < add toc_number to here. 版本v1.5.6新增
date: 2017-09-07
---
```

::: warning
配置之后你的特定的文章将会拥有它自己的目录数字的显示与否，而不会受全局的配置影响。
:::

### 截图

> `enable: true`

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbgcwyvbrj21z21307fh.jpg)

> `enable: false`

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbgf0xgvaj21yw12q14o.jpg)

> `number: false`

![](https://user-images.githubusercontent.com/12621342/41695450-a2f73d28-7541-11e8-80d1-65ad7f6749f4.png)

------

## 博客年份

`since`是一个来展示你站点起始时间的选项。它位于页面的最底部。

配置`melody.yml`

```yaml
since: 2013
```

### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjbfw6qgedj21z20akmyw.jpg)

------

## 页脚自定义文本  <Badge text="v1.5.5+" />

`footer_custom_text`是一个给你用来在页脚自定义文本的选项。通常你可以在这里写ICP备案号、码云声明文本等。支持HTML。

配置`melody.yml`

```yaml
footer_custom_text: Hi, welcome to my <a href="https://molunerfinn.com">blog</a>!
```

### 截图

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/footer_custom_text.png)

------

## 特效

### 烟花

模仿[anime.js官网](http://animejs.com/)的点击效果

配置`melody.yml`

```yaml
fireworks: true
```

尝试去点击一下网站主体部分吧!

#### 截图

![](https://user-images.githubusercontent.com/12621342/34635863-99026944-f2d0-11e7-9fb9-d5d3cc694aba.png)