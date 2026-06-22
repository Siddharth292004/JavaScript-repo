const inputs = document.querySelectorAll(".css-controller input");

inputs.forEach((input) => {
  input.addEventListener("input", update);
});

function update() {
  const suffixData = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffixData,
  );
}
