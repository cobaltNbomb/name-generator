const app = Vue.createApp({
  data: () => ({
    list: [
      'ダンス',
      'カジノ',
      'ラップ',
      'パペット',
      'ピッチャー',
      'カッパ',
      'ひも',
      'サンタ',
      'あな',
      'ジョッキ',
      'ギャング',
      'くうき',
      'くさり',
      'ペンギン',
      'ロケット',
      'チーム',
      'サークル',
      'いもうと',
      'スタンプ',
      'パーツ',
      'ヒゲ',
      'ピザ',
      'フォーム',
      'カウボーイ',
      'シール',
      'スター',
      'くるま',
      'ゾウ',
      'ブラインド',
      'ベルリン',
      'ざぶとん',
      'エデン',
      'ジョッキー',
      'ライター',
      'タグ',
      'ホメロス',
      'デート',
      'フライ',
      'キング',
      'アルプス',
      'ライト',
      'スクリーン',
      'イヌ',
      'キリン',
      'エジプト',
      'プリンセス',
      'ちゅうごく',
      'ふうせん',
      'はなよめ',
      'ウミガメ',
      'ハチミツ',
      'テキサス',
      'ストライク',
      'ジャック',
      'ベルト',
      'ハンマー',
      'まてんろう',
      'クォーター',
      'めざめ',
      'ノア',
      'アラスカ',
      'タキシード',
      'サラダ',
      'リス',
      'ヨーロッパ',
      'デザート',
      'ギリシア',
      'ジャンプ',
      'パーティー',
      'イクラ',
      'ビール',
      'ネズミ',
      'マンモス',
      'ドローン',
      'スリッパ',
      'ポーカー',
      'フランス',
      'メーター',
      'フック',
      'ライン',
      'メール',
      'タカ',
      'モモ',
      'カッパ',
      'ペット',
      'さかな',
      'ビート',
      'トナカイ',
      'ゆめ',
      'クラゲ',
      'ヒョウ',
      'ドリル',
      'ウォッチ',
      'イス',
      'くさ',
      'カモ',
      'コンサート',
      'シャドウ',
      'ジャングル',
      'おやゆび',
      'ヒット',
      'サトウ',
      'ニンジン',
      'ドライブ',
      'リンク',
      'ウシ',
      'コップ',
      'キャンプ',
      'ルール',
      'パンダ',
      'イモ',
      'コーチ',
      'サル',
      'ヤシ',
      'タマネギ',
      'スポット',
      'ホーム',
      'しっぽ',
      'サーバー',
      'バブル',
      'ヤギ',
      'カード',
      'たいまつ',
      'スプリング',
      'タンス',
      'もち',
      'ブリキ',
      'サメ',
      'リンゴ',
      'リング',
      'おくじょう',
      'てぶくろ',
      'ブーツ',
      'ウッド',
      'レジェンド',
      'バイオリン',
      'ベビー',
      'カエサル',
      'カンガルー',
      'ミサイル',
      'ナッツ',
      'ミント',
      'ビタミン',
      'ドア',
      'チーズ',
      'ドイツ',
      'クラッシュ',
      'ボルト',
      'マスタード',
      'デッキ',
      'トースト',
      'チェック',
      'ストック',
      'スムージー',
      'スキー',
      'ブロック',
      'ドライバー',
      'タブレット',
      'ボタン',
      'コート',
      'ゾンビ',
      'スティック',
      'ショップ',
      'とうきょう',
      'ニュートン',
      'カニ',
      'オリーブ',
      'カバー',
      'どんぶり',
      'マーチ',
      'スプレー',
      'カモメ',
      'デスク',
      'ジュース',
      'バス',
      'モデル',
      'コロンブス',
      'プレス',
      'ロデオ',
      'マラソン',
      'サイクル',
      'ラウンド',
      'パチンコ',
      'ステージ',
      'バー',
      'ビスケット',
      'ペースト',
      'フィーバー',
      'はしご',
      'アポロ',
      'タップ',
      'グランド',
      'フェンス',
      'バスケット',
      'レコード',
      'ビキニ',
      'チューブ',
      'チャージ',
      'ネクタイ',
      'マジシャン',
      'ビニール',
      'ケンカ',
      'ギター',
      'くつした',
      'バター',
      'キャプテン',
      'エンジン',
      'レール',
      'タコ',
      'スイッチ',
      'デルタ',
      'ピーナッツ',
      'タイガー',
      'グリーン',
      'ロープ',
      'スタッフ',
      'ナイロン',
      'ヘルメット',
      'クイーン',
      'チュチュ',
      'サウンド',
      'アメリカ',
      'オルガン',
      'ノート',
      'ケチャップ',
      'ヘッド',
      'ハーフ',
      'ユニコーン',
      'ボス',
      'ウグイス',
      'ドレス',
      'ハート',
      'スナップ',
      'ソーダ',
      'マニキュア',
      'イギリス',
      'パン',
      'モヒカン',
      'ブレンド',
      'パンク',
      'ソウル',
      'ラッパ',
      'カナダ',
      'スパイ',
      'ブラジル',
      'ハワイ',
      'タイム',
      'バイキング',
      'ウェーブ',
      'リーダー',
      'イーグル',
      'スタジアム',
      'ガム',
      'キーパー',
      'パイロット',
      'カエル',
      'ルーレット',
      'スイング',
      'プレート',
      'ナイフ',
      'ベッド',
      'サロン',
      'インド',
      'インク',
      'あしがる',
      'レモン',
      'ディスク',
      'カミソリ',
      'ナポレオン',
      'オペラ',
      'フィギュア',
      'スケート',
      'サハラ',
      'ホース',
      'ハロウィン',
      'ルーム',
      'ギア',
      'ページ',
      'ドライヤー',
      'ケーブル',
      'タトゥー',
      'ブルース',
      'カモノハシ',
      'ノコギリ',
      'ファイル',
      'ボール',
      'アフリカ',
      'ボクサー',
      'パンツ',
      'ベーコン',
      'ケーキ',
      'ドラゴン',
      'ペダル',
      'スープ',
      'クジラ',
      'ペンタゴン',
      'ダイヤ',
      'ジャッジ',
      'ワゴン',
      'カンフー',
      'マグマ',
      'ナマケモノ',
      'イースター',
      'タワー',
      'スナック',
      'マッチ',
      'ゲーム',
      'オウム',
      'バナナ',
      'コーン',
      'ミルク',
      'ライフル',
      'かまくら',
      'オイル',
      'メガネ',
      'トロール',
      'マスク',
      'ダッシュ',
      'フルート',
      'サルサ',
      'ホテル',
      'マラカス',
      'タンク',
      'ウサギ',
      'ドラム',
      'ペンキ',
      'トランク',
      'ミイラ',
      'キック',
      'ネコ',
      'カフェ',
      'バッテリー',
      'エスパー',
      'センター',
      'ラジオ',
      'タイヤ',
      'ポイント',
      'カレー',
      'レーザー',
      'コミック',
      'ファイター',
      'オアシス',
      'セイウチ',
      'キス',
      'のぞみ',
      'ジム',
      'パイプ',
      'ウマ',
      'エイリアン',
      'メモリー',
      'パッド',
      'モール',
      'ストリート',
      'リムジン',
      'タイ',
      'レンガ',
      'モナリザ',
      'オレンジ',
      'ストーリー',
      'パプリカ',
      'クロス',
      'ブタ',
      'ワシントン',
      'エース',
      'サケ',
      'スイカ',
      'ブレーキ',
      'カボチャ',
      'ヒマラヤ',
      'ハリウッド',
      'コーヒー',
      'チップ',
      'スクラッチ',
      'トンネル',
      'ガス',
      'ダイコン',
      'ホイッスル',
      'チョーク',
      'レベル',
      'だいどころ',
      'ヴィーナス',
      'ラケット',
      'にんぎょう',
      'レモネード',
      'ライオン',
      'バット',
      'トルネード',
      'ゴースト',
      'ローマ',
      'シュート',
      'ペキン',
      'スペース',
      'ほこり',
      'ゴム',
      'ウィザード',
      'クリスマス',
      'プール',
      'アマゾン',
      'ロボット',
      'トリック',
    ],
    generatedName: '',
    randomNum_2:4,
    val: '',
  }),
  computed: {
    randomNum_1: function() {
      return Math.floor(Math.random() * this.list.length)
    },
    // num: Math.floor(Math.random() * this.list.length),
    // generate: function() {
        // generatedName = `${this.list[num]}, ${this.list[num]}`
      // }
    },
  methods: {
    generate: function() {
      let x = Math.floor(Math.random() * this.list.length);
      let y = Math.floor(Math.random() * this.list.length);
      this.val = this.list[x] + this.list[y]},
  },
}).mount('#app')