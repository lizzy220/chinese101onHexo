hexo.extend.tag.register('wordcard', function(args, content){
  var word = args[0];
  var pinyin = args.slice(1).join(' ');
  return '<div class="ui raised card wordcard">'
    + '<div><div class="calligraphy">'
    + word
    + '</div></div>'
    + '<div class="content pinyin"><a class="header speak" word="'
    + word
    + '">'
    + '<i class="sound icon"> </i>'
    + pinyin
    +'</a></div>'
    + '</div>'
});
