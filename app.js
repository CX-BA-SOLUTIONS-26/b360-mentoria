// app.js
const WEB_APP_URL = "COLE_AQUI_A_URL_DO_WEB_APP"; // ex: https://script.google.com/macros/s/XXXX/exec

const form = document.getElementById("leadForm");
const btn = document.getElementById("submitBtn");
const statusEl = document.getElementById("status");
const iframe = document.getElementById("hidden_iframe");

// define action do form para o endpoint
form.action = WEB_APP_URL;

let submitted = false;

form.addEventListener("submit", () => {
  submitted = true;
  btn.disabled = true;
  statusEl.textContent = "Enviando...";
});

// quando o Apps Script responder, o iframe “carrega” e a gente confirma
iframe.addEventListener("load", () => {
  if (!submitted) return;
  submitted = false;

  statusEl.textContent = "✅ Enviado com sucesso! Obrigado 🙂";
  form.reset();

  setTimeout(() => {
    btn.disabled = false;
    statusEl.textContent = "";
  }, 2500);
});

