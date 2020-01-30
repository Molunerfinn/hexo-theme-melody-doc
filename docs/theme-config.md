---
sidebarDepth: 1
---

# Theme-config
-----

## Configuration File Introduction

* root `_config.yml` is the hexo work folder config file
* `melody.yml` is the `theme-melody` config file which you should copy the theme `_config.yml` to the hexo work folder's `source/_data/melody.yml`

------

## Language

Set the root `_config.yml`, not the `melody.yml`!

```yaml
language: en
```

The default language is en.

### Language support list

|   Language  |    Author   |
|-------------|-------------|
| default(en) | Molunerfinn |
| zh-Hans     | Molunerfinn |
| en          | Molunerfinn |

------

## Theme Color <Badge text="v1.5.6+" />

Now you can change most of the theme color to whatever you like.

Set the `melody.yml`, for example:

::: warning
color values must be quoted like `"#000"` not `#000` or may cause error!
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
  header_text_color: "#000" # v1.7.0+
  footer_text_color: "#000" # v1.7.0+
```

### Screenshot

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/new_theme_for_melody.png)

------

## Highlight Theme

`theme-melody` supports the [Material Theme](https://github.com/equinusocio/material-theme) code highlight and full five color schemes:

- default
- darker
- pale night
- light
- ocean <Badge text="v1.5.5+" />

set the `melody.yml`

```yaml
highlight_theme: default
```

### Screenshots

> default

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbc7xjkx0j212k0h8gop.jpg)

> darker

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbc7xhpzmj212o0ha77e.jpg)


> pale night

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbc7xnytuj212m0h6whm.jpg)


> light

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbc7xkvwmj212g0h8ad5.jpg)

> ocean <Badge text="v1.5.5+" />

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/ocean-highlight.png)

### Copy Support

As you can see, in the top-right corner of code area, it's a copy icon for you to copy the code by clicking.

------

## Code Word Wrap <Badge text="v1.5.6+" />

By default, `hexo-highlight` generate the code in long lines. If you don't want a scroll bar in your code area, then you can enable this feature.

set the `melody.yml`

```yaml
code_word_wrap: true
```

And find the root `_config.yml`, you can see:

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:
  # ...
```

now change the `line_number` to `false`:

```yaml
highlight:
  enable: true
  line_number: false # <- change this
  auto_detect: false
  tab_replace:
```

And then run `hexo clean` & `hexo g` to generate new code!

Take a look:

### Screenshots

> Before set the `code_word_wrap`:

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/no_code_wrap_for_melody.png)

> After set the `code_word_wrap`:

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/code_wrap_for_melody.png)


------

## Social Icons

::: warning Be careful!
Since v1.6, social icon's format is `icon-name prefix: url` not `icon-name: url`, **be careful**!
:::

Set the social icons and url on the top of site. The format is `icon-name prefix: url`.

Hexo-theme-melody supports [font-awesome v4](https://fontawesome.com/v4.7.0/) & [font-awesome v5](https://fontawesome.com/icons?from=io). By default is the `v4` version.

### v4 version

if you just want to show `v4` icons, you just need to check the [font-awesome v4](https://fontawesome.com/v4.7.0/) for icon name and the prefix is always `fa`.

For example, set the `melody.yml`

```yaml
social:
  github fa: https://github.com/Molunerfinn
  weibo fa: http://weibo.com/mybluedreams
  rss fa: https://Molunerfinn/atom.xml
  ...
```

That's all.

### v5 version

if you want to show `v5` icons, you need to check [font-awesome v5 free icons](https://fontawesome.com/icons?d=gallery&m=free), and the prefix will be `fab`,`fas` or so, you need to write down the right prefix or it won't be displayed.

![20190219160257.png](https://i.loli.net/2019/02/19/5c6bb8312779d.png)

And you need to add `font-awesome v5`'s link to `melody.yml`.

For example, set the `melody.yml`

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

### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635719-8aaf7276-f2ce-11e7-9361-35aac9b5dab1.png)

------

## Menu

In the top-right area, there are nav menu items. Hexo has default path for `/` and `/archives`. If you want to add more menu items such as tags and categories, follow this:

1. get to your hexo blog root folder.
2. type `hexo new page tags`
3. you will find `source/tags/index.md`
4. modify the `index.md`

> More information about pages, please check the [theme-pages](theme-pages.md) for more details.

```
---
title: tags
date: 2018-01-05 00:00:00
type: "tags"
---
```

::: warning
the type must be `tags`! So as the `categories`.
:::

Then set the `melody.yml`

```yaml
menu:
  Home: /
  Archives: /archives
  Tags: /tags
  Categories: /categories
```

you can even change the menu-item's name.

For example:

```yaml
menu:
  Blog: /
  Posts: /archives
  MyTags: /tags
  MyCategories: /categories
```


### Screenshot

![](https://user-images.githubusercontent.com/12621342/34598665-08279518-f229-11e7-892d-9d869ca915b5.png)

------

## Auto Excerpt <Badge text="v1.5.0+" />

Now, if you do not set `auto_excerpt` options in `melody.yml`, your posts will be all shown in the index page. If you add `<!-- more -->` mark in your post, it will be replaced by a `Read More` button. If you don't want to add `<!-- more -->` in every posts, you can set `auto_excerpt` to auto cut your post in the index page.

::: warning
Notice: using this feature may cause error with the code area. So if you want to show code in the index page, then you'd better not use this feature!
:::

set the `melody.yml`:

```yaml
auto_excerpt:
  enable: true
  length: 150
```

------

## Top Img

`Top Img` is the `theme-melody` most magic option. It can have `true` or `false` or `specific img url` values.

set the `melody.yml`

```yaml
top_img: true    # false or specific img url
```

There are Screenshots of the three different values:

- `top_img: true`

> For the index site page

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbf1224d1j21z20xy0y7.jpg)

> For the post page

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbf1226nrj21z20u2gr6.jpg)

- `top_img: false`

> For the index site page

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbeyeimscj21z20y0ju7.jpg)

> For the post page

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbeyf0x5sj21z20xoal5.jpg)

- `top_img: https://xxxxx.jpg`

> For the index site page

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbf9wlz0qj21z20xy7wk.jpg)

> For the post page

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbf9nwhm0j21z20ue1l0.jpg)

### Set the specific post-item's self top-img

Just add the `top_img` & url in your post header in the specific `md` file

```yaml
title: Hi, theme-melody!
tags:
  - hexo
  - hexo theme
top_img: https://xxxxxxx.jpg   # < add top_img to here
date: 2017-09-07
---
```

::: tip
After that, your specific post will have it's own top-img instead of the theme top-img value
:::

------

## Top Img Height <Badge text="v1.7.0+" />

Since `v1.7.0` you can control the `top_img_height`! The default value is `60` which means the `top_img` will occupy 60% of the page height. So if you like, you can set the value to `100` to have a full page top_img!

Set the `melody.yml`

```yaml
top_img_height: 60
```
------

## Post Meta

`Post Meta` is a option to show the information of a post.

Set the `melody.yml`

```yaml
post_meta:
  date_type: created # or updated or both(v1.7.0+)
  categories: true # or false
  tags: true # or false
```

In the top of a post, you can see the date of post and the categories of post. In the bottom of a post, you can see the tags of post.

The following Screenshots shows the tags:


![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbfrd1jhgj21z20ic791.jpg)

------

## Post Copyright <Badge text="v1.1.0+" />

Show the copyright & license for your blog post!

Set the `melody.yml`.

```yaml
post_copyright:
  enable: true
  license: CC BY-NC-SA 3.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/3.0/
```

### Screenshot

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjmbmm3fq6j214g0980u1.jpg)

------

## Post QR Code <Badge text="v1.1.0+" />

Show your own QR code in the end of a post to readers. The QR code img & the text of it depends on you.

Set the `melody.yml`

```yaml
QR_code:
  - itemlist:
      img: https://xxxx1.jpg
      text: 支付宝打赏
  - itemlist:
      img: https://xxxx2.jpg
      text: 微信打赏
```

### Screenshot

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjmbuir86xj212w0egmzf.jpg)

------

## Post Adv Area <Badge text="v1.4.0+" />

Get a adv area for your post! You can put an adv or a music player and so on. It's up to you.

Set the `melody.yml`

```yaml
adv:
  enable: true
  info: # the adv you want to show
```

For example:

```yaml
adv:
  enable: true
  info: <a href="https://www.vultr.com/?ref=7231808"><img src="https://www.vultr.com/media/banner_1.png" width="728" height="90"></a>
```

### Screenshot

![](https://user-images.githubusercontent.com/12621342/34594225-c3d1e0f8-f20a-11e7-9f0b-ed99e4f26305.png)

------

## Sidebar Display <Badge text="v1.7.0+" />

Since `v1.7.0`, you can set the `melody.yml` to control the sidebar to automatically show in specific page or not. The default `sidebar_display` value is `post`, means the sidebar will automatically display in the post page.

```yaml
sidebar_display: post # all/index/post/index-none/post-none/hidden
```

All options are described below

- `all`: all page will automatically show the sidebar
- `index`: just the index page will automatically show the sidebar
- `post`: just the post page will automatically show the sidebar
- `index-none`: just the index page won't automatically show the sidebar
- `post-none`: just the post page won't automatically show the sidebar
- `hidden`: all the page won't automatically show the sidebar

------

## Avatar

Set the `melody.yml`. Please select an image of equal length and width.

```yaml
avatar: https://xxxx.jpg
```

### Screenshot

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fj6lfovr5rj21z4132jx0.jpg)

------

## Follow Me <Badge text="v1.5.4+" />

Set the `melody.yml`.

```yaml
follow:
  enable: true
  url: 'https://github.com/USERNAME'
  text: 'Follow Me'
```

### Screenshot

![](https://user-images.githubusercontent.com/12621342/39968647-22a87a3a-5703-11e8-9e61-2b5b540f98a7.png)

------

## Friend Links

In the sidebar, you can set some links to your friends or some web pages. The format is `name: url`

set the `melody.yml`

```yaml
links_title: Links   # Set the links title
links:
  Molunerfinn: https://molunerfinn.com
  PiEgg: https://piegg.cn
  Elody: https://piegg.cn
```

### Screenshot:

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbg5ba0xxj20fs12ygo5.jpg)

------

## Toc

You can have a toc catalog for your post. It's in your sidebar and will auto expand headers depends on your scroll top.

> Since v1.5.6 you can choose to show the number of toc list or not.

set the `melody.yml`

```yaml
toc:
  enable: true # or false
  number: true # or false. Since v1.5.6
```

### Set the specific post-item's self toc-number

Just add the `toc_number` in your post header in the specific `md` file

```yaml
title: Hi, theme-melody!
tags:
  - hexo
  - hexo theme
toc_number: false   # < add toc_number to here. Since v1.5.6
date: 2017-09-07
---
```

::: tip
After that, your specific post will have it's own top-number control instead of the theme toc-number value
:::


### Screenshots:

> `enable: true`

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbgcwyvbrj21z21307fh.jpg)

> `enable: false`

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbgf0xgvaj21yw12q14o.jpg)

> `number: false`

![](https://user-images.githubusercontent.com/12621342/41695450-a2f73d28-7541-11e8-80d1-65ad7f6749f4.png)

------

## Since

`Since` is an option to show people the age of your site. It's position is in the bottom of the page.

set the `melody.yml`

```yaml
since: 2013
```

### Screenshot:

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/Melody/8700af19ly1fjbfw6qgedj21z20akmyw.jpg)

------

## Footer Custom Text <Badge text="v1.5.5+" />

`footer_custom_text` is an option for you to show some texts in the footer area. It supports HTML.

set the `melody.yml`

```yaml
footer_custom_text: Hi, welcome to my <a href="https://molunerfinn.com">blog</a>!
```

### hitokoto <Badge text="v1.7.0+" />

if you set:

```yaml
footer_custom_text: hitokoto
```

then the `footer_custom_text` will generate random text for your site!

See demo: [https://blog.k1yoshi.com/](https://blog.k1yoshi.com/)

### Screenshot:

![](https://cdn.jsdelivr.net/gh/Molunerfinn/test/picgo/footer_custom_text.png)

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

### ribbon

Set the `melody.yml` and chekcout [ribbon.js](https://github.com/hustcc/ribbon.js) for more details.

```yaml
canvas_ribbon:
  enable: true
  size: 150
  alpha: 0.6
  zIndex: -1
  click_to_change: false
```

#### Screenshot

![](https://user-images.githubusercontent.com/9944833/55931873-c5176400-5c59-11e9-9230-3358f19202e9.png)
