# 第三方支持

> 更多的第三方支持不断加入中。

------

# 评论系统

!> 你只能为你的博客选择一个评论系统。否则theme-melody将会在你开启的两个或者更多的评论系统里选择其中一个。

## Disqus

注册[disqus](https://disqus.com/)，配置你自己的disqus，然后在`theme-melody`里开启它。

配置`melody.yml`

```yaml
disqus:
  enable: true # or false
  shortname: 你的disqus的 short-name
  count: true # or false. 开启将展示出你的文章的评论数
```

### 截图

![](https://user-images.githubusercontent.com/12621342/34635880-f8a72e84-f2d0-11e7-9343-1f69da841741.png)

## Laibili（来必力）

!> 版本1.4

注册[来必力](http://www.laibili.com.cn/)，配置你自己的来必力设置，然后在`theme-melody`里开启它。

配置`melody.yml`

```yaml
laibili:
  enable: true # or false
  uid: 你的laibili的uid
```

laibili的uid你能在这里找到:

![](https://user-images.githubusercontent.com/12621342/34594229-c4e35800-f20a-11e7-947b-6e0a29537b1e.jpg)

### 截图

![](https://user-images.githubusercontent.com/12621342/34594228-c46d0088-f20a-11e7-904d-32e3faa3159e.jpg)

## Gitment

!> Since v1.4

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

### 截图

![](https://user-images.githubusercontent.com/12621342/34594227-c4240c20-f20a-11e7-8463-64386439207f.jpg)

------

# 分享系统

!> 你只能为你的博客选择一个分享系统。否则theme-melody将会在你开启的两个或者更多的分享系统里选择其中一个。

## AddThis

> 找到你的pub-id

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcj0cbbazj21bq0aqwg3.jpg)

配置`melody.yml`

```yaml
addThis:
  enable: true # or false
  pubid: 你的pub-id
```

### 截图

![](https://user-images.githubusercontent.com/12621342/34635919-56cf9bea-f2d1-11e7-9d30-562e55363706.png)

## Sharejs

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

### 截图

![](https://user-images.githubusercontent.com/12621342/34594230-c537c5e8-f20a-11e7-9d52-267f3456aa22.png)

------

# 搜索系统

## Algolia

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

### 截图

> 点击搜索按钮

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcjkvvavvj21z20uktdp.jpg)

> 搜索结果

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcjmc7d92j21z00ws44q.jpg)

## 本地搜索

!> 版本 1.3

1. 你需要安装 [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search). 根据它的文档去做相应配置。**注意格式只支持xml**。

2. Set the `melody.yml`

```yaml
local_search:
  enable: true # or false
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
```

### 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fksfyhkvruj21z20ug44m.jpg)

------

# 分析统计

## 百度统计

1. 登录百度统计的[官方网站](https://tongji.baidu.com/web/welcome/login)

2. 找到你百度统计的统计代码

![](https://ws1.sinaimg.cn/large/8700af19ly1fjck7o612hj21mq0dqtc5.jpg)

3\. 配置`melody.yml`

```yaml
baidu_analytics: 你的代码
```

## 谷歌分析

1. 登录谷歌分析的[官方网站](https://www.google.com/analytics/)

2. 找到你的谷歌分析的跟踪ID

![](https://ws1.sinaimg.cn/large/8700af19ly1fjckd6djgtj218e05edg2.jpg)

3\. 配置`melody.yml`

```yaml
google_analytics: 你的代码 # 通常以`UA-`打头
```

------

# 访问日志(UV和PV)

## busuanzi

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

### 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcl0gur6tj21z20a8q4t.jpg)

------

# MathJax

配置`melody.yml`

```yaml
mathjax:
  enable: true # or false
  cdn: https://cdn.bootcss.com/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML # required
```

### 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjclb2xajnj21z20m6ac5.jpg)

------

# 特效

## 烟花

模仿[anime.js官网](http://animejs.com/)的点击效果

配置`melody.yml`

```yaml
fireworks: true
```

尝试去点击一下网站主体部分吧!

### 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fjckmubgtnj21z20vidn0.jpg)



