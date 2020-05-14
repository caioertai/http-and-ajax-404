import Sortable from "sortablejs";

const initSortable = () => {
  const results = document.querySelector("#results");
  new Sortable(results, {
    animation: 150,
    ghostClass: "ghost",
    onEnd: (event) => {
      console.log(event);
      alert(`Moved stuff from ${event.oldIndex} to ${event.newIndex}`);
    }
  });
};

export { initSortable };
