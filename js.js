var blogs = [
          "https://api.telegra.ph/getPage/test-05-11-193"
]

var findChild = function(node,name)
{
          for (var i=0; i < node.childNodes.length; i++) {
                    if (node.childNodes[i].className == name) {
                              
                              return node.childNodes[i]
                    }
          }
}


window.onload = function() { // When the webpage loads
         

          //loading example blogs
          var div = document.getElementById("exampleBlog");
          
          for (var index = 0; index < blogs.length; index++) {
                    var content = ""; 

                    var exampleDiv = div.cloneNode(true);
                    div.parentNode.appendChild(exampleDiv);
                    var title = findChild(exampleDiv, "blogTitle");
                    var image = findChild(exampleDiv, "blogImage");
                    var desc = findChild(exampleDiv, "blogDescription");
                    var openButton = findChild(exampleDiv, "right button read");
                    var link = blogs[index]; //Getting the link string
                    var request = new XMLHttpRequest(); //Creating a request
                    request.open("GET",link + "?return_content=true");
                    request.send();

                    request.onload = function() {
                              var data = JSON.parse(request.responseText); //the data
                              
                              
                              
                    
                              
                              image.src = data.result.image_url; 
                              title.textContent = data.result.title;
                              desc.textContent = data.result.description;
                              openButton.onclick = function()
                              {
                                        localStorage.setItem("blogData",request.responseText);
                                        var newtab = window.open("blogpage.html", "_parent");
                                        
                                        
                              }
                    }
                              
                    
          }
          div.remove();
}
