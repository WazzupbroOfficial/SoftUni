function housePainting(input) {
    // strani
    const x = Number (input[0]);
    const y = Number (input[1]);
    const h = Number (input[2]);
    let stranichnaStena = input[0] * input[1]
    let prozorec = 1.5 * 1.5
    let dveStranici = 2*stranichnaStena - 2*prozorec
    let zadnaStena = input[0] * input[0]
    let vhod = 2.4
    let prednaIZadna = 2*zadnaStena - vhod
    let obshto = dveStranici + prednaIZadna
    let zelenaBoq = obshto / 3.4
    console.log(zelenaBoq.toFixed(2));
 // pokriv
    let dvataPravo = 2*(input[0]*input[1]);
    let dvataTri = 2 *(x*h/2)
    let obshta = dvataPravo+ dvataTri
    let chervenaBoq = obshta / 4.3
    console.log(chervenaBoq.toFixed(2));
}
housePainting([6,10,5.2])