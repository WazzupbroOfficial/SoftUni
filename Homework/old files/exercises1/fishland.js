function fishland(input) {
    let cenaSkumriq = Number (input[0]);
    let cenaCaca = Number (input[1]);
    let kgPalamud = Number (input[2]);
    let kgSafrid = Number (input[3]);
    let kgMidi = Number (input[4]);
    let midi = 7.50 * (input[4]);
    let cenaPalamud = (cenaSkumriq * 0.60) + cenaSkumriq
    let cenaSafrid = (cenaCaca * 0.80) + cenaCaca
    let palamud = kgPalamud*cenaPalamud
    let safrid = cenaSafrid*kgSafrid
    let final = palamud+safrid+midi
    console.log(final.toFixed(2))
    console.log(midi,cenaPalamud,cenaSafrid,palamud,safrid,midi,)

}
fishland([6.90,4.20,1.5,2.5,1])
