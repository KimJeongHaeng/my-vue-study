const render = (datas) => {
  let component = "";
  Array.from(datas).forEach((x) => {
    component+=createElement(x);
  });

  return component;
};


const createElement = (item) => {
  const { poster_path, original_title, overview } = item;
  return `<div class="card">
    <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="">
    <div class="context-container">
      <div class="title">${original_title}</div>
      <div class="description">${overview}</div>
    </div>
  </div>`;
};

export default render;
