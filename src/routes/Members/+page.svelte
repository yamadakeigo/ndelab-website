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
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">福永 香（Fukunaga Kaori）</h3>
					
				</div>
			</div>
		</section>
	
		<!-- M1 セクション -->
		<section class="space-y-8">
			<h2 class="text-2xl sm:text-3xl font-bold text-gray-800 border-b pb-2">M1</h2>
	
			<!-- 福地 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/FukuchiTshubasa.png" alt="M1写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">福地 翼（Fukuchi Tsubasa）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">自己紹介：<br />LDHとBMSGのアーティストにハマってます🔥</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：<br />識別性能向上のための Co-Attention Fusion Network を用いたマルチビュー画像分類</p>
					<div class="h-5"></div>
				</div>
			</div>
	
			<!-- 松永 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/MatshunagaJotaro.png" alt="M1写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">松永 丞太郎（Matsunaga Jotaro）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">自己紹介：<br />鳥取からはるばるやってきました。趣味はテニス、家では最近、薬屋見てます。よろしくお願いします。</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：<br />文化財をいかに人に興味を持たせ存続させていくか</p>
					<div class="h-5"></div>
				</div>
			</div>
	
			<!-- 山田 -->
			<div class="flex flex-col md:flex-row gap-6 items-start">
				<img src="/yamadakeigo.png" alt="M1写真" class="w-40 h-40 object-cover rounded-lg shadow-md" />
				<div class="space-y-2 max-w-3xl">
					<h3 class="text-xl font-semibold text-gray-800">山田 圭吾（Yamada Keigo）</h3>
					<div class="h-2"></div>
					<p class="text-gray-700 text-base leading-relaxed">自己紹介：<br />学部では表情解析による感情推定をしていました。趣味は映画鑑賞、音楽鑑賞、聴く読書など色々です。よろしくお願いします!</p>
					<div class="h-2"></div>
					<p class="text-gray-600 text-base">研究テーマ：<br />画像認識による金属遺物の腐食度判定と脱塩処理の必要性予測</p>
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
					<h3 class="text-xl font-semibold text-gray-800">富松 大輝（Tomimatsu Haruki）</h3>
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
		<p>© YOKOHAMA National University All rights reserved.</p>
	</div>
</footer>
	<slot />