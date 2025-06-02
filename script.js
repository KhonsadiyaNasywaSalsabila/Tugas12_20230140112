function kirimData() {
    // Mengambil nilai dari form
    var name = document.getElementById("name").value;
    var nim = document.getElementById("nim").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    var peminatan = document.querySelector("input[name='peminatan']:checked").value;
    var alamat = document.getElementById("alamat").value;

    // Format tanggal agar lebih mudah dibaca
    var formattedDate = new Date(tanggal).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Validasi form
    if (!name || !nim || !angkatan || !tanggal || !peminatan || !alamat) {
        alert("Harap lengkapi semua data!");
        return;
    }

    // Menampilkan data dalam alert
    var message = 
        "=== Data Pendaftaran ===\n" +
        "Nama        : " + name + "\n" +
        "NIM         : " + nim + "\n" +
        "Angkatan    : " + angkatan + "\n" +
        "Tanggal     : " + formattedDate + "\n" +
        "Peminatan   : " + peminatan + "\n" +
        "Alamat      : " + alamat + "\n\n" +
        "Terima kasih telah mendaftar!";

    alert(message);
}