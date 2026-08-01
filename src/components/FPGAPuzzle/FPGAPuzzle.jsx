import React, { useState } from "react";
import confetti from "canvas-confetti";
import { puzzles } from '../../data/puzzles.js';
import "./FPGAPuzzle.css";

// progi certyfikatów:
const titles = [
  { points: 5, name: "KNUC Junior" },
  { points: 10, name: "KNUC FPGA Adept" },
  { points: 20, name: "KNUC Logic Master" }
];

export default function FPGAPuzzle() {
  const getRandomIndex = (excludeIndex = null) => {
    if (puzzles.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * puzzles.length);
    } while (newIndex === excludeIndex);
    return newIndex;
  };

  const [currentIndex, setCurrentIndex] = useState(() => getRandomIndex());
  const current = puzzles[currentIndex];

  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [points, setPoints] = useState(0);
  const [title, setTitle] = useState(null);

  const handleAnswer = (index) => {
    setSelected(index);
    setAnswered(true);

    if (index === current.correct) {
      const newPoints = points + 1;
      setPoints(newPoints);

      // sprawdzanie osiągniętych rang
      const unlocked = titles.find((t) => t.points === newPoints);
      if (unlocked) {
        setTitle(unlocked.name);
        fireConfetti();
      }
    }
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 180,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleNext = () => {
    setAnswered(false);
    setSelected(null);
    // Losujemy nowe pytanie, przekazując aktualny indeks, aby go wykluczyć
    setCurrentIndex((prev) => getRandomIndex(prev));
  };

  return (
    <div className="fpga-puzzle">
      <h2>Zagadki FPGA</h2>

      <p className="points">Punkty: <strong>{points}</strong></p>

      {title && (
        <p className="rank">
          🏅 Otrzymałeś tytuł: <strong>{title}</strong>!
        </p>
      )}

      <p className="question">{current.question}</p>

      <div className="options">
        {current.options.map((opt, i) => (
          <button
            key={i}
            className={`option ${
              answered
                ? i === current.correct
                  ? "correct"
                  : i === selected
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => !answered && handleAnswer(i)}
          >
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div className="feedback">
          {selected === current.correct ? (
            <p className="success">
              Dobrze! {current.fact}
            </p>
          ) : (
            <p className="error">
              Niestety nie. Poprawna odpowiedź to:{" "}
              <strong>{current.options[current.correct]}</strong>.
            </p>
          )}

          <button className="next-btn" onClick={handleNext}>
            Następna zagadka →
          </button>
        </div>
      )}
    </div>
  );
}