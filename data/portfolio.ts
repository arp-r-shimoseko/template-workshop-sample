// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: '下世古颯哉',
  role: 'webエンジニア',
  bio: '自己紹介文をここに書いてください。経歴や興味のある分野など、自由に書きましょう。',
  avatarUrl: '/images/IMG_3852.jpg', // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: 'JavaScript', level: '3年' },
  { name: 'React', level: '3年' },
  { name: 'TypeScript', level: '3年' },
  { name: 'Next.js', level: '3年' },
  // 追加・削除してOK
];

export const projects = [
  {
    title: 'じこしょーかい',
    description: 'きままに作ってみた。',
    techStack: ['Next.js', 'TypeScript'],
    url: 'https://github.com/あなたのユーザー名/リポジトリ名',
  },
  // 複数追加できます
];

export const contact = {
  github: 'https://github.com/あなたのユーザー名',
  email: 'あなたのメールアドレス（任意）',
};
