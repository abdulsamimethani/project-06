import React, { useEffect, useState } from 'react';
import './App.css';
import { quizQuestion } from './api/Quizapi';
import { quesType } from './Types/Quiztype';
import Quizcard from './components/Quizcard';

function App() {
  let [quiz, setQuiz] = useState<quesType[]>([])
  let [currentQuiz, setCurrentQuiz] = useState(0)
  let [score, setScore] = useState(0);
  let [showscore, setShowscore] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const ques: quesType[] = await quizQuestion(10, 'easy');
      setQuiz(ques)
    }
    fetchData();
  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault()



    const currectAns: quesType = quiz[currentQuiz];
    if (userAns === currectAns.correct_answer) {
      setScore(score++)
    }

    if (currentQuiz !== quiz.length - 1) setCurrentQuiz(++currentQuiz)
    else {
      setShowscore(true)
    }
  }
  if (showscore)
    return (<div className="question-container">
      <h3>Quiz Completed<br /><br />Your Score is {score} out of {quiz.length}</h3>
    </div>)

  if (!quiz.length)
    return (<h1 className="question-container">Loading...</h1>)

  return (
    <div className="App">
            <Quizcard
              options={quiz[currentQuiz].option}
              question={quiz[currentQuiz].question}
              callback={handleSubmit}
            />
    </div>
  );
}

export default App;
