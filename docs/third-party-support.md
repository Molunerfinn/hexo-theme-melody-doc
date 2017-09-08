# Third-party-support

> More third-party libs are coming soon.

------

# Comments

## Disqus

Sign up the [disqus](https://disqus.com/), setup your own disqus, and enable the disqus in `theme-melody`

Set the `melody.yml`

```yaml
disqus:
  enable: true # or false
  shortname: your disqus short-name
  count: true # or false. It show the comments of your post
```

------

# Share

## AddThis

> Find your pub-id

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcj0cbbazj21bq0aqwg3.jpg)

Set the `melody.yml`

```yaml
addThis:
  enable: true # or false
  pubid: your pub-id
```

------

# Search

## Algolia

1. You should install [hexo-algolia](https://github.com/oncletom/hexo-algolia) or [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). Follow their doc to setup.

2. Set the `melody.yml`

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

### Screen shots

> Click the search icon

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcjkvvavvj21z20uktdp.jpg)

> Search results

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcjmc7d92j21z00ws44q.jpg)

------

# Analytics

## Baidu analytics

1. Login the baidu tongji [web site](https://tongji.baidu.com/web/welcome/login)

2. Find your baidu tongji code

![](https://ws1.sinaimg.cn/large/8700af19ly1fjck7o612hj21mq0dqtc5.jpg)

3\. Set the `melody.yml`

```yaml
baidu_analytics: your code
```

## Google analytics

1. Login the google analytics [web site](https://www.google.com/analytics/)

2. Find your google analytics code

![](https://ws1.sinaimg.cn/large/8700af19ly1fjckd6djgtj218e05edg2.jpg)

3\. Set the `melody.yml`

```yaml
google_analytics: your code # usually start with `UA-`
```

------

# Access Logs (UV/PV)

## busuanzi

You can visit the busuanzi [web site](http://busuanzi.ibruce.info/) for more details.

Set the `melody.yml`

```yaml
# busuanzi count for PV / UV in site
busuanzi:
  # count values only if the other configs are false
  enable: true
  # custom uv span for the whole site
  site_uv: true
  site_uv_header: <i class="fa fa-user"></i>
  site_uv_footer: 
  # custom pv span for the whole site
  site_pv: true
  site_pv_header: <i class="fa fa-eye"></i>
  site_pv_footer: 
  # custom pv span for one page only
  page_pv: true
  page_pv_header: <i class="fa fa-file-o"></i>
  page_pv_footer: 
```

### Screen shot

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcl0gur6tj21z20a8q4t.jpg)

------

# MathJax

Set the `melody.yml`

```yaml
mathjax:
  enable: true # or false
  cdn: https://cdn.bootcss.com/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML # required
```

### Screen shots

![](https://ws1.sinaimg.cn/large/8700af19ly1fjclb2xajnj21z20m6ac5.jpg)

------

# Effects

## fireworks

Like the [anime.js](http://animejs.com/) clicking effects

Set the `melody.yml`

```yaml
fireworks: true
```

Try to click the page body!

### Screen shot

![](https://ws1.sinaimg.cn/large/8700af19ly1fjckmubgtnj21z20vidn0.jpg)



