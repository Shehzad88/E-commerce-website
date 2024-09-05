
document.getElementById("sign").addEventListener("click",function(){
    document.getElementById("log").classList.remove("hidden");
    document.getElementById("backdrop").classList.remove("hidden");
 });

 document.getElementById("cld").addEventListener("click",function(){
    document.getElementById("log").classList.add("hidden");
    document.getElementById("backdrop").classList.remove("hidden");
 });

 document.getElementById("up").addEventListener("click",function(){
    document.getElementById("sn").classList.remove("hidden");
    document.getElementById("backdrop").classList.remove("hidden");
 });

 document.getElementById("clddd").addEventListener("click",function(){
    document.getElementById("sn").classList.add("hidden");
    document.getElementById("backdrop").classList.remove("hidden");
 });

let currentIndex = 0;
        const slides = document.getElementById('slides');
        const totalSlides = slides.childElementCount;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Automatically change slide every 3 seconds
        setInterval(showNextSlide, 3000);

 