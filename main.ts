/**
 * Bloco de sequência do slide da Secretaria da Educação.
 * Requer a extensão Robotbit da KittenBot.
 */
//% color="#2878D0" weight=90 icon="\uf0a1"
namespace acenarSlide {
    /**
     * Executa a sequência completa: mostra 5, move S8 de 90° a 0°,
     * S7 de 15° a 120° e S7 de 120° a 15°, com pausa de 30 ms.
     */
    //% blockId=acenar_slide_sequencia
    //% block="executar sequência acenar do slide"
    //% weight=100
    export function executarSequencia(): void {
        basic.showNumber(5);

        // Primeiro FOR: S8, 90 até 0, passo -1
        for (let index6 = 90; index6 >= 0; index6 += -1) {
            robotbit.Servo(robotbit.Servos.S8, index6);
            basic.pause(30);
        }

        // Segundo FOR: S7, 15 até 120, passo +1
        for (let index6 = 15; index6 <= 120; index6 += 1) {
            robotbit.Servo(robotbit.Servos.S7, index6);
            basic.pause(30);
        }

        // Terceiro FOR: S7, 120 até 15, passo -1
        for (let index6 = 120; index6 >= 15; index6 += -1) {
            robotbit.Servo(robotbit.Servos.S7, index6);
            basic.pause(30);
        }
    }
}
