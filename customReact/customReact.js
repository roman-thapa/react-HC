function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerText = reactElement.text
    // domElement.setAttribute('href', reactElement.attribute.href)
    // container.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerText = reactElement.text
    for (const att in reactElement.attribute) {
        domElement.setAttribute(att, reactElement.attribute[att])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    attribute: {
        href: "https://youtube.com",
        target: "_blank"
    },
    text: "Youtube"
}

const container = document.querySelector('#root')

customRender(reactElement, container)