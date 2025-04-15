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
	<!-- ヘッダー -->
	<header class="fixed top-0 left-0 z-50 w-full bg-white/70 backdrop-blur-sm shadow-sm px-6 sm:px-8 py-4">
		<div class="flex flex-wrap items-center justify-between gap-y-4 sm:gap-y-0">
			<!-- ロゴ＋タイトル -->
			<a
				href="/"
				class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 mx-auto sm:mx-0 text-center"
			>
				<img src="/log.png" alt="ロゴ" class="h-20 w-auto object-contain" />
				<span class="font-semibold text-gray-800 break-keep text-xl sm:text-2xl md:text-3xl">
					非破壊センシング研究室
				</span>
			</a>
	
			<!-- ナビゲーション -->
			<nav class="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-xl sm:text-2xl font-medium w-full sm:w-auto">
				<a href="/Introduction" class="text-gray-500 hover:text-black">Introduction</a>
				<a href="/Project" class="text-gray-500 hover:text-black">Project</a>
				<a href="/Members" class="text-gray-500 hover:text-black">Members</a>
				<a href="/Access" class="text-gray-500 hover:text-black">Access</a>
			</nav>
		</div>
	</header>

	<!-- 空白 -->
	<div class="h-screen"></div>

	<!-- フッターセクション -->
	<div class="flex items-center justify-center min-h-screen px-6">
		<h2 class="text-white/80 text-base sm:text-lg md:text-2xl lg:text-3xl font-medium text-center leading-loose max-w-4xl">
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
		
		<!-- 親に flex + justify-center を追加 -->
<div class="max-w-5xl mx-auto flex justify-center">
	<a
		href="https://ims.ynu.ac.jp/"
		target="_blank"
		rel="noopener noreferrer"
		class="block bg-white rounded-2xl shadow-md p-6 text-center transition hover:bg-gray-100 border border-gray-300 hover:border-gray-500"
	>
	<p class="text-2xl font-extrabold text-gray-600 tracking-tight leading-relaxed">
		横浜国立大学<br />総合学術高等研究院
	</p>
	</a>
</div>
		
	</div>
</section>

<!-- フッター（E-Mail & コピーライト） -->
<footer class="bg-gray-300 py-8">
	<div class="max-w-4xl mx-auto text-center text-sm text-gray-600 space-y-2">
		<p>E-Mail : XXXX@XXXX</p>
		<p>© YOKOHAMA National University All rights reserved.</p>
	</div>
</footer>
	<slot />
</div>