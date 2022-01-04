import {
    ProxyState
} from "../AppState.js";
import {
    Trivia
} from "../Models/Trivia.js";
import {
    trivia
} from "./AxiosService.js";


class TriviaService {
    async getTriviaQuestions() {
        let res = await trivia.get('')
        let questions = res.data.results.map(q => new Trivia(q))
        ProxyState.questions = questions
    }
}

export const triviaService = new TriviaService();