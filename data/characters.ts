import { Character } from '@/types/character'

export const characters: Character[] = [
  // =====================
  // 女王の発掘調査
  // =====================
  {
    id: 'N001',
    name: 'ネコはにわ',
    rarity: 'EX',
    category: '女王の発掘調査',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
        ],
      },
    ],
  },
  {
    id: 'N003',
    name: 'ネコサボテン',
    rarity: 'EX',
    category: '女王の発掘調査',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
          { type: 'blue', quantity: 10 },
          { type: 'green', quantity: 10 },
          { type: 'yellow', quantity: 10 },
        ],
      },
    ],
  },
  {
    id: 'N004',
    name: 'ネコスーパーカー',
    rarity: 'EX',
    category: '女王の発掘調査',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 12 },
          { type: 'red', quantity: 11 },
          { type: 'blue', quantity: 10 },
          { type: 'green', quantity: 9 },
          { type: 'yellow', quantity: 8 },
        ],
      },
    ],
  },
  {
    id: 'N005',
    name: 'ネコヒットマン',
    rarity: 'EX',
    category: '女王の発掘調査',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 8 },
          { type: 'red', quantity: 9 },
          { type: 'blue', quantity: 10 },
          { type: 'green', quantity: 11 },
          { type: 'yellow', quantity: 12 },
        ],
      },
    ],
  },
  {
    id: 'N006',
    name: 'ネコアックマ',
    rarity: 'EX',
    category: '女王の発掘調査',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 15 },
          { type: 'blue', quantity: 15 },
          { type: 'red_crystal', quantity: 2 },
          { type: 'green_crystal', quantity: 2 },
          { type: 'yellow_crystal', quantity: 1 },
        ],
      },
    ],
  },

  // =====================
  // レジェンドステージ
  // =====================
  {
    id: 'N000',
    name: 'ネコルーザ',
    rarity: 'EX',
    category: 'レジェンドステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple_crystal', quantity: 2 },
          { type: 'red_crystal', quantity: 2 },
          { type: 'blue_crystal', quantity: 2 },
          { type: 'green_crystal', quantity: 2 },
          { type: 'yellow_crystal', quantity: 2 },
        ],
      },
    ],
  },
  {
    id: 'N002',
    name: 'イディ',
    rarity: 'EX',
    category: 'レジェンドステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [{ type: 'yellow_crystal', quantity: 3 }],
      },
    ],
  },
  // =====================
  // 超獣討伐（報酬キャラ）
  // =====================

  // レア
  {
    id: 'N101',
    name: '飛脚ネコ',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 5 },
          { type: 'red', quantity: 5 },
        ],
      },
    ],
  },
  {
    id: 'N102',
    name: 'ネコターさん',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'blue', quantity: 5 },
          { type: 'green', quantity: 5 },
        ],
      },
    ],
  },
  {
    id: 'N103',
    name: 'ネコガスマスク',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 15 },
          { type: 'red', quantity: 15 },
          { type: 'blue', quantity: 1 },
        ],
      },
    ],
  },
  {
    id: 'N104',
    name: 'ネコオペ',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'blue', quantity: 13 },
          { type: 'green', quantity: 13 },
          { type: 'yellow', quantity: 1 },
        ],
      },
    ],
  },
  {
    id: 'N105',
    name: 'ネコスマッシュ',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'red', quantity: 15 },
          { type: 'purple', quantity: 15 },
          { type: 'yellow', quantity: 1 },
        ],
      },
    ],
  },
  {
    id: 'N106',
    name: 'ネコキノコ',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'blue', quantity: 13 },
          { type: 'green', quantity: 13 },
          { type: 'yellow', quantity: 1 },
        ],
      },
    ],
  },
  {
    id: 'N107',
    name: 'ネコ村長',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 15 },
          { type: 'blue', quantity: 13 },
          { type: 'yellow', quantity: 1 },
        ],
      },
    ],
  },
  {
    id: 'N109',
    name: 'ネコバレル',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 15 },
          { type: 'red', quantity: 15 },
          { type: 'yellow', quantity: 1 },
        ],
      },
    ],
  },
  {
    id: 'N110',
    name: 'ネコファーマー',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 20 },
          { type: 'red_crystal', quantity: 2 },
          { type: 'blue_crystal', quantity: 2 },
        ],
      },
    ],
  },
  {
    id: 'N112',
    name: 'ネコタマ号',
    rarity: 'レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'red', quantity: 15 },
          { type: 'green', quantity: 15 },
          { type: 'purple_crystal', quantity: 2 },
          { type: 'blue_crystal', quantity: 2 },
        ],
      },
    ],
  },

  // 激レア
  {
    id: 'N108',
    name: 'ネコウォッシュ',
    rarity: '激レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'blue', quantity: 12 },
          { type: 'green', quantity: 12 },
          { type: 'yellow', quantity: 3 },
        ],
      },
    ],
  },
  {
    id: 'N111',
    name: 'ネコポリス',
    rarity: '激レア',
    category: '超獣討伐',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'blue', quantity: 10 },
          { type: 'yellow', quantity: 5 },
          { type: 'green_crystal', quantity: 1 },
          { type: 'yellow_crystal', quantity: 1 },
        ],
      },
    ],
  },




  // =====================
  // イベントステージ
  // =====================
  {
    id: 'N201',
    name: 'ネコソシスト',
    rarity: 'EX',
    category: 'イベントステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
        ],
      },
    ],
  },
  {
    id: 'N202',
    name: 'アーマードホタルネコ',
    rarity: 'EX',
    category: 'イベントステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
        ],
      },
    ],
  },
  {
    id: 'N203',
    name: 'ネコピエロ',
    rarity: 'EX',
    category: 'イベントステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
        ],
      },
    ],
  },
  {
    id: 'N204',
    name: 'ネコシシマイ',
    rarity: 'EX',
    category: 'イベントステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
        ],
      },
    ],
  },
  {
    id: 'N205',
    name: 'ネコ花嫁',
    rarity: 'EX',
    category: 'イベントステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
        ],
      },
    ],
  },
  {
    id: 'N206',
    name: 'ネコホタテ',
    rarity: 'EX',
    category: 'イベントステージ',
    requirements: [
      {
        from: 2,
        to: 3,
        stones: [
          { type: 'purple', quantity: 10 },
          { type: 'red', quantity: 10 },
        ],
      },
    ],
  },

  // =====================
  // 第4形態テスト（ガチャキャラ）
  // =====================
  {
    id: '138',
    name: 'かさじぞう',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'purple', quantity: 5 },        // 紫獣石5
          { type: 'red', quantity: 5 },           // 紅獣石5
          { type: 'green_crystal', quantity: 2 }, // 翠結晶2
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [
          { type: 'gold', quantity: 1 }, // 金マタタビ1
        ],
        // 種はなしなら省略でOK
      },
    ],
  },
  // =====================
  // 第4形態（form3 -> form4） 超激レア / ガチャキャラ
  // =====================

  {
    id: '074',
    name: '織田信長',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'purple_crystal', quantity: 1 },
          { type: 'red_crystal', quantity: 1 },
          { type: 'blue_crystal', quantity: 1 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'evil', quantity: 3 }],
      },
    ],
  },

  {
    id: '076',
    name: 'ウィンディ',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'yellow', quantity: 5 },
          { type: 'green_crystal', quantity: 2 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'gold', quantity: 1 }],
      },
    ],
  },

  {
    id: '178',
    name: 'ディオラムス',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'blue', quantity: 5 },
          { type: 'yellow', quantity: 2 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [
          { type: 'blue', quantity: 5 },
          { type: 'yellow', quantity: 5 },
        ],
      },
    ],
  },

  {
    id: '305',
    name: 'ギガパルド',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'red', quantity: 6 },
          { type: 'green', quantity: 2 },
          { type: 'purple_crystal', quantity: 1 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        seeds: [{ type: 'ancient', quantity: 3 }], // 古代種3 = 古の種3
      },
    ],
  },

  {
    id: '362',
    name: 'フワンティ',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'purple', quantity: 5 },
          { type: 'green', quantity: 5 },
          { type: 'blue_crystal', quantity: 1 },
        ],
      },
    ],
  },

  {
    id: '139',
    name: 'かぐやひめ',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'purple', quantity: 5 },
          { type: 'red', quantity: 5 },
          { type: 'yellow_crystal', quantity: 1 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'rainbow', quantity: 2 }],
      },
    ],
  },

  {
    id: '213',
    name: 'スペクトルキャット',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'blue', quantity: 5 },
          { type: 'red_crystal', quantity: 2 },
          { type: 'purple_crystal', quantity: 2 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        seeds: [{ type: 'gold', quantity: 1 }], // 金種1
      },
    ],
  },

  {
    id: '060',
    name: 'ねこベビー',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'blue_crystal', quantity: 1 },
          { type: 'green_crystal', quantity: 1 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'green', quantity: 10 }],
      },
    ],
  },

  {
    id: '398',
    name: '風隼さくら',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'purple_crystal', quantity: 2 },
          { type: 'red_crystal', quantity: 2 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        seeds: [{ type: 'rainbow', quantity: 1 }], // 虹種1
      },
    ],
  },

  {
    id: '159',
    name: '上杉謙信',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'purple', quantity: 5 },
          { type: 'blue', quantity: 2 },
          { type: 'yellow_crystal', quantity: 1 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'purple', quantity: 3 }],
      },
    ],
  },

  {
    id: '306',
    name: 'シーガレオン',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'blue', quantity: 5 },
          { type: 'yellow', quantity: 3 },
          { type: 'red_crystal', quantity: 2 },
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        seeds: [
          { type: 'purple', quantity: 5 },
          { type: 'red', quantity: 5 },
        ],
      },
    ],
  },

  {
    id: '360',
    name: 'メララ',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [{ type: 'blue_crystal', quantity: 2 }],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'blue', quantity: 10 }],
      },
    ],
  },

  {
    id: '136',
    name: 'コスモ',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [{ type: 'yellow', quantity: 10 }],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'yellow', quantity: 10 }],
      },
    ],
  },

  {
    id: '432',
    name: 'グラヴィー',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [{ type: 'purple_crystal', quantity: 2 }], // 紫獣結晶2
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        seeds: [{ type: 'gold', quantity: 1 }], // 金種1
      },
    ],
  },

  {
    id: '077',
    name: 'サンディア',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'green', quantity: 10 },        // 翠獣石10
          { type: 'red_crystal', quantity: 2 },   // 紅獣結晶2
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [{ type: 'gold', quantity: 1 }],
      },
    ],
  },

  {
    id: '307',
    name: 'ボルボンバー',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'blue', quantity: 5 },          // 蒼獣石5
          { type: 'purple_crystal', quantity: 1 }, // 紫獣結晶1
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [
          { type: 'green', quantity: 5 },
          { type: 'purple', quantity: 5 },
        ],
      },
    ],
  },

  {
    id: '361',
    name: 'ミズリィ',
    rarity: '超激レア',
    category: 'ガチャキャラ',
    requirements: [
      {
        from: 3,
        to: 4,
        stones: [
          { type: 'red', quantity: 2 },           // 紅獣石2
          { type: 'green_crystal', quantity: 1 }, // 翠獣結晶1
        ],
      },
    ],
    matatabiRequirements: [
      {
        from: 3,
        to: 4,
        matatabi: [
          { type: 'blue', quantity: 3 },
          { type: 'rainbow', quantity: 3 },
        ],
      },
    ],
  },
]