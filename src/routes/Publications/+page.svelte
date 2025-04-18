<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
	let isOpen = false;

	// 仮データ：実際には API や JSON に差し替え可
	const categories = ["論文", "国際会議", "国内会議", "受賞"];

	type Publication = {
		title: string;
		authors: string;
		year: number;
		category: string;
	};

	let allPublications: Publication[] = [
		{ title: "タイトル", authors: "著者", year: 2021, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2022, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2023, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2024, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2025, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2026, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2027, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2028, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2029, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2020, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2021, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2022, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2023, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2024, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2025, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2026, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2027, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2028, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2029, category: "論文" },
		{ title: "タイトル", authors: "著者", year: 2020, category: "国際会議" },
		{ title: "タイトル", authors: "著者", year: 2021, category: "国際会議" },
		{ title: "タイトル", authors: "著者", year: 2022, category: "国際会議" },
		{ title: "タイトル", authors: "著者", year: 2023, category: "国際会議" },
		{ title: "タイトル", authors: "著者", year: 2024, category: "国際会議" },
		{ title: "タイトル", authors: "著者", year: 2025, category: "国際会議" },
		{ title: "タイトル", authors: "著者", year: 2026, category: "国際会議" },
		{ title: "タイトル", authors: "著者", year: 2027, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2028, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2029, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2020, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2021, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2022, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2023, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2024, category: "国内会議" },
		{ title: "タイトル", authors: "著者", year: 2025, category: "受賞" },
		{ title: "タイトル", authors: "著者", year: 2026, category: "受賞" },
		{ title: "タイトル", authors: "著者", year: 2027, category: "受賞" },
		{ title: "タイトル", authors: "著者", year: 2028, category: "受賞" },
		{ title: "タイトル", authors: "著者", year: 2029, category: "受賞" },
		{ title: "タイトル", authors: "著者", year: 2020, category: "受賞" },
		{ title: "タイトル", authors: "著者", year: 2021, category: "受賞" },
		{ title: "タイトル", authors: "著者", year: 2022, category: "受賞" },
	];

	let showAll: { [key: string]: boolean } = {};
	categories.forEach(cat => (showAll[cat] = false));

	function toggleShowAll(category: string) {
		showAll[category] = !showAll[category];
	}
</script>

<!-- 背景画像（ぼかしなし） -->
<div class="fixed inset-0 bg-cover bg-center z-[-10]" style="background-image: url('/slide2.jpg')"></div>

<!-- ヘッダー -->
<header class="fixed top-0 left-0 z-50 w-full bg-white/70 shadow-sm px-4 py-3">
	<div class="flex flex-wrap items-center justify-between gap-y-4 px-2 sm:px-6">
		<a href="/" class="flex items-center gap-3 flex-shrink min-w-0 mx-auto sm:mx-0 hover:opacity-80 transition">
			<img src="/log.png" alt="ロゴ" class="h-10 sm:h-14 w-auto object-contain flex-shrink-0" />
			<span class="font-semibold text-gray-800 truncate text-[1rem] xs:text-[1.1rem] sm:text-[1.3rem] md:text-2xl lg:text-3xl"
				style="max-width: 70vw;">非破壊センシング研究室</span>
		</a>

		<!-- ハンバーガーボタン -->
		<button class="sm:hidden text-2xl text-gray-800" on:click={() => isOpen = !isOpen}>
			{#if isOpen}
				&times; <!-- 閉じる (×) -->
			{:else}
				&#9776; <!-- ハンバーガー (≡) -->
			{/if}
		</button>

		<!-- ナビゲーション（PC表示） -->
		<nav class="hidden sm:flex flex-nowrap justify-end gap-x-4 sm:gap-x-6 text-[1rem] sm:text-lg md:text-xl font-medium whitespace-nowrap">
			<a href="/Introduction" class="text-gray-500 hover:text-black">Introduction</a>
			<a href="/Project" class="text-gray-500 hover:text-black">Project</a>
			<a href="/Publications" class="text-gray-500 hover:text-black">Publications</a>
			<a href="/Members" class="text-gray-500 hover:text-black">Members</a>
			<a href="/Access" class="text-gray-500 hover:text-black">Access</a>
		</nav>
	</div>

	<!-- ナビゲーション（モバイル表示） -->
	{#if isOpen}
		<div class="sm:hidden mt-2 px-6 pb-4">
			<nav class="flex flex-col space-y-2 text-base font-medium text-gray-700">
				<a href="/Introduction" class="hover:text-black">Introduction</a>
				<a href="/Project" class="hover:text-black">Project</a>
				<a href="/Publications" class="hover:text-black">Publications</a>
				<a href="/Members" class="hover:text-black">Members</a>
				<a href="/Access" class="hover:text-black">Access</a>
			</nav>
		</div>
	{/if}
</header>

<!-- タイトル（背景画像の上） -->
<div class="pt-40 pb-16 px-6 sm:px-16">
	<h1 class="text-4xl sm:text-5xl font-bold text-white text-left drop-shadow-xl">
		Publications
	</h1>
</div>

<!-- 白背景のプロジェクト紹介エリア -->
<div class="bg-white bg-opacity-90 px-6 sm:px-16 py-16">
	<div class="max-w-6xl mx-auto space-y-16">

		<h2 class="text-4xl sm:text-5xl font-bold text-gray-800 text-center mb-12">Publications</h2>

		{#each categories as category}
			<section>
				<h3 class="text-2xl font-bold text-gray-700 mb-4 border-b pb-1">{category}</h3>
				<ul class="space-y-4">
					{#each allPublications
						.filter(p => p.category === category)
						.slice(0, showAll[category] ? undefined : 5) as pub}
						<li class="text-gray-700">
							<span class="font-semibold">{pub.year}</span> — {pub.title}<br />
							<span class="text-sm text-gray-500">{pub.authors}</span>
						</li>
					{/each}
				</ul>
				{#if allPublications.filter(p => p.category === category).length > 5}
	<button
		class="mt-4 text-gray-500 hover:text-gray-700 hover:underline text-sm"
		on:click={() => toggleShowAll(category)}
	>
		{showAll[category] ? '閉じる' : '一覧を表示'}
	</button>
{/if}
			</section>
		{/each}

	</div>
</div>
<!-- フッター（E-Mail & コピーライト） -->
<footer class="bg-gray-300 py-8">
	<div class="max-w-4xl mx-auto text-center text-sm text-gray-600 space-y-2">
		<p>© YOKOHAMA National University All rights reserved.</p>
	</div>
</footer>
	<slot />