//array of images
let moneyImages = [
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fofx%2Ffiles%2F2018%2F09%2FOFX3-iStock-492595743-1200x800.jpg",
    "https://img.rasset.ie/0013086c-1600.jpg",
    "https://live.staticflickr.com/65535/17123251389_80282733ce_b.jpg",
    "https://www.thoughtco.com/thmb/bN5tVwfK9aL0hhTW9GnaiMqhoBM=/1280x720/smart/filters:no_upscale()/GettyImages-547087929-59abe2d7396e5a001065880e.jpg",
    "https://images.theconversation.com/files/250903/original/file-20181217-185249-1xbqyla.jpg?ixlib=rb-1.1.0&rect=0%2C636%2C4992%2C2492&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://images.vice.com/noisey/content-images/article/we-interviewed-migos-about-their-unexpected-rise-and-yes-versace/f7adb784a7d37ced0c94af918327fca9.jpg?crop=1xw:0.9612752161383286xh;center,center&resize=1200:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jvXHlrfnUyu6Lrs-8kGj41lufrlcB31cDA&usqp=CAU"

];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * moneyImages.length)
    imgs[i].src = moneyImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "I like money.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now all about the mullah.";
}