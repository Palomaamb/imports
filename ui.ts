import { Juego, juego } from './modelo';
import { dameCarta, sumaPuntuacion, nuevaPartida, getJuego } from './motor';

export function crearJuego(): void {
    nuevaPartida();

    const hitButton = document.getElementById('hit');
    const standButton = document.getElementById('stand');
    const newGameButton = document.getElementById('new-game');

    if (hitButton && standButton && newGameButton) {
        hitButton.addEventListener('click', function () {
            const juego: Juego = getJuego();
            if (!juego.gameOver) {
                const carta = dameCarta();
                mostrarCarta(carta);
                sumaPuntuacion(carta);
            }
        });

        standButton.addEventListener('click', function () {
            const juego: Juego = getJuego();
            if (!juego.gameOver) {
                juego.gameOver = true;
                mostrarMensajePorPuntuacion();
            }
        });

        newGameButton.addEventListener('click', function () {
            nuevaPartida();
        });
    }
}

function mostrarCarta(carta: number): void {
    const cardElement = document.getElementById('card') as HTMLImageElement;
    if (cardElement) {
        switch (carta) {
            case 1:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg';
                break;
            case 2:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg';
                break;
            case 3:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg';
                break;
            case 4:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg';
                break;
            case 5:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg';
                break;
            case 6:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg';
                break;
            case 7:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg';
                break;
            case 10:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg';
                break;
            case 11:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg';
                break;
            case 12:
                cardElement.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg';
                break;
            default:
                break;
        }
    }
}

export function muestraPuntuacion(): void {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Puntuación: ${juego.score}`;
    }
}

export function mostrarMensajePorPuntuacion(): void {
    const score = juego.score;
    if (score < 4) {
        endGame("Has sido muy conservador");
    } else if (score === 5) {
        endGame("Te ha entrado el canguelo eh?");
    } else if (score === 6 || score === 7) {
        endGame("Casi casi...");
    } else if (score === 7.5) {
        endGame("¡Lo has clavado! ¡Enhorabuena!");
    } else if (score > 7.5) {
        endGame("Te has pasado, has perdido");
    }
}

function endGame(message: string): void {
    alert(message);
    const hitButton = document.getElementById('hit');
    const standButton = document.getElementById('stand');
    const newGameButton = document.getElementById('new-game');
    if (hitButton && standButton && newGameButton) {
        hitButton.setAttribute('disabled', 'true');
        standButton.setAttribute('disabled', 'true');
        newGameButton.style.display = 'block';
    }
}