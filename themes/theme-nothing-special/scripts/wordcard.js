hexo.extend.tag.register('wordcard', function(args, content){
  var word = args[0];
  var pinyin = args.slice(1).join(' ');
  return '<div class="ui left dividing rail">'
    + '<div class="ui raised card wordcard">'
    + '<div class="content"><div class="calligraphy"><p>'
    + word
    + '</p></div></div>'
    + '<div class="extra content pinyin">'
    + '<a class="speak" word="' + word + '">'
    + '<i class="sound icon"> </i>'
    + pinyin
    + '</a></div>'
    +'</div></div>';
});
