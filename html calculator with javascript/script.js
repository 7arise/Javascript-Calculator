

document.addEventListener('DOMContentLoaded', function() {
    const calculatorScreen = document.getElementById('calculator-screen');

    // Inicializa variables para el estado de la calculadora
    let currentInput = '';
    let shouldResetScreen = false;

    // Selecciona todos los elementos con la clase '.button' y asigna un event listener a cada uno
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-action');
            const buttonContent = button.textContent;

            // Maneja la acción del botón según el valor de 'data-action'
            if (action === 'number') {
                handleNumber(buttonContent);
            } else if (action === 'operator') {
                handleOperator(buttonContent);
            } else if (action === 'decimal') {
                handleDecimal();
            } else if (action === 'clear') {
                handleClear();
            } else if (action === 'delete') {
                handleDelete();
            } else if (action === 'equals') {
                handleEquals();
            }
            // Actualiza el contenido de la pantalla después de cada acción
            updateScreen();
        });
    });

    // Función para manejar la selección de numeros
    function handleNumber(number) {
        if (shouldResetScreen) {
            currentInput = number;
            shouldResetScreen = false;
        } else {
            currentInput += number;
        }
    }

    // Función para manejar la selección de operadores
    function handleOperator(nextOperator) {
        currentInput += ` ${nextOperator} `;
        shouldResetScreen = false;
    }

    // Función para manejar el ingreso de un punto decimal
    function handleDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
    }

    // Función para manejar el botón de borrar
    function handleClear() {
        currentInput = '';
    }

    // Función para manejar el botón de eliminar
    function handleDelete() {
        currentInput = currentInput.toString().slice(0, -1);
    }

    // Función para manejar el botón de igual
    function handleEquals() {
        try {
            currentInput = eval(currentInput);
            shouldResetScreen = true;
        } catch (error) {
            currentInput = 'Error';
        }
    }

    // Función para actualizar el contenido de la pantalla
    function updateScreen() {
        calculatorScreen.textContent = currentInput;
    }
});
