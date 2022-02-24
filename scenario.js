import {Doliprane, Drug, Fervex, HerbalTea, MagicPill, Pharmacy} from "./pharmacy";

export function run() {
    const drugs = [
        new Doliprane(),
        new HerbalTea(),
        new Fervex(),
        new MagicPill()
    ];
    const trial = new Pharmacy(drugs);

    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
        log.push(JSON.stringify(trial.updateBenefitValue()));
    }
    return log;
}