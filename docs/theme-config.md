# Configuration file introduction

* root `_config.yml` is the hexo work folder config file
* `melody.yml` is the `theme-melody` config file which you should copy the theme `_config.yml` to the hexo work folder's `source/_data/melody.yml`

# Language

Set the root `_config.yml`

```yml
language: en
```

The default language is en.

## Language support list

|   Language  |    Author   |
|-------------|-------------|
| default(en) | Molunerfinn |
| zh-Hans     | Molunerfinn |
| en          | Molunerfinn |

# Highlight theme

`theme-melody` supports the [Material Theme](https://github.com/equinusocio/material-theme) code highlight and full four color schemes:

- default
- darker
- pale night
- light

set the `melody.yml`

```yml
highlight: default
```

## Screen shots

> default

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xjkx0j212k0h8gop.jpg)

> darker

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xhpzmj212o0ha77e.jpg)


> pale night

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xnytuj212m0h6whm.jpg)


> light

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbc7xkvwmj212g0h8ad5.jpg)

## Copy support

As you can see, in the top-right corner of code area, it's a copy icon for you to copy the code by clicking.

# Social Icons

Set the social icons and url on the top of site. The format is `icon-name: url`. For icon-name, you can check the [font-awesome](http://fontawesome.io/icons/).

set the `melody.yml`

```yml
social:
  github: https://github.com/Molunerfinn
  weibo: http://weibo.com/mybluedreams
  rss: https://Molunerfinn/atom.xml
  ...
```

## Screen shot

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf1224d1j21z20xy0y7.jpg)

# Top-img

`Top-img` is the `theme-melody` most magic option. It can have `true` or `false` or `specific img url` values.

set the `melody.yml`

```yml
top_img: true    # false or specific img url
```

There are screen shots of the three different values:

- `top_img: true`

> For the index site page

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf1224d1j21z20xy0y7.jpg)

> For the post page

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf1226nrj21z20u2gr6.jpg)

- `top_img: false`

> For the index site page

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbeyeimscj21z20y0ju7.jpg)

> For the post page

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbeyf0x5sj21z20xoal5.jpg)

- `top_img: https://xxxxx.jpg`

> For the index site page

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf9wlz0qj21z20xy7wk.jpg)

> For the post page

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbf9nwhm0j21z20ue1l0.jpg)

## Set the specific post-item's self top-img

Just add the `top_img` & url in your post header in the specific `md` file

```yml
title: Hi, theme-melody!
tags:
  - hexo
  - hexo theme
top_img: https://xxxxxxx.jpg   # < add top_img to here
date: 2017-09-07
---
```

!> After that, your specific post will have it's own top-img instead of the theme top-img value

# Post meta

`Post meta` is a option to show the information of a post.

set the `melody.yml`

```yml
post_meta:
  date_type: created # or updated
  categories: true # or false
  tags: true # or false
```

In the top of a post, you can see the date of post and the categories of post. In the bottom of a post, you can see the tags of post.

The following screen shots shows the tags:


![](https://ws1.sinaimg.cn/large/8700af19ly1fjbfrd1jhgj21z20ic791.jpg)

# Avatar

Set the sidebar avatar.

```yml
avatar: https://xxxx.jpg
```

## Screen shot

![](https://ws1.sinaimg.cn/large/8700af19ly1fj6lfovr5rj21z4132jx0.jpg)

# Friend links

In the sidebar, you can set some links to your friends or some web pages. The format is `name: url`

set the `melody.yml`

```yml
links_title: Links   # Set the links title
links:
  Molunerfinn: https://molunerfinn.com
  PiEgg: https://piegg.cn
  Elody: https://piegg.cn
```

## Screen shot:

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbg5ba0xxj20fs12ygo5.jpg)

# Toc

You can have a toc catalog for your post. It's in your sidebar and will auto expand headers depends on your scroll top.

set the `melody.yml`

```
toc:
  enable: true # or false
```

## Screen shots:

> `enable: true`

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbgcwyvbrj21z21307fh.jpg)

> `enable: false`

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbgf0xgvaj21yw12q14o.jpg)

# Since

`Since` is a option to show people the age of your site. It's position is in the bottom of the page.

set the `melody.yml`

```
since: 2013
```

## Screen shot:

![](https://ws1.sinaimg.cn/large/8700af19ly1fjbfw6qgedj21z20akmyw.jpg)
