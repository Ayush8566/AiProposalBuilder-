import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [projectCategory, setProjectCategory] = useState("UX");
  const [clientName, setClientName] = useState("");
  const [goals, setGoals] = useState("");
  const [budget, setBudget] = useState("");
  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    setLoading(true);
    setError("");
    setProposal("");
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const resp = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectCategory, clientName, goals, budget }),
      });
      if (!resp.ok) {
        const t = await resp.text();
        throw new Error(t || "Server error");
      }
      const data = await resp.json();
      setProposal(data.proposal || "No proposal returned.");
    } catch (err) {
      setError(err.message || "Error generating proposal.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(proposal);
      alert("Proposal copied to clipboard.");
    } catch {
      alert("Copy failed.");
    }
  };

  return (
    <div className="app-root">
      <h1 className="title">AI Proposal Builder — Prototype</h1>
      <p className="subtitle">
        Fill the form and click <strong>Generate Proposal</strong>.
      </p>

      <div className="card">
        <label className="label">
          Project Category
          <select
            className="input"
            value={projectCategory}
            onChange={(e) => setProjectCategory(e.target.value)}
          >
            <option>UX</option>
            <option>AI</option>
            <option>Web3</option>
            <option>Website</option>
            <option>App</option>
          </select>
        </label>

        <label className="label">
          Client / Company Name
          <input
            className="input"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Acme Co"
          />
        </label>

        <label className="label">
          Goals (one-line)
          <input
            className="input"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            placeholder="Improve conversion by 20%"
          />
        </label>

        <label className="label">
          Budget (optional)
          <input
            className="input"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="$10k-$25k"
          />
        </label>

        <div className="actions">
          <button className="btn" onClick={generate} disabled={loading}>
            {loading ? "Generating…" : "Generate Proposal"}
          </button>
          <button
            className="btn secondary"
            onClick={() => {
              setProjectCategory("UX");
              setClientName("");
              setGoals("");
              setBudget("");
              setProposal("");
              setError("");
            }}
          >
            Reset
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="generated">
          <h2>Generated Proposal</h2>
          <div className="output">
            {proposal || "Your generated proposal will appear here."}
          </div>
          {proposal && (
            <div className="copy-wrap">
              <button className="btn small" onClick={copyToClipboard}>
                Copy
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
