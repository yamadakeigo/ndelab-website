<!-- src/lib/components/Header.svelte -->
<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<header class="fixed top-0 left-0 z-50 flex flex-col sm:flex-row items-center justify-between px-8 py-4 w-full bg-white/70 backdrop-blur-sm shadow-sm">
	<!-- ロゴ + タイトル：トップページにリンク -->
	<a href="/" class="flex items-center space-x-4 hover:opacity-80 transition">
		<img src="/log.png" alt="ロゴ" class="h-20 w-auto object-contain" />
		<span class="text-2xl sm:text-3xl font-semibold text-gray-800">
			非破壊センシング研究室
		</span>
	</a>

	<!-- ナビゲーション：現在ページを太字表示 -->
	<nav class="flex space-x-8 mt-4 sm:mt-0 text-xl sm:text-2xl font-medium pr-10 sm:pr-20">
		<a href="/Introduction" class:text-black={currentPath === '/Introduction'} class="text-gray-500 hover:text-black">Introduction</a>
		<a href="/Project" class:text-black={currentPath === '/Project'} class="text-gray-500 hover:text-black">Project</a>
		<a href="/Publications" class:text-black={currentPath === '/Project'} class="text-gray-500 hover:text-black">Publications</a>
		<a href="/Members" class:text-black={currentPath === '/Members'} class="text-gray-500 hover:text-black">Members</a>
		<a href="/Access" class:text-black={currentPath === '/Access'} class="text-gray-500 hover:text-black">Access</a>
	</nav>
</header>