# Rouge Theme for VSCode
[![Version](https://vsmarketplacebadge.apphb.com/version/josef.rouge-theme.svg)](https://marketplace.visualstudio.com/items?itemName=josef.rouge-theme)

VSCode theme created for a dark, material feel with a flushed color palette, optimized for use with Operator Mono font. 
Inspiration was drawn from Atom's Material Theme tweaked to my liking, and [loved-syntax](https://github.com/DanielPintilei/atom-loved-syntax) for Atom.

### Changelog
[CHANGELOG.MD](https://github.com/josefaidt/rouge-theme/blob/master/CHANGELOG.md)

### Issues or Concerns?
Create an issue on the [repository](https://github.com/josefaidt/rouge-theme/issues).

### Screenshots
#### HTML
![HTML](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-html-1_2.png)

#### SCSS
![CSS](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-css-1_2.png)

#### JavaScript
![JavaScript](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-js-1_2.png)

#### JavaScript/JSX
![JavaScript/JSX](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-jsx-1_2_3.png)

#### Markdown
![Markdown](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/rouge-md-1_2.png)

### Recommended Settings
I prefer to use the colorless version of [file-icons](https://marketplace.visualstudio.com/items?itemName=file-icons.file-icons) and the settings below. If you do not have Operator Mono installed, Fira Code works well also, though the italics are optimized for use with Operator Mono.

	
	"workbench.iconTheme": "file-icons-colourless",
	"editor.fontFamily": "Operator Mono, Consolas, 'Courier New', monospace"
		

### Options
As of version [1.1.0](https://github.com/josefaidt/rouge-theme/blob/master/CHANGELOG.md#110---2017-10-11) the sidebar header colors ("Open Editors" and "Projects") have been flattened. If you preferred the Rouge colored headers, add the following to your `User Settings`

	
	"workbench.colorCustomizations": {
		"sideBarSectionHeader.background": "#c6797edf",
		"sideBarSectionHeader.foreground": "#fff"
	}
	

![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot04b.png)![Screenshot](https://raw.githubusercontent.com/josefaidt/rouge-theme/master/img/screenshot04a.png)

### Supported Languages
- C#
- Java
- JavaScript
- JSX
- JSON
- HTML
- CSS, SCSS, LESS
- XML
- Markdown

### Manual Install Instructions
1. Ensure your copy of VSCode is above v1.15
2. Download/unzip contents of this project
3. Copy folder to your profile's extensions folder
	- Windows:  `C:\Users\<yourprofile>\.vscode\extensions`
	- macOS:    `~/.vscode/extensions`
4. Reload the VSCode window (`Command Palette` > `Reload Window`)
5. Select **Rouge** (`Command Palette` > `Preferences: Color Theme`)


### License
[MIT License](./LICENSE)
