const mainElement = document.getElementById('main');
const formMahmuda = document.getElementById('mahmuda');
const formNabila = document.getElementById('nabila');

function ChatApp() {

    this.sendMessage = function (id, msg) {
        if (!id || !msg) return;

        const spanName = document.createElement('span');
        spanName.innerText = id + ': ';
        spanName.setAttribute('class', 'msg-title');

        const spanMsg = document.createElement('span');
        spanMsg.innerText = msg;
        spanMsg.setAttribute('class', `msg-box msg-${id}`);

        const div = document.createElement('div');
        div.setAttribute('class', 'msg-wrapper');

        div.appendChild(spanName);
        div.appendChild(spanMsg);
        mainElement.appendChild(div);

        document.getElementById('input-' + id).value = '';
    }

    this.getInputValue = function (id) {
        return document.getElementById(id).value;
    }
}

function handleSubmit(event, id) {
    event.preventDefault();
    const msg = chatApp.getInputValue('input-' + id);
    chatApp.sendMessage(id, msg);
}

const chatApp = new ChatApp();

formMahmuda.addEventListener('submit', (event) => handleSubmit(event, 'mahmuda'));

formNabila.addEventListener('submit', (event) => handleSubmit(event, 'nabila'))