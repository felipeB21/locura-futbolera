"use client";
import { preguntas } from "@/data/lacobra/data";
import { useState } from "react";

export default function GameCobra() {
  const [showError, setShowError] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = preguntas;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mt-20 uppercase text-2xl font-bold">
        Cuanto sabe LA COBRA
      </h1>
      <h2 className="mt-6 text-xl">
        Preguntas: {activeQuestion + 1}
        <span>/{questions.length}</span>
      </h2>
      <div className="mt-4 flex justify-center items-center flex-col shadow-xl">
        {!showResult ? (
          <div className="bg-neutral-900 rounded-xl p-20">
            <h3 className="text-3xl font-bold">
              {questions[activeQuestion].question}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xl">
                {answers.map((answer, idx) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={
                      selectedAnswerIndex === idx
                        ? "list-none bg-neutral-950  text-center rounded-lg mt-4 p-2 border-2 border-neutral-700 cursor-pointer"
                        : `list-none bg-neutral-800 hover:bg-neutral-700 text-center rounded-lg mt-4 p-2 border-2 border-neutral-700 cursor-pointer`
                    }
                  >
                    <span>{answer}</span>
                  </li>
                ))}
              </div>
              <div className="mt-12 text-center text-xl">
                {checked ? (
                  <button
                    className="bg-neutral-700 border-2 border-neutral-600 py-2 px-12 rounded-xl"
                    onClick={nextQuestion}
                  >
                    Continuar
                  </button>
                ) : (
                  <div>
                    <button
                      className="bg-neutral-700 border-2 border-neutral-600 py-2 px-12 rounded-xl"
                      onClick={() =>
                        setShowError("Seleccione una respuesta para continuar")
                      }
                    >
                      Continuar
                    </button>
                    <p className="text-lg mt-4 text-red-400">{showError}</p>
                  </div>
                )}
              </div>
            </h3>
          </div>
        ) : (
          <div className="text-2xl bg-neutral-900 p-20 rounded-xl shadow-xl">
            <h3 className="font-bold mb-2 text-3xl">Resultados</h3>
            <h3 className="text-green-400">
              Respuestas correctas: {result.score}
            </h3>
            <h3 className="text-red-400">
              Respuestas incorrectas: {result.wrongAnswers}
            </h3>
            <div className="mt-10">
              {result.score >= 2 ? (
                <p className="text-green-500">
                  Te felicito sabes mucho de futbol!
                </p>
              ) : (
                <p className="text-red-500 text-center">
                  Te falta ver mas futbol!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
