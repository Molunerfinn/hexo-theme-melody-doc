# Quick start
------

## Installation

::: warning
**Notice: The installation method before and after hexo 5.0 version is different.**
:::

### Hexo version >= 5.0 <Badge text="theme-melody v1.8.0+" />

Find your hexo work folder

```
npm install hexo-theme-melody
```

### Hexo version < 5.0

Find your hexo work folder

```bash
git clone -b master https://github.com/Molunerfinn/hexo-theme-melody themes/melody
```

if you want to choose a specific version of `theme-melody`

For example, get into the `themes/melody` folder and then

`git checkout v1.0` > Change the theme version to v1.0

> You can view all the versions by `git tag -l`

if you want to try the latest feature of `theme-melody`, you can use the `dev` branch：

```bash
git checkout dev
```

::: warning
All the new features in the dev branch is not stable & no docs for you to setup! You should read the dev branch commits history by yourself.
:::

## Setup

Set theme in the hexo work folder's root config file `_config.yml`:

```yaml
theme: melody
```

::: warning
If you don't have pug & stylus renderder, please

`npm install hexo-renderer-pug hexo-renderer-stylus --save` or

`yarn add hexo-renderer-pug hexo-renderer-stylus`
:::

## Configuration

::: warning
**Notice: The configuration file before and after hexo 5.0 version is different.**
:::

### Hexo version >= 5.0 <Badge text="theme-melody v1.8.0+" />

1. create a `_config.melody.yml` in your hexo work folder.
2. copy the contents of `./node_modules/hexo-theme-melody/_config.yml` (so you should install `hexo-theme-melody` first.) to `_config.melody.yml`.
3. If you have used `hexo-theme-melody` for a long time, and has a `melody.yml`, please copy the contents of `melody.yml` to `_config.melody.yml` & remove `melody.yml` since it will be deprecated.

After that, you can update `theme-melody` smoothly by just `npm update hexo-theme-melody`.

### Hexo version < 5.0

For smoothly update, `theme-melody` use the [data files](https://hexo.io/docs/data-files.html) feature.

It's recommonded that copy the theme default config file `_config.yml` to the hexo work folder `source/_data/melody.yml`. If the folder don't exist, create one.

::: warning
Notice that, if you create the `melody.yml`, it will replace the default settings of the theme `_config.yml` (**Not merge, but replace**)
:::

After that, you can update `theme-melody` smoothly by just `git pull`.
