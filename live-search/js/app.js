const inputField = document.getElementById("search-bar")
const container = document.getElementById("container")
/**
 * Make substring bold
 * @param {string} string_ String
 * @param {string} substring string to check in String
 * @returns {string}
 */
function handleReplace(string_, substring, message) {
    const lower_string = string_.toLowerCase()
    const l_index = lower_string.indexOf(substring.toLowerCase())
    const h_index = l_index + substring.length
    const substring_ = string_.substring(l_index, h_index)
    // console.log(l_index, h_index, substring_, string_)
    return string_.replace(substring_, `<strong>${substring_}</strong>`)
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
                    fname = handleReplace(fname, inputValue, 'fname')
                } else if(lname.toLowerCase().includes(inputValue.toLowerCase())){
                    lname = handleReplace(lname, inputValue, 'lname')
                }

                container.innerHTML += `
                <li onclick='popup(this)'>
                    <p class="profile">${small.toUpperCase()}</p>
                    <p class="fullname">
                        <span>${lname}, </span>
                        <span>${fname}</span>
                    </p>
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