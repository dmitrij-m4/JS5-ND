// let btn = document.getElementById('btn')
// btn.addEventListener('click', function() {
//     
// })

let tbody = document.querySelector('tbody');
// let tddata = document.createElement('td');
// let tdnumeris = document.createElement('td');
// let tdatstumas = document.createElement('td');
// let tdlaikas = document.createElement('td');
// let tr = document.createElement('tr');

// let info = [

// ];



let send = document.getElementById('send');
send.addEventListener('click', function() {
    let Data = document.querySelector('input[name="Data"]').value;
    // tddata.innerText = Data;
    // console.log(tddata);

    var Numeris = document.querySelector('input[name="Numeris"]').value;
    // tdnumeris.innerText = Numeris;
    // console.log(tdnumeris);

    var Atstumas = document.querySelector('input[name="Atstumas"]').value;
    // tdatstumas.innerText = Atstumas;
    // console.log(tdatstumas);

    var Laikas = document.querySelector('input[name="Laikas"]').value;
    // tdlaikas.innerText = Laikas;
    // console.log(tdlaikas);
    let info = [

    ];
    info.push([Data, Numeris, Atstumas, Laikas]);

    console.log(info);
    for (let i = 0; i < info.length; i++) {
        let tr = document.createElement('tr');

        console.log(tr);
        for (let j = 0; j < info[i].length; j++) {
            let td = document.createElement('td');
            td.innerText = info[i][j];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    document.getElementById('Data').value = "";
    document.getElementById('Numeris').value = "";
    document.getElementById('Atstumas').value = "";
    document.getElementById('Laikas').value = "";
});

// send.addEventListener('click', function() {
//     var Numeris = document.querySelector('input[name="Numeris"]').value;
//     tdnumeris.innerText = Numeris;
//     console.log(tdnumeris);
// });

// send = document.getElementById('send');
// send.addEventListener('click', function() {
//     var Atstumas = document.querySelector('input[name="Atstumas"]').value;

//     tdatstumas.innerText = Atstumas;
//     console.log(tddata);
// });

// send = document.getElementById('send');
// send.addEventListener('click', function() {
//     var Laikas = document.querySelector('input[name="Laikas"]').value;

//     tdlaikas.innerText = Laikas;
//     console.log(tddata);
// });



// tr.appendChild(tddata);
// tr.appendChild(tdnumeris);
// tr.appendChild(tdatstumas);
// tr.appendChild(tdlaikas);

// tbody.appendChild(tr);





// let Data = document.querySelector('input[name="Data"]').value;
// Data.addEventListener('click', function() {
//     let tr = document.createElement('tr');
//     console.log(tr);
//     let td = document.createElement('td');
//     td.innerText = Data.value;
//     tr.appendChild(td)
//     console.log(td);
//     tbody.appendChild(tr)
//     console.log(tbody)
// })