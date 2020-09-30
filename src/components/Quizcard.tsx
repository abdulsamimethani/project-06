import React, { useState } from 'react';
import { propType } from './../Types/Quiztype';

const Quizcard: React.FC<propType> = ({ options, question, callback}) => {
    let [selectedAns, setSelectedAns] = useState("");

    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value);
    }
    return (
        <div className="question-container">
            <h2>Quiz App</h2>
            <div className="question">
                <h4>{question}</h4>
            </div>
            <div className="choices-container">
                <form onSubmit={(ev: React.FormEvent<EventTarget>) => callback(ev, selectedAns)}>
                    {options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input type="radio" name="opt" value={opt} onChange={handleSelection} required checked={selectedAns === opt} />
                                    {opt}
                                </label>
                            </div>
                        )
                    })}
                    <input type="submit" className="submit-btn" value="Next Question"/>
                </form>
            </div>
        </div>
    )
}
export default Quizcard;