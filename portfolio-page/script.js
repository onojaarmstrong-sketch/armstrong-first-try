const copyButton = document.querySelector(".copy-button");
const copyStatus = document.querySelector(".copy-status");

copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email address copied.";
  } catch {
    copyStatus.textContent = `You can reach Maya at ${email}.`;
  }
});
