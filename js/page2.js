
let button1 = document.getElementById('button1')
let gallery = document.getElementById('gallery')

button1.addEventListener('click', function(){
  let photocontainer = document.createElement('div')
  let photo = document.createElement('img')
  photo.innerHTML.src = "photo\balloons\DSC01770.JPG"
  photocontainer.appendChild(photo)
  gallery.appendChild(photocontainer)

})
