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
container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";

container.innerHTML = `
<div class="w-full flex justify-end">

<div class="w-[420px] mr-16 relative">

<!-- PANEL JUDUL -->
<div class="bg-[#8b6b4c] text-white text-3xl font-bold
px-6 py-3 rounded-lg shadow-lg
absolute -top-8 left-6 z-10">${tanaman.nama}</div>


<!-- PANEL DESKRIPSI / PAPAN KAYU -->
<div class="pt-14 pb-6 px-6 rounded-xl shadow-2xl border-4 border-[#6a4f36]"
style="
background-image:url('resource/kayu.png');
background-size:cover;
color:#f4f1e6;
">

<p class="mb-4 text-sm">${tanaman.deskripsi}</p>

<h3 class="font-bold mb-3">Informasi Tanaman</h3>

<div class="space-y-2 text-sm">

<p><b>Suhu Ideal:</b> ${tanaman.suhuIdeal}</p>

<p><b>Kelembaban:</b> ${tanaman.kelembapanIdeal}</p>

<p><b>Jenis Tanah:</b> ${tanaman.tanah}</p>

<p><b>Musim Tanam:</b> ${tanaman.musim}</p>

</div>


<!-- KEUNGGULAN -->
<div class="mt-5 bg-[#2f5d3a] p-3 rounded-md text-sm">
<b>Keunggulan:</b><p class="mt-1">${tanaman.keunggulan}</p>
</div>

</div>

</div>

</div>
`;

}