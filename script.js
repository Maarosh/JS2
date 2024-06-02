const justFood= (people) => {
    return `Catering od Just Food pro ${people} lidi za ${Number(people * 850)} Kc.
    `
}

const yourMama= (people) => {
    return `Catering od Your Mama pro ${people} lidi za ${Number(people * 1250)} Kc.
    `
}

const flavourHaven= (people) => {
    return `Catering od Flavour Haven pro ${people} lidi za ${Number(people * 1550)} Kc.
    `
}

const createEvent = (event, cateringFn, people) => {
    return `Udalost ${event} s ${cateringFn(people)}`
}

console.log(createEvent("Gala vecer", yourMama, 110 ))