var Fontmin = require('fontmin');
var Promise = require('bluebird');
var cacheList = [];

module.exports = function (content) {
  content = content.toString();
  this.cacheable && this.cacheable();
  var callback = this.async();
  var fontMin = Promise.resolve();
  var fontPath = this.resourcePath.replace(/\.[^\.]+$/i, '.ttf');
  var fontConfig = cacheList.find(cache => {
    return content === cache.content && fontPath === cache.fontPath;
  });

  if (fontConfig) {
    fontMin = fontConfig.fontMin;
  } else {
    fontMin = new Promise((resolve, reject) => {
      new Fontmin()
      .src(fontPath)
      .use(Fontmin.glyph({ text: content }))
      .run(function (err, files) {
        if (err) {
          reject(err);
        } else {
          resolve(files[0].contents);
        }
      });
    });
    cacheList.push({
      content: content,
      fontPath: fontPath,
      fontMin: fontMin
    });
  }

  fontMin.then(fontContent => {
    callback(null, fontContent);
  }).catch(err => {
    callback(err);
  });
};

module.exports.raw = true;
