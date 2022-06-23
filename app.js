
// Query Selectors
const form = document.querySelector("#form")
const h2 = document.querySelector("h2")
const p = document.querySelector("p")
const svg1 = document.querySelector("#svg1")
const svg2 = document.querySelector("#svg2")
const buttons = document.querySelectorAll('input[type="button"]')
const submit = document.querySelector("button")
const span = document.querySelector("span")
const container = document.querySelector(".container")
let rating = ""

// Rating Number 
buttons.forEach(item => item.addEventListener("click", function () { rating = item.value }))

// Things after form submited
form.addEventListener("submit", (e) => {
    e.preventDefault()
    for (btn of buttons) { btn.remove() }
    container.classList.remove("container")
    container.classList.add("thankyou-container")
    svg1.remove()
    svg2.classList.remove("invis")
    span.classList.remove("invis")
    h2.innerText = "Thank you"
    p.innerText = "We appreciate you taking the time to give a rating  If you ever need support, don't hesitate to get in touch"
    span.innerText = `You choose ${rating} out of 5`
    submit.remove()
}

)  