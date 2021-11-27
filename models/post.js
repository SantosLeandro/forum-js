const db = require('../database/database');
class Post{
    constructor(){

    }

    static findByTopicId(id){
        return db.query('SELECT * FROM '+
                        '((post INNER JOIN topic ON post.topic_id = topic.topic_id)'+
                        'INNER JOIN user_account ON post.user_id = user_account.user_id) WHERE post.topic_id = $1 ',[id]).then(res => {return res.rows });
    }

    static findById(id){

    }

    static BBCodeToHtml(text){
      var code = [];
      var codeRegex = /\[code](.*?)\[\/code\]/ig;
      var found;
      while(found = codeRegex.exec(text)){
        code.push(found[1]);
      }
      //code = text.match(codeRegex);

      console.log('CODE: ',code);

      var bbRegex = [
        /\[b\](.*?)\[\/b\]/gm,
        /\[i\](.*?)\[\/i\]/gm,
        /\[u\](.*?)\[\/u\]/gm,
        /\[img\](.*?)\[\/img\]/gm,
        /\[url=(.*?)\](.*?)\[\/url\]/gm,
        /\[code\](.*?)\[\/code\]/gm,
      ];

      var html = [
        '<b>$1</b>',
        '<i>$1</i>',
        '<u>$1</u>',
        '<img src = $1 >',
        '<a href = $1 >$2</a>',
        '<pre><code><xmp>$1</xmp></code></pre>'
      ];

      var codeIndex = -1;
      for(var i=0;i< bbRegex.length;i++){
        if(i==bbRegex.length - 1){
            text = text.replace(bbRegex[i], (match)=>{
                codeIndex++
                return '<pre><code><xmp>'+code[codeIndex]+'</xmp></code></pre>';
            });
        }
        else
         text = text.replace(bbRegex[i],html[i]);
      }
      console.log(text);

      return text;
    }

    static HtmlToBBCode(text){

      return text;
    }
}

module.exports = Post;
