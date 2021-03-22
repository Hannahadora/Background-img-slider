(function() {
    const pictures = [
      "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4072840/pexels-photo-4072840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ];


  const buttons = document.querySelectorAll('.btn')
  const cover = document.querySelector('.cover')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0){
          counter = pictures.length -1
        }
        cover.style.backgroundImage = `url('${pictures[counter]}.jpeg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > pictures.length -1){
          counter = 0
        }
        cover.style.backgroundImage = `url('${pictures[counter]}.jpeg')`
      }
    })
  })
})();




(function() {
  const images = [
    "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4072840/pexels-photo-4072840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  ];


const movement = document.querySelectorAll('.move')
const imageDiv = document.querySelector('.imageDiv')
let count = 0

movement.forEach(function(movement){
  movement.addEventListener('click', function(e){
    if (movement.classList.contains('move-left')){
      count--
      if(count < 0){
        count = images.length -1
      }
      imageDiv.style.backgroundImage = `url('${images[count]}.jpeg')`
    }
    if (movement.classList.contains('move-right')){
      count++
      if(count > images.length -1){
        count = 0
      }
      imageDiv.style.backgroundImage = `url('${images[count]}.jpeg')`
    }
  })
})
})();