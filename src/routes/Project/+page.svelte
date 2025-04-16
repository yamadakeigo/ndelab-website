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
				文化財の調査は，工業製品の検査のようにサンプルを抜き出して分解調査をするような破壊検査をすることができません。そのため，非破壊非接触で物体の内部を観察したり材料を調査できる電磁波が用いられます。構造を観察する場合，透過する深さと分解能は周波数に依存するため，対象に応じて最適な周波数を選択します。例えば地中の遺構や埋蔵物の調査には，分解能は低くても深くまで透過する電波が用いられ，絵画のニス層は光断層トモグラフィーが用いられます。
本プロジェクトでは，適用するための計測装置の改良に加え，様々な周波数帯域の非破壊検査技術で得られたデータの比較解析を情報系の技術を用いて高度化します。
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
				2.考古出土品データ分類・解析への機械学習の活用
			</h2>
		
			<p class="text-gray-700 leading-relaxed text-left w-full">
				日本ではユーラシア大陸を様々なルートで渡ってきた古代の作品が出土されています。それらを時空間に配置し直して俯瞰することで，実在するモノに基づいた人類の歴史を辿ることができるはずです。出土品に関する膨大なデータを効率的に解析するには，機械学習など情報学を活用することが有効と思われます。
科学調査結果に基づき，データサイエンティスト達が先入観なく解析して作る「出土品の時空俯瞰図」は，人文系の分野で人類の活動や芸術の技法の伝搬などを研究するための素材として活用できるでしょう。
			</p>
		
			<!-- リンク -->
			<div class="space-y-1 text-gray-700 text-left break-words">
				
			</div>
			<div class="space-y-2">
				<img
					src="/project_nabunken-objects.jpg"
					alt="飛鳥寺塔心礎埋納物"
					class="rounded-lg shadow-md w-full max-w-2xl mx-auto object-contain bg-white"
				/>
				<p class="text-lg font-semibold text-gray-700 text-center">
					飛鳥寺塔心礎埋納物（飛鳥寺跡第三次調査　塔心礎出土品　集合）
				</p>
				<p class="text-sm text-gray-600 text-center">
					<a
						href="https://sitereports.nabunken.go.jp/ja/cultural-data-repository/66"
						class="underline hover:text-black"
						target="_blank"
						rel="noopener noreferrer"
					>
					出典：奈良文化財研究所公開画像
					</a>
				</p>
				<div class="text-sm text-gray-600 mt-2 mb-8 text-left">
					（参考）奈良文化財研究所の研究成果例<br />
					<a
						href="https://www.nabunken.go.jp/nabunkenblog/2018/06/20180615.html"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-black break-all"
					>
					・なぶんけんブログ「インドからローマまで」<br />
					</a>
					<a
						href="https://www.youtube.com/watch?v=QAn0OxNwaUA"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-black break-all"
					>
						・なぶんけんチャンネル「カザフスタンにおけるガラス製遺物の科学分析」<br />
					</a>
				</div>	
			</div>
		</div>
		<div class="space-y-8">
			<h2 class="text-2xl font-bold text-gray-800">
				3.情報学を活用し文化財科学から地球文化財学へ
			</h2>
		
			<p class="text-gray-700 leading-relaxed text-left w-full">
				医療分野で医師が一種類の検査値だけではなく，様々なデータに基づいて診断するように，文化財の場合も多種多様なセンシング技術で調査した結果を比較・統合することで，診断技術の向上や省力化を実現できると考えられます。また，データサイエンティストにより歴史への先入観なく作られた「文化財の時空間俯瞰図」は，人文系の研究者に便利な素材として使っていただけるかもしれません。
日本ではユーラシア大陸を様々なルートで渡ってきた古代の作品が出土されています。それらを時空間に配置し直して俯瞰することで「実在するモノ」に基づいた人類の歴史を辿ることができるはずです。
			</p>
		
			<!-- リンク -->
			<div class="space-y-1 text-gray-700 text-left break-words">
				
			</div>
			
			<div class="space-y-2 flex flex-col items-center mt-30">
				<img
					src="/prj2-2.png"
					alt="出土品AI解析2"
					class="rounded-lg shadow-md w-full max-w-md object-contain bg-white"
				/>
				<p class="text-lg font-semibold text-gray-700 text-center">
					高野孟により提案された「日本＝パチンコ台受け皿モデル」
				</p>
				<div class="space-y-1 text-gray-700 text-left break-words">
				
				</div>
				<p class="text-sm text-gray-600 text-lefys">
					参考文献: 高野孟著「最新・世界地図の読み方」講談社現代新書(1999) ISBN:9784061494640
				</p>
			</div>

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