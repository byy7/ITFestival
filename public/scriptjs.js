const mundur = '26 Oct 2021'

function Mundur(){

    const tanggal = new Date(mundur)
    const sekarang = new Date()

    const totalDetik = Math.floor(tanggal - sekarang) / 1000
    const hari = Math.floor(totalDetik / 3600 / 24)
    const jam = Math.floor(totalDetik / 3600) % 24
    const menit = Math.floor(totalDetik / 60) % 60
    const detik = Math.floor(totalDetik % 60)

    document.getElementById('Hari').innerHTML = Nol(hari)
    document.getElementById('Jam').innerHTML = Nol(jam)
    document.getElementById('Menit').innerHTML = Nol(menit)
    document.getElementById('Detik').innerHTML = Nol(detik)
}

function Nol(Waktu){
    return Waktu < 10 ? (`0${Waktu}`) : Waktu
}

Mundur()

setInterval(Mundur, 1000)