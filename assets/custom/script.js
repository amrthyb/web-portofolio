document.addEventListener("DOMContentLoaded", function () {
    // Menyeleksi elemen yang dibutuhkan
    const links = document.querySelectorAll(".navbar-nav .nav-link");
    const sections = document.querySelectorAll("section");
    const downloadBtn = document.getElementById("download-cv");

    
    // Fungsi untuk menghapus kelas 'active' dari semua link navigasi

    function removeActiveClass() {
        links.forEach(link => link.classList.remove("active"));
    }

    
    // Menambahkan event listener untuk klik pada link navigasi

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            removeActiveClass();
            this.classList.add("active");
        });
    });

    
    // Fungsi untuk menandai menu aktif berdasarkan posisi scroll

    function onScroll() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 50;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");
            let correspondingLink = document.querySelector(".navbar-nav .nav-link[href='#" + sectionId + "']");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                removeActiveClass();
                if (correspondingLink) {
                    correspondingLink.classList.add("active");
                }
            }
        });
    }

    // Event listener untuk mendeteksi scroll
    window.addEventListener("scroll", onScroll);

    // Menambahkan efek hover pada link navigasi
     
    links.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.classList.add("hover");
        });
        link.addEventListener("mouseout", function () {
            this.classList.remove("hover");
        });
    });

    
    // Fungsi untuk mengunduh file CV
     
    function downloadCV() {
        const fileUrl = "assets/cv/cv.pdf"; 
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "CV_Amru.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Event listener untuk tombol Download CV
    if (downloadBtn) {
        downloadBtn.addEventListener("click", downloadCV);
    }
});
