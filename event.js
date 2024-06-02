const img = document.getElementById('img')

const createBoxesWithLetters = () => {
    const ltr = 'ASDFGHJKL';
    for(let i = 0; i < ltr.length; i++){
        const box = document.createElement('div');
        box.classList.add('boxStyle');
        box.textContent = ltr[i];
        box.id = ltr[i];
        
        box.addEventListener('click',() => {
            const sound = document.getElementById('sound' + box.id);
            if (sound) {
                sound.play();
            }
            box.classList.add('active')
            setTimeout(() => {
                box.classList.remove('active')
            },1000)
        })
        img.appendChild(box);
    }
}
createBoxesWithLetters();


document.addEventListener('keydown', (event) => {
    const letter = event.key.toUpperCase();
    const boxes = document.querySelectorAll('.boxStyle');
    boxes.forEach(box => {
        if (box.textContent === letter) {
            const sound = document.getElementById('sound' + letter);
            if (sound) {
                sound.play();
            }
            box.classList.add('active'); 
            setTimeout(() => {
                box.classList.remove('active');
            }, 1000);
            const square = document.getElementById('box' + letter);
            if (square) {
                square.click();
            }
        }
    });
});
