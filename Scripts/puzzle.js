const puzzleContainer = document.querySelector('.puzzle-container');
const puzzleBackground = document.querySelector('.puzzle-container-background');
const hideArea = document.querySelector('.hidearea');
const bars = document.querySelectorAll('.bar');

hideArea.addEventListener('click', hidePuzzle);
puzzlebox.addEventListener('click', showPuzzle);

let isOpen = false;
let correctCombinationSet = false;

function showPuzzle() {
    puzzleBackground.style.display = 'flex';
    if (!isOpen) {
        isOpen = true;
        console.log("Puzzle is opened. isOpen: " + isOpen);
    }
}

function hidePuzzle() {
    puzzleBackground.style.display = 'none';
    if (isOpen) {
        isOpen = false;
        console.log("Puzzle is closed. isOpen: " + isOpen);

        if (correctCombinationSet) {
            openBookshelf();
        }
    }
}

const barNames = ['first', 'second', 'third'];
const currentValues = [];

bars.forEach((bar, index) => {
    let scrollPosition = 0;
    const values = JSON.parse(bar.getAttribute('data-values'));

    // Log the default viewable part
    let defaultPartValue = values[0];
    currentValues[index] = defaultPartValue;
    console.log(`The ${barNames[index]} bar is: ${defaultPartValue}`);

    bar.addEventListener('click', () => {
        scrollPosition += 72.35;
        if (scrollPosition > 72.35 * 4) scrollPosition = 0;
        bar.style.backgroundPositionY = `${scrollPosition}%`;

        // Calculate the current viewable part
        let partIndex = Math.floor(scrollPosition / 72.35); // Each part is 20% of the height
        let partValue = values[partIndex % values.length];

        currentValues[index] = partValue;
        console.clear();

        console.log("isOpen: " + isOpen);
        currentValues.forEach((value, i) => {
            console.log(`The ${barNames[i]} bar is: ${value}`);
        });

        // Check if the specific condition is met
        if (currentValues[0] === 'Face' && currentValues[1] === 'Sleep' && currentValues[2] === 'Leaf') {
            correctCombinationSet = true;
            console.log("Correct combination set!");
        } else {
            correctCombinationSet = false;
        }
    });
});

function openBookshelf() {
    console.log("Bookshelf opened");
    leftshelf.style.transform = "translateX(535%)";
    rightshelf.style.transform = "translateX(74%) scaleX(-1)";
}
