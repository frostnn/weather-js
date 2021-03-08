export const removeHeadler = (e) => {
  if (!e.target.dataset.id) {
    return;
  }
  const { id } = e.target.dataset;
  const closeBtn = document
    .querySelector(`[data-id="${id}"]`)
    .closest(".weather_card");
  closeBtn.classList.add("removing");
  setTimeout(() => {
    closeBtn.remove();
  }, 300);
};
