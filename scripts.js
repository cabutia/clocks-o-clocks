const randBetween = (possibleValues) => {
    let index = Math.floor(Math.random() * (possibleValues.length - 1))
    return possibleValues[index].toString()
}

const initGlobalVariables = () => {
    window.config = {
        width: 34,
        height: 8,
        clockSize: 30
    }

    window.timeToPrint = '00:00:00'
    window.targetContainer = document.getElementById('main-container')
    window.gridElements = []

    window.grid = []
    const LINE_H = randBetween(['0345', '0915'])
    const LINE_V = randBetween(['0030', '0600'])
    const COR_TL = randBetween(['0615', '0330'])
    const COR_TR = randBetween(['0930', '0645'])
    const COR_BL = randBetween(['0015', '0300'])
    const COR_BR = randBetween(['0900', '0045'])
    const NULL_V = randBetween(['0000', '1200'])

    // [0] --> 48
    // [1] --> 49
    // [2] --> 50
    // [3] --> 51
    // [4] --> 52
    // [5] --> 53
    // [6] --> 54
    // [7] --> 55
    // [8] --> 56
    // [9] --> 57
    // [:] --> 58

    // Sample empty
    // [NULL_V, NULL_V, NULL_V, NULL_V],
    // [NULL_V, NULL_V, NULL_V, NULL_V],
    // [NULL_V, NULL_V, NULL_V, NULL_V],
    // [NULL_V, NULL_V, NULL_V, NULL_V],
    // [NULL_V, NULL_V, NULL_V, NULL_V],
    // [NULL_V, NULL_V, NULL_V, NULL_V]
    window.characters = {
        char_48: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [LINE_V, COR_TL, COR_TR, LINE_V],
            [LINE_V, LINE_V, LINE_V, LINE_V],
            [LINE_V, LINE_V, LINE_V, LINE_V],
            [LINE_V, COR_BL, COR_BR, LINE_V],
            [COR_BL, LINE_H, LINE_H, COR_BR]
        ],
        char_49: [
            [NULL_V, COR_TL, COR_TR, NULL_V],
            [NULL_V, LINE_V, LINE_V, NULL_V],
            [NULL_V, LINE_V, LINE_V, NULL_V],
            [NULL_V, LINE_V, LINE_V, NULL_V],
            [NULL_V, LINE_V, LINE_V, NULL_V],
            [NULL_V, COR_BL, COR_BR, NULL_V]
        ],
        char_50: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [COR_BL, LINE_H, COR_TR, LINE_V],
            [COR_TL, LINE_H, COR_BR, LINE_V],
            [LINE_V, COR_TL, LINE_H, COR_BR],
            [LINE_V, COR_BL, LINE_H, COR_TR],
            [COR_BL, LINE_H, LINE_H, COR_BR]
        ],
        char_51: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [COR_BL, LINE_H, COR_TR, LINE_V],
            [COR_TL, LINE_H, COR_BR, LINE_V],
            [COR_BL, LINE_H, COR_TR, LINE_V],
            [COR_TL, LINE_H, COR_BR, LINE_V],
            [COR_BL, LINE_H, LINE_H, COR_BR]
        ],
        char_52: [
            [COR_TL, COR_TR, COR_TL, COR_TR],
            [LINE_V, LINE_V, LINE_V, LINE_V],
            [LINE_V, COR_BL, COR_BR, LINE_V],
            [COR_BL, LINE_H, COR_TR, LINE_V],
            [NULL_V, NULL_V, LINE_V, LINE_V],
            [NULL_V, NULL_V, COR_BL, COR_BR]
        ],
        char_53: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [LINE_V, COR_TL, LINE_H, COR_BR],
            [LINE_V, COR_BL, LINE_H, COR_TR],
            [COR_BL, LINE_H, COR_TR, LINE_V],
            [COR_TL, LINE_H, COR_BR, LINE_V],
            [COR_BL, LINE_H, LINE_H, COR_BR]
        ],
        char_54: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [LINE_V, COR_TL, LINE_H, COR_BR],
            [LINE_V, COR_BL, LINE_H, COR_TR],
            [LINE_V, COR_TL, COR_TR, LINE_V],
            [LINE_V, COR_BL, COR_BR, LINE_V],
            [COR_BL, LINE_H, LINE_H, COR_BR]
        ],
        char_55: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [COR_BL, LINE_H, COR_TR, LINE_V],
            [NULL_V, NULL_V, LINE_V, LINE_V],
            [NULL_V, NULL_V, LINE_V, LINE_V],
            [NULL_V, NULL_V, LINE_V, LINE_V],
            [NULL_V, NULL_V, COR_BL, COR_BR]
        ],
        char_56: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [LINE_V, COR_TL, COR_TR, LINE_V],
            [LINE_V, COR_BL, COR_BR, LINE_V],
            [LINE_V, COR_TL, COR_TR, LINE_V],
            [LINE_V, COR_BL, COR_BR, LINE_V],
            [COR_BL, LINE_H, LINE_H, COR_BR]
        ],
        char_57: [
            [COR_TL, LINE_H, LINE_H, COR_TR],
            [LINE_V, COR_TL, COR_TR, LINE_V],
            [LINE_V, COR_BL, COR_BR, LINE_V],
            [COR_BL, LINE_H, COR_TR, LINE_V],
            [NULL_V, NULL_V, LINE_V, LINE_V],
            [NULL_V, NULL_V, COR_BL, COR_BR]
        ],
        char_58: [
            [NULL_V, NULL_V, NULL_V, NULL_V],
            [NULL_V, COR_TL, COR_TR, NULL_V],
            [NULL_V, COR_BL, COR_BR, NULL_V],
            [NULL_V, COR_TL, COR_TR, NULL_V],
            [NULL_V, COR_BL, COR_BR, NULL_V],
            [NULL_V, NULL_V, NULL_V, NULL_V]
        ]
    }
}

const initGrid = () => {
    const containerWidth = window.config.width * window.config.clockSize
    const containerHeight = window.config.height * window.config.clockSize
    window.targetContainer.style.width = containerWidth + 'px'
    window.targetContainer.style.height = containerHeight + 'px'

    for (var i = 0; i < window.config.height; i++) {
        window.grid[i] = []
        for (var x = 0; x < window.config.width; x++)
            window.grid[i][x] = '0000'
    }
    let html = ''
    for (var y = 0; y < window.grid.length; y++) {
        for (var x = 0; x < window.grid[y].length; x++) {
            // console.log(`Setting hours: ${hours} and minutes: ${minutes}`)
            html += `
                <div class="clock" data-x="${x}" data-y="${y}">
                    <div class="needle-hours"></div>
                    <div class="needle-minutes"></div>
                </div>
            `
        }
    }
    window.targetContainer.innerHTML = html
    const elements = document.querySelectorAll('.clock')

    elements.forEach(clock => {
        let x = clock.getAttribute('data-x')
        let y = clock.getAttribute('data-y')
        let key = x + '_' + y
        clock.needleHours = clock.querySelector('.needle-hours')
        clock.needleMinutes = clock.querySelector('.needle-minutes')
        window.gridElements[key] = clock
        let hours = Math.floor(Math.random() * 360)
        let minutes = Math.floor(Math.random() * 360)
        clock.needleHours.style.transform = `rotate(${hours})deg`
        clock.needleMinutes.style.transform = `rotate(${minutes})deg`
    })
}

const printGrid = () => {
    console.log('Printing ' + window.timeToPrint)
    for (var y = 0; y < window.grid.length; y++) {
        for (var x = 0; x < window.grid[y].length; x++) {
            let key = x + '_' + y
            let time = window.grid[y][x]
            let hours = time.substring(0, 2) * 360 / 12
            let minutes = time.substring(2, 4) * 360 / 60
            this.gridElements[key].needleHours.style.transform = `rotate(${hours}deg)`
            this.gridElements[key].needleMinutes.style.transform = `rotate(${minutes}deg)`
            // console.log(`Updating ${this.gridElements[y + '_' + x]}`)
        }
    }
}

const updateGrid = () => {
    const valuesArray = window.timeToPrint.toString().split('')
    const offsetX = 1
    const offsetY = 1
    let charsPrinted = 0
    for (var i = 0; i < valuesArray.length; i++) {
        const charCode = valuesArray[i].charCodeAt(0)
        let character = window.characters['char_' + charCode]
        for (var y = 0; y < character.length; y++) {
            for (var x = 0; x < character[y].length; x++) {
                let cX = (charsPrinted * 4) + x + offsetX
                let cY = offsetY + y
                window.grid[cY][cX] = character[y][x].toString()
            }
        }
        charsPrinted++
    }
}

const initTimeInterval = () => {
    setInterval(() => {
        let d = new Date()
        let h = d.getHours().toString().padStart(2, '0')
        let m = d.getMinutes().toString().padStart(2, '0')
        let s = d.getSeconds().toString().padStart(2, '0')
        let timeString = h + ':' + m + ':' + s
        window.timeToPrint = timeString
        updateGrid()
        printGrid()
    }, 1000)
}

const init = ev => {
    initGlobalVariables()
    initGrid()
    printGrid()
    // initContainer()
    initTimeInterval()
    // updateGrid()
}

document.addEventListener('DOMContentLoaded', init)
