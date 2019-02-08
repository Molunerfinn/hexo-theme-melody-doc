# Additional-package-support

> More additional-packages are coming soon.

------

# PWA 
## Screenshot

![PC](https://i.loli.net/2019/02/09/5c5e15567c52d.jpg)
![Mobile](https://i.loli.net/2019/02/09/5c5e1556af49b.png)

------
!> Since v1.2

To have the PWA feature for `theme-melody`, you need to do the following things:

1. Go to the hexo site folder
2. `npm install hexo-offline --save` or `yarn add hexo-offline`
3. Modify `_config.yml`
Add the following to the site `_config.yml`.

```yaml
# offline config passed to sw-precache.
offline:
  maximumFileSizeToCacheInBytes: 10485760 # The maximum file size cached, in bytes
  staticFileGlobs:
    - public/**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}
  # Static file collection, if your site uses files such as webp format, please add the file type.
  stripPrefix: public
  verbose: true
  runtimeCaching:
    # CDNs - should be cacheFirst, since they should be used specific versions so should not change
    - urlPattern: /* # If you need to load CDN resources, please configure this option. If not, you can configure it.
      handler: cacheFirst
      options:
        origin: your_websie_url # can be replaced with your url
```
For more details, please see the official documentation for [hexo-offline] (https://github.com/JLHwung/hexo-offline)

4. Turn on the pwa option in `melody.yml`.

```yaml
pwa:
  enable: true
  manifest: # manifest.json的url, 通常可以设置成 /manifest.json
  # 从v1.5.6开始你可以修改PWA的主题色和icon了。
  # 如果不明白这些有什么用，或者不想配置可以忽视下面的配置
  # See https://realfavicongenerator.net/
  # theme_color: "#1B9EF3"
  # apple_touch_icon: /apple-touch-icon.png
  # favicon_32_32: /favicon-32x32.png
  # favicon_16_16: /favicon-16x16.png
  # mask_icon: /safari-pinned-tab.svg
```
5. Create a `manifest.json` file in the `source/` directory.
```json
{
    "name": "string", //Application full name
    "short_name": "Junzhou", //Application short name
    "theme_color": "#49b1f5", //Match the browser's address bar color
    "background_color": "#49b1f5",//Background color when loading the app
    "display": "standalone",//Preferred display mode Other options are: fullscreen, minimal-ui, browser
    "scope": "/",
    "start_url": "/",
    "icons": [ //The array specifies the icons icon parameter, which is used to adapt to different devices (requires png, at least one icon of 192px*192px)
        {
          "src": "images/pwaicons/36.png", //The directory of the icon file needs to be created by itself in the source/ directory.
          "sizes": "36x36",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
      ],
      "splash_pages": null //Configure a custom launch animation.
  }
```

You can also quickly create `manifest.json` via [Web App Manifest] (https://app-manifest.firebaseapp.com/). (Web App Manifest requires at least one 512*512 pixel icon)

6. You can check if the PWA configuration is in effect and the configuration is correct through the `Chrome` plugin `Lighthouse`.
    - Open the blog page
    - Launch the `Lighthouse` plugin (the `Lighthouse` plugin requires at least one 512*512 pixel icon)

For more on PWA (Progressive Enhanced Web Applications), see [Google Tools for Web Developers] (https://developers.google.com/web/tools/lighthouse/audits/address-bar)


## Screenshot

![](https://user-images.githubusercontent.com/12621342/34635943-b50a2810-f2d1-11e7-995b-526e10da55dc.png)

------

# Word Counting

!> Since v1.3

To have the word counting feature for `theme-melody`, you need to do the following things:

1. Go to the hexo site folder
2. `npm install hexo-wordcount --save` or `yarn add hexo-wordcount`
3. Set the `melody.yml`

```yaml
wordcount:
  enable: true
```

## Screenshot

![](https://user-images.githubusercontent.com/12621342/34635947-be617e0e-f2d1-11e7-918e-594e1a22ab90.png)
