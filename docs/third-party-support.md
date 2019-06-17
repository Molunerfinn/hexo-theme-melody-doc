---
sidebarDepth: 2
---

# Third-party-support

> More third-party libs are coming soon.

------

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

### Laibili

::: tip
Since v1.4
:::

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

### Gitment

::: warning
Since v1.4
:::

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

### Gitalk

::: tip
Since v1.4.3
:::

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

### Valine

::: tip
Since v1.4.3
:::

Follow the guide of [Valine](https://github.com/xCss/Valine) to setup your LeanCloud apps.

And then set the `melody.yml`:

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

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/37018884-f9e8fc56-2150-11e8-906a-ec0a3f1d1e91.png)

------

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

------

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

### Local search

::: tip
Since v1.3
:::

1. You should install [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search). Follow its doc to setup. **Only supporting the `xml` file**.

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

------

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

### Tencent analytics

::: tip
Since v1.6
:::

1. Login the tencent analytics [web site](https://ta.qq.com)

2. Find your tencent analytics code

![20190219153958.png](https://i.loli.net/2019/02/19/5c6bb2ce69de5.png)

3\. Set the `melody.yml`

```yaml
tencent_analytics: your code
```

------

## Adsense

### Google adsense

::: tip
Since v1.6
:::

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

------

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

------

## MathJax

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

------

## KaTeX

::: tip
Since v1.6
:::

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
      name: '@neilsustc/markdown-it-katex'
      enable: true
      options:
        strict: false
```

Of course, you can define you own `macros` using this feature.

Because KaTeX is faster and lightweight, there are fewer features than MathJax (right-click menu). For those are used to MathJax, we also added [*Copy As TeX Code*](https://github.com/upupming/katex-copytex) support for KaTeX, which is enabled by default.

#### Screenshot

<img src=https://user-images.githubusercontent.com/24741764/52897430-47157e80-320f-11e9-821c-ba5517ae096f.gif height=600px>

------

## Effects

### fireworks

Like the [anime.js](http://animejs.com/) clicking effects

Set the `melody.yml`

```yaml
fireworks: true
```

Try to click the page body!

#### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635863-99026944-f2d0-11e7-9fb9-d5d3cc694aba.png)


------

## Live2D Animated model pendant

### Installation

#### Live2D model

Use the following command to install the `Live2D` module, which needs to be executed in the `root` directory of the blog through the terminal:

```yaml
npm install --save hexo-helper-live2d
```

If you don't want to use it and want to uninstall it completely, the command is as follows:

```yaml
npm uninstall hexo-helper-live2d
```

#### Configure your favorite animated model

There are a lot of `Live2D` animation models for us to choose from:

  1.The corresponding module is downloaded [here](https://github.com/xiazeyu/live2d-widget-models)

For example, I use `tororo(Cute White Cat)`, which can be directly in the download interface above:

  1.After the manual download is complete, copy all the files in `packages` to the `node_moduels` folder in the root directory of the blog.

  2.It can also be installed using the package manager. The command format: `npm install model package name` will also be installed in the `node_moduels` directory.

  3.Open the configuration file `_config.yml` of the blog root directory and add the following content:

```yaml
# Live2D
live2d:
  enable: true
# enable: false
  scriptFrom: local # default
  pluginRootPath: live2dw/ # Plugin on the root of the site
  pluginJsPath: lib/ # Script file relative to the plugin root directory path
  pluginModelPath: assets/ # Model file relative to plugin root directory path
  model:   
    use: live2d-widget-model-tororo # Downloaded animated model name
  display:
    superSample: 2
    width: 210
    height: 420
    position: left # Where the model is displayed on the web page
    hOffset: 0
    vOffset: -20
  mobile:
    show: true  # Whether the mobile device displays 
```


Go and pick up your cute white cat!

#### Screenshot

![](https://jacklin-zhang.cn/img/tororo.jpg)

------
