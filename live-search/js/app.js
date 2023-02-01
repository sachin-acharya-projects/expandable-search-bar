const inputField = document.getElementById("search-bar")
const container = document.getElementById("container")
/**
 * Make substring bold (need to refine it)
 * @param {string} string String
 * @param {substring} substring string to check in String
 * @returns string
 */
function handleReplace(string, substring) {
    const lower = string.toLowerCase()
    const index = lower.indexOf(substring)
    const last = index + substring.length
    let word = ''
    if (index === 0) {
        word = "<strong>" + string.substr(index, last) + "</strong>" + string.substr(last)
    } else {
        word = string.substr(null, index) + "<strong>" + string.substr(index, substring.length - 1) + "</strong>" + string.substr(last)
    }
    // console.log(string, substring, word)
    return word
}

inputField.addEventListener("input", async () => {
    const inputValue = inputField.value
    if (inputValue != '') {
        fetch(`/live-search/php/search.php?name=${inputValue}`)
        .then(data => data.json())
        .then(data => {
            container.innerHTML = ''
            data = data || []
            for (let i of data) {
                const small = i[1][0] + i[2][0]
                let fname = i[1]
                let lname = i[2]
                if (fname.toLowerCase().includes(inputValue.toLowerCase())) {
                    // console.log("HPLY")
                    fname = handleReplace(fname, inputValue) // Making the portion user typed bold
                }
                if(lname.toLowerCase().includes(inputValue.toLowerCase())) {
                    // console.log("2")
                    lname = handleReplace(lname, inputValue) // Same as above
                }
                container.innerHTML += `
                <li onclick='popup(this)'>
                    <p class="profile">${small.toUpperCase()}</p>
                    <p class="fullname">${lname}, ${fname}</p>
                </li>
                `
            }
        })
    } else {
        container.innerHTML = ''
    }
})

function popup(target) {
    const pop = document.createElement("div")
    pop.innerHTML = target.innerHTML
    pop.style.width = '0'
    pop.style.height = '0'
    document.body.appendChild(pop)
    pop.classList.add("popup")
    event_ = document.addEventListener("click", function handleClick(e) {
        if (e.target === document.body) {
            document.removeEventListener("click", handleClick, true)
            pop.classList.add("remove")
            setTimeout(() => document.body.removeChild(pop), 400)
        }
    }, true)
    requestAnimationFrame(() => {
        pop.style.width = '500px'
        pop.style.height = '500px'
    })
}