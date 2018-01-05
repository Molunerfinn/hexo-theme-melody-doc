# Third-party-support

> More third-party libs are coming soon.

------

# Comments

!> You can only choose one comments system for your blog or theme-melody will choose one for you if you enable two or more comments systems.

## Disqus

Sign up the [disqus](https://disqus.com/), setup your own disqus, and enable the disqus in `theme-melody`

Set the `melody.yml`

```yaml
disqus:
  enable: true # or false
  shortname: your disqus short-name
  count: true # or false. It show the comments of your post
```

## Laibili

!> Since v1.4

Sign up the [laibili](http://www.laibili.com.cn/), setup your own laibili, and enable the laibili in `theme-melody`

Set the `melody.yml`

```yaml
laibili:
  enable: true # or false
  uid: your laibili uid
```

The laibili uid you can find in here:

![](https://user-images.githubusercontent.com/12621342/34594229-c4e35800-f20a-11e7-947b-6e0a29537b1e.jpg)

### Screenshot

![](https://user-images.githubusercontent.com/12621342/34594228-c46d0088-f20a-11e7-904d-32e3faa3159e.jpg)

## Gitment

!> Since v1.4

Follow the guide of [gitment](https://github.com/imsun/gitment) to get your github Oauth app's client id and secret.

And then set the `melody.yml`:

```yaml
gitment:
  enable: true # or false
  owner: your github name 
  repo: your github repo 
  client_id: your client id
  client_secret: your client secret 
```

For example:

```yaml
gitment:
  enable: true
  owner: Molunerfinn
  repo: Molunerfinn.github.io
  client_id: xxxx 
  client_secret: yyyy 
```

### Screenshot

![](https://user-images.githubusercontent.com/12621342/34594227-c4240c20-f20a-11e7-8463-64386439207f.jpg)

------

# Share

!> You can only choose one share system for your blog or theme-melody will choose one for you if you enable two or more share systems.

## AddThis

> Find your pub-id

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcj0cbbazj21bq0aqwg3.jpg)

Set the `melody.yml`

```yaml
addThis:
  enable: true # or false
  pubid: your pub-id
```

## Sharejs

Check the [sharejs](https://github.com/overtrue/share.js/) for more details.

Set the `melody.yml`

```yaml
sharejs:
  enable: true
  disabled_sites: the sites you don't want to display
```

For example:

```yaml
sharejs:
  enable: true
  disabled_sites: google,facebook
```

### Screenshot

![](https://user-images.githubusercontent.com/12621342/34594230-c537c5e8-f20a-11e7-9d52-267f3456aa22.png)

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

### Screenshots

> Click the search icon

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcjkvvavvj21z20uktdp.jpg)

> Search results

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcjmc7d92j21z00ws44q.jpg)

## Local search

!> Since v1.3

1. You should install [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search). Follow its doc to setup. **Only supporting the `xml` file**.

2. Set the `melody.yml`

```yaml
local_search:
  enable: true # or false
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
```

### Screenshots

![](https://ws1.sinaimg.cn/large/8700af19ly1fksfyhkvruj21z20ug44m.jpg)

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

### Screenshot

![](https://ws1.sinaimg.cn/large/8700af19ly1fjcl0gur6tj21z20a8q4t.jpg)

------

# MathJax

Set the `melody.yml`

```yaml
mathjax:
  enable: true # or false
  cdn: https://cdn.bootcss.com/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML # required
```

### Screenshots

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

### Screenshot

![](https://ws1.sinaimg.cn/large/8700af19ly1fjckmubgtnj21z20vidn0.jpg)

