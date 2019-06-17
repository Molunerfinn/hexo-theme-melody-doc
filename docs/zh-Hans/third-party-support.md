---
sidebarDepth: 2
---

# 第三方支持

> 更多的第三方支持不断加入中。

------

## 评论系统

::: warning
你只能为你的博客选择一个评论系统。否则theme-melody将会在你开启的两个或者更多的评论系统里选择其中一个。
:::

### Disqus

注册[disqus](https://disqus.com/)，配置你自己的disqus，然后在`theme-melody`里开启它。

配置`melody.yml`

```yaml
disqus:
  enable: true # or false
  shortname: 你的disqus的 short-name
  count: true # or false. 开启将展示出你的文章的评论数
```

#### 截图

![](https://user-images.githubusercontent.com/12621342/34635880-f8a72e84-f2d0-11e7-9343-1f69da841741.png)

### Laibili（来必力）

::: tip
版本1.4
:::

注册[来必力](http://www.laibili.com.cn/)，配置你自己的来必力设置，然后在`theme-melody`里开启它。

配置`melody.yml`

```yaml
laibili:
  enable: true # or false
  uid: 你的laibili的uid
```

laibili的uid你能在这里找到:

![](https://user-images.githubusercontent.com/12621342/34594229-c4e35800-f20a-11e7-947b-6e0a29537b1e.jpg)

#### 截图

![](https://user-images.githubusercontent.com/12621342/34594228-c46d0088-f20a-11e7-904d-32e3faa3159e.jpg)

### Gitment

::: tip
版本 v1.4
:::

遵循[gitment](https://github.com/imsun/gitment)的指示去获取你的github Oauth 应用的client id 和 secret值。

然后配置`melody.yml`:

```yaml
gitment:
  enable: true # or false
  owner: 你的github用户名 
  repo: 你的github仓库 
  client_id: 你的client id
  client_secret: 你的client secret 
```

举例:

```yaml
gitment:
  enable: true
  owner: Molunerfinn
  repo: Molunerfinn.github.io
  client_id: xxxx 
  client_secret: yyyy 
```

#### 截图

![](https://user-images.githubusercontent.com/12621342/34594227-c4240c20-f20a-11e7-8463-64386439207f.jpg)

### Gitalk

::: tip
版本 v1.4.3
:::

遵循[gitalk](https://github.com/gitalk/gitalk)的指示去获取你的github Oauth 应用的client id 和 secret值。以及查看它的相关配置说明。

然后配置`melody.yml`:

```yaml
gitalk:
  enable: true
  client_id: 你的client id 
  client_secret: 你的client secret
  repo: 你的github仓库
  owner: 你的github用户名
  admin: 该仓库的拥有者或协作者
```

#### 截图 

![](https://user-images.githubusercontent.com/12621342/37018676-34892058-2150-11e8-92a0-62d8ed83896c.png)

### Valine

::: tip
版本 v1.4.3
:::

遵循[Valine](https://github.com/xCss/Valine)的指示去配置你的LeanCloud应用。以及查看相应的配置说明。

然后配置`melody.yml`:

```yaml
valine:
  enable: false # if you want use valine,please set this value is ture
  appId:  # leancloud application app id
  appKey:  # leancloud application app key
  notify: false # valine mail notify (true/false) https://github.com/xCss/Valine/wiki
  verify: false # valine verify code (true/false)
  pageSize: 10 # comment list page size
  avatar: mm # gravatar style https://valine.js.org/#/avatar
  lang: zh-cn # i18n: zh-cn/en
  placeholder: Just go go # valine comment input placeholder(like: Please leave your footprints )
  guest_info: nick,mail,link #valine comment header in
```

#### 截图

![](https://user-images.githubusercontent.com/12621342/37018884-f9e8fc56-2150-11e8-906a-ec0a3f1d1e91.png)

------

## 分享系统

::: warning
你只能为你的博客选择一个分享系统。否则theme-melody将会在你开启的两个或者更多的分享系统里选择其中一个。
:::

### AddThis

> 找到你的pub-id

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjcj0cbbazj21bq0aqwg3.jpg)

配置`melody.yml`

```yaml
addThis:
  enable: true # or false
  pubid: 你的pub-id
```

#### 截图

![](https://user-images.githubusercontent.com/12621342/34635919-56cf9bea-f2d1-11e7-9d30-562e55363706.png)

### Sharejs

如果你不知道[sharejs](https://github.com/overtrue/share.js/)，看看它的说明。

配置`melody.yml`

```yaml
sharejs:
  enable: true
  disabled_sites: 你不想分享的站点
```

举例：

```yaml
sharejs:
  enable: true
  disabled_sites: google,facebook
```

#### 截图

![](https://user-images.githubusercontent.com/12621342/34594230-c537c5e8-f20a-11e7-9d52-267f3456aa22.png)

------

## 搜索系统

### Algolia

1. 你需要安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根据它们的说明文档去做相应的配置。

2. 配置`melody.yml`

```yaml
algolia_search:
  enable: true # or false
  hits:
    per_page: 10 # the number of search results per page
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
    hits_stats: "${hits} results found in ${time} ms"
```

#### 截图

> 点击搜索按钮

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjcjkvvavvj21z20uktdp.jpg)

> 搜索结果

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjcjmc7d92j21z00ws44q.jpg)

### 本地搜索

::: tip
版本 v1.3
:::

1. 你需要安装 [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search). 根据它的文档去做相应配置。**注意格式只支持xml**。

2. Set the `melody.yml`

```yaml
local_search:
  enable: true # or false
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
```

#### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fksfyhkvruj21z20ug44m.jpg)

------

## 分析统计

### 百度统计

1. 登录百度统计的[官方网站](https://tongji.baidu.com/web/welcome/login)

2. 找到你百度统计的统计代码

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjck7o612hj21mq0dqtc5.jpg)

3\. 配置`melody.yml`

```yaml
baidu_analytics: 你的代码
```

### 谷歌分析

1. 登录谷歌分析的[官方网站](https://www.google.com/analytics/)

2. 找到你的谷歌分析的跟踪ID

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjckd6djgtj218e05edg2.jpg)

3\. 配置`melody.yml`

```yaml
google_analytics: 你的代码 # 通常以`UA-`打头
```

### 腾讯分析

::: tip
版本 v1.6
:::

1. 登录腾讯分析的[网站](https://ta.qq.com)

2. 找到你腾讯分析的代码：

![20190219153958.png](https://i.loli.net/2019/02/19/5c6bb2ce69de5.png)

3\. 配置`melody.yml`:

```yaml
tencent_analytics: 你的代码
```

------

## 广告

### 谷歌广告

::: tip
版本 v1.6
:::

1. 登录谷歌广告的[网站](https://www.google.com/adsense)

2. 添加广告并找到你的client-id, 通常是以`ca-pub-`开头

![20190219155033.png](https://i.loli.net/2019/02/19/5c6bb548cb96f.png)

3\. 配置 `melody.yml`

```yaml
google_adsense:
  enable: true
  js: //pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  client: ca-pub-...........
  enable_page_level_ads: true
```

#### 截图

![](https://user-images.githubusercontent.com/24741764/44613950-7776f400-a84e-11e8-9fbc-97b3bcaa71e3.png)

------

## 访问日志(UV和PV)

### busuanzi

访问busuanzi的[官方网站](http://busuanzi.ibruce.info/)查看更多的介绍。

配置`melody.yml`

```yaml
# busuanzi count for PV / UV in site
busuanzi:
  enable: true
  # 全站uv 
  site_uv: true
  site_uv_header: <i class="fa fa-user"></i>
  site_uv_footer: 
  # 全站pv
  site_pv: true
  site_pv_header: <i class="fa fa-eye"></i>
  site_pv_footer: 
  # 单独页面pv
  page_pv: true
  page_pv_header: <i class="fa fa-file-o"></i>
  page_pv_footer: 
```

#### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjcl0gur6tj21z20a8q4t.jpg)

------

## MathJax

::: tip
建议使用KaTex获得更好的效果，下文有介绍！
:::

配置`melody.yml`:

```yaml
mathjax:
  enable: true # or false
  cdn: https://cdn.bootcss.com/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML # required
```

然后你需要修改一下默认的`markdown`渲染引擎来实现MathJax的效果。

查看: [hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed)

以下操作在你hexo博客的目录下(**不是theme-melody的目录!**):

![](https://user-images.githubusercontent.com/12621342/41012862-49cd9ed0-6976-11e8-8ef2-28c6b4208aa8.png)


#### 截图

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjclb2xajnj21z20m6ac5.jpg)

------

## KaTeX

::: tip
版本 v1.6
:::

首先禁用`MathJax`（如果你配置过MathJax的话），然后修改你的`melody.yml`以便加载`katex.min.css`:

```yaml
katex:
  enable: true
  cdn:
    css: https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css
```

你不需要添加`katex.min.js`来渲染数学方程。相应的你需要卸载你之前的hexo的markdown渲染器以及`hexo-math`，然后安装新的`hexo-renderer-markdown-it-plus`:

```bash
# 替换 `hexo-renderer-kramed` 或者 `hexo-renderer-marked` 等hexo的markdown渲染器
# 你可以在你的package.json里找到hexo的markdwon渲染器，并将其卸载
npm un hexo-renderer-marked --save

# or

npm un hexo-renderer-kramed --save

# 卸载 `hexo-math`
npm un hexo-math --save

# 然后安装 `hexo-renderer-markdown-it-plus`
npm i @upupming/hexo-renderer-markdown-it-plus --save
```

注意到 [`hexo-renderer-markdown-it-plus`](https://github.com/CHENXCHEN/hexo-renderer-markdown-it-plus) 已经无人持续维护, 所以我们使用 [`@upupming/hexo-renderer-markdown-it-plus`](https://github.com/upupming/hexo-renderer-markdown-it-plus)。 这份fork的代码使用了 [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex) 同时它也是VSCode的插件[Markdown All in One](https://github.com/yzhang-gh/vscode-markdown)所使用的, 所以我们可以获得最新的KaTex功能例如 `\tag{}`。

你还可以通过 [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex) 控制 KaTeX 的设置，所有可配置的选项参见 https://katex.org/docs/options.html。 比如你想要禁用掉 KaTeX 在命令行上输出的冗长的警告信息，你可以在根目录的 `_config.yml` 中使用下面的配置将 `strict` 设置为 false:

```yml
markdown_it_plus:
  plugins:
    - plugin:
      name: '@neilsustc/markdown-it-katex'
      enable: true
      options:
        strict: false
```

当然，你还可以利用这个特性来定义一些自己常用的 `macros`。

因为KaTeX更快更轻量，因此没有 MathJax 的功能多（比如右键菜单）。为那些使用MathJax的用户，我们也为KaTeX默认添加了 [*Copy As TeX Code*](https://github.com/upupming/katex-copytex) 的功能。

#### 截图

<img src=https://user-images.githubusercontent.com/24741764/52897430-47157e80-320f-11e9-821c-ba5517ae096f.gif height=600px>

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

![](https://blog-1251750343.cos.ap-beijing.myqcloud.com/8700af19ly1fjckmubgtnj21z20vidn0.jpg)

------

## Live2D动画模型挂件

### 安装

#### Live2D模块

使用如下指令安装Live2D模块、需要在博客的根目录通过终端执行:

```yaml
npm install --save hexo-helper-live2d
```

如果不想使用、想彻底卸载，命令如下：

```yaml
npm uninstall hexo-helper-live2d
```

#### 配置喜欢的动画模型

有非常多的`Live2D`动画模型供我们选择：

  1.对应的模块下载在[这里](https://github.com/xiazeyu/live2d-widget-models)

如我使用的是`tororo(萌萌哒白猫)`，可以直接在上面的下载界面:

  1.手动下载完成之后将`packages`里面的所有文件拷贝到博客根目录的`node_moduels`文件夹下。

  2.也可以使用包管理器安装，命令格式：`npm install 模型的包名`，也会安装在`node_moduels`目录下。

  3.打开博客根目录的配置文件`_config.yml`，添加如下内容：  

```yaml
# Live2D
live2d:
  enable: true
# enable: false
  scriptFrom: local # 默认
  pluginRootPath: live2dw/ # 插件在站点上的根目录
  pluginJsPath: lib/ # 脚本文件相对与插件根目录路径
  pluginModelPath: assets/ # 模型文件相对与插件根目录路径
  model:   
    use: live2d-widget-model-tororo # 下载的动画模型名称
  display:
    superSample: 2
    width: 210
    height: 420
    position: left # 模型显示在网页上的位置
    hOffset: 0
    vOffset: -20
```

快去领取属于你萌萌哒白猫吧!

#### 截图

![](https://jacklin-zhang.cn/img/tororo.jpg)

------
