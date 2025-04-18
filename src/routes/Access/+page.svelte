<!-- src/routes/Access/+page.svelte -->

<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
	let isOpen = false;
</script>

<!-- 背景画像 -->
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

<!-- タイトル -->
<div class="pt-40 pb-16 px-6 sm:px-16">
	<h1 class="text-4xl sm:text-5xl font-bold text-white text-left drop-shadow-xl">Access</h1>
</div>

<!-- アクセス内容 -->
<div class="bg-white bg-opacity-90 px-6 sm:px-16 py-16">
	<div class="max-w-5xl mx-auto space-y-12">

		<!-- 所在地 -->
		<section class="space-y-2">
			<h2 class="text-2xl font-bold text-gray-800">所在地</h2>
			<p class="text-gray-700 text-lg">
				〒240-8501 神奈川県横浜市保土ヶ谷区常盤台79-5<br />
				横浜国立大学 電子情報工学棟(N6-2) 8階 非破壊センシング研究室
			</p>
		</section>

		<!-- Google Map -->
		<section class="space-y-4">
			<h2 class="text-2xl font-bold text-gray-800">Googleマップ</h2>
				<div class="flex justify-center">
				<!-- svelte-ignore a11y_missing_attribute -->
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.504234824268!2d139.58869682905828!3d35.47386168806518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859f6a899915b%3A0xf44e6da66ee29d83!2z5qiq5rWc5Zu956uL5aSn5a2mIOmbu-WtkOaDheWgseW3peWtpuajnyhONi0yKQ!5e0!3m2!1sja!2sjp!4v1744705584237!5m2!1sja!2sjp" 
					width="600" 
					height="450" 
					style="border:0;" 
					allowfullscreen 
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade">
				</iframe>
			  </div>
		</section>

		<!-- アクセス方法 -->
		<section class="space-y-2">
			<h2 class="text-2xl font-bold text-gray-800">アクセス方法</h2>
			<ul class="list-disc list-inside text-gray-700 text-lg space-y-1">
				<li>横浜駅西口よりバスで約15分 →「岡沢町」下車 徒歩5分</li>
				<li>三ツ沢上町駅より徒歩約16分</li>
				<li>和田町駅より徒歩約17分</li>
				<li>羽沢横浜国大駅より徒歩約15分</li>
			</ul>
		</section>

		<!-- キャンパスマップ -->
		<section class="space-y-2">
			<h2 class="text-2xl font-bold text-gray-800">キャンパスマップ</h2>
			<a href="https://www.ynu.ac.jp/access/map.html" class="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
				横浜国立大学キャンパスマップを見る
			</a>
		</section>
	</div>
</div>
<!-- フッター（E-Mail & コピーライト） -->
<footer class="bg-gray-300 py-8">
	<div class="max-w-4xl mx-auto text-center text-sm text-gray-600 space-y-2">
		
		<p>© YOKOHAMA National University All rights reserved.</p>
	</div>
</footer>
	<slot />