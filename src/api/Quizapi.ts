import { quizType, quesType } from './../Types/Quiztype';

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)


export const quizQuestion = async (totalQuestion: number, level: string): Promise<quesType[]> => {
    const api = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`);
    const { results } = await api.json();
    const quiz: quesType[] = results.map((quesObj: quizType) => {
        return {
            question: quesObj.question,
            correct_answer: quesObj.correct_answer,
            answer: quesObj.correct_answer,
            option: shuffleArray(quesObj.incorrect_answers.concat(quesObj.correct_answer))
        }
    })
    return quiz;
}