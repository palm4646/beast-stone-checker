export type StoneType =
  | 'purple'
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'purple_crystal'
  | 'red_crystal'
  | 'blue_crystal'
  | 'green_crystal'
  | 'yellow_crystal'

export type StoneRequirement = {
  from: number
  to: number
  stones: {
    type: StoneType
    quantity: number
  }[]
}

// =====================
// マタタビ
// =====================
export type MatatabiType =
  | 'purple'   // 紫
  | 'red'      // 赤
  | 'blue'     // 青
  | 'green'    // 翠
  | 'yellow'   // 黄
  | 'rainbow'  // 虹
  | 'gold'     // 金
  | 'evil'     // 悪
  | 'ancient'  // 古

export type MatatabiItem = {
  type: MatatabiType
  quantity: number
}

export type MatatabiRequirement = {
  from: number
  to: number
  matatabi?: MatatabiItem[]
  seeds?: MatatabiItem[]
}

// ★ レアリティ拡張
export type CharacterRarity = 'EX' | 'レア' | '激レア' | '超激レア'

// ★ カテゴリ拡張（ガチャキャラ追加）
export type CharacterCategory =
  | '女王の発掘調査'
  | 'レジェンドステージ'
  | 'イベントステージ'
  | '超獣討伐'
  | 'ガチャキャラ'

export type Character = {
  id: string        // N001 とか, 今回は "138" でもOK
  name: string
  rarity: CharacterRarity
  category: CharacterCategory
  requirements: StoneRequirement[]
  matatabiRequirements?: MatatabiRequirement[]
}
