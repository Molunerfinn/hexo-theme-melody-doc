---
sidebarDepth: 2
---

# Third-party-support

> More third-party libs are coming soon.

---

## Comments

::: warning
You can only choose one comments system for your blog or theme-melody will choose one for you if you enable two or more comments systems.
:::

### Disqus

Sign up the [disqus](https://disqus.com/), setup your own disqus, and enable the disqus in `theme-melody`

Set the `melody.yml`

```yaml
disqus:
  enable: true # or false
  shortname: your disqus short-name
  count: true # or false. It show the comments of your post
```

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635880-f8a72e84-f2d0-11e7-9343-1f69da841741.png)

### Laibili <Badge text="v1.4.0+" />

Sign up the [laibili](http://www.laibili.com.cn/), setup your own laibili, and enable the laibili in `theme-melody`

Set the `melody.yml`

```yaml
laibili:
  enable: true # or false
  uid: your laibili uid
```

The laibili uid you can find in here:

![](https://user-images.githubusercontent.com/12621342/34594229-c4e35800-f20a-11e7-947b-6e0a29537b1e.jpg)

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34594228-c46d0088-f20a-11e7-904d-32e3faa3159e.jpg)

### Gitment <Badge text="v1.4.0+" />

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

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34594227-c4240c20-f20a-11e7-8463-64386439207f.jpg)

### Gitalk <Badge text="v1.4.3+" />

Follow the guide of [gitalk](https://github.com/gitalk/gitalk) to get your github Oauth app's client id and secret.

And then set the `melody.yml`:

```yaml
gitalk:
  enable: true
  client_id: your client id
  client_secret: your client secret
  repo: your github repo
  owner: your github name
  admin: Github repo owner and collaborators, only these guys can initialize github issues
```

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/37018676-34892058-2150-11e8-92a0-62d8ed83896c.png)

### Valine <Badge text="v1.4.3+" />

Follow the guide of [Valine](https://github.com/xCss/Valine) to setup your LeanCloud apps.

And then set the `melody.yml`:

```yaml
valine:
  enable: false # if you want use valine,please set this value is ture
  appId: # leancloud application app id
  appKey: # leancloud application app key
  notify: false # valine mail notify (true/false) https://github.com/xCss/Valine/wiki
  verify: false # valine verify code (true/false)
  pageSize: 10 # comment list page size
  avatar: mm # gravatar style https://valine.js.org/#/avatar
  lang: zh-cn # i18n: zh-cn/en
  placeholder: Just go go # valine comment input placeholder(like: Please leave your footprints )
  guest_info: nick,mail,link #valine comment header in
```

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/37018884-f9e8fc56-2150-11e8-906a-ec0a3f1d1e91.png)

### Vssue

Follow the [Vssue guide](https://vssue.js.org) to setup vssue

```yaml
vssue:
  enable: false # Set to true to enable
  platform: github-v4
  owner: # The owner's name of repository to store the issues and comments
  repo: # The name of repository to store the issues and comments.
  clientId:
  clientSecret: # only required for some of the platforms
  autoCreateIssue: false # Auto create issue on platform (github/...)
  baseURL: "" # For self-hosted gitlab/bitbucket only, see here: https://vssue.js.org/options/#baseurl
  perPage: 10 # How much comment/page
  labels: 'Vssue'
```

---

## Share

::: warning
You can only choose one share system for your blog or theme-melody will choose one for you if you enable two or more share systems.
:::

### AddThis

> Find your pub-id

![](https://user-images.githubusercontent.com/12621342/34635848-777f9fc6-f2d0-11e7-9df1-2dfe1df1f99a.png)

Set the `melody.yml`

```yaml
addThis:
  enable: true # or false
  pubid: your pub-id
```

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635919-56cf9bea-f2d1-11e7-9d30-562e55363706.png)

### Sharejs

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

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34594230-c537c5e8-f20a-11e7-9d52-267f3456aa22.png)

---

## Search

After set the search system, you will have a global search button in the navbar since v1.5.6!

![](https://user-images.githubusercontent.com/12621342/41663525-3a014f0e-74d6-11e8-8d7f-92ecb412a628.png)

### Algolia

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

#### Screenshots

> Click the search icon

![](https://user-images.githubusercontent.com/12621342/34635851-7cb1aa5c-f2d0-11e7-8e8f-1c382f6f613a.png)

> Search results

![](https://user-images.githubusercontent.com/12621342/34635852-8003827a-f2d0-11e7-9975-c1d0bb959122.png)

### Local search <Badge text="v1.3.0+" />

1. You should install [hexo-generator-search](https://github.com/wzpan/hexo-generator-search). Follow its doc to setup. **Only supporting the `xml` file**.

2. Set the `melody.yml`

```yaml
local_search:
  enable: true # or false
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
```

#### Screenshots

![](https://user-images.githubusercontent.com/12621342/34635853-8404ead0-f2d0-11e7-8feb-936dec267523.png)

---

## Analytics

### Baidu analytics

1. Login the baidu tongji [web site](https://tongji.baidu.com/web/welcome/login)

2. Find your baidu tongji code

![](https://user-images.githubusercontent.com/12621342/34635855-880120a4-f2d0-11e7-94a4-739bbcc8c9ea.png)

3\. Set the `melody.yml`

```yaml
baidu_analytics: your code
```

### Google analytics

1. Login the google analytics [web site](https://www.google.com/analytics/)

2. Find your google analytics code

![](https://user-images.githubusercontent.com/12621342/34635856-8b9433dc-f2d0-11e7-8cf8-878ddf323416.png)

3\. Set the `melody.yml`

```yaml
google_analytics: your code # usually start with `UA-`
```

### Tencent analytics <Badge text="v1.6.0+" />

1. Login the tencent analytics [web site](https://ta.qq.com)

2. Find your tencent analytics code

![20190219153958.png](https://i.loli.net/2019/02/19/5c6bb2ce69de5.png)

3\. Set the `melody.yml`

```yaml
tencent_analytics: your code
```

---

## Adsense

### Google adsense <Badge text="v1.6.0+" />

1. Login the google adsense [web site](https://www.google.com/adsense)

2. Find your google adsense client-id, usually start with `ca-pub-`

![20190219155033.png](https://i.loli.net/2019/02/19/5c6bb548cb96f.png)

3\. Set the `melody.yml`

```yaml
google_adsense:
  enable: true
  js: //pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  client: ca-pub-...........
  enable_page_level_ads: true
```

#### Screenshot

![](https://user-images.githubusercontent.com/24741764/44613950-7776f400-a84e-11e8-9fbc-97b3bcaa71e3.png)

---

## Access Logs (UV/PV)

### busuanzi

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

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635857-8f6f4032-f2d0-11e7-9cdf-4957d9cc0aa1.png)

---

## Mathematical formula

### MathJax

::: tip
It is recommended to use Katex for better results, as described below!
:::

Set the `melody.yml`

```yaml
mathjax:
  enable: true # or false
  cdn: https://cdn.bootcss.com/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML # required
```

And you need to change the default `markdown` render engine to fit this.

Check: [hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed)

Get in your **hexo site folder** and do the following things(**Not the theme-melody folder!**):

![](https://user-images.githubusercontent.com/12621342/41012862-49cd9ed0-6976-11e8-8ef2-28c6b4208aa8.png)

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635861-934ef38c-f2d0-11e7-80ae-b37f6b20048a.png)

### KaTeX <Badge text="v1.6.0+" />

Disable MathJax, and then modify your `melody.yml` to load `katex.min.css`:

```yaml
katex:
  enable: true
  cdn:
    css: https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css
```

You don't need `katex.min.js` to render math equations. Instead, you have to uninstall your old hexo render and `hexo-math`, and then install `hexo-renderer-markdown-it-plus`:

```bash
# Uninstall `hexo-renderer-kramed` or `hexo-renderer-marked` or whatever your hexo markdown renderer
# You can check your installed renderer in your package.json
npm un hexo-renderer-marked --save

# or

npm un hexo-renderer-kramed --save

# uninstall `hexo-math`
npm un hexo-math --save

# install `hexo-renderer-markdown-it-plus`
npm i @upupming/hexo-renderer-markdown-it-plus --save
```

Note [`hexo-renderer-markdown-it-plus`](https://github.com/CHENXCHEN/hexo-renderer-markdown-it-plus) is out-of-maintenance, so we use [`@upupming/hexo-renderer-markdown-it-plus`](https://github.com/upupming/hexo-renderer-markdown-it-plus). This fork makes use of [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex) which is also used by VS Code plugin [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown), so we will get latest KaTeX features such as `\tag{}`.

And you can customize KaTeX as you want through [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex), all the options available is at https://katex.org/docs/options.html. For example, if you want to disable the noisy warning printed by KaTeX in the console, you can set the `strict` to false by add the following lines in your root `_config.yml`:

```yml
markdown_it_plus:
  plugins:
    - plugin:
      name: "@neilsustc/markdown-it-katex"
      enable: true
      options:
        strict: false
```

Of course, you can define you own `macros` using this feature.

Because KaTeX is faster and lightweight, there are fewer features than MathJax (right-click menu). For those are used to MathJax, we also added [_Copy As TeX Code_](https://github.com/upupming/katex-copytex) support for KaTeX, which is enabled by default.

#### Screenshot

<img src=https://user-images.githubusercontent.com/24741764/52897430-47157e80-320f-11e9-821c-ba5517ae096f.gif height=600px>

---

## Word counting <Badge text="v1.3.0+" />

To have the word counting feature for `theme-melody`, you need to do the following things:

1. Go to the hexo site folder
2. `npm install hexo-wordcount --save` or `yarn add hexo-wordcount`
3. Set the `melody.yml`

```yaml
wordcount:
  enable: true
```

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635947-be617e0e-f2d1-11e7-918e-594e1a22ab90.png)

## Sticky posts <Badge text="v1.6.0+" />

To have the ability to stikcy posts, you need to do the following things:

1. Go to the hexo site folder
2. `npm uninstall hexo-generator-index --save` and then `npm install hexo-generator-index-pin-top --save`
3. You can add the `top: True` field to post's front-matter to pin it.
4. You can checkout [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top) for more details.

For example:

if one of your post file is like the following:

```yaml
title: xxxx
tags:
  - xxx
date: 2018-08-08 08:08:08
---
// ....
```

now add the `top: True`:

```yaml
title: xxxx
tags:
  - xxx
date: 2018-08-08 08:08:08
top: True
---
// ....
```

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/44832717-37ed4500-ac5e-11e8-9d3d-2580ab36fcac.png)
