import {Doliprane, Drug, MagicPill, Pharmacy} from "./pharmacy";

export function run() {
    const drugs = [
        new Doliprane(),
        new Drug("Herbal Tea", 10, 5),
        new Drug("Fervex", 5, 40),
        new MagicPill()
    ];
    const trial = new Pharmacy(drugs);

    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
        log.push(JSON.stringify(trial.updateBenefitValue()));
    }
    return log;
}