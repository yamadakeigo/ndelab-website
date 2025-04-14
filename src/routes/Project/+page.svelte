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
		Project
	</h1>
</div>

<!-- 白背景のプロジェクト紹介エリア -->
<div class="bg-white bg-opacity-90 px-6 sm:px-16 py-16">
	<div class="max-w-6xl mx-auto space-y-20">
		<!-- プロジェクト1 -->
		<div>
			<h2 class="text-2xl font-bold text-gray-800 mb-2">1.分析・センシング技術開発・データフュージョン</h2>
			<p class="text-gray-700 leading-relaxed max-w-[50ch] text-left">
				文化財調査に適用するための計測装置の改良に加え，様々な周波数帯域の非破壊検査技術で得られたデータの比較解析を情報系の技術を用いて高度化します。
			</p>
		</div>

		<!-- プロジェクト2 -->
		<div>
			<h2 class="text-2xl font-bold text-gray-800 mb-2">2.考古出土品データ分類・解析への機械学習・AI技術の活用</h2>
			<p class="text-gray-700 leading-relaxed max-w-[50ch] text-left">
				出土品の分類に機械学習等を用いることにより新しい知見が得られ，地球規模での芸術文化の流れを俯瞰できる可能性があります。
			</p>
			<!-- 参考リンク：リンク色を通常文字と同じに -->
	<div class="mt-4 space-y-1 text-gray-700 max-w-[50ch] text-left">
		<p>(参考)インドからローマまで</p>
		<a
			href="https://www.nabunken.go.jp/nabunkenblog/2018/06/20180615.html"
			target="_blank"
			rel="noopener noreferrer"
			class="underline hover:text-black"
		>
			https://www.nabunken.go.jp/nabunkenblog/2018/06/20180615.html
		</a>
		<a
			href="https://www.youtube.com/watch?v=QAn0OxNwaUA"
			target="_blank"
			rel="noopener noreferrer"
			class="underline hover:text-black"
		>
			https://www.youtube.com/watch?v=QAn0OxNwaUA
		</a>
	</div>
		</div>

		<!-- プロジェクト3 -->
		<div>
			<h2 class="text-2xl font-bold text-gray-800 mb-2">3.石造文化財の表面劣化のメカニズム解明</h2>
			<p class="text-gray-700 leading-relaxed max-w-[50ch] text-left">
				温度湿度の変化が主な原因と考えられている石造文化財の表面劣化のメカニズムを理論的に解明し，遺跡など様々な作品の保存修復に貢献します。。
			</p>
		</div>

	</div>
</div>