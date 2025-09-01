document.getElementById("predict-form").addEventListener("submit", function(e) {
  e.preventDefault();
  let values = [];
  for (let i = 1; i <= 6; i++) {
    let v = parseFloat(e.target["st" + i].value) || 0.2;
    values.push({ boat: i, st: v });
  }
  // STが速い順に並び替え
  values.sort((a, b) => a.st - b.st);

  let result = "予想順位:<br>";
  values.forEach((v, i) => {
    result += (i + 1) + "位 → " + v.boat + "号艇 (ST:" + v.st.toFixed(2) + ")<br>";
  });
  document.getElementById("result").innerHTML = result;
});
