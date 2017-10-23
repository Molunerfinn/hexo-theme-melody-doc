# 额外依赖库支持

> 更多的额外依赖库支持不断加入中。

------

# PWA

!> 版本 1.2

要为`theme-melody`配上PWA特性, 你需要如下几个步骤:

1. 打开hexo工作目录
2. `npm install hexo-offline` 或者 `yarn add hexo-offline`
3. 修改`_config.yml` -> 查看[hexo-offline](https://github.com/JLHwung/hexo-offline)的官方文档
4. 配置`melody.yml`:

```yaml
pwa:
  enable: true
  manifest: # manifest.json的url, 通常可以设置成 /manifest.json
```

你可以创建快速通过[Web App Manifest](https://app-manifest.firebaseapp.com/)创建一个 `manifest.json`。 

然后把`manifest.json`放到你的 hexo 工作目录的`source/`文件夹里。

## 截图

![](https://ws1.sinaimg.cn/large/8700af19ly1fk1eksl51kj21z20ogjyo.jpg)

------

# 字数统计

!> 版本 1.3

要为`theme-melody`配上字数统计特性, 你需要如下几个步骤:

1. 打开hexo工作目录
2. `npm install hexo-wordcount` or `yarn add hexo-wordcount`
3. 配置`melody.yml`:

```yaml
wordcount:
  enable: true
```

## 截图 

![](https://ws1.sinaimg.cn/large/8700af19ly1fksgxun0joj21z20todl2.jpg)
