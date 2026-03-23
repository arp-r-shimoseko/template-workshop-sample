// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "あなたの名前",
  role: "あなたの肩書き（例：Webエンジニア）",
  bio: "自己紹介文をここに書いてください。経歴や興味のある分野など、自由に書きましょう。",
  avatarUrl: "/images/avatar.jpg", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "JavaScript", level: "学習中" },
  { name: "React", level: "学習中" },
  { name: "TypeScript", level: "学習中" },
  { name: "Next.js", level: "学習中" },
  // 追加・削除してOK
];

export const projects = [
  {
    title: "プロジェクト名",
    description: "どんなものを作ったか、簡単な説明を書いてください。",
    techStack: ["Next.js", "TypeScript"],
    url: "https://github.com/あなたのユーザー名/リポジトリ名",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/あなたのユーザー名",
  email: "あなたのメールアドレス（任意）",
};
