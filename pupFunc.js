function pupFunc(pups){
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
          .map(
            (pup) => `
            <div class="newitem">
                <a href="/posts/${pup.id}">${pup.id}. ${pup.breed} the ${pup.occupation}</a>
            </div>
            <div class="info">
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

module.exports = pupFunc;