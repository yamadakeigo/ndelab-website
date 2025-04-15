<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<!-- 背景画像（ぼかしなし） -->
<div class="fixed inset-0 bg-cover bg-center z-[-10]" style="background-image: url('/slide2.jpg')"></div>

<!-- ヘッダー -->
<header class="fixed top-0 left-0 z-50 flex flex-col sm:flex-row items-center justify-between px-8 py-4 w-full bg-white/70 shadow-sm">
	<a href="/" class="flex items-center space-x-4 hover:opacity-80 transition">
		<img src="/log.png" alt="ロゴ" class="h-20 w-auto object-contain" />
		<span class="text-2xl sm:text-3xl font-semibold text-gray-800">非破壊センシング研究室</span>
	</a>
	<nav class="flex space-x-8 mt-4 sm:mt-0 text-xl sm:text-2xl font-medium pr-10 sm:pr-20">
		<a href="/Introduction" class="text-gray-500 hover:text-black">Introduction</a>
		<a href="/Project" class="text-gray-500 hover:text-black">Project</a>
		<a href="/Members" class="text-gray-500 hover:text-black">Members</a>
		<a href="/Access" class="text-gray-500 hover:text-black">Access</a>
	</nav>
</header>

<!-- タイトル（背景画像の上） -->
<div class="pt-40 pb-16 px-6 sm:px-16">
	<h1 class="text-4xl sm:text-5xl font-bold text-white text-left drop-shadow-xl">
		Members
	</h1>
</div>

<!-- 白背景のプロジェクト紹介エリア -->
<!-- 白背景のプロジェクト紹介エリア -->
<div class="bg-white bg-opacity-90 px-6 sm:px-16 py-16">
	<div class="max-w-6xl mx-auto space-y-20">
		<!-- 教員セクション -->
		<section class="space-y-8">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-2">教員</h2>
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/members/prof.jpg" alt="教員写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">福永 香（Fkunaga Kaori）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p>
					<div class="h-5"></div>
				</div>
			</div>
		</section>
	
		<!-- M1 セクション -->
		<section class="space-y-8">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-2">M1</h2>
	
			<!-- 福地 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/members/m1_yamada.jpg" alt="M1写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">福地 翼（Fukuchi Tsubasa）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">〇〇〇〇〇〇〇〇〇〇〇〇〇〇。</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p>
					<div class="h-5"></div>
				</div>
			</div>
	
			<!-- 松永 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/members/m1_yamada.jpg" alt="M1写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">松永 丞太郎（Matsunaga Jotaro）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">〇〇〇〇〇〇〇〇〇〇〇〇〇〇。</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p>
					<div class="h-5"></div>
				</div>
			</div>
	
			<!-- 山田 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/yamadakeigo.png" alt="M1写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">山田 圭吾（Yamada Keigo）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">学部では表情解析による感情推定をしていました。趣味は映画鑑賞、音楽鑑賞、将棋の対極を観戦など色々です。よろしくお願いします!</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：画像認識による金属遺物の腐食度判定と脱塩処理の必要性予測</p>
					<div class="h-5"></div>
				</div>
			</div>
		</section>
	
		<!-- B4 セクション -->
		<section class="space-y-8">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-2">B4</h2>
	
			<!-- 糟谷 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/members/b4_suzuki.jpg" alt="B4写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">糟谷 空（Kasuya Sora）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">〇〇〇〇〇〇〇〇〇〇〇〇〇〇。</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p>
					<div class="h-5"></div>
				</div>
			</div>
	
			<!-- 加藤 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/members/b4_suzuki.jpg" alt="B4写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">加藤 圭介（Kato Keisuke）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">〇〇〇〇〇〇〇〇〇〇〇〇〇〇。</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p>
					<div class="h-5"></div>
				</div>
			</div>
	
			<!-- 富松 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/members/b4_suzuki.jpg" alt="B4写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">富松 大輝（Tomimatu Haruki）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">〇〇〇〇〇〇〇〇〇〇〇〇〇〇。</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：〇〇〇〇〇〇〇〇〇〇〇〇〇〇</p>
					<div class="h-5"></div>
				</div>
			</div>
		</section>
	</div>
</div>
<!-- フッター（E-Mail & コピーライト） -->
<footer class="bg-gray-300 py-8">
	<div class="max-w-4xl mx-auto text-center text-sm text-gray-600 space-y-2">
		<p>E-Mail : XXXX@XXXX</p>
		<p>© YOKOHAMA National University All rights reserved.</p>
	</div>
</footer>
	<slot />