# 快速开始
------

## 安装

::: warning
**注意: 主题在Hexo 版本大于 5.0 和小于 5.0 时的安装方法是不一样的。**
:::

### Hexo 版本 >= 5.0 <Badge text="theme-melody v1.8.0+" />

进入你的 hexo 博客的工作路径

```
npm install hexo-theme-melody
```

### Hexo 版本 < 5.0

进入你的 hexo 博客的工作路径

```
git clone -b master https://github.com/Molunerfinn/hexo-theme-melody themes/melody
```

如果你想要选择`theme-melody`某个特定版本，举个例子, 进入`themes/melody`文件夹，然后

`git checkout v1.0` > 把主题版本改到v1.0

> 通过`git tag -l`你可以看到所有的版本

如果你想要尝试`theme-melody`最新的一些特性, 你可以采用`dev`分支：

```
git checkout dev
```

::: warning
dev分支上所有的新特性都是不稳定并且并没有文档可供你参考的！你需要自己阅读dev分支上的commit记录来使用新的特性。
:::

## 设置

在 hexo 的工作目录下找到站点配置文件——`_config.yml`:

```yaml
theme: melody # 将主题设置成melody
```

::: warning
如果你没有 pug 以及 stylus 的渲染器，请下载安装：

`npm install hexo-renderer-pug hexo-renderer-stylus --save` 或者

`yarn add hexo-renderer-pug hexo-renderer-stylus`
:::

## 配置

::: warning
**注意：主题在Hexo 版本大于 5.0 和小于 5.0 时的配置文件是不一样的。**
:::

### Hexo 版本 >= 5.0 <Badge text="theme-melody v1.8.0+" />

1. 在 hexo 的工作目录下创建一个 `_config.melody.yml`。
2. 将 `./node_modules/hexo-theme-melody/_config.yml`（这意味着你要先通过 npm 安装 hexo-theme-melody）里的内容拷贝至 `_config.melody.yml`。
3. 如果你是 `hexo-theme-melody` 的老用户，请将 `melody.yml` 的内容拷贝至 `_config.melody.yml`，然后将 `melody.yml` 删掉，因为它将会被废弃。

之后你就只需要通过`npm update hexo-theme-melody` 来平滑升级 `theme-melody` 了。

### Hexo 版本 < 5.0

为了主题的平滑升级, `theme-melody` 使用了[data files](https://hexo.io/docs/data-files.html)特性。

推荐把主题默认的配置文件`_config.yml`复制到 hexo 工作目录下的`source/_data/melody.yml`，如果`source/_data`的目录不存在那就创建一个。

::: warning
注意，如果你创建了`melody.yml`, 它将会替换主题默认配置文件`_config.yml`里的配置项(**不是合并而是替换**)
:::

之后你就只需要通过`git pull`的方式就可以平滑地升级 `theme-melody`了。
