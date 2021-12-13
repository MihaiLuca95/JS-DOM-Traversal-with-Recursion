console.log(`-----------Search by TagName-------------`)

const elements = [] 

const findElementsByTagName = (root, tagName) => {

    if(root.tagName == tagName) elements.push(root)

    for(let node of root.children) {    
        let foundTagName = findElementsByTagName(node, tagName)
    } return elements
}

console.log(findElementsByTagName(rootSection, 'DIV'))

console.log(`


`)