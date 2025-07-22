export const nbLetters = 5;

export let attempts = [];
for (let j = 0; j < 5; j++) {
    attempts.push([]);
    for (let i = 0; i < nbLetters; i++) {
        attempts[j].push("_");
    }
}

