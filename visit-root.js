console.warn(`<-----------Visit every element(root)------------->`)

const visit = element => {
    console.log(`visiting ${element.childNodes[0].textContent.trim()}`)

    let array = [...element.children].forEach( node => {
        visit(node)
    })

/*
    STANDART FOR LOOP
    for(let index = 0; index < element.children.length; index++) {
        visit(element.children[index])
    }
*/
}

///////////// using DFS ////////////
visit(rootSection)

console.log(`


`)