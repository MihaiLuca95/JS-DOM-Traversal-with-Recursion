console.warn("<------------Search by textContent--------------->")

const find = (element, what) => {

    let content = element.childNodes[0].textContent.trim()

    if(what == content) {
        return element
    }

    let found = null
    
    const arr = [...element.children]
    arr.forEach(elem => {
        found = find(elem, what) ?? found 
    }); return found

/*  Standart FOR LOOP
    for(let index = 0; index < element.children.length; index++) {
        let found = find(element.children[index], what)
        if(found != undefined) return found
    }
*/    
}

console.log(`Element was found:`, find(rootSection, 'div 3'))

console.log(`


`)