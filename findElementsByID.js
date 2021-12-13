console.log(`-----------Search by ID-------------`)

const findElementById = (root, id) => {

    if(id == root.id) return root
    
    for(let node of root.children ) {
        let foundId = findElementById(node, id)

        if(foundId != undefined) return foundId
    } return null
}

console.log(findElementById(rootSection,"menu"));

console.log(`


`)