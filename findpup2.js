function findPup2(pup) {
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
        <div class="newitem">
                ${pup.id}. ${pup.breed} the ${pup.occupation}
            </div>
            <div class="info">
            <br>
                ${pup.info}
            <br><br>
            <small class="date"> ${pup.date}</small>
            </div>
    </div>
</body>
</html>
    `;

  return html;
}

module.exports = findPup2;
