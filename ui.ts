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
                if (juego.gameOver) {
                    mostrarMensajePorPuntuacion(juego.score);
                }
            }
        });

        standButton.addEventListener('click', function () {
            const juego = getEstadoJuego();
            if (!juego.gameOver) {
                juego.gameOver = true;
                mostrarMensajePorPuntuacion(juego.score);           
            }
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

function mostrarMensajePorPuntuacion(puntuacion: number): void {
    let message = '';
    if (puntuacion < 4) {
        message = "Has sido muy conservador";
    } else if (puntuacion === 5) {
        message = "Te ha entrado el canguelo eh?";
    } else if (puntuacion === 6 || puntuacion === 7) {
        message = "Casi casi...";
    } else if (puntuacion === 7.5) {
        message = "¡Lo has clavado! ¡Enhorabuena!";
    } else if (puntuacion > 7.5) {
        message = "Te has pasado, has perdido";
    }
    alert(message);
}