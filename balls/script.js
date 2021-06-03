let pic = document.getElementById('photo');

let newsrc=localStorage.getItem('smallwindow');
console.log(newsrc)
pic.src = newsrc
