export const puzzles = [
  {
    question: "Co będzie wynikiem bramki AND dla A=1, B=0?",
    options: ["0", "1", "Zależy od napięcia progowego"],
    correct: 0,
    fact: "Bramka AND daje 1 tylko wtedy, gdy wszystkie wejścia są równe 1."
  },
  {
    question: "Ile stanów może przyjąć 3-bitowy licznik binarny?",
    options: ["6", "7", "8"],
    correct: 2,
    fact: "3 bity to 2³ = 8 stanów, od 000 do 111."
  },
  {
    question: "Jak działa przerzutnik D?",
    options: [
      "Kopiuje stan wejścia przy zboczu zegara",
      "Sumuje sygnały wejściowe",
      "Porównuje sygnał z poprzednim stanem"
    ],
    correct: 0,
    fact: "Przerzutnik D to fundament rejestrów i liczników."
  },
  {
    question: "Jaki kod binarny odpowiada liczbie dziesiętnej 13?",
    options: ["1101", "1011", "1110"],
    correct: 0,
    fact: "13 = 1101 w binarnym."
  },
  {
    question: "Które z poniższych to funkcja OR?",
    options: ["Y = A + B", "Y = A • B", "Y = ¬(A • B)"],
    correct: 0,
    fact: "OR zwraca 1, jeśli dowolne wejście to 1."
  },
  {
    question: "Co oznacza stan wysokiej impedancji (High-Z) na wyjściu układu?",
    options: [
      "Wyjście jest zwarte do masy",
      "Wyjście jest odłączone elektrycznie (stan 'odcięty')",
      "Wyjście podaje maksymalne napięcie zasilania"
    ],
    correct: 1,
    fact: "Stan High-Z zachowuje się tak, jakby wyjście zostało fizycznie odłączone, co pozwala na współdzielenie jednej linii przez wiele urządzeń (np. magistrala)."
  },
  {
    question: "Czym różni się pamięć SRAM od DRAM?",
    options: [
      "SRAM opiera się na kondensatorach",
      "DRAM jest trwała (nie traci danych po wyłączeniu zasilania)",
      "SRAM nie wymaga odświeżania i jest szybsza"
    ],
    correct: 2,
    fact: "SRAM buduje się na przerzutnikach (szybka, ale droga, używana w pamięciach cache), a DRAM na kondensatorach, które stale tracą ładunek i wymagają odświeżania."
  },
  {
    question: "Co to jest metastability (metastabilność) w układach cyfrowych?",
    options: [
      "Stan pośredni między 0 a 1, w którym układ utknął na chwilę w wyniku naruszenia czasu setup/hold",
      "Trwałe uszkodzenie struktury półprzewodnikowej",
      "Stan oszczędzania energii w FPGA"
    ],
    correct: 0,
    fact: "Metastabilność występuje, gdy sygnał asynchroniczny zmienia się dokładnie w oknie czasowym zbocza zegara, powodując, że przerzutnik potrzebuje czasu na powrót do stabilnego stanu."
  },
  {
    question: "Do czego w architekturze FPGA służą bloki LUT (Look-Up Table)?",
    options: [
      "Do stabilizacji napięcia zasilającego rdzeń",
      "Do implementacji dowolnych logicznych funkcji boole'owych",
      "Do bezprzewodowej komunikacji układu z otoczeniem"
    ],
    correct: 1,
    fact: "LUT to tablice przestawcze, które w strukturze FPGA działają jak pamięć RAM przechowująca tablicę prawdy realizowanej funkcji logicznej."
  },
  {
    question: "Który parametr układu sekwencyjnego określa minimalny czas, przez jaki sygnał danych musi być stabilny PRZED zboczem zegara?",
    options: ["Czas propagation delay", "Czas hold (trzymania)", "Czas setup (narastania/przygotowania)"],
    correct: 2,
    fact: "Czas setup (t_su) dba o to, aby dane dotarły na wejście przerzutnika odpowiednio wcześnie przed nadejściem impulsu zegarowego."
  }
];

// JS dlatego, ponieważ biblioteka confetti ma kłopot ze wsparciem JSONa