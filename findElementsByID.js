console.warn(`<-----------Search by ID------------->`)

const findElementById = (root, id) => {

    if(id == root.id) return root
    
    const arr = [...root.children]

    let foundId = null
    arr.forEach( node => {
        foundId = findElementById(node, id) ?? foundId
    }); return foundId

    // for(let node of root.children ) {
    //     let foundId = findElementById(node, id)

    //     if(foundId != undefined) return foundId
    // } return null
}

console.log(findElementById(rootSection,"menu"));

console.log(`


`)