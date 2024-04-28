const nodeList = document.getElementsByTagName('li');
for (let i = 0; i < nodeList.length; i++) {
    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}
let closeButtons = document.getElementsByClassName('close');
for (let i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i];
    closeButton.addEventListener('click', () => {
        const li = closeButton.parentElement;
        if (!!li) {
            li.style.display = 'none';
        }
    });
}
const list = document.querySelector('ul');
if (list) {
    list.addEventListener('click', (ev) => {
        let target = ev.target;
        if (target && target.tagName === 'li') {
            target.classList.toggle('checked');
        }
    }, false);
}
function addElement() {
    const li = document.createElement('li');
    const input = document.getElementById('input');
    if (!input) {
        return;
    }
    const inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        alert('You must write something!');
    }
    else {
        const ul = document.getElementById('list');
        if (ul) {
            ul.appendChild(li);
        }
    }
    input.value = '';
    const span = document.createElement('span');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener('click', () => {
        const li = span.parentElement;
        if (!!li) {
            li.style.display = 'none';
        }
    });
}
const addBtn = document.getElementById('add');
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', () => addElement());
export {};
