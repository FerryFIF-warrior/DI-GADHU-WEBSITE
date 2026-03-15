//Sistem Form Analisis
let databasesTanaman = [];

fetch("dataTanaman.json")
.then(Response => Response.json())
.then(data => {

    databasesTanaman = data.tanaman;
    isiDropdownTanaman();
})
.catch(error => {
    console.error("Gagal memuat data tanaman: ", error);
    alert("gagal memuat data taman. Data belum tersedia untuk saat ini");
    
});

function isiDropdownTanaman() {
    const select = document.getElementById("tanamanSelect");
    if (!select) {
        console.error("Elemen select tidak ditemukan! pastikan nama tanaman benar.");
        return;
    }

    //mengosongkan form
    select.innerHTML = `<option value=">--- Pilih Tanaman ---</option>`;
    databasesTanaman.forEach(tanaman => {
        const option = document.createElement("option");

        option.value = tanaman.id;
        option.textContent = tanaman.nama;

        select.appendChild(option);
    });
}

function jalankanAnalisis(){
    
    const select = document.getElementById("tanamanSelect");
    const hasilDiv = document.getElementById("hasilAnalisisDetail");

    if (!select || !hasilDiv) {
        alert("Elemen from tidak ditemukan.");
        return;
    }

    const tanamanDipilih = select.value;
    if (!tanamanDipilih) {
        hasilDiv.innerHTML = `<p class="text-gray-500">Silahkan pilih tanaman terlebih dahulu</p>`;
        return;
    }

    const tanaman = databasesTanaman.find(t => t.id === tanamanDipilih);
    if (!tanaman) {
        hasilDiv.innerHTML = `<p class="text-red-500">Detail tanaman sementara belum tersedia di databases ini.</p>`;
        return;
    }

    //sistem cuaca
    const cuaca = "hujan";

    let status;
    if(cuaca === "hujan"){
        status = tanaman.statusCuacaHujan;
    } else {
        status = tanaman.statusCuacaPanas;
    }

    const kelembapan = tanaman.kelembapanIdeal || "Tidak Tersedia";

    hasilDiv.innerHTML = `
    <div class="space-y-4">
    <h2 class="text-2xl font-bold" style="color: var(--forest-green);">${tanaman.nama}</h2>
    <p>${tanaman.deskripsi}</p>
    <div class="grid grid-cols-2 gap-4">
    <div class="p-3 rounded" style="background: var(--water-blue); color: white;">
    
    <p class="text-sm">Suhu Ideal</p>
    <p class="font-semibold">${tanaman.suhuIdeal}</p>
    
    </div>
    
    <div class="p-3 rounded" style="background: var(--water-blue); color: white;">
    
    <p class="text-sm">Kelembaban</p>
    <p class="font-semibold">${tanaman.kelembapanIdeal}</p>
    
    </div>
    
    </div>
    
    <div class="p-4 rounded font-semibold" style="background: var(--light-green);">Status Tanam: ${status}</div>
    
    </div>
    `;
}