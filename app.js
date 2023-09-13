var app = new Vue({
    el: '#app',
    data: {
        daftarBarang: [
            { nama: 'Set Lama', harga_beli: 180000, harga_jual: 200000, jumlah: 0 },
            { nama: 'Set Baru', harga_beli: 135000, harga_jual: 150000, jumlah: 0 },
            { nama: 'Set Cemilan', harga_beli: 90000, harga_jual: 100000, jumlah: 0 },
            { nama: 'Gula', harga_beli: 900, harga_jual: 1000, jumlah: 0 },
            { nama: 'Garam', harga_beli: 900, harga_jual: 1000, jumlah: 0 },
            { nama: 'Beras', harga_beli: 900, harga_jual: 1000, jumlah: 0 },
            { nama: 'Sambal', harga_beli: 900, harga_jual: 1000, jumlah: 0 },
            { nama: 'Kopi', harga_beli: 900, harga_jual: 1000, jumlah: 0 },
            { nama: 'Teh', harga_beli: 900, harga_jual: 1000, jumlah: 0 },
            { nama: 'coklat', harga_beli: 900, harga_jual: 1000, jumlah: 0 },
            { nama: 'Ranting', harga_beli: 175, harga_jual: 200, jumlah: 0 },
            { nama: 'Akar', harga_beli: 175, harga_jual: 200, jumlah: 0 },
            { nama: 'Daun', harga_beli: 175, harga_jual: 200, jumlah: 0 },
            { nama: 'Cengkeh', harga_beli: 275, harga_jual: 300, jumlah: 0 },
            { nama: 'Sawit', harga_beli: 175, harga_jual: 200, jumlah: 0 },
            { nama: 'Bambu', harga_beli: 275, harga_jual: 300, jumlah: 0 },
            { nama: 'Tembakau', harga_beli: 175, harga_jual: 200, jumlah: 0 },
            { nama: 'Buah-Buahan', harga_beli: 275, harga_jual: 300, jumlah: 0 },
            { nama: 'Ayam Potong', harga_beli: 80, harga_jual: 100, jumlah: 0 },
            { nama: 'Telur', harga_beli: 80, harga_jual: 100, jumlah: 0 },
            { nama: 'Kulit', harga_beli: 600, harga_jual: 700, jumlah: 0 },
            { nama: 'Daging Sapi', harga_beli: 80, harga_jual: 100, jumlah: 0 },
            { nama: 'Lemak', harga_beli: 80, harga_jual: 100, jumlah: 0 },
            { nama: 'Susu', harga_beli: 300, harga_jual: 350, jumlah: 0 },
            { nama: 'Ikan', harga_beli: 110, harga_jual: 130, jumlah: 0 },
            { nama: 'Batu', harga_beli: 200, harga_jual: 250, jumlah: 0 },
            { nama: 'Emas', harga_beli: 70, harga_jual: 80, jumlah: 0 },
            { nama: 'Besi', harga_beli: 60, harga_jual: 70, jumlah: 0 },
            { nama: 'Tembaga', harga_beli: 40, harga_jual: 50, jumlah: 0 },
            { nama: 'Kayu Mentah', harga_beli: 200, harga_jual: 250, jumlah: 0 },
            { nama: 'Kayu Potong', harga_beli: 175, harga_jual: 225, jumlah: 0 },
            { nama: 'kemasan Kayu', harga_beli: 150, harga_jual: 200, jumlah: 0 },
            { nama: 'Karung', harga_beli: 75, harga_jual: 100, jumlah: 0 },
            { nama: 'Botol', harga_beli: 75, harga_jual: 100, jumlah: 0 },
            { nama: 'Rubber', harga_beli: 80, harga_jual: 100, jumlah: 0 },
            { nama: 'Glass', harga_beli: 80, harga_jual: 100, jumlah: 0 },
            { nama: 'Steel', harga_beli: 100, harga_jual: 120, jumlah: 0 },
            { nama: 'Iron Powder', harga_beli: 50, harga_jual: 70, jumlah: 0 },
            { nama: 'Alumunium Powder', harga_beli: 50, harga_jual: 70, jumlah: 0 },
            { nama: 'Alumunium', harga_beli: 100, harga_jual: 120, jumlah: 0 },
            { nama: 'Metal Scrap', harga_beli: 80, harga_jual: 100, jumlah: 0 },
            { nama: 'Plastic', harga_beli: 80, harga_jual: 100, jumlah: 0 },
        ],
        totalHargaBeli: 0,
        totalHargaJual: 0,
        keuntungan: 0,
    },
    methods: {
        hitungKeuntungan: function() {
            this.totalHargaBeli = 0;
            this.totalHargaJual = 0;

            for (var i = 0; i < this.daftarBarang.length; i++) {
                var barang = this.daftarBarang[i];

                if (!isNaN(barang.jumlah) && barang.jumlah > 0) {
                    var hargaBeli = barang.harga_beli * barang.jumlah;
                    var hargaJual = barang.harga_jual * barang.jumlah;

                    this.totalHargaBeli += hargaBeli;
                    this.totalHargaJual += hargaJual;
                }
            }

            this.keuntungan = this.totalHargaJual - this.totalHargaBeli;
        },
        clearInput: function() {
            for (var i = 0; i < this.daftarBarang.length; i++) {
                this.daftarBarang[i].jumlah = 0;
            }

            this.totalHargaBeli = 0;
            this.totalHargaJual = 0;
            this.keuntungan = 0;
        },
    },
});