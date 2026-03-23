# coen エンジニアコミュニティ — ポートフォリオテンプレート

このリポジトリは **coenエンジニアコミュニティ**のワークショップ用ポートフォリオテンプレートです。  
Next.js（React）+ Vercel を使って、自分のポートフォリオを作成・公開することを目的としています。

---

## プロジェクト構成

```
.
├── CLAUDE.md                  # このファイル（プロジェクト概要・作業ガイド）
├── package.json
├── next.config.js
├── tailwind.config.js
├── public/
│   └── images/                # プロフィール画像・プロジェクト画像を置く場所
├── src/
│   ├── app/
│   │   ├── layout.tsx         # 全ページ共通レイアウト（ヘッダー・フッター等）
│   │   ├── page.tsx           # トップページ（ここがメインの編集対象）
│   │   └── globals.css        # グローバルスタイル
│   └── components/
│       ├── Profile.tsx        # プロフィールセクション
│       ├── Skills.tsx         # スキル一覧セクション
│       ├── Projects.tsx       # 制作物・プロジェクト一覧セクション
│       └── Contact.tsx        # 連絡先セクション
└── data/
    └── portfolio.ts           # ★ポートフォリオの内容をここに書く（メイン編集ファイル）
```

---

## 参加者がやること

### 1. `data/portfolio.ts` を編集する（必須）

自分の情報をここに書くだけでポートフォリオが完成します。

```ts
export const profile = {
  name: "あなたの名前",
  role: "あなたの肩書き（例：Webエンジニア）",
  bio: "自己紹介文をここに書いてください。",
  avatarUrl: "/images/avatar.jpg", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "JavaScript", level: "学習中" },
  { name: "React", level: "学習中" },
  // 追加・削除してOK
];

export const projects = [
  {
    title: "プロジェクト名",
    description: "どんなものを作ったか、簡単な説明",
    techStack: ["Next.js", "TypeScript"],
    url: "https://github.com/あなたのユーザー名/リポジトリ名",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/あなたのユーザー名",
  email: "あなたのメールアドレス（任意）",
};
```

### 2. 画像を差し替える（任意）

`public/images/avatar.jpg` を自分の写真に差し替えてください。  
ファイル名を変えた場合は `portfolio.ts` の `avatarUrl` も合わせて更新してください。

### 3. デザインをカスタマイズする（任意・挑戦枠）

コンポーネントを直接編集することでデザインを変更できます。  
`src/components/` 内の各ファイルを触ってみてください。

---

## ローカル開発

```bash
npm install      # 初回のみ
npm run dev      # 開発サーバー起動 → http://localhost:3000 で確認
npm run build    # 本番ビルド確認（デプロイ前に実行推奨）
```

---

## ブランチ運用ルール

| ブランチ | 用途 |
|:---|:---|
| `main` | 公開用（直接コミット禁止） |
| `feature/名前-portfolio` | 各自の作業ブランチ |

```bash
# ブランチ作成（名前は自分の名前に変えてください）
git checkout -b feature/tanaka-portfolio
```

作業が完了したら `main` へのPull Requestを作成し、運営のレビューを受けてください。

---

## コーディングルール（Claude Codeへの指示）

- **編集してよいファイル：** `data/portfolio.ts`、`public/images/`、`src/components/`
- **編集しないファイル：** `next.config.js`、`tailwind.config.js`、`src/app/layout.tsx`（運営確認なしに変更しない）
- **言語：** TypeScript を使用する。`any` 型は使わない
- **スタイル：** Tailwind CSS を使用する。インラインスタイルは避ける
- **コンポーネント：** 関数コンポーネント（`const Xxx = () => {}`）で書く
- **コミットメッセージ：** `名前: 変更内容` の形式にする（例：`tanaka: プロフィール情報を更新`）
- **コメント：** 日本語でOK

---

## デプロイ

PRが `main` にマージされると Vercel が自動でデプロイします。  
公開URLは運営から共有されます。

手動でデプロイしたい場合は [Vercel](https://vercel.com) にGitHubアカウントでサインインし、このリポジトリをインポートしてください。

---

## 困ったときは

- coenエンジニアコミュニティのSlackチャンネルで質問
- 運営メンバーに直接連絡
- エラーが出た場合はスクリーンショットと一緒に共有してもらえると助かります
