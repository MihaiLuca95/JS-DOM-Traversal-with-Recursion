console.log(`-----------Search by className-------------`)
const result = []

const findElementsByClassName = (root, className) => {

    if(root.classList.contains(className)) result.push(root)
        
    for(let node of root.children) {    
        let foundClassName = findElementsByClassName(node, className)
    } return result
}

console.log(findElementsByClassName(rootSection, 'nav-item'))