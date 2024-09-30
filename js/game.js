const grid = document.querySelector('.grid');

const createcard = () => {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    front.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card)
}

createcard();