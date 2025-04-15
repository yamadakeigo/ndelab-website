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
				文化財科学は、人類共通の財産である文化財を次世代に伝えるため、文化財が内包する価値を顕在化するとともに破壊・破損・劣化後の作品の修復保存に役立つ調査・診断を行う学問で、EU諸国では応用物理、地学など科学技術系の研究分野として扱われています。
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
					Ref: M. Leona, P. S. Londero, J. Perry, K. Fukunaga, G. H. Bailey, C. Hale<br />
					<a
						href="https://doi.org/10.1039/9781839161957-00336"
						target="_blank"
						rel="noopener noreferrer"
						class="underline hover:text-black break-all"
					>
						DOI: https://doi.org/10.1039/9781839161957-00336 (2014)
					</a>
				</div>
			</div>
			
		
			<!-- 小見出し2：作品を後世に伝えるため -->
			<div class="space-y-2">
				<h3 class="text-xl font-semibold text-gray-700">
					2.作品を後世に伝えるため：
				</h3>
				<p class="text-gray-700 leading-relaxed">
					人間が手術前に時間と予算があれば様々な検査をするように、今の構造・材料の状態（＝症状）に加え、過去の修復履歴（＝病歴）も知る必要がある。その記録は次世代の修復のための貴重な記録となる。
				</p>
			</div>
		</div>

		<div class="space-y-6">
			<h2 class="text-2xl font-bold text-gray-800">
				横浜国立大学の文化財科学研究拠点
			</h2>
		
			<p class="text-gray-700 leading-relaxed text-left w-full">
				総合大学である横浜国立大学には、分析・センシング技術の研究者が多く、様々な計測法を比較・統合できます。また、AI応用等、情報系の研究者の協力により実験データと人文系の知識を融合することで人類が地球上で創造してきた文化の歴史を時空間で俯瞰する「地球文化財学」へ発展させることができます。
			</p>

			<div class="space-y-2">
			<img
				src="/zu2.jpg"
				alt="文化財科学研究拠点"
				class="rounded-lg shadow-md max-w-xl mx-auto object-contain bg-white"
			/>

			<div class="h-16"></div> <!-- 約64pxのスペースが空きます -->
		</div>		<!-- 画像2（縮小） -->
				
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