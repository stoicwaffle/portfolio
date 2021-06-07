
let button1 = document.getElementById('button1')
let gallery = document.getElementById('gallery')
let button2= document.getElementById('button2')

button1.addEventListener('click', function(){
  let blank = document.createElement('div');
  gallery.innerHTML = blank.innerHTML;

  function addphoto(folder,i) {
     title = "photo/"+folder+"/"+i + ".jpg"
     let photocontainer = document.createElement('div')
     photocontainer.classList.add("photobox")
     let photo = document.createElement('img')
     photo.src = title
     photocontainer.appendChild(photo)
     gallery.appendChild(photocontainer)
  }
  for (i=1;i<21;i++) {
    addphoto('balloons',i);
  }


})

button2.addEventListener('click', function(){
  let blank = document.createElement('div');

  gallery.innerHTML = blank.innerHTML;

  function addphoto(folder,i) {
     title = "photo/"+folder+"/"+i + ".jpg"
     let photocontainer = document.createElement('div')
     photocontainer.classList.add("photobox")
     let photo = document.createElement('img')
     photo.src = title
     photocontainer.appendChild(photo)
     gallery.appendChild(photocontainer)
  }
  for (i=1;i<35;i++) {
    addphoto('random',i);
  }
})
////////////////////////////////////////////
let sw = screen.width;
let sh = screen.height;

let popupWidth = 400;
let popupHeight = 573;

// this function produces just ONE window
// can closes it after a random amopunt of time
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function openWindow(){

  // getting a random location for the window
  let ranX = Math.random()*sw - popupWidth;
  let ranY = Math.random()*sh - popupHeight;
  // console.log(ranX, ranY);

  // the following string looks confusing, that's why I
  // decided to make a own variable for it (instead of constructing
  // in directly in window.open(...)):
  let specifications = "width="+popupWidth+", height="+popupHeight+", left="+ranX+", top="+ranY;

  // we can open a window with any "real" URL like https://nytimes.com
  // or with a website we built ourselves.
  // my url is just "hello" which is the short version for "hello/index.html"
  // so it points to the website in the hello directory inside this directory.


  let url =  "balls";
  // ps check out the website in "hello" it's very simple :)

  // the window.open() methods takes varous arguments.
  // they are all optional, but if we want to use the 3rd one, for example,
  // we also need to fill the first, and second, just so the browser/JS knows
  // which one is which :D
  // things are described here: https://www.w3schools.com/jsref/met_win_open.asp
  let win = window.open(url, "", specifications);



  // now a window popped up and we can refer to it using the "win" variable
  // we could move it, size it, even write to it
  // (most of the methods you find here can be used on the window: https://www.w3schools.com/jsref/obj_window.asp)
  // in our cases, we mainly want to close it after some time.

  // we close the window afer a random amount of milliseconds:
  let ranTime = 3000 + Math.random()*4000;

  // by using a set timeout function https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(()=>{
    win.close();
  }, ranTime);
  // note, I am using an anonymous arrow function here. It's the same as:

  // setTimeout(function(){
  //   win.close();
  // }, ranTime);

  // which is the same as:

  // function afterTimeoutDoThis(){
  //   win.close();
  // }
  // setTimeout(afterTimeoutDoThis, ranTime);

}

// we keep the above function as it is because it works nicely and
// does exactly what it promises: open 1 window and close it.

// below is another function the prupose of which is solely to call above
// function multiple times. You could imagine how easy it would be
// to define a parameter, and maybe let the user decide the number of
// pop up windows.................things like this :)
function openManyWindows(){
  for(let i = 0; i < 4; i++){
    openWindow();
  }
  // openWindow();
}


// on click, we open many windows.
button.addEventListener("click", openManyWindows);


function randompic() {
    let num = randomIntFromInterval(1,20);
    picname =  "balloons/"+num+".jpg"
    // picname =  folder+"/"+num+".jpg"
    localStorage.setItem('smallwindow', picname);
}


button.addEventListener("click", randompic);
