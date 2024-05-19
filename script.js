const max3 = (cislo1, cislo2, cislo3) => {
    if (cislo1 > cislo2 && cislo1 > cislo3) {
        return cislo1
    } else if (cislo2 > cislo3 && cislo2 > cislo1 ) {
        return cislo2
    } else if (cislo3 > cislo2 && cislo3 > cislo1) {
        return cislo3
    } else {
        return "Invalid."
    }
}

document.body.innerHTML += "<p>Největší číslo je: </p>" + max3(78,756,11)
