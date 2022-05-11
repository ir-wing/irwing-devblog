var findChild = function(node,name)
{
          for (var i=0; i < node.childNodes.length; i++) {
                    if (node.childNodes[i].className == name) {
                              
                              return node.childNodes[i]
                    }
          }
}
window.onload = function() {
          
          var bd = window.opener.data;
          var e = document.getElementById("exampleBlog");
          console.log(bd);
          var text = findChild(e, "blogContent");
          var title = findChild(e, "blogTitle");
          var image = findChild(e, "blogImage");
          if (bd) {
                    for (var _index = 0 ; _index < bd.result.content.length; _index++) {
                              if (bd.result.content.tag == "p") {
                                        var _text = text.cloneNode(true);
                                        text.parentNode.AppendChild(_text);
                                        _text.textContent = bd.result.content.children[0];
                              }
                              if (bd.result.content.tag == "img") {
                                        var _text = text.cloneNode(true);
                                        text.parentNode.AppendChild(_text);
                                        _text.textContent = bd.result.content.children[0];
                              }
                    }
          }
          
}