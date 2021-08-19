// from data.js
let tableData = data

// select tbody element
let tbody = d3.select('tbody')

// build table
const populateTable = (dataInput) => {
    tbody.innerHTML = ``

    dataInput.forEach(sighting => {
        let row = tbody.append('tr')

        Object.entries(sighting).forEach(([key, value]) => {
            // console.log(`${key} : ${value}`)
            let cell = row.append('td')
            // cell.text(`${key} : ${value}`)
            cell.text(value)
        })
    })
}

// load data
populateTable(tableData)

const handleQuery = () => {
    d3.event.preventDefault()
    tbody.html('')

    let dateQuery = d3.select('#datetime').property('value')

// filter results
    let filter = tableData.filter(tableData => tableData.datetime === dateQuery)
    filter.forEach(dateSelect => {
        let row = tbody.append('tr')
        Object.entries(dateSelect).forEach(function ([key, value]) {
            let cell = row.append('td')
            cell.text(value)
        })
    })
}

d3.select('#filter-btn').on('click', handleQuery)














