var photo = document.getElementById('photo')
var on1 = document.getElementById('on-1')


function onOff() {
   if (on1.textContent == "ON") {
      photo.src = 'on.jpg'
      on1.textContent = "OFF"
   }

   else {
      photo.src = 'off.jpg'
      on1.textContent = "ON"

   }
   clearInterval(timer)
   clearInterval(timer1)
   document.getElementById("blk").disabled = false
   document.getElementById("po").disabled = false
}

var timer;
var blk = document.getElementById('blk')
var bulb = false
function blinck() {

   timer = setInterval(function () {
      if (bulb == false) {
         photo.src = "on.jpg"
         bulb = true
      }
      else {
         photo.src = "off.jpg"
         bulb = false
      }

   }, 200)
   clearInterval(timer1)
   document.getElementById('blk').disabled = true
   document.getElementById("po").disabled = false


}
var bulb1 = false
var timer1;
var pop1 = document.getElementById("po")
function pop() {
   clearInterval(timer)

   timer1 = setInterval(function () {

      if (bulb1 == false) {
         photo.src = "red.jpg"
         bulb1 = true

      }

      else if (bulb1 == true) {
         photo.src = "yellow.jpg"
         bulb1 = "off"
      }
      else if (bulb1 == "off") {
         photo.src = "blue.jpg"
         bulb1 = false
      }
   }, 400)
   document.getElementById("po").disabled = true
   document.getElementById('blk').disabled = false
}