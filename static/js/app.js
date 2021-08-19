// from data.js
let tableData = data;

// select tbody element
let tbody = d3.select('tbody')

// build table
const populateTable = (dataInput) => {
    tbody.innerHTML = ''

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