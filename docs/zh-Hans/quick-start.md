## 安装

进入你的 hexo 博客的工作路径

```
git clone -b master https://github.com/Molunerfinn/hexo-theme-melody themes/melody
```

如果你想要选择`theme-melody`某个特定版本，举个例子, 进入`themes/melody`文件夹，然后

`git checkout tags/v1.0` > 把主题版本改到v1.0

> 通过`git tags -l`你可以看到所有的版本

如果你想要尝试`theme-melody`最新的一些特性, 你可以采用`dev`分支：

```
git checkout dev
```

!> dev分支上所有的新特性都是不稳定并且并没有文档可供你参考的！你需要自己阅读dev分支上的commit记录来使用新的特性。

## 设置

在 hexo 的工作目录下找到站点配置文件——`_config.yml`:

```yaml
theme: melody # 将主题设置成melody
```

!> 如果你没有pug以及stylus的渲染器，请下载安装： `npm install hexo-renderer-jade hexo-renderer-stylus --save` or `yarn add hexo-renderer-jade hexo-renderer-stylus`

## 配置

为了主题的平滑升级, `theme-melody` 使用了[data files](https://hexo.io/docs/data-files.html)特性。

推荐把主题默认的配置文件`_config.yml`复制到 hexo 工作目录下的`source/_data/melody.yml`，如果`source/_data`的目录不存在那就创建一个。

!> 注意，如果你创建了`melody.yml`, 它将会替换主题默认配置文件`_config.yml`里的配置项(**不是合并而是替换**)

之后你就只需要通过`git pull`的方式就可以平滑地升级 `theme-melody`了。




