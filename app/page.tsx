'use client'

import { useMemo, useState } from 'react'
import { characters as CHARACTERS } from '@/data/characters'
import type { Character, StoneType, MatatabiType } from '@/types/character'

const STONE_LABELS: Record<StoneType, string> = {
  purple: '紫獣石',
  red: '紅獣石',
  blue: '蒼獣石',
  green: '翠獣石',
  yellow: '黄獣石',
  purple_crystal: '紫結晶',
  red_crystal: '紅結晶',
  blue_crystal: '蒼結晶',
  green_crystal: '翠結晶',
  yellow_crystal: '黄結晶',
}

const STONE_COLOR_CLASS: Record<StoneType, string> = {
  purple: 'text-purple-600',
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  yellow: 'text-yellow-500',

  purple_crystal: 'text-purple-600',
  red_crystal: 'text-red-600',
  blue_crystal: 'text-blue-600',
  green_crystal: 'text-green-600',
  yellow_crystal: 'text-yellow-500',
}

const STONE_ORDER: StoneType[] = [
  'purple',
  'red',
  'blue',
  'green',
  'yellow',
  'purple_crystal',
  'red_crystal',
  'blue_crystal',
  'green_crystal',
  'yellow_crystal',
]

// ===== マタタビ関連 =====

const MATATABI_ORDER: MatatabiType[] = [
  'purple',
  'red',
  'blue',
  'green',
  'yellow',
  'rainbow',
  'gold',
  'evil',
  'ancient',
]

const MATATABI_LABELS: Record<MatatabiType, string> = {
  purple: '紫マタタビ',
  red: '赤マタタビ',
  blue: '青マタタビ',
  green: '緑マタタビ',
  yellow: '黄マタタビ',
  rainbow: '虹マタタビ',
  gold: '金マタタビ',
  evil: '悪マタタビ',
  ancient: '古マタタビ',
}

const MATATABI_SEED_LABELS: Record<MatatabiType, string> = {
  purple: '紫の種',
  red: '赤の種',
  blue: '青の種',
  green: '緑の種',
  yellow: '黄の種',
  rainbow: '虹の種',
  gold: '金の種',
  evil: '悪の種',
  ancient: '古の種',
}

const MATATABI_COLOR_CLASS: Record<MatatabiType, string> = {
  purple: 'text-purple-600',
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  yellow: 'text-yellow-500',
  rainbow: 'text-pink-500',
  gold: 'text-yellow-600',
  evil: 'text-gray-700',
  ancient: 'text-amber-700',
}

type SelectedCharacter = {
  id: string
  fromStage: number
  toStage: number
}

function isCrystal(type: StoneType) {
  return type.endsWith('_crystal')
}

export default function HomePage() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState<Character['category'] | 'ALL'>('ALL')
  const [rarityFilter, setRarityFilter] = useState<Character['rarity'] | 'ALL'>('ALL')
  const [selected, setSelected] = useState<SelectedCharacter[]>([])
  const [activeTab, setActiveTab] = useState<'stones' | 'matatabi'>('stones')
  // ★ 追加: 「選択中のキャラ」開閉用
  const [isSelectedOpen, setIsSelectedOpen] = useState(true)

  const categories = useMemo(() => {
    const set = new Set<Character['category']>()
    for (const c of CHARACTERS) set.add(c.category)
    return Array.from(set)
  }, [])

  const addCharacters = (ids: string[]) => {
    setSelected((prev) => {
      const existingIds = new Set(prev.map((s) => s.id))
      const next = [...prev]

      for (const id of ids) {
        if (existingIds.has(id)) continue

        const char = CHARACTERS.find((c) => c.id === id)
        if (!char || char.requirements.length === 0) continue

        const minFrom = Math.min(...char.requirements.map((r) => r.from))
        const maxTo = Math.max(...char.requirements.map((r) => r.to))

        next.push({ id, fromStage: minFrom, toStage: maxTo })
        existingIds.add(id)
      }
      return next
    })
  }

  const handleAdd = (charId: string) => addCharacters([charId])

  const handleBulkAddAllEx = () => {
    const ids = CHARACTERS.filter((c) => c.rarity === 'EX').map((c) => c.id)
    addCharacters(ids)
  }

  const handleBulkAddByRarity = (rarity: Character['rarity']) => {
    const ids = CHARACTERS.filter((c) => c.rarity === rarity).map((c) => c.id)
    addCharacters(ids)
  }

  const handleBulkAddByCategory = (cat: Character['category']) => {
    const ids = CHARACTERS.filter((c) => c.category === cat).map((c) => c.id)
    addCharacters(ids)
  }

  const handleReset = () => {
    setSelected([])
  }

  const handleRemove = (charId: string) => {
    setSelected((prev) => prev.filter((s) => s.id !== charId))
  }

  const filteredCharacters = useMemo(() => {
    const kw = keyword.trim().toLowerCase()
    return CHARACTERS.filter((c) => {
      const matchKeyword =
        kw === '' ||
        c.name.toLowerCase().includes(kw) ||
        c.id.toLowerCase().includes(kw)

      const matchCategory = category === 'ALL' || c.category === category
      const matchRarity = rarityFilter === 'ALL' || c.rarity === rarityFilter

      return matchKeyword && matchCategory && matchRarity
    })
  }, [keyword, category, rarityFilter])

  const selectedCharacters = useMemo(() => {
    return selected
      .map((s) => ({
        sel: s,
        char: CHARACTERS.find((c) => c.id === s.id),
      }))
      .filter((x): x is { sel: SelectedCharacter; char: Character } => !!x.char)
  }, [selected])

  // ===== 獣石・獣結晶 合計 =====
  const totals = useMemo(() => {
    const result: Partial<Record<StoneType, number>> = {}

    for (const { sel, char } of selectedCharacters) {
      const related = char.requirements.filter(
        (r) => r.from >= sel.fromStage && r.to <= sel.toStage
      )

      for (const r of related) {
        for (const s of r.stones) {
          result[s.type] = (result[s.type] ?? 0) + s.quantity
        }
      }
    }

    return result
  }, [selectedCharacters])

  const totalsStones = useMemo(() => {
    const result: Partial<Record<StoneType, number>> = {}
    for (const type of Object.keys(totals) as StoneType[]) {
      if (!isCrystal(type)) result[type] = totals[type]
    }
    return result
  }, [totals])

  const totalsCrystals = useMemo(() => {
    const result: Partial<Record<StoneType, number>> = {}
    for (const type of Object.keys(totals) as StoneType[]) {
      if (isCrystal(type)) result[type] = totals[type]
    }
    return result
  }, [totals])

  // ===== マタタビ・種 合計 =====
  const totalsMatatabi = useMemo(() => {
    const result: Partial<Record<MatatabiType, number>> = {}

    for (const { sel, char } of selectedCharacters) {
      const related = char.matatabiRequirements?.filter(
        (r) => r.from >= sel.fromStage && r.to <= sel.toStage
      ) ?? []

      for (const r of related) {
        for (const m of r.matatabi ?? []) {
          result[m.type] = (result[m.type] ?? 0) + m.quantity
        }
      }
    }

    return result
  }, [selectedCharacters])

  const totalsMatatabiSeeds = useMemo(() => {
    const result: Partial<Record<MatatabiType, number>> = {}

    for (const { sel, char } of selectedCharacters) {
      const related = char.matatabiRequirements?.filter(
        (r) => r.from >= sel.fromStage && r.to <= sel.toStage
      ) ?? []

      for (const r of related) {
        for (const s of r.seeds ?? []) {
          result[s.type] = (result[s.type] ?? 0) + s.quantity
        }
      }
    }

    return result
  }, [selectedCharacters])

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="block">にゃんこ大戦争</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                進化素材チェッカー
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              育成したいキャラを選ぶだけで、{' '}
              <span className="font-semibold">必要な進化素材（獣石・獣結晶・マタタビ）</span>
              の合計を自動で計算します。
            </p>
            <p className="text-sm md:text-base text-red-100/90 max-w-3xl mx-auto">
              ※ 現在はタマゴシリーズ・第4形態キャラのみ対応しています
            </p>
          </div>
        </div>
      </section>

      <main className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Filters */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md border border-gray-900 p-5">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">フィルター</h3>

                <div className="space-y-4">
                  {/* キーワード */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      キーワード（名前 / ID）
                    </label>
                    <input
                      type="text"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      placeholder="例: ネコ / N006"
                      className="w-full rounded-md border-gray-900 shadow-sm text-gray-700 focus:border-red-500 focus:ring-red-500 text-sm px-3 py-2"
                    />
                  </div>

                  {/* カテゴリ */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      カテゴリ
                    </label>
                    <select
                      value={category}
                      onChange={(e) =>
                        setCategory(e.target.value as Character['category'] | 'ALL')
                      }
                      className="w-full rounded-md border-gray-900 shadow-sm text-gray-900 focus:border-red-500 focus:ring-red-500 text-sm px-3 py-2"
                    >
                      <option value="ALL">すべて</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* レアリティ */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      レアリティ
                    </label>
                    <select
                      value={rarityFilter}
                      onChange={(e) =>
                        setRarityFilter(e.target.value as Character['rarity'] | 'ALL')
                      }
                      className="w-full rounded-md border-gray-900 shadow-sm text-gray-900 focus:border-red-500 focus:ring-red-500 text-sm px-3 py-2"
                    >
                      <option value="ALL">すべて</option>
                      <option value="EX">EX</option>
                      <option value="レア">レア</option>
                      <option value="激レア">激レア</option>
                      <option value="超激レア">超激レア</option>
                    </select>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      一括追加 / 操作
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {/* レアリティ単位 */}
                      <button
                        type="button"
                        onClick={handleBulkAddAllEx}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-purple-300 text-purple-600 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-colors"
                      >
                        EXキャラ全て
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBulkAddByRarity('レア')}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-red-500 text-red-600 hover:bg-red-500 hover:text-white transition-colors"
                      >
                        レア全て
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBulkAddByRarity('激レア')}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-colors"

                      >
                        激レア全て
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBulkAddByRarity('超激レア')}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-orange-300 text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                      >
                        超激レア全て
                      </button>

                      {/* カテゴリ単位 */}
                      <button
                        type="button"
                        onClick={() => handleBulkAddByCategory('女王の発掘調査')}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors"
                      >
                        女王の発掘調査
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBulkAddByCategory('レジェンドステージ')}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors"
                      >
                        レジェンドステージ
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBulkAddByCategory('イベントステージ')}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors"
                      >
                        イベントステージ
                      </button>
                      <button
                        type="button"
                        onClick={() => handleBulkAddByCategory('超獣討伐')}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600 transition-colors"
                      >
                        超獣討伐
                      </button>

                      {/* リセット */}
                      <button
                        type="button"
                        onClick={handleReset}
                        disabled={selected.length === 0}
                        className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
                          selected.length === 0
                            ? 'border-gray-200 text-gray-300 bg-gray-50 cursor-default'
                            : 'border-gray-400 text-gray-700 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        全選択解除
                      </button>
                    </div>

                    <p className="text-[10px] text-gray-400 mt-2">
                      ※ 既に追加済みのキャラはスキップされます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Character list */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">キャラ一覧</h3>
                  <span className="text-xs text-gray-500">{filteredCharacters.length} 件</span>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[460px] pr-1">
                  {filteredCharacters.length === 0 && (
                    <p className="text-sm text-gray-500">条件に一致するキャラがいません。</p>
                  )}

                  {filteredCharacters.map((c) => {
                    const alreadySelected = selected.some((s) => s.id === c.id)
                    return (
                      <div
                        key={c.id}
                        className="border rounded-lg px-3 py-2.5 flex items-center justify-between hover:border-red-400 transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-900">
                              {c.name}
                            </span>
                            <span className="text-[10px] px-2 py-[2px] rounded-full bg-red-50 text-red-600 border border-red-100">
                              {c.rarity}
                            </span>
                            <span className="text-[10px] px-2 py-[2px] rounded-full bg-gray-50 text-gray-600 border border-gray-100">
                              {c.id}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{c.category}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleAdd(c.id)}
                          disabled={alreadySelected}
                          className={`text-xs px-3 py-1.5 rounded-full font-semibold border transition-colors ${
                            alreadySelected
                              ? 'border-gray-300 text-gray-400 bg-gray-50 cursor-default'
                              : 'border-red-500 text-red-600 hover:bg-red-500 hover:text-white'
                          }`}
                        >
                          {alreadySelected ? '追加済み' : '追加'}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  結果一覧
                </h3>

                {/* ▼ 選択中のキャラ（開閉付き） */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-700">
                      選択中のキャラ
                    </h4>
                    {selectedCharacters.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setIsSelectedOpen((prev) => !prev)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-xs text-gray-600 hover:bg-gray-100"
                        aria-label={isSelectedOpen ? '選択中のキャラを閉じる' : '選択中のキャラを開く'}
                      >
                        {isSelectedOpen ? '−' : '+'}
                      </button>
                    )}
                  </div>

                  {selectedCharacters.length === 0 ? (
                    <p className="text-xs text-gray-500">まだ追加されていません。</p>
                  ) : (
                    isSelectedOpen && (
                      <ul className="space-y-2">
                        {selectedCharacters.map(({ sel, char }) => (
                          <li
                            key={sel.id}
                            className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
                          >
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {char.name}
                                <span className="ml-2 text-[11px] text-gray-500">
                                  ({char.id})
                                </span>
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemove(sel.id)}
                              className="text-xs text-red-500 hover:text-red-700"
                            >
                              削除
                            </button>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-700">必要合計</h4>

                    {/* タブ切り替え */}
                    <div className="inline-flex rounded-full bg-gray-100 p-1 text-xs">
                      <button
                        type="button"
                        onClick={() => setActiveTab('stones')}
                        className={`px-3 py-1 rounded-full transition-colors ${
                          activeTab === 'stones'
                            ? 'bg-white shadow-sm text-red-600'
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                      >
                        獣石・獣結晶
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('matatabi')}
                        className={`px-3 py-1 rounded-full transition-colors ${
                          activeTab === 'matatabi'
                            ? 'bg-white shadow-sm text-green-600'
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                      >
                        マタタビ
                      </button>
                    </div>
                  </div>

                  {selectedCharacters.length === 0 ? (
                    <p className="text-xs text-gray-500">
                      キャラを追加すると、ここに合計が表示されます。
                    </p>
                  ) : Object.keys(totals).length === 0 &&
                    Object.keys(totalsMatatabi).length === 0 &&
                    Object.keys(totalsMatatabiSeeds).length === 0 ? (
                    <p className="text-xs text-gray-500">
                      データが未登録のキャラだけが選ばれています。
                    </p>
                  ) : (
                    <>
                      {activeTab === 'stones' && (
                        <div className="space-y-4">
                          {/* 獣石 */}
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-2">獣石</p>
                            <div className="space-y-2">
                              {STONE_ORDER.filter((t) => !isCrystal(t))
                                .filter((t) => (totalsStones[t] ?? 0) > 0)
                                .map((t) => (
                                  <div
                                    key={t}
                                    className="flex items-center justify-between text-sm"
                                  >
                                    <span className={`font-medium ${STONE_COLOR_CLASS[t]}`}>
                                      {STONE_LABELS[t]}
                                    </span>
                                    <span className={`font-semibold ${STONE_COLOR_CLASS[t]}`}>
                                      {totalsStones[t] ?? 0} 個
                                    </span>
                                  </div>
                                ))}
                              {STONE_ORDER.filter((t) => !isCrystal(t)).every(
                                (t) => (totalsStones[t] ?? 0) === 0
                              ) && (
                                <p className="text-xs text-gray-400">
                                  獣石は必要ありません。
                                </p>
                              )}
                            </div>
                          </div>

                          {/* 獣結晶 */}
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-2">獣結晶</p>
                            <div className="space-y-2">
                              {STONE_ORDER.filter((t) => isCrystal(t))
                                .filter((t) => (totalsCrystals[t] ?? 0) > 0)
                                .map((t) => (
                                  <div
                                    key={t}
                                    className="flex items-center justify-between text-sm"
                                  >
                                    <span className={`font-medium ${STONE_COLOR_CLASS[t]}`}>
                                      {STONE_LABELS[t]}
                                    </span>
                                    <span className={`font-semibold ${STONE_COLOR_CLASS[t]}`}>
                                      {totalsCrystals[t] ?? 0} 個
                                    </span>
                                  </div>
                                ))}
                              {STONE_ORDER.filter((t) => isCrystal(t)).every(
                                (t) => (totalsCrystals[t] ?? 0) === 0
                              ) && (
                                <p className="text-xs text-gray-400">
                                  獣結晶は必要ありません。
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'matatabi' && (
                        <div className="space-y-4">
                          {/* マタタビ */}
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-2">マタタビ</p>
                            <div className="space-y-2">
                              {MATATABI_ORDER.filter((t) => (totalsMatatabi[t] ?? 0) > 0).map(
                                (t) => (
                                  <div
                                    key={t}
                                    className="flex items-center justify-between text-sm"
                                  >
                                    <span className={`font-medium ${MATATABI_COLOR_CLASS[t]}`}>
                                      {MATATABI_LABELS[t]}
                                    </span>
                                    <span className={`font-semibold ${MATATABI_COLOR_CLASS[t]}`}>
                                      {totalsMatatabi[t] ?? 0} 個
                                    </span>
                                  </div>
                                )
                              )}
                              {MATATABI_ORDER.every(
                                (t) => (totalsMatatabi[t] ?? 0) === 0
                              ) && (
                                <p className="text-xs text-gray-400">
                                  マタタビは必要ありません。
                                </p>
                              )}
                            </div>
                          </div>

                          {/* マタタビの種 */}
                          <div>
                            <p className="text-xs font-semibold text-gray-600 mb-2">
                              マタタビの種
                            </p>
                            <div className="space-y-2">
                              {MATATABI_ORDER.filter(
                                (t) => (totalsMatatabiSeeds[t] ?? 0) > 0
                              ).map((t) => (
                                <div
                                  key={t}
                                  className="flex items-center justify-between text-sm"
                                >
                                  <span className={`font-medium ${MATATABI_COLOR_CLASS[t]}`}>
                                    {MATATABI_SEED_LABELS[t]}
                                  </span>
                                  <span className={`font-semibold ${MATATABI_COLOR_CLASS[t]}`}>
                                    {totalsMatatabiSeeds[t] ?? 0} 個
                                  </span>
                                </div>
                              ))}
                              {MATATABI_ORDER.every(
                                (t) => (totalsMatatabiSeeds[t] ?? 0) === 0
                              ) && (
                                <p className="text-xs text-gray-400">
                                  マタタビの種は必要ありません。
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 space-y-6">
            {/* SEO説明文 */}
            <div className="max-w-3xl mx-auto text-sm text-gray-600">
              <h2 className="font-semibold text-base mb-2">
                にゃんこ大戦争 進化素材チェッカーとは？
              </h2>
              <p>
                本ツールは、にゃんこ大戦争のキャラクター進化に必要な
                獣石・獣結晶・マタタビ・マタタビの種をまとめて計算できる
                非公式の進化素材チェッカーです。
                第3形態から第4形態への進化素材や、飛脚ネコ・ルーザなどのタマゴキャラにも対応しています。
              </p>
            </div>

            {/* クレジット */}
            <div className="text-center text-xs text-gray-400 space-y-1">
              <p>※ 誤りがある場合は作成者までご連絡ください</p>
              <p>
                作成者はこちら{' '}
                <a
                  href="https://www.youtube.com/@palm4646_mgc"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  https://www.youtube.com/@palm4646_mgc
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
