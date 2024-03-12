import { Juego, juego } from './modelo';

let juegoActual: Juego = { ...juego };

export function nuevaPartida(): void {
    juegoActual = { ...juego };
}

export function dameCarta(): number {
    let carta: number = Math.floor(Math.random() * 10) + 1;
    if (carta > 7) {
        carta += 2;
    }
    return carta;
}

export function sumaPuntuacion(carta: number): void {
    if (carta >= 10) {
        juegoActual.score += 0.5;
    } else {
        juegoActual.score += carta;
    }
}

export function getEstadoJuego(): Juego {
    return { ...juegoActual };
}
