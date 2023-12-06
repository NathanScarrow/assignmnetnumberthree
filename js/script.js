document.addEventListener('DOMContentLoaded', function() {
    const interactiveElement = document.getElementById('interactive-element');
    const userInput = document.getElementById('user-input');

    interactiveElement.addEventListener('click', function() {
        interactiveElement.style.backgroundColor = getRandomColor();
    });

    userInput.addEventListener('input', function() {
        const inputValue = userInput.value;
        document.getElementById('main-container').style.backgroundColor = getColorFromInput(inputValue);
    });

    document.addEventListener('mousemove', function(event) {
        const xPos = event.clientX / window.innerWidth * 100;
        const yPos = event.clientY / window.innerHeight * 100;
        interactiveElement.style.left = `${xPos}%`;
        interactiveElement.style.top = `${yPos}%`;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getColorFromInput(input) {
        return `#${input}`;
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const interactiveElement = document.getElementById('interactive-element');
    const userInput = document.getElementById('user-input');

    interactiveElement.addEventListener('click', function() {
        interactiveElement.style.backgroundColor = getRandomColor();
    });

    userInput.addEventListener('input', function() {
        const inputValue = userInput.value.toLowerCase();
        const color = getColorFromInput(inputValue);

        if (color) {
            document.getElementById('main-container').style.backgroundColor = color;
        }
    });

    document.addEventListener('mousemove', function(event) {
        const xPos = event.clientX / window.innerWidth * 100;
        const yPos = event.clientY / window.innerHeight * 100;
        interactiveElement.style.left = `${xPos}%`;
        interactiveElement.style.top = `${yPos}%`;
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getColorFromInput(input) {
        const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

        if (rainbowColors.includes(input)) {
            return input;
        } else {
            return null;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const interactiveElement = document.getElementById('interactive-element-two');

    interactiveElement.addEventListener('click', function() {
        const imageUrls = [
            'images/image-one.JPG',
            'images/image-two.JPG',
            'images/image-three.JPG',
            'images/image-four.JPG',
            
        ];


        const randomIndex = Math.floor(Math.random() * imageUrls.length);

        interactiveElement.style.backgroundImage = `url('${imageUrls[randomIndex]}')`;
    });
});
