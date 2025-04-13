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
		content: '「〇〇〇〇〇〇〇〇〇〇〇〇。（開催日時2025年05月03日）'
	},
	{
		id: 2,
		date: '2025年04月05日',
		category: 'お知らせ',
		content: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇。'
	},
	{
		id: 3,
		date: '2025年03月28日',
		category: 'イベント',
		content: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇。（開催日時2025年04月15日）'
	},
	{
		id: 4,
		date: '2025年03月15日',
		category: 'イベント',
		content: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇。（開催日時2025年04月01日）'
	},
	{
		id: 5,
		date: '2025年02月28日',
		category: 'お知らせ',
		content: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇。'
	},
	// ⬆️ ここに追加するだけ！上から順番じゃなくてもOK
    
	{
		id: 6,
		date: '2025年04月13日',
		category: 'お知らせ',
		content: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇。'
	}
];