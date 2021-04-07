/*
* [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
  * `mouseover`
  * `keydown`
  * `wheel`
  * `load`
  * `focus`
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  * `drag / drop`

Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

### Task 3: Stretch

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

*/
// Your code goes here

// changing colors of all links on page

Array.from(document.links).forEach(function (link) {
    link.addEventListener('mouseover', function(event){
        link.style.color = 'blue';
        setTimeout(function(){
            link.style.color = 'black';
        }, 3000)
        event.preventDefault();
    })
})

// double click pictures

const introImg = document.querySelector("header img");

introImg.addEventListener('dblclick', function(event){
    if(introImg.style.borderRadius != '100px'){
        introImg.style.borderRadius = '100px'
    } else{
        introImg.style.borderRadius = '0px'
    }
})

// click on header and capitalize

const header = document.querySelector("h1");

header.addEventListener('click', function(event){
    if(header.style.textTransform != 'uppercase'){
        header.style.textTransform = 'uppercase'
    } else{
        header.style.textTransform = 'lowercase'
    }
});

// change pictures

const lowerImages = document.querySelectorAll(".img-content img");

Array.from(lowerImages).forEach(function(img){
    img.addEventListener('mouseover', function(event){
        img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.publicdomainpictures.net%2Fpictures%2F60000%2Fvelka%2Fpokeball-toy.jpg&f=1&nofb=1"
    })
    img.addEventListener('click', function(event){
        img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fwii%2Fimages%2F7%2F77%2FPikachu_SSB4.jpg%2Frevision%2Flatest%3Fcb%3D20140210000421&f=1&nofb=1";
        //img.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffullhdpictures.com%2Fwp-content%2Fuploads%2F2016%2F08%2FWartortle.jpg&f=1&nofb=1"
    })
})

// bold all p tags with 'b' key

const text = document.querySelectorAll("p");

Array.from(text).forEach(function(element){
    document.addEventListener("keydown", function(event){
        if(event.key === 'b'){
            element.style.fontWeight = 'bold';
        }
    })
})

// img change on mouse down

const bottomImg = document.querySelector(".content-destination img");

bottomImg.addEventListener('mousedown', function(event){
    bottomImg.style.width = "50%"
    setTimeout(function(){
        bottomImg.style.width = "100%"
    }, 1000)
})

//change button color

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach(function (btn) {
    btn.addEventListener('mouseover', function(event){
        btn.style.backgroundColor = 'black';
        setTimeout(function(){
            btn.style.backgroundColor = '#17a2b8';
            btn.style.color = 'white'
        }, 1000)
    })
    btn.addEventListener('click', function(event){
        alert('Welcome to your doom!!..I mean Aboard..')
    })
})

// bold all h4s on hover

const titles = document.querySelectorAll("h4");

Array.from(titles).forEach(function (title) {
    title.addEventListener('mouseover', function(event){
        title.style.fontWeight = 'bold';
    })
})

// stop propagation

const background = document.querySelectorAll(".destination");

Array.from(background).forEach(function (div) {
    div.addEventListener('click', function(event){
        div.style.backgroundColor = 'grey';
        event.stopPropagation();
    })
})