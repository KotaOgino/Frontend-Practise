
const target = document.querySelector('#md');
const editor = document.querySelector('#md_editor');

// target.innerHTML =
//   marked('# Marked in the browser\n\nRendered by **marked**.');

const simplemde = new SimpleMDE({
  element: document.getElementById("md_editor"),
  forceSync: true,
  autofocus: true,
  spellChecker: false,
  // toolbar: []
  // toolbar: ["heading-1", "code", "|", "table"]
});

fetch('./index.md')
  .then(response => response.text())
  .then(function(result){
    simplemde.value(result);
  });
