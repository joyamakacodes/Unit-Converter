 const unitEl = document.getElementById("unitEl")
 const secUnit = document.getElementById("unitEl2")
 const thirdUnit = document.getElementById("unitEl3")
 const num = document.querySelector("input")
  num.value = " "
  
  
//  console.log( typeof Number(numInput))
 const btn = document.getElementById("Btn")
 btn.addEventListener("click", function(){
    console.log("hey")
    unitEl.innerHTML = `${num.value} meters = ${ (3.281 * Number(num.value)).toFixed(3)} feet | ${num.value} feet = ${(Number(num.value) /  3.281).toFixed(3)} meters`

    secUnit.innerHTML = `${num.value} liters = ${(0.264 * Number(num.value)).toFixed(3)} gallons | ${num.value} gallons = ${(Number(num.value)/ 0.264).toFixed(3)} liters`

    thirdUnit.innerHTML = `${num.value} kilograms = ${(2.204 * Number(num.value)).toFixed(3)} pounds | ${num.value} pounds = ${(Number(num.value)/ 2.204).toFixed(3)} kilograms`
 })