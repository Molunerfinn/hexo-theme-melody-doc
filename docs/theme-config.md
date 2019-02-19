---
sidebarDepth: 1
---

# Theme config
-----

## Configuration file introduction

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

## Theme color

::: tip
Since v1.5.6
:::

Now you can change most of the theme color to whatever you like.

Set the `melody.yml`, for example:

!> color values must be quoted like `"#000"` not `#000` or may cause error!

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

### Screenshot

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/new_theme_for_melody.png)

------

## Highlight theme

`theme-melody` supports the [Material Theme](https://github.com/equinusocio/material-theme) code highlight and full five color schemes:

- default
- darker
- pale night
- light
- ocean (since v1.5.5)

set the `melody.yml`

```yaml
highlight_theme: default
```

### Screenshots

> default

![](https://user-images.githubusercontent.com/12621342/34635716-7cab20ee-f2ce-11e7-94cb-9d5a43adc682.png)

> darker

![](https://user-images.githubusercontent.com/12621342/34635714-7348ddf2-f2ce-11e7-8c0a-d078d9c2d9ef.png)


> pale night

![](https://user-images.githubusercontent.com/12621342/34635710-6a552d2c-f2ce-11e7-8420-199f60705522.png)


> light

![](https://user-images.githubusercontent.com/12621342/34635718-85337180-f2ce-11e7-8be3-cb01257c2c49.png)

> ocean (since v1.5.5)

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/ocean-highlight.png)

### Copy support

As you can see, in the top-right corner of code area, it's a copy icon for you to copy the code by clicking.

------

## Code Word Wrap

> Since v1.5.6

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

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/no_code_wrap_for_melody.png)

> After set the `code_word_wrap`:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/code_wrap_for_melody.png)


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

!> the type must be `tags`! So as the `categories`.

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

## Auto excerpt

!> Since v1.5

Now, if you do not set `auto_excerpt` options in `melody.yml`, your posts will be all shown in the index page. If you add `<!-- more -->` mark in your post, it will be replaced by a `Read More` button. If you don't want to add `<!-- more -->` in every posts, you can set `auto_excerpt` to auto cut your post in the index page.

!> Notice: using this feature may cause error with the code area. So if you want to show code in the index page, then you'd better not use this feature!

set the `melody.yml`:

```yaml
auto_excerpt:
  enable: true
  length: 150
```

------

## Top-img

`Top-img` is the `theme-melody` most magic option. It can have `true` or `false` or `specific img url` values.

set the `melody.yml`

```yaml
top_img: true    # false or specific img url
```

There are Screenshots of the three different values:

- `top_img: true`

> For the index site page

![](https://user-images.githubusercontent.com/12621342/34635727-95965470-f2ce-11e7-9223-11189b86210b.png)

> For the post page

![](https://user-images.githubusercontent.com/12621342/34635728-99bed54a-f2ce-11e7-9d81-599132cbaf6a.png)

- `top_img: false`

> For the index site page

![](https://user-images.githubusercontent.com/12621342/34635729-9f0f060a-f2ce-11e7-8249-4a15bec8499a.png)

> For the post page

![](https://user-images.githubusercontent.com/12621342/34635731-a43bf02a-f2ce-11e7-9aa2-b1474b3cd257.png)

- `top_img: https://xxxxx.jpg`

> For the index site page

![](https://user-images.githubusercontent.com/12621342/34635734-a8f03ac2-f2ce-11e7-8afe-512c4eded68d.png)

> For the post page

![](https://user-images.githubusercontent.com/12621342/34635736-ad06cbee-f2ce-11e7-951d-c40341b396c0.png)

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

!> After that, your specific post will have it's own top-img instead of the theme top-img value

------

## Post meta

`Post meta` is a option to show the information of a post.

set the `melody.yml`

```yaml
post_meta:
  date_type: created # or updated
  categories: true # or false
  tags: true # or false
```

In the top of a post, you can see the date of post and the categories of post. In the bottom of a post, you can see the tags of post.

The following Screenshots shows the tags:


![](https://user-images.githubusercontent.com/12621342/34635738-b3769ce8-f2ce-11e7-9096-16c82c3d24d8.png)

------

## Post copyright

!> Since v1.1

Show the copyright & license for your blog post!

Set the `melody.yml`.

```yaml
post_copyright:
  enable: true
  license: CC BY-NC-SA 3.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/3.0/
```

### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635740-b80da882-f2ce-11e7-9bc1-8664f39d6e17.png)

------

## Post QR code

!> Since v1.1

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

![](https://user-images.githubusercontent.com/12621342/34635742-bcb9f980-f2ce-11e7-9a3a-892695a6d666.png)

------

## Post adv area

!> Since v1.4

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

## Avatar

Set the `melody.yml`.

```yaml
avatar: https://xxxx.jpg
```

### Screenshot

![](https://user-images.githubusercontent.com/12621342/34635748-c5962902-f2ce-11e7-9d52-1d343e868dbb.png)

------

## Follow Me

!> Since v1.5.4

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

## Friend links

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

![](https://user-images.githubusercontent.com/12621342/34635749-ca9a1b98-f2ce-11e7-9260-ac9052332ace.png)

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

!> After that, your specific post will have it's own top-number control instead of the theme toc-number value


### Screenshots:

> `enable: true`

![](https://user-images.githubusercontent.com/12621342/34635750-cef0b3f0-f2ce-11e7-8cd6-019b3399d861.png)

> `enable: false`

![](https://user-images.githubusercontent.com/12621342/34635751-d3428492-f2ce-11e7-9fb5-053dcaa44e5f.png)

> `number: false`

![](https://user-images.githubusercontent.com/12621342/41695450-a2f73d28-7541-11e8-80d1-65ad7f6749f4.png)

------

## Since

`Since` is an option to show people the age of your site. It's position is in the bottom of the page.

set the `melody.yml`

```
since: 2013
```

### Screenshot:

![](https://user-images.githubusercontent.com/12621342/34635752-d82a78ac-f2ce-11e7-9081-e89425eb6a8c.png)

------

## footer_custom_text

!> Since v1.5.5

`footer_custom_text` is an option for you to show some texts in the footer area. It supports HTML.

set the `melody.yml`

```yaml
footer_custom_text: Hi, welcome to my <a href="https://molunerfinn.com">blog</a>!
```

### Screenshot:

![](https://raw.githubusercontent.com/Molunerfinn/test/master/picgo/footer_custom_text.png)