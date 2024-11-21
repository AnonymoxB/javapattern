// *
// **
// ***
// ****
// *****

public class Main {
    public static void main(String[] args) {
        int n = 5;
        for (int i = 1; i <= n; i++) { // Tambahkan i++
            for (int j = 1; j <= i; j++) {
                System.out.print("*"); // Perbaiki huruf kapital "S"
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}


// *****
// ****
// ***
// **
// *
public class Main {
    public static void main(String[] args) {
        int n = 5;
        for (int i = n; i >= 1; i--) { // Tambahkan i++
            for (int j = 1; j <= i; j++) {
                System.out.print("*"); // Perbaiki huruf kapital "S"
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}


// *****
// *   *
// *   *
// *   *
// *   *
// *****

public class Main {
    public static void main(String[] args) {
        int n = 5; // Jumlah baris dan kolom kotak
        for (int i = 1; i <= n; i++) { // Loop baris
            for (int j = 1; j <= n; j++) { // Loop kolom
                // Kondisi untuk mencetak bintang di tepi kotak
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print("*"); // Cetak bintang
                } else {
                    System.out.print(" "); // Cetak spasi untuk bagian tengah
                }
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}

// *********
//  *******
//   *****
//    ***
//     *

public class Main {
    public static void main(String[] args) {
        int n = 5; // Tinggi segitiga
        for (int i = 0; i < n; i++) { // Loop baris
            // Cetak spasi di awal setiap baris
            for (int j = 0; j < i; j++) {
                System.out.print(" ");
            }
            // Cetak bintang setelah spasi
            for (int j = 0; j < (2 * (n - i) - 1); j++) {
                System.out.print("*");
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

public class Main {
    public static void main(String[] args) {
        int n = 5; // Tinggi bagian atas (segitiga)

        // Bagian atas (segitiga penuh)
        for (int i = 1; i <= n; i++) {
            // Cetak spasi
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            // Cetak bintang
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        // Bagian bawah (segitiga terbalik)
        for (int i = n - 1; i >= 1; i--) {
            // Cetak spasi
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            // Cetak bintang
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}


//     *
//    ***
//   *****
//  *******
// *********

public class Main {
    public static void main(String[] args) {
        int n = 5; // Tinggi piramida

        for (int i = 1; i <= n; i++) {
            // Cetak spasi
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            // Cetak bintang
            for (int j = 1; j <= (2 * i - 1); j++) {
                System.out.print("*");
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}


// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

public class Main {
    public static void main(String[] args) {
        int n = 5; // Tinggi segitiga bagian atas

        // Bagian atas (segitiga naik)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println(); // Pindah ke baris berikutnya
        }

        // Bagian bawah (segitiga turun)
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}


//    *
//   * *
//  *  *
// *   *
// ******

public class Main {
    public static void main(String[] args) {
        int n = 5; // Tinggi segitiga

        for (int i = 1; i <= n; i++) {
            // Cetak spasi di awal setiap baris
            for (int j = 1; j <= (n - i); j++) {
                System.out.print(" ");
            }
            // Cetak bintang dan ruang di tengah
            for (int j = 1; j <= (2 * i - 1); j++) {
                // Cetak bintang di tepi luar
                if (j == 1 || j == (2 * i - 1) || i == n) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}


// x

public class Main {
    public static void main(String[] args) {
        int n = 5; // Ukuran pola (harus ganjil untuk X yang simetris)

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                // Cetak bintang di diagonal utama atau diagonal sekunder
                if (j == i || j == (n - i + 1)) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println(); // Pindah ke baris berikutnya
        }
    }
}










