<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<!-- 背景画像（ぼかしなし） -->
<div class="fixed inset-0 bg-cover bg-center z-[-10]" style="background-image: url('/slide2.jpg')"></div>

<!-- ヘッダー -->
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
<!-- タイトル（背景画像の上） -->
<div class="pt-40 pb-16 px-6 sm:px-16">
	<h1 class="text-4xl sm:text-5xl font-bold text-white text-left drop-shadow-xl">
		Publications
	</h1>
</div>

<!-- 白背景のプロジェクト紹介エリア -->
<!-- 白背景のプロジェクト紹介エリア -->
<div class="bg-white bg-opacity-90 px-6 sm:px-16 py-16">
	<div class="max-w-6xl mx-auto space-y-20">
        <div class="text-center text-gray-600 text-xl mt-10">
            This page is currently under development.
          </div>
	</div>
</div>
<!-- フッター（E-Mail & コピーライト） -->
<footer class="bg-gray-300 py-8">
	<div class="max-w-4xl mx-auto text-center text-sm text-gray-600 space-y-2">
		<p>© YOKOHAMA National University All rights reserved.</p>
	</div>
</footer>
	<slot />