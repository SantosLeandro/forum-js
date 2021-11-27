const Topic = require('../models/post');

test('bbcodeparser bold', () => {
  expect(Topic.BBCodeToHtml('[b] bold text [/b]')).toBe('<b> bold text </b>');
});

test('bbcodeparser italic', () => {
  expect(Topic.BBCodeToHtml('[i] italic text [/i]')).toBe('<i> italic text </i>');
});

test('bbcodeparser all', () => {
  expect(Topic.BBCodeToHtml('[i] italic [/i]\n'+
                            '[b] bold [/b]\n'+
                            '[u] underline [/u]\n'+
                            '[img]imgpath[/img]\n'+
                            '[url=website.com]website[/url]\n'+
                            '[code] <h1> teste </h1> function() {} [/code]'
                          )).toBe('<i> italic </i>\n'+
                                  '<b> bold </b>\n'+
                                  '<u> underline </u>\n'+
                                  '<img src = imgpath >\n'+
                                  '<a href = website.com >website</a>\n'+
                                  '<pre><code><xmp> <h1> teste </h1> function() {} </xmp></code></pre>');
});
