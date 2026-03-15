const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("dataTanaman.json")
.then(res => res.json())
.then(data => {

    const tanaman = data.tanaman.find(t => t.id === id);

    tampilkanDetail(tanaman);

});

function tampilkanDetail(tanaman){

const container = document.getElementById("detailTanaman");

/*backgrond */
container.style.backgroundImage = `url(${tanaman.gambar})`;

container.innerHTML = `

<div class="max-w-6xl x-full grid md:grid-cols-2 gap-10 items-center">
<!-- sisi kiri judul -->
<div class="text-white">
<h1 class="text-5xl font-bold drop-shadow-lg mb-6">${tanaman.nama}</h1></div>

<p class="text-lg bg-black/40 p-4 rounded-lg backdrop-blur-sm">${tanaman.deskripsi}</p>
</div>

<!-- papan informasi -->
<div class="bg-[#8b6b4c] text-[#f4f1e6] p-8 rounded-xl shadow-2xl border-4 border-[#6a4f36]">

<h2 class="text-2xl font-bold mb-6 text-center">Informasi Tanaman</h2>

<div class="space-y-3 text-lg">

<p><b>Suhu Ideal:</b> ${tanaman.suhuIdeal}</p>
<p><b>Kelembaban:</b> ${tanaman.kelembabanIdeal}</p>
<p><b>Jenis Tanah:</b> ${tanaman.tanah}</p>
<p><b>Musim Tanam:</b> ${tanaman.musim}</p>

</div>

<div class="mt-6 p-4 bg-[#2f5d3a] rounded-lg">
<b>Keunggulan:</b>${tanaman.keunggulan}</div>
</div>`;

}