export type DownloadPage = {
  productName: string;
  items: string[];
};

/** Post-purchase thank-you pages. Paths are unguessable; do not link from nav or /skills/. */
export const downloadPages: Record<string, DownloadPage> = {
  "r8v3-kxq7-m2nh": {
    productName: "Visual Prompt Pro JA 7スキルセット",
    items: [
      "Visual Prompt Pro JA（00〜06）の指示書",
      "各スキルの使い始めの手引き（QUICKSTART）",
      "全体の README",
    ],
  },
  "p2w6-n4jt-c8ya": {
    productName: "ComfyUI ワークフロー（二段階仕上げ・JSON）",
    items: [
      "ComfyUI 用ワークフロー（二段階仕上げ・JSON）",
      "読み込みの短い手引き",
    ],
  },
  "h5qm-39vk-t7bs": {
    productName: "ComfyUI ワークフロー ＋ 購入者向け解説動画",
    items: [
      "ComfyUI 用ワークフロー（二段階仕上げ・JSON）",
      "読み込みの短い手引き",
      "購入者向け解説動画（このご案内でのみお届けします）",
    ],
  },
  "w7kd-2f8r-a4nx": {
    productName: "Visual Prompt Pro JA すべて（7スキルセット ＋ JSON ＋ 解説動画）",
    items: [
      "Visual Prompt Pro JA（00〜06）の指示書一式",
      "ComfyUI 用ワークフロー（二段階仕上げ・JSON）",
      "購入者向け解説動画（このご案内でのみお届けします）",
    ],
  },
};
