切版直播班作業

第七週作業 https://hungcurry.github.io/CutClass-gh-pages//week07-0522-ASO/index-aos+animate.html

語法：

  <!-- aso + animate -->
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css">
  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <style>
    [data-aos] {
        visibility: hidden;
    }

    [data-aos].animate__animated {
        visibility: visible;
    }
    :root {
      --animate-duration: 1.8s;
      --animation-delay: 2s;
    }
  </style>
  <script>
      AOS.init({
          useClassNames: true,
          initClassName: false,
          animatedClassName: 'animate__animated',
          // Settings 
          offset: 120, 
          delay: 0,
          duration: 400, 
          easing: 'ease',
          once: false, 
          mirror: false,
          anchorPlacement: 'top-bottom', 
      });
  </script>
