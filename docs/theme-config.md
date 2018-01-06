# Theme config
-----

# Configuration file introduction

* root `_config.yml` is the hexo work folder config file
* `melody.yml` is the `theme-melody` config file which you should copy the theme `_config.yml` to the hexo work folder's `source/_data/melody.yml`

------

# Language

Set the root `_config.yml`

```yaml
language: en
```

The default language is en.

## Language support list

|   Language  |    Author   |
|-------------|-------------|
| default(en) | Molunerfinn |
| zh-Hans     | Molunerfinn |
| en          | Molunerfinn |

------

# Highlight theme

`theme-melody` supports the [Material Theme](https://github.com/equinusocio/material-theme) code highlight and full four color schemes:

- default
- darker
- pale night
- light

set the `melody.yml`

```yaml
highlight: default
```

## Screenshots

> default

![](https://user-images.githubusercontent.com/12621342/34635716-7cab20ee-f2ce-11e7-94cb-9d5a43adc682.png)

> darker

![](https://user-images.githubusercontent.com/12621342/34635714-7348ddf2-f2ce-11e7-8c0a-d078d9c2d9ef.png)


> pale night

![](https://user-images.githubusercontent.com/12621342/34635710-6a552d2c-f2ce-11e7-8420-199f60705522.png)


> light

![](https://user-images.githubusercontent.com/12621342/34635718-85337180-f2ce-11e7-8be3-cb01257c2c49.png)

## Copy support

As you can see, in the top-right corner of code area, it's a copy icon for you to copy the code by clicking.

------

# Social Icons

Set the social icons and url on the top of site. The format is `icon-name: url`. For icon-name, you can check the [font-awesome](http://fontawesome.io/icons/).

set the `melody.yml`

```yaml
social:
  github: https://github.com/Molunerfinn
  weibo: http://weibo.com/mybluedreams
  rss: https://Molunerfinn/atom.xml
  ...
```

## Screenshot

![](https://user-images.githubusercontent.com/12621342/34635719-8aaf7276-f2ce-11e7-9361-35aac9b5dab1.png)

------

# Menu

In the top-right area, there are nav menu items. Hexo has default path for `/` and `/archives`. If you want to add more menu items such as tags and categories, follow this:

1. get to your hexo blog root folder.
2. type `hexo new page tags`
3. you will find `source/tags/index.md`
4. modify the `index.md`

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

## Screenshot

![](https://user-images.githubusercontent.com/12621342/34598665-08279518-f229-11e7-892d-9d869ca915b5.png)

------

# Top-img

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

## Set the specific post-item's self top-img

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

# Post meta

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

# Post copyright

!> Since v1.1

Show the copyright & license for your blog post!

Set the `melody.yml`.

```yaml
post_copyright:
  enable: true
  license: CC BY-NC-SA 3.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/3.0/
```

## Screenshot

![](https://user-images.githubusercontent.com/12621342/34635740-b80da882-f2ce-11e7-9bc1-8664f39d6e17.png)

------

# Post QR code

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

## Screenshot

![](https://user-images.githubusercontent.com/12621342/34635742-bcb9f980-f2ce-11e7-9a3a-892695a6d666.png)

------

# Post adv area

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

## Screenshot

![](https://user-images.githubusercontent.com/12621342/34594225-c3d1e0f8-f20a-11e7-9f0b-ed99e4f26305.png)

------

# Avatar

Set the `melody.yml`.

```yaml
avatar: https://xxxx.jpg
```

## Screenshot

![](https://user-images.githubusercontent.com/12621342/34635748-c5962902-f2ce-11e7-9d52-1d343e868dbb.png)

------

# Friend links

In the sidebar, you can set some links to your friends or some web pages. The format is `name: url`

set the `melody.yml`

```yaml
links_title: Links   # Set the links title
links:
  Molunerfinn: https://molunerfinn.com
  PiEgg: https://piegg.cn
  Elody: https://piegg.cn
```

## Screenshot:

![](https://user-images.githubusercontent.com/12621342/34635749-ca9a1b98-f2ce-11e7-9260-ac9052332ace.png)

------

# Toc

You can have a toc catalog for your post. It's in your sidebar and will auto expand headers depends on your scroll top.

set the `melody.yml`

```yaml
toc:
  enable: true # or false
```

## Screenshots:

> `enable: true`

![](https://user-images.githubusercontent.com/12621342/34635750-cef0b3f0-f2ce-11e7-8cd6-019b3399d861.png)

> `enable: false`

![](https://user-images.githubusercontent.com/12621342/34635751-d3428492-f2ce-11e7-9fb5-053dcaa44e5f.png)

------

# Since

`Since` is a option to show people the age of your site. It's position is in the bottom of the page.

set the `melody.yml`

```
since: 2013
```

## Screenshot:

![](https://user-images.githubusercontent.com/12621342/34635752-d82a78ac-f2ce-11e7-9081-e89425eb6a8c.png)
