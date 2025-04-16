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
		Introduction
	</h1>
</div>

<!-- 白背景のプロジェクト紹介エリア -->
<!-- 白背景のプロジェクト紹介エリア -->
<div class="bg-white bg-opacity-90 px-6 sm:px-16 py-16">
	<div class="max-w-6xl mx-auto space-y-20">
		
				<!-- プロジェクト1 -->
		<div class="space-y-6">
			<h2 class="text-2xl font-bold text-gray-800">
				文化財科学とは
			</h2>

			<p class="text-gray-700 leading-relaxed text-left w-full">
				文化財科学は人類共通の財産である文化財を科学的に調査・診断する学問で，EU諸国では応用物理、地学など科学技術系の研究分野として扱われています。対象が唯一無二の作品であることから，非破壊・非接触で内部構造を観察したり，材料を分析できる電磁波が広く用いられています。調査の目的は，主に「作品を知るため」と「修復前の状態検査」です。
			</p>
		</div>

		<div class="space-y-8">
			<!-- メイン見出し -->
			<h2 class="text-2xl font-bold text-gray-800">
				文化財を科学的に調査する目的
			</h2>
		
			<!-- 小見出し1：作品を知るため -->
			<div class="space-y-4">
				<!-- 小見出しと本文 -->
				<div class="space-y-2">
					<h3 class="text-xl font-semibold text-gray-700">
						1.作品を知るため：
					</h3>
					<p class="text-gray-700 leading-relaxed">
						作品の意匠や歴史上での位置付けなど、美術史的な研究に必要な情報を提供します。
						例えば，デザイン性の高い作品を多く残している尾形光琳の技法が、時代によって変化した様子が、金箔の貼り方から推定できました。
					</p>
			
					<!-- 参考リンク -->
					<p class="text-sm text-gray-600 text-left">
						参考の報道発表：
						<a
							href="https://www.nict.go.jp/press/2012/10/30-1.html"
							target="_blank"
							rel="noopener noreferrer"
							class="underline hover:text-black break-all"
						>
							https://www.nict.go.jp/press/2012/10/30-1.html
						</a>
					</p>
				</div>
			
				<!-- 画像挿入スペース -->
				<div class="mt-6">
					<img
						src="/zu1.jpg"
						alt="尾形光琳の技法分析図"
						class="rounded-lg shadow-md w-full max-w-2xl mx-auto object-contain bg-white"
					/>
					<p class="text-sm text-gray-600 text-center mt-2">
						メトロポリタン美術館（NY, USA)での尾形光琳作「八橋図屏風」の調査例
					</p>
				</div>
				<!-- 左下にRefを表示（小見出しと左端を揃え、下に余白） -->
				<div class="text-sm text-gray-600 mt-2 mb-8 text-left">
					M. Leona, P. S. Londero, J. Perry, K. Fukunaga, G. H. Bailey, C. Hale, Designing Nature: Ogata Kōrin's Technical Choices in Irises at Yatsuhashi, Science and Art The Painted Surface, Royal Society of Chemistry, pp. 336-353, 2014.<br />
					<a
						href="https://doi.org/10.1039/9781839161957-00336"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-black break-all"
					>
						DOI: https://doi.org/10.1039/9781839161957-00336 (2014)<br />
					</a>
					<a
						href="https://www.nict.go.jp/press/2012/10/30-1.html"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-black break-all"
					>
						NICT 報道発表: https://www.nict.go.jp/press/2012/10/30-1.html<br />
					</a>
				</div>
			</div>
			
		
			<!-- 小見出し2：作品を後世に伝えるため -->
			<div class="space-y-2">
				<h3 class="text-xl font-semibold text-gray-700">
					2.作品を後世に伝えるため：
				</h3>
				<p class="text-gray-700 leading-relaxed">
					人間が手術前に時間と予算があれば様々な検査をするように，破壊・破損・劣化後の作品の構造・材料の状態（＝症状）に加え、過去の修復履歴（＝病歴）を知るために，調査診断を行い，その記録は次世代の修復のための貴重な記録となります。例えば，Galleria degli Uffizi所蔵のGiottoのテンペラ画の作品は，石膏下地が2層あることがわかりました。
				</p>
			</div>

			<div class="mt-6">
				<img
					src="/giotto.jpg"
					alt="尾形光琳の技法分析図"
					class="rounded-lg shadow-md w-full max-w-2xl mx-auto object-contain bg-white"
				/>
				<p class="text-sm text-gray-600 text-center mt-2">
					ウフィッツィ美術館（Firenze, Italia)でのジョット作「バディア祭壇画」の調査例
				</p>
			</div>
			<div class="text-sm text-gray-600 mt-2 mb-8 text-left">
				M. Leona, P. S. Londero, J. Perry, K. Fukunaga, G. H. Bailey, C. Hale, Designing Nature: Ogata Kōrin's Technical Choices in Irises at Yatsuhashi, Science and Art The Painted Surface, Royal Society of Chemistry, pp. 336-353, 2014.<br />
				<a
					href="https://www.mandragora.it/prodotto/giottoil-restauro-del-polittico-di-badia/"
					target="_blank"
					rel="noopener noreferrer"
					class="underline hover:text-black break-all"
				>
					Ref: A. Tartuferi ed. "Giotto Il restauro del Polittico di Badia", Mandragola, 2009. ISBN: 978-88-7461-174-4 (2014)<br />
				</a>
				<a
					href="https://www.nict.go.jp/press/2009/02/25-1.html"
					target="_blank"
					rel="noopener noreferrer"
					class="underline hover:text-black break-all"
				>
					参考の報道発表: https://www.nict.go.jp/press/2009/02/25-1.html<br />
				</a>
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