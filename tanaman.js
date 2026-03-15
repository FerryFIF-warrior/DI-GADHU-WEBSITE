let databaseTanaman = [];

fetch("dataTanaman.json")
.then(res => res.json())
.then(data => {

    databaseTanaman = data.tanaman;
    tampilkanTanaman();
});

function tampilkanTanaman() {
    const container = document.getElementById("tanamanContainer");
    databaseTanaman.forEach(tanaman => {

        const card = document.createElement("div");
        card.className = "bg-white rounded-xl shadow cursor-pointer hover:shadow-lg transition";

        card.innerHTML = `<img src="${tanaman.gambar}" class="w-full h-40 object-cover rounded-t-xl">
        <div clas="p-4>
        <h3 class="text-lg font-semibold text-[#2f5d3a]">${tanaman.nama}</h3>
        <p class="text-sm text-gray-600">${tanaman.deskripsi}</p>
        </div>`;

        card.onclick = () => {
            window.location.href = "detailTanaman.html?id=" + tanaman.id;
        };
        container.appendChild(card)
    })
}