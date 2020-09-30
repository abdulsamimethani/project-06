import React from 'react';

export type quizType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type quesType = {
    question: string
    option: string[]
    answer: string
    correct_answer: string
}

export type propType = {
    options: string[],
    question: string,
    callback: (e: React.FormEvent<EventTarget>, ans: string) => void
}