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
				<a href="/Members" class="text-gray-500 hover:text-black">Members</a>
				<a href="/Access" class="text-gray-500 hover:text-black">Access</a>
			</nav>
		</div>
	</div>
</header>
<!-- タイトル（背景画像の上） -->
<div class="pt-40 pb-16 px-6 sm:px-16">
	<h1 class="text-4xl sm:text-5xl font-bold text-white text-left drop-shadow-xl">
		Project
	</h1>
</div>

<!-- 白背景のプロジェクト紹介エリア -->
<!-- 白背景のプロジェクト紹介エリア -->
<div class="bg-white bg-opacity-90 px-6 sm:px-16 py-16">
	<div class="max-w-6xl mx-auto space-y-20">
		<div class="space-y-6">
			<h2 class="text-2xl font-bold text-gray-800">
				1.分析・センシング技術開発・データフュージョン
			</h2>

			<p class="text-gray-700 leading-relaxed text-left w-full">
				文化財調査に適用するための計測装置の改良に加え，様々な周波数帯域の非破壊検査技術で得られたデータの比較解析を情報系の技術を用いて高度化します。
			</p>

			<div class="w-full">
				<img
					src="/prj1.png"
					alt="分析・センシング"
					class="rounded-lg shadow-md w-full max-w-2xl mx-auto object-contain bg-white"
				/>
				<p class="text-sm text-gray-600 text-center mt-2">
					▲ マイクロ波センサーと解析結果の可視化イメージ
				</p>
			</div>
		</div>
		<div class="space-y-8">
			<h2 class="text-2xl font-bold text-gray-800">
				2.考古出土品データ分類・解析への機械学習・AI技術の活用
			</h2>
		
			<p class="text-gray-700 leading-relaxed text-left w-full">
				出土品の分類に機械学習等を用いることにより新しい知見が得られ，地球規模での芸術文化の流れを俯瞰できる可能性があります。
			</p>
		
			<!-- リンク -->
			<div class="space-y-1 text-gray-700 text-left break-words">
				<p>(参考)インドからローマまで</p>
				<a
					href="https://www.nabunken.go.jp/nabunkenblog/2018/06/20180615.html"
					class="underline hover:text-black break-words"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://www.nabunken.go.jp/nabunkenblog/2018/06/20180615.html
				</a>
				<a
					href="https://www.youtube.com/watch?v=QAn0OxNwaUA"
					class="underline hover:text-black break-words"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://www.youtube.com/watch?v=QAn0OxNwaUA
				</a>
			</div>
			<div class="space-y-2">
				<img
					src="/prj2-1.jpg"
					alt="出土品AI解析1"
					class="rounded-lg shadow-md w-full max-w-2xl mx-auto object-contain bg-white"
				/>
				<p class="text-lg font-semibold text-gray-700 text-center">
					出土品分類に使用されたAIモデル図
				</p>
				<p class="text-sm text-gray-700 text-center">
					AIによる出土品の分類プロセスを図示したもの。形状・模様などの特徴を自動抽出し、学習済みモデルが分類を行う。
				</p>
				<p class="text-sm text-gray-600 text-center">
					<a
						href="https://sitereports.nabunken.go.jp/ja/16564"
						class="underline hover:text-black"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://sitereports.nabunken.go.jp/ja/16564
					</a>
				</p>
				<div class="h-16"></div> <!-- 約64pxのスペースが空きます -->
				
			</div>
			<div class="space-y-2 flex flex-col items-center mt-30">
				<img
					src="/prj2-2.png"
					alt="出土品AI解析2"
					class="rounded-lg shadow-md w-full max-w-md object-contain bg-white"
				/>
				<p class="text-lg font-semibold text-gray-700 text-center">
					高野孟「最新・世界地図の読み方」
				</p>
				<p class="text-sm text-gray-600 text-center">
					（講談社現代新書）に提示されている「受け皿としての日本」モデル
				</p>
			</div>

		</div>
		<div class="flex flex-col md:flex-row items-start md:items-start gap-6 md:gap-12">
			<div class="flex-1 break-words">
				<h2 class="text-2xl font-bold text-gray-800 mb-2">3.石造文化財の表面劣化のメカニズム解明</h2>
				<p class="text-gray-700 leading-relaxed w-full text-left break-words">
					温度湿度の変化が主な原因と考えられている石造文化財の表面劣化のメカニズムを理論的に解明し，遺跡など様々な作品の保存修復に貢献します。
				</p>
				<div class="mt-4 space-y-1 text-gray-700 w-full text-left break-words">
					<p>(参考) 石のあかぎれ</p>
					<a
						href="https://www.nabunken.go.jp/nabunkenblog/2021/09/20210915.html"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-black break-all"
					>
						https://www.nabunken.go.jp/nabunkenblog/2021/09/20210915.html
					</a>
				</div>
			</div>
		</div>
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