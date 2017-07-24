# font-glyph-loader
Webpack loader for extracting glyphs from font. [font-glyph-loader](https://github.com/dematerializer/font-subset-loader) is similar to [font-subset-loader](https://github.com/dematerializer/font-subset-loader) except:
1. The loader works on `glyph` file, not font file. Font file is read in the same directory using the same filename.
2. The font subset building can be cachable, Avoiding building reduplicative font subset files(increase the size of built files) witch are built by the same font and the same glyphs .

## Installation
`npm i font-glyph-loader -D`

## Usage
1. Write glyphs to generate font subset in `MyFont.glyph`. The raw font file should be also named `MyFont.ttf` in the same directory.
```
hello, world!
```
2. loader config in `webpack.config.js`
```javascript
{
  loader: 'font-glyph-loader',
  test: /\.glyph$/i
}
```
