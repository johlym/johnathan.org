---
---

var uptimeElement=document.querySelector(".uptime-number");checkAndDisplayUptime=function(){var e=new XMLHttpRequest;e.open("get","https://updown.io/api/checks?api-key={{ site.api_keys.uptime_io.r_o }}",!0),e.responseType="json",e.onload=function(){if(200===e.status){var n=e.response;null!==n[0].uptime?uptimeElement.innerHTML=n[0].uptime+"%":uptimeElement.innerHTML="unknown %"}},e.send()},null!==uptimeElement&&setTimeout(function(){checkAndDisplayUptime()},5e3);

if (document.querySelector(".sponsored-by_title")) {
  var sponsoredTitleElement = document.querySelector(".sponsored-by_title");
  var sponsoredImageElement = document.querySelector(".sponsored-by_image");
  var sponsoredTextElement = document.querySelector(".sponsored-by_text");
  var sponsoredCtaElement = document.querySelector(".sponsored-by_cta");
  fetch('{{ site.url }}/endpoints/content_ads.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        totalAdSize = data.length;
        randomNumber = Math.floor(Math.random() * totalAdSize)
        console.log(data);
        adBlob = data[randomNumber];
        sponsoredTitleElement.innerHTML = adBlob.title;
        sponsoredImageElement.src = adBlob.image_url;
        sponsoredImageElement.srcset = adBlob.image_2x_url + " 2x";
        sponsoredTextElement.innerHTML = adBlob.description;
        ctaButtonColor = adBlob.official_rgb_color;
        ctaTextColor = adBlob.cta_color;
        sponsoredCtaElement.style = "background-color: rgb(" + ctaButtonColor + "); color: " + ctaTextColor + ";";
        sponsoredCtaElement.innerHTML = adBlob.cta_text;
        sponsoredCtaElement.href = adBlob.link;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

!function(a,e){var n=e.getElementsByTagName("body")[0],l=e.createElement("script");l.async=!0;var t="IntersectionObserver"in a?"10.5.2":"8.7.1";l.src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/"+t+"/lazyload.min.js",a.lazyLoadOptions={},n.appendChild(l)}(window,document);
