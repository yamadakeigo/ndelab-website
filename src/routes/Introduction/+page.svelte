<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<!-- ヘッダー -->
<header class="fixed top-0 left-0 z-50 flex flex-col sm:flex-row items-center justify-between px-8 py-4 w-full bg-white/70 backdrop-blur-sm shadow-sm">
	<!-- ロゴ + タイトル：トップページへリンク -->
	<a href="/" class="flex items-center space-x-4 hover:opacity-80 transition">
		<img src="/log.png" alt="ロゴ" class="h-20 w-auto object-contain" />
		<span class="text-2xl sm:text-3xl font-semibold text-gray-800">
			非破壊センシング研究室
		</span>
	</a>

	<!-- ナビゲーション：現在ページは太字 -->
	<nav class="flex space-x-8 mt-4 sm:mt-0 text-xl sm:text-2xl font-medium pr-10 sm:pr-20">
		<a href="/Introduction" class="text-gray-500 hover:text-black" class:text-black={currentPath === '/Introduction'}>Introduction</a>
		<a href="/Project" class="text-gray-500 hover:text-black" class:text-black={currentPath === '/Project'}>Project</a>
		<a href="/Members" class="text-gray-500 hover:text-black" class:text-black={currentPath === '/Members'}>Members</a>
		<a href="/Access" class="text-gray-500 hover:text-black" class:text-black={currentPath === '/Access'}>Access</a>
	</nav>
</header>

<!-- 本文 -->
<div class="pt-40 bg-gradient-to-b from-white to-gray-100 min-h-screen px-6 sm:px-16 pb-24">
	<h1 class="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12 drop-shadow-md">
		研究プロジェクト紹介
	</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
		<!-- プロジェクト1 -->
		<div class="bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
			<h2 class="text-2xl font-bold text-gray-700 mb-4">電磁波を用いた内部構造可視化</h2>
			<p class="text-gray-600 leading-relaxed">
				非接触で物体内部の欠陥や構造を検出するために、マイクロ波やテラヘルツ波など様々な周波数帯域の電磁波を用いて高精度な内部観察技術を開発しています。
			</p>
		</div>

		<!-- プロジェクト2 -->
		<div class="bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
			<h2 class="text-2xl font-bold text-gray-700 mb-4">AIによるデータ解析と損傷推定</h2>
			<p class="text-gray-600 leading-relaxed">
				取得した反射・透過データを機械学習で解析し、構造物の劣化や損傷を早期に検出するAIモデルの構築に取り組んでいます。
			</p>
		</div>

		<!-- プロジェクト3 -->
		<div class="bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
			<h2 class="text-2xl font-bold text-gray-700 mb-4">文化財の非破壊診断</h2>
			<p class="text-gray-600 leading-relaxed">
				文化財や歴史的構造物の保存状態を損なうことなく評価できる非破壊技術を用いて、保存管理に貢献する手法を提案しています。
			</p>
		</div>

		<!-- プロジェクト4 -->
		<div class="bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">
			<h2 class="text-2xl font-bold text-gray-700 mb-4">マルチモーダルセンシング</h2>
			<p class="text-gray-600 leading-relaxed">
				音響、温度、振動、電磁波など複数のセンシング情報を統合して解析することで、より高精度で安定的な内部構造の評価を目指します。
			</p>
		</div>
	</div>
</div>