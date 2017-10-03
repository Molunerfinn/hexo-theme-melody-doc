# 第三方支持

> 更多的第三方支持不断加入中。

------

# 评论系统

## Disqus

注册[disqus](https://disqus.com/)，配置你自己的disqus，然后在`theme-melody`里开启它。

配置`melody.yml`

```yaml
disqus:
  enable: true # or false
  shortname: 你的disqus的 short-name
  count: true # or false. 开启将展示出你的文章的评论数
```

------

# 分享系统

## AddThis

> 找到你的pub-id

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcj0cbbazj21bq0aqwg3.jpg)

配置`melody.yml`

```yaml
addThis:
  enable: true # or false
  pubid: 你的pub-id
```

------

# 搜索系统

## Algolia

1. 你需要安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) or [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根据它们的说明文档去做相应的配置。

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



