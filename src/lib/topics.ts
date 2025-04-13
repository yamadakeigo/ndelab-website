export type Topic = {
	id: number;
	date: string;
	category: string;
	content: string;
};

export const topics: Topic[] = [
	{
		id: 1,
		date: '2025年04月12日',
		category: 'イベント',
		content: '「AIと非破壊検査」シンポジウムを東京工業大学で開催します。（開催日時2025年05月03日）'
	},
	{
		id: 2,
		date: '2025年04月05日',
		category: 'お知らせ',
		content: '研究成果「深層学習による劣化検出」を発表しました。'
	},
	{
		id: 3,
		date: '2025年03月28日',
		category: 'イベント',
		content: '「材料診断の最前線」セミナーをオンラインで開催します。（開催日時2025年04月15日）'
	},
	{
		id: 4,
		date: '2025年03月15日',
		category: 'イベント',
		content: '「未来のインフラを支えるセンシング技術」講演会を名古屋大学で開催します。（開催日時2025年04月01日）'
	},
	{
		id: 5,
		date: '2025年02月28日',
		category: 'お知らせ',
		content: '2025年度の研究室説明会の受付を開始しました。'
	},
	// ⬆️ ここに追加するだけ！上から順番じゃなくてもOK
    
	{
		id: 6,
		date: '2025年04月13日',
		category: 'お知らせ',
		content: '2025年度の岡田研究室説明会の受付を開始しました。'
	}
];