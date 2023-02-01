const inputField = document.getElementById("search-bar")
const container = document.getElementById("container")

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
                container.innerHTML += `
                <li>
                    <p class="profile">${small.toUpperCase()}</p>
                    <p class="fullname">${i[2]}, ${i[1]}</p>
                </li>
                `
            }
        })
    } else {
        container.innerHTML = ''
    }
})