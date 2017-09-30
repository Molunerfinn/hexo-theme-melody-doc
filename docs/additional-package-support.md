# Additional-package-support

> More additional-packages are coming soon.

------

## PWA (Since v1.2)

To have the PWA feature for `theme-melody`, you need to do the following things:

1. Go to the hexo site folder
2. `npm install hexo-offline` or `yarn add hexo-offline`
3. Modify the `_config.yml` -> see the doc of [hexo-offline](https://github.com/JLHwung/hexo-offline)
4. Set the `melody.yml`:

```yaml
pwa:
  enable: true
  manifest: # the url for the manifest.json, usually you can set to /manifest.json
```

You can create a `manifest.json` fastly by visiting [Web App Manifest](https://app-manifest.firebaseapp.com/)

Then put `manifest.json` into your hexo site `source/` folder.

### Screenshot

![](https://ws1.sinaimg.cn/large/8700af19ly1fk1eksl51kj21z20ogjyo.jpg)

