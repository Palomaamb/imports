import { nuevaPartida, dameCarta, sumaPuntuacion, getEstadoJuego } from './motor';

export function crearJuego(): void {
    const hitButton = document.getElementById('hit');
    const standButton = document.getElementById('stand');
    const newGameButton = document.getElementById('new-game');

    if (hitButton instanceof HTMLElement && standButton instanceof HTMLElement && newGameButton instanceof HTMLElement) {
        hitButton.addEventListener('click', function () {
            const juego = getEstadoJuego();
            if (!juego.gameOver) {
                const carta = dameCarta();
                sumaPuntuacion(carta);
                mostrarPuntuacion(juego.score);
            }
        });

        standButton.addEventListener('click', function () {
            const juego = getEstadoJuego();
            if (!juego.gameOver) {
                juego.gameOver = true;
                mostrarMensajePorPuntuacion();           }
        });

        newGameButton.addEventListener('click', function () {
            nuevaPartida();
            mostrarPuntuacion(0);
        });
    }
}

function mostrarPuntuacion(puntuacion: number): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement instanceof HTMLElement) {
        scoreElement.innerText = `Puntuación: ${puntuacion}`;
    }
}
function mostrarMensajePorPuntuacion() {
    throw new Error('Function not implemented.');
}

