# ETHICAL HACKING AND COUNTERMEASURES

## TABLE OF CONTENTS

- Information Security Overview
- Hacking Methodologies and Frameworks
- Hacking Concepts
- Ethical Hacking Concepts
- Information Security Controls
- Information Security Laws and Standards

## LEARN OBJECTIVES

- Menjelaskan elemen - elemen information security
- Menjelaskan information security attack dan information warfare
- Menjelaskan berbagai metodelogi dan frameworks hacking
- Menjelaskan konsep hacking dan kelas kelas hacker
- Menjelaskan konsep hacking dan ruang lingkup ethical hacking
- Memahami information secuity control
- Memahami berbagai information security laws dan regulations

## INFORMATION SECURITY OVERVIEW

Keamanan informasi mengacu pada perlindungan atau pengamanan informasi dan sistem informasi yang menggunakan, menyimpan, dan mengirimkan informasi dari akses yang tidak sah, pengungkapan, perubahan, dan penghancuran. Informasi adalah aset penting yang harus diamankan oleh organisasi. Jika informasi sensitif jatuh ke tangan yang salah, maka organisasi dapat mengalami kerugian besar dalam hal keuangan, reputasi merek, pelanggan, atau hal lainnya.

### ELEMENT OF INFORMATION SECURITY

Information security adalah “suatu kondisi informasi dan infrastruktur yang baik di mana kemungkinan pencurian, manipulasi, atau gangguan terhadap informasi dan layanan tetap rendah atau dapat ditoleransi.” Keamanan informasi bergantung pada lima elemen kunci: confidentiality, integrity, availability, authenticity, dan non-repudiation.

<details>
    <summary> 
        <b>01. CONFIDENTIALITY</b> 
    </summary>
    <p>
    Confidentiality adalah jaminan bahwa informasi hanya dapat diakses oleh pihak yang berwenang. Pelanggaran kerahasiaan dapat terjadi karena penanganan data yang tidak tepat atau upaya peretasan. Kontrol kerahasiaan mencakup klasifikasi data, enkripsi data, dan pembuangan peralatan yang tepat (seperti DVD, drive USB, dan cakram Blu-ray).
    </p>
</details>

<details>
    <summary>
        <b>02. INTEGRITY</b>
    </summary>
    <p>
    Integrity adalah kepercayaan terhadap data atau sumber daya dalam mencegah perubahan yang tidak benar dan tidak sah - jaminan bahwa informasi cukup akurat untuk tujuannya. Langkah-langkah untuk menjaga integritas data dapat mencakup checksum (angka yang dihasilkan oleh fungsi matematika untuk memverifikasi bahwa blok data yang diberikan tidak diubah) dan kontrol akses (yang memastikan bahwa hanya orang yang berwenang yang dapat memperbarui, menambah, atau menghapus data).
    </p>
</details>

<details>
    <summary>
        <b>03. AVAILABILITY</b>
    </summary>
    <p>
    Availability adalah jaminan bahwa sistem yang bertanggung jawab untuk mengirimkan, menyimpan, dan memproses informasi dapat diakses ketika dibutuhkan oleh pengguna yang berwenang. Langkah-langkah untuk menjaga ketersediaan data dapat mencakup susunan disk untuk sistem yang berlebihan dan mesin yang tercluster, software antivirus untuk memerangi malware, dan sistem pencegahan (DDoS) yang terdistribusi.
    </p>
</details>

<details>
    <summary>
        <b>04. AUTHENTICITY</b>
    </summary>
    <p>
    Authenticity mengacu pada karakteristik komunikasi, dokumen, atau data apa pun yang memastikan kualitasnya asli atau tidak rusak. Peran utama autentikasi adalah untuk mengonfirmasi bahwa pengguna adalah asli. Kontrol seperti biometrik, kartu pintar, dan sertifikat digital memastikan keaslian data, transaksi, komunikasi, dan dokumen.
    </p>
</details>

<details>
    <summary>
        <b>05. NON-REPUDIATION</b>
    </summary>
    <p>
    Non-repudiasi adalah cara untuk menjamin bahwa pengirim pesan tidak dapat menyangkal bahwa ia telah mengirim pesan dan bahwa penerima tidak dapat menyangkal bahwa ia telah menerima pesan. Individu dan organisasi menggunakan tanda tangan digital untuk memastikan tidak adanya penyangkalan.
    </p>
</details>

### MOTIVATION, GOALS, AND OBJECTIVES OF INFORMATION SECURITY ATTACKS

```text
ATTACK = MOTIVE (GOAL) + METHOD + VULNERABILITY
```

#### MOTIVE BEHIND INFORMATION SECURITY ATTACKS

- Mengganggu kelangsungan bisnis
- Menyebarkan keyakinan atau agama
- Melakukan pencurian informasi
- Mencapai tujuan militer suatu negara
- Memanipulasi data
- Merusak reputasi target
- Menciptakan ketakutan dan kekacuan dengan mengganggu infrastruktur penting
- Membawa kerugian finansial pada target
- Meminta uang tebusan

### CLASSICATION ATTACK

Menurut IATF, serangan keamanan diklasifikasikan ke dalam lima kategori: pasive, active, close-in, insider, dan distributed.

<details>
    <summary>
        <b>01. PASSIVE ATTACK</b>
    </summary>
    <p>
        Serangan pasif melibatkan penyadapan dan pemantauan lalu lintas jaringan dan aliran data pada jaringan target dan tidak merusak data. Penyerang melakukan pengintaian pada aktivitas jaringan dengan menggunakan sniffer. Serangan ini sangat sulit untuk dideteksi karena penyerang tidak memiliki interaksi aktif dengan sistem atau jaringan target. Serangan pasif memungkinkan penyerang untuk mengambil data atau file yang sedang ditransmisikan dalam jaringan tanpa persetujuan pengguna. Sebagai contoh, penyerang bisa mendapatkan informasi seperti data yang tidak terenkripsi dalam perjalanan, kredensial teks yang jelas, atau informasi sensitif lainnya yang berguna untuk melakukan serangan aktif.
    </p>
    <ul>
        <li>Footprinting</li>
        <li>Sniffing and eavesdropping</li>
        <li>Network traffic analysis</li>
        <li>Descryption of weakly encrypted traffic</li>
    </ul>
</details>

<details>
    <summary>
        <b>02. ACTIVE ATTACK</b>
    </summary>
    <p>
        Active attack merusak data yang sedang transit atau mengganggu komunikasi atau layanan antar sistem untuk melewati atau membobol sistem yang aman. Penyerang melancarkan serangan terhadap sistem atau jaringan target dengan mengirimkan lalu lintas secara aktif yang dapat dideteksi. Serangan ini dilakukan pada jaringan target untuk mengeksploitasi informasi yang sedang transit. Mereka menembus atau menginfeksi jaringan internal target dan mendapatkan akses ke sistem jarak jauh untuk mengkompromikan jaringan internal.
    </p>
    <ul>
        <li>Denial-of-service (DoS) attack</li>
        <li>Firewall and IDS attack</li>
        <li>Bypassing protection mechanisms</li>
        <li>Profiling</li>
        <li>Malware attacks (such as viruses, worms, ransomware)</li>
        <li>Arbitrary code execution</li>
        <li>Modification of information</li>
        <li>Privilege escalation</li>
        <li>Spoofing attacks</li>
        <li>Backdoor access</li>
        <li>Replay attacks</li>
        <li>Cryptography attacks</li>
        <li>Password-based attacks</li>
        <li>SQL injection</li>
        <li>Session hijacking</li>
        <li>XSS attacks</li>
        <li>Man-in-the-Middle attack</li>
        <li>Directory traversal attacks</li>
        <li>DNS and ARP poisoning</li>
        <li>Exploitation of application and OS software</li>
        <li>Compromised-key attack</li>
    </ul>
</details>

<details>
    <summary>
        <b>03. CLOSE-IN ATTACK</b>
    </summary>
    <p>
        Close-in attack dilakukan ketika penyerang berada dalam jarak dekat secara fisik dengan sistem atau jaringan target. Tujuan utama melakukan serangan jenis ini adalah untuk mengumpulkan atau memodifikasi informasi atau mengganggu aksesnya. Sebagai contoh, penyerang mungkin memikul kredensial pengguna yang berselancar. Penyerang mendapatkan kedekatan melalui entri diam-diam, akses terbuka, atau keduanya.
    </p>
    <ul>
        <li>Social engineering (Eavesdropping, shoulder surfing, dumpster diving, and other methods)</li>
    </ul>
</details>

<details>
    <summary>
        <b>04. INSIDER ATTACK</b>
    </summary>
    <p>
        Insider attack dilakukan oleh orang yang dipercaya yang memiliki akses fisik ke aset penting dari target. Insider attack melibatkan penggunaan akses istimewa untuk melanggar aturan atau dengan sengaja menyebabkan ancaman terhadap informasi atau sistem informasi organisasi. Insider attack dapat dengan mudah melewati aturan keamanan, merusak sumber daya yang berharga, dan mengakses informasi sensitif. Mereka menyalahgunakan aset organisasi untuk secara langsung mempengaruhi kerahasiaan, integritas, dan ketersediaan sistem informasi. Serangan ini berdampak pada operasi bisnis, reputasi, dan keuntungan organisasi. Sulit untuk mengetahui insider attack
    </p>
    <ul>
        <li>Evesdropping and wiretapping</li>
        <li>Thief of physical device</li>
        <li>Data thief and spoliation</li>
        <li>Pod slurping</li>
        <li>Planting keyloggers, backdoor, or malware</li>
        <li>Social engineering</li>
    </ul>
</details>

<details>
    <summary>
        <b>05. DISTRIBUTION ATTACK</b>
    </summary>
    <p>
        Distribution attack terjadi ketika penyerang merusak perangkat keras atau perangkat lunak sebelum instalasi. Penyerang merusak perangkat keras atau perangkat lunak pada sumbernya atau ketika sedang dalam perjalanan. Contoh distribution attack termasuk backdoor yang dibuat oleh vendor perangkat lunak atau perangkat keras pada saat pembuatannya. Penyerang memanfaatkan backdoor ini untuk mendapatkan akses tidak sah ke informasi, sistem, atau jaringan target.
    </p>
    <ul>
        <li>Modification of software or hardware during production</li>
        <li>Modification of software or hardware during distribution</li>
    </ul>
</details>

### INFORMATIN WARFARE

Istilah information warfare atau InfoWar mengacu pada penggunaan teknologi informasi dan komunikasi (TIK) untuk mendapatkan keunggulan kompetitif atas lawan. Contoh senjata perang informasi termasuk virus, worm, Trojan horse, logic bomb, trap door, nanomachine dan microbes, electronic jamming, serta penetration exploit and tools. Martin Libicki membagi perang informasi ke dalam kategori berikut:

<details>
    <summary>
        <b>01. COMMAND AND CONTROL WARFARE (C2 WARFARE)</b>
    </summary>
    <p>
        Dalam industri keamanan komputer, peperangan C2 mengacu pada dampak yang dimiliki penyerang terhadap sistem atau jaringan yang disusupi yang mereka kendalikan.
    </p>
</details>

<details>
    <summary>
        <b>02. INTELLIGENCE BASED WARFARE</b>
    </summary>
    <p>
        Perang berbasis intelijen adalah teknologi berbasis sensor yang secara langsung merusak sistem teknologi. Menurut Libicki, “perang berbasis intelijen” adalah perang yang terdiri dari desain, perlindungan, dan penolakan sistem yang mencari pengetahuan yang cukup untuk mendominasi ruang pertempuran.
    </p>
</details>

<details>
    <summary>
        <b>03. ELECTRONIC WARFARE</b>
    </summary>
    <p>
        Menurut Libicki, peperangan elektronik menggunakan teknik radio-elektronik dan kriptografi untuk menurunkan komunikasi. Teknik radio elektronik menyerang sarana fisik pengiriman informasi, sedangkan teknik kriptografi menggunakan bit dan byte untuk mengganggu sarana pengiriman informasi.
    </p>
</details>

<details>
    <summary>
        <b>04. PSYCHOLOGICAL WARFARE</b>
    </summary>
    <p>
        Perang psikologis adalah penggunaan berbagai teknik seperti propaganda dan teror untuk menurunkan semangat musuh dalam upaya untuk berhasil dalam pertempuran.
    </p>
</details>

<details>
    <summary>
        <b>05. HACKER WARFARE</b>
    </summary>
    <p>
        Menurut Libicki, tujuan dari jenis peperangan ini bisa bermacam-macam, mulai dari mematikan sistem, kesalahan data, pencurian informasi, pencurian layanan, pemantauan sistem, pesan palsu, dan akses ke data. Para peretas umumnya menggunakan virus, bom logika, Trojan horse, dan sniffer untuk melakukan serangan ini.
    </p>
</details>

<details>
    <summary>
        <b>06. HACKER WARFARE</b>
    </summary>
    <p>
        Menurut Libicki, tujuan dari jenis peperangan ini bisa bermacam-macam, mulai dari mematikan sistem, kesalahan data, pencurian informasi, pencurian layanan, pemantauan sistem, pesan palsu, dan akses ke data. Para peretas umumnya menggunakan virus, bom logika, Trojan horse, dan sniffer untuk melakukan serangan ini.
    </p>
</details>

<details>
    <summary>
        <b>07. ECONOMIC WARFARE</b>
    </summary>
    <p>
        Libicki mencatat bahwa perang informasi ekonomi dapat mempengaruhi ekonomi bisnis atau negara dengan memblokir arus informasi. Hal ini bisa sangat menghancurkan bagi organisasi yang melakukan banyak bisnis di dunia digital.
    </p>
</details>

<details>
    <summary>
        <b>07. CYBER WARFARE</b>
    </summary>
    <p>
        Libicki mendefinisikan perang siber sebagai penggunaan sistem informasi untuk melawan persona virtual individu atau kelompok. Ini adalah yang paling luas dari semua perang informasi. Ini mencakup terorisme informasi, serangan semantik (mirip dengan perang Hacker, tetapi alih-alih merusak sistem, ia mengambil alih sistem sambil mempertahankan persepsi bahwa sistem itu beroperasi dengan benar), dan perang simulasi (perang simulasi, misalnya, memperoleh senjata untuk demonstrasi belaka, bukan untuk digunakan secara aktual).
    </p>
</details>

</br>

Setiap bentuk perang informasi yang disebutkan di atas terdiri dari strategi defensif dan ofensif. Defensive Information Warfare melibatkan semua strategi dan tindakan untuk mempertahankan diri dari serangan terhadap aset TIK. Sedangkan offensive Information Warfare melibatkan strategi dan tindakan untuk mempertahankan diri dari serangan terhadap aset TIK lawan.

```text
# DEFENSIVE INFORMATION WARFARE

- Prevention
- Deterence
- Alert
- Detection
- Emergency Preparedness
- Response

# OFFENSIVE INFORMATION WARFARE

- Web Application Attack
- Web Server Attack
- Malware Attack
- MITM Attack
- System Hacking
```