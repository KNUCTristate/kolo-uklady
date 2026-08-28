import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./JoinUs.css";

Modal.setAppElement("#root");

export default function JoinUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "600c3805-b2f7-4c59-8b8c-9c4d933ead64",
          subject: "Nowe zgłoszenie do Koła Naukowego!",
          name: data.name,
          email: data.email,
          message: data.reason || "Brak dodatkowego opisu",
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Dziękujemy ${data.name}! Zgłoszenie zostało wysłane na skrzynkę koła.`);
        reset();
        setIsOpen(false);
      } else {
        setStatusMessage("Wystąpił błąd przy wysyłaniu. Spróbuj ponownie.");
      }
    } catch (error) {
      setStatusMessage("Błąd sieci. Sprawdź połączenie z internetem.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="dolacz" className="join-section">
      <h2>Dołącz do nas!</h2>
      <p>
        Interesują Cię układy FPGA, elektronika lub systemy embedded?  
        Dołącz do naszego koła naukowego i rozwijaj swoje pasje!
      </p>

      <button className="join-btn" onClick={() => setIsOpen(true)}>
        Wypełnij formularz
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="join-modal"
        overlayClassName="join-overlay"
      >
        <h3>Formularz zgłoszeniowy</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="join-form">
          <label>Imię i nazwisko</label>
          <input {...register("name", { required: true })} placeholder="Jan Kowalski" />

          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="jan.kowalski@email.com"
          />

          <label>Dlaczego chcesz do nas dołączyć?</label>
          <textarea {...register("reason")} placeholder="Bo lubię FPGA" />

          {statusMessage && <p style={{ color: "#ff6b6b", fontSize: "0.9rem" }}>{statusMessage}</p>}

          <button type="submit" className="send-btn" disabled={isSubmitting}>
            {isSubmitting ? "Wysyłanie..." : "Wyślij"}
          </button>
        </form>
      </Modal>

      <div className="kahoot-container">
        <h3>Mini-quiz: Sprawdź się!</h3>
        <p>
            Otwórz nasz quiz w nowej karcie:
        </p>
        <a
            href="https://create.kahoot.it/share/quiz-koa-naukowego-ukadow-cyfrowych/d175d6f3-4e7c-4774-aa0e-8c904c4b6f4c"
            target="_blank"
            rel="noopener noreferrer"
            className="kahoot-btn"
        >
            🔗 Uruchom quiz Kahoot
        </a>
      </div>
    </section>
  );
}