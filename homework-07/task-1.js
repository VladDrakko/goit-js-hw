console.log(`В списке ${document.querySelectorAll('.item').length} категории.`);

categories.querySelectorAll('.item').forEach(item => {
    console.log(`Категория ${item.querySelector('h2').textContent} , в ней ${item.querySelector('ul').children.length} элементов`);
}

