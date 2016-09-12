const div = document.createElement('div');
const helloWorld = document.createElement('span');
helloWorld.classList.add('world');
helloWorld.innerHTML = 'hello world';
div.appendChild(helloWorld);
div.classList.add('main');
document.body.appendChild(div);
