var blogs = [
          "https://api.telegra.ph/getPage/test-05-11-193?return_content=true",


         
]


var findChild = function(node,name)
{
          for (var i=0; i < node.childNodes.length; i++) {
                    if (node.childNodes[i].className == name) {
                              
                              return node.childNodes[i]
                    }
          }
}

var MainPage = function()
{
          window.open('index.html',"_self");
}


window.onload = function() { // When the webpage loads
          //deleting prev blog history
          localStorage.clear();


          //loading example blogs
          var div = document.getElementById("exampleBlog");
          var divParent = div.parentNode;
          for (var index = 0; index < blogs.length;index++) {
          

                    
                    var link = blogs[index]; //Getting the link string
                    
                    fetch(link)
                    .then((response) => {
                              return response.json();
                    })
                    .then((data) => {
                              //var data = data; //the data
                              console.log(data);

                              var exampleDiv = div.cloneNode(true);
                              divParent.appendChild(exampleDiv);
                              var title = findChild(exampleDiv, "blogTitle");
                              var image = findChild(exampleDiv, "blogImage");
                              var desc = findChild(exampleDiv, "blogDescription");
                              var openButton = findChild(exampleDiv, "right button read"); 
                              
                                        
                              image.src = data.result.image_url; 
                              title.innerHTML = data.result.title;
                              desc.innerHTML = data.result.description;
                               
                              
                              openButton.onclick = function()
                              {
                                        localStorage.setItem("blogData",JSON.stringify(data));
                                        var newtab = window.open("blogpage.html", "_parent");
                                        
                                        
                              }
                              
                    })
                    
               
                    
                              
                    
          }
          div.remove();
          
          
          
}
