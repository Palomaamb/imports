export interface Juego {
    score: number;
    gameOver: boolean;
    message: string;
}

export const juego: Juego = {
    score: 0,
    gameOver: false,
    message: "",
}