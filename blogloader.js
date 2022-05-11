var findChild = function(node,name)
{
          for (var i=0; i < node.childNodes.length; i++) {
                    if (node.childNodes[i].className == name) {
                              
                              return node.childNodes[i]
                    }
          }
}
window.onload = function() {
          
          var bd = JSON.parse(localStorage.getItem("blogData"));
          var e = document.getElementById("exampleBlog");
          console.log(bd);
          var text = findChild(e, "blogContent");
          var title = findChild(e, "blogTitle");
          var image = findChild(e, "blogImage");
          if (bd) {
                    title.textContent = bd.result.title;
                    for (var _index = 0 ; _index < bd.result.content.length; _index++) {
                              if (bd.result.content[_index].tag == "p" && bd.result.content[_index].children[0].tag != "br") {
                                        var _text = text.cloneNode(true);
                                        text.parentNode.appendChild(_text);
                                        _text.textContent = bd.result.content[_index].children[0];
                              }
                              if (bd.result.content[_index].tag == "figure") {
                                        var _image = image.cloneNode(true);
                                        image.parentNode.appendChild(_image);
                                        _image.src = "https://telegra.ph" + bd.result.content[_index].children[0][0].attrs.src;
                              }
                    }
          }
          text.remove();
          image.remove();
          
}
