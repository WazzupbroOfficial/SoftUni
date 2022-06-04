function repainting(input) {
    const red = Number (input[0]);
    const green = Number (input[1]);
    const yellow = Number (input[2]);
    const blue = Number (input[3]);
    let nailon = (red+2)*1.50;
    let boq = (green+(0.10*green))*14.50;
    let razreditel = yellow * 5.00;
    let materiali = nailon + boq + razreditel + 0.40;
    let maistori = (materiali*0.30)*blue;
    let final = maistori+materiali
    console.log(final);
}
repainting([10,11,4,8])