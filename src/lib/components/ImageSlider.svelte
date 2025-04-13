<script lang="ts">
    const images = ['/slide1.jpg', '/slide2.jpg'];
    let current = 0;
  
    const next = () => current = (current + 1) % images.length;
    const prev = () => current = (current - 1 + images.length) % images.length;
  
    const handleClick = (event: MouseEvent) => {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      clickX < rect.width / 2 ? prev() : next();
    };
  
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' || event.key === 'Enter' || event.key === ' ') prev();
      else if (event.key === 'ArrowRight') next();
    };
  </script>
  
  <style>
    .slider-wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: relative;
    }
  
    .slider-inner {
      display: flex;
      transition: transform 0.6s ease-in-out;
    }
  
    .slide {
      flex: 0 0 100%;
    }
  
    .slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  </style>
  
  
  