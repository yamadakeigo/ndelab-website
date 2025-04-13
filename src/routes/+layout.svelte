<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';

	let topOpacity = 1;

	const handleScroll = () => {
		const scrollY = window.scrollY;
		const height = window.innerHeight;
		const ratio = Math.min(scrollY / height, 1); // 0〜1に制限
		topOpacity = 1 - cubicOut(ratio);
	};

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<style>
	.bg-layer {
		position: fixed;
		inset: 0;
		background-size: cover;
		background-position: center;
		transition: opacity 0.2s linear;
		pointer-events: none;
		z-index: -10;
	}
	.bg-top {
		z-index: -5;
	}
</style>

<!-- 背景2: slide2（常に表示） -->
<div
	class="bg-layer"
	style="background-image: url('/slide2.jpg'); opacity: 1;"
></div>

<!-- 背景1: slide1（上に重ねて opacity を減らす） -->
<div
	class="bg-layer bg-top"
	style="background-image: url('/slide1.jpg'); opacity: {topOpacity};"
></div>

<!-- メインページ構成 -->
<div class="min-h-[200vh] relative">
	<!-- ヘッダー -->
	<header class="fixed top-0 left-0 z-50 flex flex-col sm:flex-row items-center justify-between px-8 py-4 w-full bg-white/70 backdrop-blur-sm shadow-sm">
		<div class="flex items-center space-x-4">
		  <img src="/log.png" alt="ロゴ" class="h-16 w-auto object-contain" />
		  <span class="text-2xl sm:text-3xl font-semibold text-gray-800">
			非破壊センシング研究室
		  </span>
		</div>
	  
		<nav class="flex space-x-4 mt-4 sm:mt-0 text-xl sm:text-2xl font-medium pr-10 sm:pr-20">
		  <a href="/" class="text-gray-500 hover:text-black">Home</a>
		  <a href="/about" class="text-gray-500 hover:text-black">About</a>
		  <a href="/members" class="text-gray-500 hover:text-black">Members</a>
		  <a href="/contact" class="text-gray-500 hover:text-black">Access</a>
		</nav>
	  </header>

	<!-- 空白セクション（スクロール領域） -->
	<div class="h-screen"></div>

	<!-- フッターセクション -->
	<div class="flex items-center justify-center h-screen">
		<h2 class="text-white/70 text-3xl font-medium drop-shadow-lg text-center leading-relaxed px-4">
			外見だけではわからないモノの状態や内部構造を、<br />
			様々な周波数帯域の電磁波を照射して反射・透過した信号を<br />
			検出・画像化することにより観察する研究をしています。<br />
			得られたデータを解析することで，モノの健全性を<br />
			非破壊・非接触で診断することに有益な情報を抽出します。
		  </h2>
	</div>
	<!-- layout.svelte の最後にこれがないと中身が一切表示されません -->
<slot />
</div>
<!-- layout.svelte の最後にこれがないと中身が一切表示されません -->
