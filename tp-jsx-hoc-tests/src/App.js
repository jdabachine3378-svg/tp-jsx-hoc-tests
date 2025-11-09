import React from "react";
import JSXDemo from "./JSXDemo";
import ButtonWithLogging from "./ButtonWithLogging";
import DataLoader from "./DataLoader";
import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
    return (
        <div style={{ fontFamily: "Arial", padding: "20px" }}>
            <h1 style={{ color: "#007bff" }}>TP JSX et Composition</h1>

            {/* Étape 2 & 3 : JSX Demo */}
            <section style={{ marginBottom: "30px" }}>
                <h2>1️⃣ Exemple JSX vs JavaScript pur</h2>
                <JSXDemo />
            </section>

            {/* Étape 4 : bonnes pratiques JSX */}
            <section style={{ marginBottom: "30px" }}>
                <h2>2️⃣ Bonnes pratiques JSX</h2>
                <p>Regarde les labels et les inputs bien écrits avec className / htmlFor.</p>
            </section>

            {/* Étape 5 : HOC */}
            <section style={{ marginBottom: "30px" }}>
                <h2>3️⃣ Higher Order Component (HOC)</h2>
                <ButtonWithLogging label="Cliquer ici" />
            </section>

            {/* Étape 6 : Render Props */}
            <section style={{ marginBottom: "30px" }}>
                <h2>4️⃣ Render Props (DataLoader)</h2>
                <DataLoader
                    render={(data) => (
                        <ul>
                            {data.map((name) => (
                                <li key={name}>{name}</li>
                            ))}
                        </ul>
                    )}
                />
            </section>

            {/* Étape 8 : Greeting testable */}
            <section style={{ marginBottom: "30px" }}>
                <h2>5️⃣ Composant Greeting</h2>
                <Greeting name="Alice" />
                <Greeting name="Bob" />
            </section>

            {/* Étape 9 : Counter testable */}
            <section style={{ marginBottom: "30px" }}>
                <h2>6️⃣ Compteur interactif</h2>
                <Counter />
            </section>
        </div>
    );
}

export default App