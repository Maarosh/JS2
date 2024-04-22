const stupneF = Number(prompt("Zadejte pozadovanou teplotu ve stupnich Fahrenheita: "))

const stupneC = Number(5 * (stupneF - 32) / 9)

document.body.innerHTML = Math.round(stupneC) + " °C"