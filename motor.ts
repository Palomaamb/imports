import { juego } from './modelo';

export function dameCarta(): number {
    let carta: number = Math.floor(Math.random() * 10) + 1;
    if (carta > 7) {
        carta += 2;
    }
    return carta;
}

export function sumaPuntuacion(carta: number): void {
    if (carta >= 10) {
        juego.score += 0.5;
    } else {
        juego.score += carta;
    }
    
    if (juego.score > 7.5) {
        juego.gameOver = true;
    }
}

export function mostrarMensajePorPuntuacion(score: number): void {
    let message = '';
    if (score < 4 || score === 4) {
        message = "Has sido muy conservador";
    } else if (score === 5 || score === 5.5) {
        message = "Te ha entrado el canguelo eh?";
    } else if (score === 6 || score === 6.5 || score === 7) {
        message = "Casi casi...";
    } else if (score === 7.5) {
        message = "¡Lo has clavado! ¡Enhorabuena!";
    } else if (score > 7.5) {
        message = "Te has pasado, has perdido";
    }
    alert(message);
}