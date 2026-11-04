
function tampilkanHalaman(id) {
    document.querySelectorAll(".layar").forEach(function(halaman) {
        halaman.classList.remove("aktif");
    });

    document.getElementById(id).classList.add("aktif");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function cekPassword() {
    const angka = document.getElementById("password").value;

    if (angka === "16") {
        const music = document.getElementById("music");

        // Mulai musik setelah tombol OKE ditekan
        music.play().then(function() {
            console.log("Musik berhasil diputar");
        }).catch(function() {
            console.log("Musik belum bisa diputar otomatis");
        });

        tampilkanHalaman("halamanHBD");
    } else {
        document.getElementById("pesan").textContent =
            "Belum tepat, coba lagi ya! 💕";
    }
}

function bukaKado() {
    tampilkanHalaman("halamanUtama");
}

function bukaSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.classList.toggle("hidden");

    if (!surprise.classList.contains("hidden")) {
        surprise.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function putarMusik() {
    const music = document.getElementById("music");

    music.play().catch(function() {
        alert("Tekan tombol putar sekali lagi ya.");
    });
}

function jedaMusik() {
    const music = document.getElementById("music");
    music.pause();
}
