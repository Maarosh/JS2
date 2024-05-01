document.body.innerHTML = "<h2>FIT ČVUT</h2>"
const krestniJmeno = prompt("Zadejte své křestní jméno (bez diakritiky): ")
const prijmeni = prompt("Zadejte své příjmení (bez diakritiky): ")
const domena = "@fit.cvut.cz"

const mailovaAdresa = prijmeni.trim().slice(0, 5) + krestniJmeno.trim().slice(0, 3) + domena

document.body.innerHTML += `
  <p>Vaše emailová adresa je: </p>
  <p><u>${mailovaAdresa.toLowerCase()}</u></p>
`
