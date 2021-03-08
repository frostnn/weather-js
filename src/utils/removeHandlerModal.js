const removeHandlerModal = () => {
  const btnCloseModal = document.querySelector(".modal_content-close");
  const modal = document.querySelector("#modal");
  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target == btnCloseModal) {
      modal.classList.remove("show");
    }
  });
};

export default removeHandlerModal;
