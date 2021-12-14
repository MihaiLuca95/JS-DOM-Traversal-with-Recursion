console.warn(`<-----------Search by TagName------------->`)

const elements = [] 

const findElementsByTagName = (root, tagName) => {

    if(root.tagName == tagName) elements.push(root)

    let arr = [...root.children]
    arr.forEach( node => {
        let foundTagName = findElementsByTagName(node, tagName)
    }); return elements

    // for(let node of root.children) {    
    //     let foundTagName = findElementsByTagName(node, tagName)
    // } return elements
}

console.log(findElementsByTagName(rootSection, 'DIV'))

console.log(`


`)