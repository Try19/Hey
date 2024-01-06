const country = [
    { 
        text: '日本', 
        action: function() {             
            document.getElementById('us').style.display = "none";
            document.getElementById('jp').style.display = "";
            document.getElementById('optionsMenu').style.display = "none";
        } 
    },
    { 
        text: '美国', 
        action: function() {
            document.getElementById('us').style.display = "";
            document.getElementById('jp').style.display = "none";
            document.getElementById('optionsMenu').style.display = "none";
        } 
    }
    // 添加更多国家的对象和对应的操作
];

var dynamicData = [

  {
        group: 'FGO', 
    appName: 'Fate/Grand Order',
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ff/bf/66/ffbf6617-0a67-21dd-b7bc-218252f420f1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/350x350.png?', 
    options: [
        { label: "聖晶石 168個", value: "¥10,000" },
        { label: "聖晶石 77個", value: "¥4,900" },
        { label: "聖晶石 41個", value: "¥3,000" },
        { label: "聖晶石 21個", value: "¥1,600" },
        { label: "聖晶石 5個", value: "¥480" },
        { label: "刷新", value: "¥480" }
    ]
  },

  { 
    group: '咒术回战', 
    appName: '呪術廻戦 ファントムパレード',
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/73/94/50/739450af-fa77-340a-b4f8-de2b58127588/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/128x128bb.jpg', 
    options: [
        { label: 'スタートダッシュお得廻珠パックC', value: '¥10,000' },
        { label: 'スタートダッシュお得廻珠パックB', value: '¥5,000' },
        { label: 'スタートダッシュお得廻珠パックA', value: '¥480' },
        { label: '共鳴の魂片SSRパック', value: '¥5,000' },
        { label: '廻想の群晶SSRパック', value: '¥5,000' },
        { label: '毎月切り替えお得廻珠', value: '¥5,000' },
        { label: '有償廻珠G', value: '¥10,000' },
        { label: '有償廻珠F', value: '¥5,000' },
        { label: '有償廻珠E', value: '¥3,000' },
        { label: '有償廻珠D', value: '¥1,500' },
        { label: '有償廻珠C', value: '¥1,000' },
        { label: '有償廻珠B', value: '¥480' },
        { label: '有償廻珠A', value: '¥160' },
        { label: 'APパック付きお得廻珠パックA', value: '¥160' },
        { label: 'APパック付きお得廻珠パックB', value: '¥480' },
        { label: 'APパック付きお得廻珠パックC', value: '¥1,000' },
        { label: '育成応援パックA', value: '¥1,500' },
        { label: '育成応援パックB', value: '¥3,000' },
        { label: '年末年始お得廻珠パックD', value: '¥10,000' },
        { label: '年末年始お得廻珠パックC', value: '¥5,000' },
        { label: '年末年始お得廻珠パックB', value: '¥3,000' },
        { label: '年末年始お得廻珠パックA', value: '¥1,000' }
    ]
  },
  { 
    group: '初音未来',
    appName: 'プロジェクトセカイ カラフルステージ！ feat. 初音ミク',
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/a3/49/fe/a349fe83-d5ba-a813-a0a4-2d5827bb7c34/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/350x350.png?', 
    options: [
        { label: '[2024新春セール]クリスタルE', value: '¥3,000' },
        { label: '[2024新春セール]クリスタルF', value: '¥4,900' },
        { label: '[2024新春セール]クリスタルG', value: '¥10,000' },
        { label: '[毎月更新]プレミアムミッションパス', value: '¥2,000' },
        { label: 'カラフルパス～BASIC～', value: '¥480' },
        { label: 'カラフルパス～DELUXE～', value: '¥1,500' },
        { label: 'カラフルパス～PRECIOUS～', value: '¥3,000' },
        { label: 'リニューアル記念 初心者応援セット', value: '¥5,000' },
        { label: '初心者応援セットA', value: '¥480' },
        { label: '初心者応援セットB', value: '¥3,000' },
        { label: '初心者応援セットC', value: '¥10,000' },
        { label: 'お得なクリスタル D', value: '¥1,800' },
        { label: 'お得なクリスタル F', value: '¥4,900' },
        { label: 'お得なクリスタル G', value: '¥10,000' },
        { label: 'クリスタル G', value: '¥10,000' },
        { label: 'クリスタル F', value: '¥4,900' },
        { label: 'クリスタル E', value: '¥3,000' },
        { label: 'クリスタル D', value: '¥1,800' },
        { label: 'クリスタル C', value: '¥1,000' },
        { label: 'クリスタル B', value: '¥480' },
        { label: 'クリスタル A', value: '¥160' }
    ]
  },
  {
        group: '碧蓝航线', 
    appName: 'アズールレーン',
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c5/56/0e/c5560e00-8642-5c7a-4e22-7c209bea7aef/AppIcon-1x_U007emarketing-0-7-0-85-220.png/350x350.png?', 
    options: [
        { label: "貿易許可証（30日）", value: "¥1,000" },
        { label: "クルーズパス(23初冬)", value: "¥1,200" },
        { label: "指揮官レベルアップパック", value: "¥650" },
        { label: "新年福袋2024①", value: "¥3,800" },
        { label: "冬の水着福袋2023①(復刻)", value: "¥3,800" },
        { label: "PR艦船Ⅰ期交換アイテム", value: "¥1,200" },
        { label: "ダイヤ一船", value: "¥10,000" },
        { label: "ダイヤ大箱", value: "¥4,900" },
        { label: "ダイヤ小箱", value: "¥2,400" },
        { label: "ダイヤ一袋", value: "¥1,200" },
        { label: "ダイヤ一握り", value: "¥650" },
        { label: "ダイヤ一摘み", value: "¥160" },
        { label: "着任応援パック・Ⅰ", value: "¥320" },
        { label: "着任応援パック・Ⅱ", value: "¥1,500" },
        { label: "着任応援パック・ Ⅲ", value: "¥3,000" },
        { label: "着任応援パック・Ⅳ", value: "¥3,800" }
    ]
  },
  {
        group: '碧蓝档案', 
    appName: 'ブルーアーカイブ',
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/3a/89/9f/3a899f78-ee97-24fc-4afc-18bdf15d1e3d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/350x350.png?', 
    options: [
        { label: "マンスリーパッケージ", value: "¥1,000" },
        { label: "マンスリーパッケージ（ハーフ）", value: "¥480" },
        { label: "2weeksスタミナパッケージ", value: "¥480" },
        { label: "レポートパッケージ", value: "¥2,000" },
        { label: "贈り物セット月一パッケージ", value: "¥1,500" },
        { label: "製造用月一パッケージ", value: "¥2,000" },
        { label: "装備パッケージα", value: "¥1,000" },
        { label: "装備パッケージβ", value: "¥2,000" },
        { label: "装備パッケージγ", value: "¥2,000" },
        { label: "装備パッケージδ", value: "¥2,000" },
        { label: "装備パッケージε", value: "¥2,000" },
        { label: "新任教師用青輝石パッケージ", value: "¥160" },
        { label: "新任教師向けパッケージ", value: "¥160" },
        { label: "成長パッケージ", value: "¥1,000" },
        { label: "StartDash 星3確定募集", value: "¥2,000" },
        { label: "青輝石Ⅰ（limited）", value: "¥160" },
        { label: "青輝石Ⅱ（limited）", value: "¥480" },
        { label: "青輝石Ⅲ（limited）", value: "¥1,000" },
        { label: "青輝石Ⅳ（limited）", value: "¥1,500" },
        { label: "青輝石Ⅴ（limited）", value: "¥3,000" },
        { label: "青輝石Ⅵ（limited）", value: "¥4,900" },
        { label: "青輝石Ⅶ（limited）", value: "¥10,000" },
        { label: "青輝石Ⅶ（monthly）", value: "¥10,000" },
        { label: "青輝石Ⅶ（premium）", value: "¥10,000" },
        { label: "青輝石Ⅶ", value: "¥10,000" },
        { label: "2.5thアニバーサリー星3生徒セレクトパッケージ", value: "¥3,000" },
        { label: "2.5thアニバーサリー星3生徒募集パッケージ", value: "¥3,000" },
        { label: "2.5thアニバーサリークレジットパッケージ", value: "¥2,000" },
        { label: "2.5thアニバーサリー贈り物パッケージ", value: "¥2,000" },
        { label: "2.5thアニバーサリー成長パッケージ", value: "¥4,900" }
    ]
  },

  {
      group: '实况足球', 
    appName: 'eFootball™ 2024',
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/00/ff/2d/00ff2d6d-9724-15cd-cb36-cf38628646f9/PesMobile-1x_U007emarketing-0-7-0-85-220.png/350x350.png?', 
    options: [
    { label: "12800Coins(Paid10400+Free2400)", value: "$88.90" },
    { label: "5700Coins(Paid4860+Free840)", value: "$41.90" },
    { label: "3250Coins(Paid2930+Free320)", value: "$24.95" },
    { label: "2130Coins(Paid1950+Free180)", value: "$16.90" },
    { label: "1040Coins(Paid975+Free65)", value: "$8.39" },
    { label: "550Coins(Paid530+Free20)", value: "$4.59" },
    { label: "130Coins(PaidCoins130)", value: "$1.19" },
    { label: "260Coins(Paid130+Free130)", value: "$1.19" },
    { label: "840Coins(Paid530+Free310)", value: "$4.59" },
    { label: "3430Coins(Paid1950+Free1480)", value: "$16.90" }
    ]
  },

  {
        group: '代号鸢', 
    appName: '代號鳶-沉浸式劇情卡牌手遊',
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/bf/b2/9b/bfb29ba7-58a0-49c5-594c-45e7c1119ed7/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/350x350.png?', 
    options: [
  { label: '月毋相忘令', value: '$4.99' },
  { label: '長樂未央令', value: '$11.99' },
  { label: '地宮秘寶', value: '$14.99' },
  { label: '高級特訓証', value: '$12.99' },
  { label: '超值禮包1', value: '$0.99' },
  { label: '超值禮包2', value: '$1.99' },
  { label: '超值禮包3', value: '$2.99' },
  { label: '超值禮包4', value: '$3.99' },
  { label: '超值禮包5', value: '$4.99' },
  { label: '超值禮包6', value: '$5.99' },
  { label: '超值禮包7', value: '$9.99' },
  { label: '華麗禮包1', value: '$11.99' },
  { label: '華麗禮包2', value: '$14.99' },
  { label: '華麗禮包3', value: '$19.99' },
  { label: '華麗禮包4', value: '$23.99' },
  { label: '華麗禮包6', value: '$29.99' },
  { label: '60白金幣', value: '$0.99' },
  { label: '300白金幣', value: '$4.99' },
  { label: '900白金幣', value: '$14.99' },
  { label: '1800白金幣', value: '$29.99' },
  { label: '3000白金幣', value: '$49.99' },
  { label: '6000白金幣', value: '$99.99' },
  ]
 },

];
