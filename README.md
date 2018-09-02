# Rouge Theme for VSCode

<p align="center">
  <a href="https://github.com/josefaidt/rouge-theme">
    <img
      alt="Rouge"
      src="https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/banner_large.png"
      width="800"
    />
  </a>
</p>

[![Version](https://vsmarketplacebadge.apphb.com/version/josef.rouge-theme.svg)](https://marketplace.visualstudio.com/items?itemName=josef.rouge-theme)![Installs](https://vsmarketplacebadge.apphb.com/installs/josef.rouge-theme.svg)

VSCode theme created for a dark, material feel with a flushed color palette, optimized for use with Operator Mono font. 
Inspiration was drawn from Atom's Material Theme and [loved-syntax](https://github.com/DanielPintilei/atom-loved-syntax) for Atom.

### Changelog
[CHANGELOG.MD](https://github.com/josefaidt/rouge-theme/blob/master/CHANGELOG.md)

### Issues or Concerns?
Create an issue on the [repository](https://github.com/josefaidt/rouge-theme/issues).

### Screenshots
![Desktop](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-desktop-1_4.png)

#### HTML
![HTML](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-html-1_3_1.png)

#### SCSS
![CSS](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-scss-1_4.png)

#### JavaScript
![JavaScript](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-js-1_3_1.png)

#### JavaScript/JSX
![JavaScript/JSX](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-jsx-1_2_3.png)

#### Markdown
![Markdown](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-md-1_3_1.png)

### Recommended Settings
I prefer to use the colorless version of [file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons) and the settings below. If you do not have Operator Mono installed, Fira Code works well also, though the italics are optimized for use with Operator Mono.

```json
{
  "workbench.iconTheme": "file-icons-colourless",
  "editor.fontFamily": "Operator Mono, Consolas, 'Courier New', monospace"
}
```
    

### Options
#### Sidebar Headers
As of version [1.1.0](https://github.com/josefaidt/rouge-theme/blob/master/CHANGELOG.md#110---2017-10-11) the sidebar header colors ("Open Editors" and "Projects") have been flattened. If you preferred the Rouge colored headers, add the following to your `User Settings`

```json
"workbench.colorCustomizations": {
  "sideBarSectionHeader.background": "#c6797edf",
  "sideBarSectionHeader.foreground": "#fff"
}
```

![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot04b.png)![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot04a.png)

#### Activity Bar Icons
In version [1.3.3](https://github.com/josefaidt/rouge-theme/releases/tag/v1.3.3) the activity bar icons were re-colored to silver for better contrast amongst the icon badges. If you preferred the Rouge colored icons, please add the following to your `User Settings`
```json
"workbench.colorCustomizations": {
  "activityBar.foreground": "#c6797e",
}
```
![Screenshotbadges1](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-ed-badges-1_3_2_small.png)![Screenshotbadges2](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-ed-badges-1_3_3_small.png)

### License
[MIT License](./LICENSE)