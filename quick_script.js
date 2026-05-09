const arrayContainer = document.getElementById('array');
let values = [];

for (let i = 0; i < 20; i++) {
  values.push(Math.floor(Math.random() * 200) + 20);
}

function renderArray() {
  arrayContainer.innerHTML = '';

  values.forEach(value => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = value + 'px';
    arrayContainer.appendChild(bar);
  });
}

async function quickSort(arr, left, right) {
  if (left >= right) return;

  let pivot = arr[right];
  let index = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
      renderArray();
      await sleep(100);
    }
  }

  [arr[index], arr[right]] = [arr[right], arr[index]];
  renderArray();
  await sleep(100);

  await quickSort(arr, left, index - 1);
  await quickSort(arr, index + 1, right);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function startSort() {
  quickSort(values, 0, values.length - 1);
}

renderArray();