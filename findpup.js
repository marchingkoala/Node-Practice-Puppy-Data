function findPup(pups, id) {
  let html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>I love dogs!</title>
    <link rel="stylesheet" href="/main.css" />
</head>
<body>
    <div class="new">
        <header><h1>Pups List</h1></header>
        ${pups
          .filter((pup) => `${pup.id}` === id)
          .map(
            (pup) => `
            <div class="newitem">
                ${pup.id}. ${pup.breed} the ${pup.occupation}
            </div>
            <div class="info">
            <br>
                ${pup.info}
            <br><br>
            <small class="date"> ${pup.date}</small>
            </div>
            `
          )
          .join("")}
    </div>
</body>
</html>
    `;

  return html;
}

module.exports = findPup;
