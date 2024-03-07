/*
File: app.js
Author: Gazdik Dorina
Copyright: 2024, Gazdik Dorina
Group: Szoft I-1-N
Date: 2024-03-07
Github: https://github.com/gazdikdorina1230/
Licenc: GNU GPL
*/

const sideAInput = document.querySelector("#sideA")
const sideBInput = document.querySelector("#sideB")
const sideCInput = document.querySelector("#sideC")
const sideDInput = document.querySelector("#sideD")

const areaInput = document.querySelector("#area")

const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', () => {
    startCalc()
})

function startCalc() {
    const sideA = Number(sideAInput.value)
    const sideB = Number(sideBInput.value)
    const sideC = Number(sideCInput.value)
    const sideD = Number(sideDInput.value)
    const s = Number(FelKer(sideA,sideB,sideC,sideD))
    const area = Number(Terület(s,sideA,sideB,sideC,sideD))
    
   // console.log('Terület: ', area)
    areaInput.value = area.toFixed(2)
}
function FelKer (sideA,sideB,sideC,sideD)
{
 return (sideA + sideB + sideC + sideD) / 2
}

function Terület (s,sideA,sideB,sideC,sideD)
{
 return Math.sqrt((s - sideA) * (s - sideB) * (s - sideC) * (s - sideD))
}
