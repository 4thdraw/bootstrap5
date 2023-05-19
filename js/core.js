$(document).ready(function(){
   let naviDB = [
         [ "nav-item", "nav-link", "#services", "Services" ]
        ,[ "nav-item", "nav-link", "#portfolio", "Portfolio" ]
        ,[ "nav-item", "nav-link", "#team", "Team" ]
        ,[ "nav-item", "nav-link", "#contact", "Contact" ]
   ];
   let naviTag = ``;

   for(c in naviDB){
     naviTag += `<li class="${naviDB[c][0]}">
                   <a class="${naviDB[c][1]}" href="${naviDB[c][2]}">${naviDB[c][3]}</a>
                </li>`
   }                     
   $(".navbar-nav").html(naviTag)
})