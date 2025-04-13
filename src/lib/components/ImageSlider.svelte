<script lang="ts">
    const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];
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
  
  <!-- ナビゲーションとロゴ -->
  <!-- <header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white/70 backdrop-blur-sm shadow-sm">
	<!-- 左側：研究室名 -->
	<span class="text-2xl sm:text-3xl font-semibold text-gray-800">
		非破壊センシング研究室
	</span>

	<!-- 右側：ロゴとナビゲーション -->
	<!-- <div class="flex items-center space-x-6">
		<img src="/cultural-heritage.png" alt="ロゴ" class="h-10 w-auto object-contain" />
		<nav class="flex space-x-4 text-lg sm:text-xl font-medium text-gray-700"> -->
			<!-- <a href="/" class="hover:text-black">Home</a>
			<a href="/about" class="hover:text-black">About</a>
			<a href="/members" class="hover:text-black">Members</a>
			<a href="/contact" class="hover:text-black">Access</a> -->
		<!-- </nav> -->
	<!-- </div> --> 
<!-- </header> -->
  
  <!-- スライダー本体 -->
  <div class="slider-wrapper mt-24 max-w-7xl mx-auto rounded-2xl outline-none"
       role="button" tabindex="0"
       on:click={handleClick}
       on:keydown={handleKeyDown}>
    <div class="slider-inner" style="transform: translateX({-current * 100}%);">
      {#each images as img (img)}
        <div class="slide">
          <img src={img} alt="スライド画像" />
        </div>
      {/each}
    </div>
  </div>
  
  <!-- 🔥 これが必要！ -->
  