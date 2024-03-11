import { Juego, juego } from './modelo';
import { muestraPuntuacion, mostrarMensajePorPuntuacion } from './ui';

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
    
    muestraPuntuacion();
    
    if (juego.score > 7.5 || juego.score === 7.5) {
        juego.gameOver = true;
        mostrarMensajePorPuntuacion();
    }
}

export function nuevaPartida(): void {
    juego.score = 0;
    juego.gameOver = false;
    muestraPuntuacion();
}

export function getJuego(): Juego {
    return { ...juego };
}
