let tbody = document.getElementById("output");


let createPromise = (name) => {
  const delay = Math.random() * 2000 + 1000; 
  const startTime = performance.now();

  return new Promise((resolve) => {
    setTimeout(() => {
      const endTime = performance.now();
      const timeTaken = (endTime - startTime) / 1000; 
      resolve({ name, timeTaken });
    }, delay);
  });
}

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

Promise.all(promises).then((results) => {

  tbody.innerHTML = "";
	
  results.forEach((p) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.timeTaken.toFixed(3)}</td>
    `;
    tbody.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${Math.max(...results.map(r => r.timeTaken)).toFixed(3)}</strong></td>
  `;
  tbody.appendChild(totalRow);
});
