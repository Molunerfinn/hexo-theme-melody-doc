---
sidebarDepth: 1
---

# Theme-pages

Theme-melody supports several kinds of pages.

------

## Tags

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

---

## Categories

1. get to your hexo blog root folder.
2. type `hexo new page categories`
3. you will find `source/categories/index.md`
4. modify the `index.md`

```
---
title: categories
date: 2018-01-05 00:00:00
type: "categories"
---
```

---

## Slides

::: tip
Since v1.5
:::

Slides page allows you to write in markdown & output with [reveal.js](https://github.com/hakimel/reveal.js/) to make a beautiful slide page.

> Demo [hexo-theme-melody supports slides](https://molunerfinn.com/slide-support/) 

<iframe-demo url="https://molunerfinn.com/slide-support/" />

### Set the `melody.yml`

```yaml
slide:
  separator: ---
  separator_vertical: --
  charset: utf-8
  theme: black
  # optional
  mouseWheel: false
  transition: slide
  transitionSpeed: default
  parallaxBackgroundImage: ''
  parallaxBackgroundSize: ''
  parallaxBackgroundHorizontal: null
  parallaxBackgroundVertical: null
```

> For reveal.js config, see https://github.com/hakimel/reveal.js#configuration

### Create post with slides layout

Just create a `md` file as usual. Add a attribute called `layout: slides` in your hexo post file's `front matter`.

For example:

```
title: hexo-theme-melody v1.5 supports iframe & slides
date: 2018-03-06 19:57:52
layout: slides
---

// balalala...

```

Also you can set a slide page with specific `slide` config by add slide options in the post file's `front matter`.

For example:

```markdown
title: hexo-theme-melody v1.5 supports slides & iframe
date: 2018-03-06 19:57:52
tags: hexo
layout: slides
slide:
  theme: night
  separator: ===
  separator_vertical: ==
---

### hexo-theme-melody <small>v1.5</small>
<!-- .slide: data-background="#49B1F5" -->

Supports iframe & slides. You can use a layout called `slides` to enabled the slides layout.

Also you can add a `iframe` front-matter with the `slides` layout in your `md` file to enable the iframe page.

### Steps
<!-- .slide: data-transition="concave" data-background="#C7916B" -->

#### 1. Add a slides page

// ......

==

// ......

===

#### 2. Add the layout type
<!-- .slide: data-transition="fade" data-background="#00C4B6" -->

// ......

```

### Create post with iframe page

If you want to add a website whatever you like within an iframe, try this:

```
title: hexo-theme-melody v1.5 supports iframe & slides
date: 2018-03-06 19:57:52
layout: slides
iframe: https://the-url-whatever-you-like
---
```

::: warning
The layout must be slides or iframe won't work.
:::

### Create slides page

1. get to your hexo blog root folder.
2. type `hexo new page slides`
3. you will find `source/slides/index.md`
4. modify the `index.md`

```
---
title: Slides 
date: 2018-01-05 00:00:00
type: "slides"
---
```

### See your slides type page list

`theme-melody` will show your slides page list in one page:

`your-blog-url/slides/`

See demo: https://molunerfinn.com/slides/

### Screenshot

![image](https://user-images.githubusercontent.com/12621342/37324543-e38ee596-26c4-11e8-984b-995a3d327be7.png)

---

## Gallery

::: tip
Since v1.5
:::

To create a gallery page for your blog!

### Create gallery page

1. get to your hexo blog root folder.
2. type `hexo new page gallery`
3. you will find `source/gallery/index.md`
4. modify the `index.md`

```
---
title: Gallery 
date: 2018-01-05 00:00:00
type: "gallery"
---
```

And then theme-melody supports a tag named `gallery` for you to create the `gallery-item` in your markdown file.

Modifing the `source/gallery/index.md` you have just created before, add the `gallery` tag. 

`{% gallery img-url [title] %}`

For example:

```
---
title: Gallery 
date: 2018-01-05 00:00:00
type: "gallery"
---
{% gallery https://ws1.sinaimg.cn/large/8700af19gy1fp5i6o2vghj20ea0eajse melody %}
{% gallery https://user-images.githubusercontent.com/12621342/37325500-23e8f77c-26c9-11e8-8e24-eb4346f1fff5.png background %}
{% gallery https://ws1.sinaimg.cn/large/8700af19gy1fp5i64zaxqj20b40b474b demo1 %}
{% gallery https://ws1.sinaimg.cn/large/8700af19ly1fn2h26q32uj21120kudqq demo2 %}
{% gallery https://ws1.sinaimg.cn/large/8700af19ly1fnhdaimi40j218g0p0dic demo3 %}
{% gallery https://ws1.sinaimg.cn/large/8700af19ly1fn2i5kjh2pj21120kuncd %}
```

> gallery-item also has fancybox effection!

### Screenshot

![](https://user-images.githubusercontent.com/12621342/37325837-7961f112-26ca-11e8-871e-5f7b6ec1dbdc.png)


