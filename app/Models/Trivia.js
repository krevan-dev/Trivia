export class Trivia {
    constructor(data) {
        this.category = data.category
        this.question = data.question
        this.correct = data.correct_answer
        this.incorrect = data.incorrect_answer
    }

    get Template() {
        return `
        <li class="py-1">${this.question} - <b>${this.correct}</b></li>
        `
    }
}