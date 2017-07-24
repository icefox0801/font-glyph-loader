# font-glyph-loader
Webpack loader for extracting subset containing specific glyphs from font. [font-glyph-loader](https://github.com/dematerializer/font-subset-loader) is similar to [font-subset-loader](https://github.com/dematerializer/font-subset-loader) except:
1. The loader works on `glyph` file, not font file. Font is loaded in the same directory using the same filename.
2. The font subset building can be cachable, Avoiding reduplicate font subset files(increase the size of built files) which are built by the same font and the same glyphs .

## Installation
`npm i font-glyph-loader -D`

## Usage
1. Create `MyFont.glyph` with glyphs to build font subset with. **The raw font file should be also named `MyFont.ttf` in the same directory.**
```
hello, world!
```
2. Loader config in `webpack.config.js`
```javascript
{
  loader: 'font-glyph-loader',
  test: /\.glyph$/i
}
```
