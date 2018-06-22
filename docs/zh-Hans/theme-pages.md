# Theme-pages

melody主题支持多种页面类型。

------

# 标签页

1. 前往你的Hexo博客的根目录
2. 输入`hexo new page tags`
3. 你会找到`source/tags/index.md`这个文件
4. 修改这个文件：

```
---
title: 标签
date: 2018-01-05 00:00:00
type: "tags"
---
```

---

# 分类页 

1. 前往你的Hexo博客的根目录
2. 输入`hexo new page categories`
3. 你会找到`source/categories/index.md`这个文件
4. 修改这个文件：

```
---
title: 分类
date: 2018-01-05 00:00:00
type: "categories"
---
```

---

# Slides页面

!> 版本 v1.5

Slides页面允许你用markdown书写，并最后通过[reveal.js](https://github.com/hakimel/reveal.js/)输出成漂亮的前端展示页。

> 例子

[hexo-theme-melody supports slides](https://molunerfinn.com/slide-support/ ':include :type=iframe width=100% height=400px')

## 配置 `melody.yml`

```yaml
slide:
  separator: ---
  separator_vertical: --
  charset: utf-8
  theme: black
  mouseWheel: false
  transition: slide
  transitionSpeed: default
  parallaxBackgroundImage: ''
  parallaxBackgroundSize: ''
  parallaxBackgroundHorizontal: null
  parallaxBackgroundVertical: null
```

> 上述是 theme-melody 所提供的 reveal.js 的配置项, 可以参考官方文档的说明 https://github.com/hakimel/reveal.js#configuration

## 创建一个slide文章页面

像往常一样在文章文件夹里创建一个`md`文件. 在该文件的顶部配置区加上一个`layout: slides`配置项。

比如:

```
title: hexo-theme-melody v1.5 supports iframe & slides
date: 2018-03-06 19:57:52
layout: slides
---

// balalala...

```

除了在`melody.yml`里配置全局的slides页面属性，你也可以为你的某个页面配置单独的`slide`设置。

比如:

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

## hexo-theme-melody <small>v1.5</small>
<!-- .slide: data-background="#49B1F5" -->

Supports iframe & slides. You can use a layout called `slides` to enabled the slides layout.

Also you can add a `iframe` front-matter with the `slides` layout in your `md` file to enable the iframe page.

## Steps
<!-- .slide: data-transition="concave" data-background="#C7916B" -->

### 1. Add a slides page

// ......

==

// ......

===

### 2. Add the layout type
<!-- .slide: data-transition="fade" data-background="#00C4B6" -->

// ......

```

## 创建一个Iframe页面

如果你想创建一个只有Iframe的页面，可以在文章的顶部配置区加入`iframe`的选项。

```
title: hexo-theme-melody v1.5 supports iframe & slides
date: 2018-03-06 19:57:52
layout: slides
iframe: https://the-url-whatever-you-like
---
```

!> 注意，`layout: slides`必须指定，否则iframe的页面将不生效。

## 创建Slides页面

1. 前往你的Hexo博客的根目录
2. 输入`hexo new page slides`
3. 你会找到`source/slides/index.md`这个文件
4. 修改这个文件：

```
---
title: Slides
date: 2018-01-05 00:00:00
type: "slides"
---
```

## 查看你的slides页面 

`theme-melody`将会在`你的博客网址/slides/`的地址里展示你的所有slides文章。

查看例子: https://molunerfinn.com/slides/

### 截图

![image](https://user-images.githubusercontent.com/12621342/37324543-e38ee596-26c4-11e8-984b-995a3d327be7.png)

---

# 相册

!> 版本 v1.5

为你的博客创建一个相册页！

## 创建相册页

1. 前往你的Hexo博客的根目录
2. 输入`hexo new page gallery`
3. 你会找到`source/gallery/index.md`这个文件
4. 修改这个文件：

```
---
title: Gallery
date: 2018-01-05 00:00:00
type: "gallery"
---
```

theme-melody 提供了一个叫做`gallery`的标签，让你能够在markdown文件里生成`gallery-item`。

修改你刚刚创建的`source/gallery/index.md`，并加上`gallery` 标签。

`{% gallery img-url [title] %}`

例子:

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

> gallery-item 也拥有fancybox的效果!

## 截图

![](https://user-images.githubusercontent.com/12621342/37325837-7961f112-26ca-11e8-871e-5f7b6ec1dbdc.png)


