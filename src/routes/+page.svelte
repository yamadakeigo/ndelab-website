<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { topics as allTopics, type Topic } from '$lib/topics';

	// 背景フェード用
	let topOpacity = 1;
	const handleScroll = () => {
		const scrollY = window.scrollY;
		const height = window.innerHeight;
		const ratio = Math.min(scrollY / height, 1);
		topOpacity = 1 - cubicOut(ratio);
	};

	onMount(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	// Topics 表示切替と並び替え
	let showAll = false;
	const sortedTopics = [...allTopics].sort((a, b) => b.date.localeCompare(a.date));
	const latestTopics = sortedTopics.slice(0, 4);
	const olderTopics = sortedTopics.slice(4);
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
</style> <!-- ←これが必要！ -->

<!-- 背景 -->
<div class="bg-layer" style="background-image: url('/slide2.jpg'); opacity: 1;"></div>
<div class="bg-layer bg-top" style="background-image: url('/slide1.jpg'); opacity: {topOpacity};"></div>

<!-- 全体構成 -->
<div class="min-h-[200vh] relative">
	<header class="fixed top-0 left-0 z-50 w-full bg-white/70 shadow-sm px-4 py-3">
		<div class="flex flex-wrap items-center justify-between gap-y-4 px-2 sm:px-6">
			<!-- ロゴとタイトル（縮小しても見切れず、中央揃え） -->
			<!-- タイトル部分 -->
			<a href="/" class="flex items-center gap-3 flex-shrink min-w-0 mx-auto sm:mx-0 hover:opacity-80 transition">
				<img src="/log.png" alt="ロゴ" class="h-10 sm:h-14 w-auto object-contain flex-shrink-0" />
			
				<span
					class="font-semibold text-gray-800 truncate text-[1rem] xs:text-[1.1rem] sm:text-[1.3rem] md:text-2xl lg:text-3xl"
					style="max-width: 70vw;"
				>
					非破壊センシング研究室
				</span>
			</a>
	
			<!-- ナビゲーション：中央回り込み・横スクロール -->
			<div class="w-full sm:w-auto overflow-x-auto">
				<nav
					class="flex flex-nowrap justify-center sm:justify-end gap-x-4 sm:gap-x-6 text-[1rem] sm:text-lg md:text-xl font-medium whitespace-nowrap"
				>
					<a href="/Introduction" class="text-gray-500 hover:text-black">Introduction</a>
					<a href="/Project" class="text-gray-500 hover:text-black">Project</a>
					<a href="/Publications" class="text-gray-500 hover:text-black">Publications</a>
					<a href="/Members" class="text-gray-500 hover:text-black">Members</a>
					<a href="/Access" class="text-gray-500 hover:text-black">Access</a>
					
				</nav>
			</div>
		</div>
	</header>
	
	<!-- 空白 -->
	<div class="h-screen"></div>

	<!-- フッターセクション -->
	<div class="flex items-center justify-center min-h-screen px-4 sm:px-8">
		<h2
  class="text-white/90 font-medium text-center leading-relaxed max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl"
  style="font-size: clamp(0.5rem, 2.5vw, 1.75rem); white-space: pre-line;"
>
  外見だけではわからないモノの状態や内部構造を、<br />
  様々な周波数帯域の電磁波を照射して反射・透過した信号を<br />
  検出・画像化することにより観察する研究をしています。<br />
  得られたデータを解析することで、モノの健全性を<br />
  非破壊・非接触で診断することに有益な情報を抽出します。
</h2>
	  </div>

	<!-- Topicsセクション -->
	<section class="relative z-10">
		<div class="bg-white/70 backdrop-blur-sm py-24 px-6 sm:px-16">
			<h2 class="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-12">Topics</h2>

			<ul class="space-y-8 max-w-5xl mx-auto">
				{#each latestTopics as topic (topic.id)}
					<li class="border-b pb-4">
						<p class="text-gray-500 text-sm mb-1">{topic.date}</p>
						<p class="text-gray-800 font-semibold">{topic.category}</p>
						<p class="text-gray-700">{topic.content}</p>
					</li>
				{/each}

				{#if showAll}
					{#each olderTopics as topic (topic.id)}
						<li class="border-b pb-4">
							<p class="text-gray-500 text-sm mb-1">{topic.date}</p>
							<p class="text-gray-800 font-semibold">{topic.category}</p>
							<p class="text-gray-700">{topic.content}</p>
						</li>
					{/each}
				{/if}
			</ul>

			{#if olderTopics.length > 0}
				<div class="text-center mt-8">
					<button
						class="text-lg font-medium transition-colors duration-200 text-gray-500 hover:text-black hover:no-underline"
						on:click={() => (showAll = !showAll)}
					>
						{showAll ? '一覧を閉じる' : '一覧を見る'}
					</button>
				</div>
			{/if}
		</div>
	</section>

<!-- Links セクション -->
<section class="relative z-10">
	<div class="bg-white py-24 px-6 sm:px-16">
		<h2 class="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-12">Links</h2>
		
		<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 justify-items-center">
			<a
			  href="https://www.es.ynu.ac.jp/index.html"
			  target="_blank"
			  rel="noopener noreferrer"
			  class="w-[280px] h-[120px] bg-white rounded-2xl shadow-md p-6 text-center transition hover:bg-gray-100 border border-gray-300 hover:border-gray-500 flex items-center justify-center overflow-hidden"
			>
			  <p class="text-xl font-extrabold text-gray-600 tracking-tight leading-snug break-words text-wrap">
				横浜国立大学<br />理工学部
			  </p>
			</a>
		  
			<a
			  href="https://www.fse.ynu.ac.jp/"
			  target="_blank"
			  rel="noopener noreferrer"
			  class="w-[280px] h-[120px] bg-white rounded-2xl shadow-md p-6 text-center transition hover:bg-gray-100 border border-gray-300 hover:border-gray-500 flex items-center justify-center overflow-hidden"
			>
			  <p class="text-xl font-extrabold text-gray-600 tracking-tight leading-snug break-words text-wrap">
				横浜国立大学大学院<br />理工学府・工学研究院
			  </p>
			</a>
		  
			<a
			  href="https://ece.ynu.ac.jp/index.html"
			  target="_blank"
			  rel="noopener noreferrer"
			  class="w-[280px] h-[120px] bg-white rounded-2xl shadow-md p-6 text-center transition hover:bg-gray-100 border border-gray-300 hover:border-gray-500 flex items-center justify-center overflow-hidden"
			>
			  <p class="text-xl font-extrabold text-gray-600 tracking-tight leading-snug break-words text-wrap">
				横浜国立大学<br />数物・電子情報系
			  </p>
			</a>
		  
			<a
			  href="https://www.nabunken.go.jp/"
			  target="_blank"
			  rel="noopener noreferrer"
			  class="w-[280px] h-[120px] bg-white rounded-2xl shadow-md p-6 text-center transition hover:bg-gray-100 border border-gray-300 hover:border-gray-500 flex items-center justify-center overflow-hidden"
			>
			  <p class="text-xl font-extrabold text-gray-600 tracking-tight leading-snug break-words text-wrap">
				奈良文化財研究所
			  </p>
			</a>
		  </div>
		
	</div>
</section>

<!-- フッター（E-Mail & コピーライト） -->
<footer class="bg-gray-300 py-8">
	<div class="max-w-4xl mx-auto text-center text-sm text-gray-600 space-y-2">
		<p>© YOKOHAMA National University All rights reserved.</p>
	</div>
</footer>
	<slot />
</div>