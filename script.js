    var category = "corona virus";

    function getNews(){
    $('.dummy').show();
	const app = document.getElementById('root')

		const container = document.createElement('div')
		container.setAttribute('class', 'container')

		app.appendChild(container)

var request = new XMLHttpRequest()
var apikey = "a91facb09c9444c4a2797a5ac993dc57";
request.open('GET', 'https://newsapi.org/v2/everything?language=en&q='+category+'&sortBy=publishedAt&apiKey='+apikey, true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var articles = data.articles;

  if (request.status >= 200 && request.status < 400) {
    console.log(data);
    
      $('.info').hide();
    //alert(articles.length)

    if(articles.length==0){
      alert("No articles found!")
      return false
    }
  /*    const selectedcategory = document.createElement('div')
      selectedcategory.setAttribute('class', 'selectedcategory')
      container.appendChild(selectedcategory)
      selectedcategory.innerHTML = category;*/

     articles.forEach(articles => {
      //console.log(articles.title);
      /*$('#root').append("<div class='main'><div class='img'><img src='"+articles.urlToImage+"'></div><div class='title'>"+articles.title+"</div><div class='content'>"+articles.description+
      	"</div><div class='viewmore'><a target='_blank' href='"+articles.url+"'>View more</a></div></div>");*/


      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const imgclass = document.createElement('div')
      imgclass.setAttribute('class', 'imgclass')

      const imageHolder = document.createElement('div')
      imageHolder.setAttribute('class', 'imageHolder')

      const img = document.createElement('img')

      if(articles.urlToImage==null){
      	img.setAttribute('src', "default.png")
      }else{
      	img.setAttribute('src', articles.urlToImage)
      }
      

      const h3 = document.createElement('h5')
      h3.textContent = articles.title

      const p = document.createElement('p')
      p.textContent = articles.description;

      const a = document.createElement('a')
      a.innerHTML = "<br>Read more on "+articles.source.name;
      a.setAttribute('href', articles.url)
	    a.setAttribute('target', "_blank")

      container.appendChild(card)
	  card.appendChild(imgclass)
	  imgclass.appendChild(imageHolder)
      imageHolder.appendChild(img)
      card.appendChild(h3)
      card.appendChild(p)
      p.appendChild(a)

    })     

  } else {
    console.log('error')
  }

}


request.send()


}


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        return false;
    });

})

function getStatus() {

        $.ajax({
            url: 'https://coronavirus-tracker-api.herokuapp.com/all',
            
            success: function(data) {

              console.log(data);
                $('.dummy').hide();
              $('.root2').html('');
             $('.root2').append('<div class="number"><h3>Confirmed</h3><span class="count">'+data.latest.confirmed+'</span></div>'); 
             $('.root2').append('<div class="number"><h3>Deaths</h3><span class="count">'+data.latest.deaths+'</span></div>');
             $('.root2').append('<div class="number"><h3>Recovered</h3><span class="count">'+data.latest.recovered+'</span></div>');
             $('.refreshbutton').css("display","block");

          $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
                }
            });
        });
                //process the JSON data etc
        }


        })

    }
