## Installation

Find your hexo work folder

```
git clone -b master https://github.com/Molunerfinn/hexo-theme-melody themes/melody
```

if you want to choose a specific version of `theme-melody`

For example, get into the `themes/melody` folder and then

`git checkout tags/v1.0` > Change the theme version to v1.0

> You can view all the versions by `git tags -l`

## Setup

Set theme in the hexo work folder's root config file `_config.yml`:

```yml
theme: melody
```

## Configuration

For smoothly update, `theme-melody` use the [data files](https://hexo.io/docs/data-files.html) feature.

It's recommonded that copy the theme default config file `_config.yml` to the hexo work folder `source/_data/melody.yml`. If the folder don't exist, create one.

!> Notice that, if you create the `melody.yml`, it will replace the default settings of the theme `_config.yml` (**Not merge, but replace**)

After that, you can update `theme-melody` smoothly by just `git pull`.




