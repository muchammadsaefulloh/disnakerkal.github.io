<?php
header('Content-Type: application/json');

// Mendapatkan data barang dari formulir
$dataBarang = json_decode(file_get_contents('php://input'), true);

// Proses perhitungan harga beli, harga jual, total harga beli, total harga jual, dan keuntungan
$totalHargaBeli = 0;
$totalHargaJual = 0;
$keuntungan = 0;

foreach ($dataBarang as $barang) {
    $jumlah = $barang['jumlah'];
    $hargaBeli = $barang['harga_beli'] * $jumlah;
    $hargaJual = $barang['harga_jual'] * $jumlah;
    
    $totalHargaBeli += $hargaBeli;
    $totalHargaJual += $hargaJual;
}

$keuntungan = $totalHargaJual - $totalHargaBeli;

// Mengirimkan hasil perhitungan ke Vue.js
$response = [
    'totalHargaBeli' => $totalHargaBeli,
    'totalHargaJual' => $totalHargaJual,
    'keuntungan' => $keuntungan
];

echo json_encode($response);
?>
