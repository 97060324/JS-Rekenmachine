grondgetal = "";
machtgetal = "";


function knopKlik2(element) {

    var grondgetal = divinput.innerHTML;

    var waarde = element.innerHTML;
    if (waarde == "x") {
        waarde = "*";
    }

    if (waarde == "x<sup>y</sup>") {
        waarde = "**";
    }

    if (waarde == "x<sup>3</sup>") {
        var waarde = divinput.innerHTML;
        var uitkomst = waarde*waarde*waarde;
        divcalc.innerHTML = uitkomst;
    }

    var berekeningen = document.getElementById('divinput').innerHTML;
    if (waarde != "=") {
        berekeningen = berekeningen + waarde;
    }
    document.getElementById('divinput').innerHTML = berekeningen;

    if (waarde == "=") {
        berekeningen = berekeningen.replace("x","*");
        var uitkomst = eval(berekeningen);
        document.getElementById('divcalc').innerHTML = uitkomst;
    }

    if (waarde == "CE") {
        document.getElementById('divinput').innerHTML = '';
        document.getElementById('divcalc').innerHTML = '';
    }

    if (waarde == "C") {
        divinput.innerHTML = divinput.innerHTML.slice(0, -2);
    }

    return waarde;
}

function kwadraat(element) {

    var waarde = divinput.innerHTML;
    var uitkomst = waarde*waarde;
    divcalc.innerHTML = uitkomst;
}


function Changecollor() {
    var rmTable = document.getElementById('rm');
    if (rmTable.className == "rm rood") {
        rmTable.className = "rm blauw";
    }
    else {
        rmTable.className = "rm rood";
    }
}
