const errorMessage = (message) => {
  if (message) {
    const html = `
    <div class="error">
      ${message}
    </div>
    `;

    return root.insertAdjacentHTML("beforebegin", html);
  }
};

export default errorMessage;
