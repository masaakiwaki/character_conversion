function hiragana2katakana(str) {
    return str.replace(/[\u3041-\u3096]/g, ch =>
      String.fromCharCode(ch.charCodeAt(0) + 0x60)
    );
  }


function hankaku2Zenkaku(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}



function zenkaku2Hankaku(str) {
    return str.replace(/[A-Za-z0-9]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
    });
}


function zenkana2Hankana(str) {
    var kanaMap = {
         "ガ": "ｶﾞ", "ギ": "ｷﾞ", "グ": "ｸﾞ", "ゲ": "ｹﾞ", "ゴ": "ｺﾞ",
         "ザ": "ｻﾞ", "ジ": "ｼﾞ", "ズ": "ｽﾞ", "ゼ": "ｾﾞ", "ゾ": "ｿﾞ",
         "ダ": "ﾀﾞ", "ヂ": "ﾁﾞ", "ヅ": "ﾂﾞ", "デ": "ﾃﾞ", "ド": "ﾄﾞ",
         "バ": "ﾊﾞ", "ビ": "ﾋﾞ", "ブ": "ﾌﾞ", "ベ": "ﾍﾞ", "ボ": "ﾎﾞ",
         "パ": "ﾊﾟ", "ピ": "ﾋﾟ", "プ": "ﾌﾟ", "ペ": "ﾍﾟ", "ポ": "ﾎﾟ",
         "ヴ": "ｳﾞ", "ヷ": "ﾜﾞ", "ヺ": "ｦﾞ",
         "ア": "ｱ", "イ": "ｲ", "ウ": "ｳ", "エ": "ｴ", "オ": "ｵ",
         "カ": "ｶ", "キ": "ｷ", "ク": "ｸ", "ケ": "ｹ", "コ": "ｺ",
         "サ": "ｻ", "シ": "ｼ", "ス": "ｽ", "セ": "ｾ", "ソ": "ｿ",
         "タ": "ﾀ", "チ": "ﾁ", "ツ": "ﾂ", "テ": "ﾃ", "ト": "ﾄ",
         "ナ": "ﾅ", "ニ": "ﾆ", "ヌ": "ﾇ", "ネ": "ﾈ", "ノ": "ﾉ",
         "ハ": "ﾊ", "ヒ": "ﾋ", "フ": "ﾌ", "ヘ": "ﾍ", "ホ": "ﾎ",
         "マ": "ﾏ", "ミ": "ﾐ", "ム": "ﾑ", "メ": "ﾒ", "モ": "ﾓ",
         "ヤ": "ﾔ", "ユ": "ﾕ", "ヨ": "ﾖ",
         "ラ": "ﾗ", "リ": "ﾘ", "ル": "ﾙ", "レ": "ﾚ", "ロ": "ﾛ",
         "ワ": "ﾜ", "ヲ": "ｦ", "ン": "ﾝ",
         "ァ": "ｧ", "ィ": "ｨ", "ゥ": "ｩ", "ェ": "ｪ", "ォ": "ｫ",
         "ッ": "ｯ", "ャ": "ｬ", "ュ": "ｭ", "ョ": "ｮ",
         "。": "｡", "、": "､", "ー": "ｰ", "「": "｢", "」": "｣", "・": "･",
    }
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            // .replace(/゛/g, 'ﾞ')
            // .replace(/゜/g, 'ﾟ');
};



function hankana2Zenkana(str) {
    var kanaMap = {
        'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
        'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
        'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
        'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
        'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
        'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
        'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
        'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
        'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
        'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
        'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
        'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
        'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
        'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
        'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
        'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
        'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
        'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
        '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・',
    };

    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');
};


function zenspace2Hanspace(str) {
    var kanaMap = {
        '　': ' '
    }
    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/゛/g, 'ﾞ')
            .replace(/゜/g, 'ﾟ');
};


function hanspace2Zenspace(str) {
    var kanaMap = {
        ' ': '　'
    };

    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');
};


function smalleKana2largeKana(str) {
    var kanaMap = {
        'ｧ': 'ｱ', 'ｨ': 'ｲ', 'ｩ': 'ｳ', 'ｪ': 'ｴ', 'ｫ': 'ｵ',
        'ｯ': 'ﾂ', 'ｬ': 'ﾔ', 'ｭ': 'ﾕ', 'ｮ': 'ﾖ',
    };

    var reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
    return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
};


// const hankaku2Zenkaku = (str) => {
//     return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
//         return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
//     });
//   };
  
const findInteger = (str) => {
return str.replace(/[^0-9.]/g, "");
};

const dotHankaku2Zenkaku = (str) => {
return str.replace(/[．０-９]/g, function (wc){
    var zen="．。０１２３４５６７８９",han = "..0123456789";return han[zen.indexOf(wc)];
});
};

const amountValidation = (str) => {
    str = hankaku2Zenkaku(str);
    str = dotHankaku2Zenkaku(str);
    str = findInteger(str);
    return Number(str);
  };



const outTaxCalc = (getTax, getAmount) => {
    resultTax = getAmount / getTax
    resultAmout = getAmount
    return [resultTax, resultAmout] 
}


const inTaxCalc = (getTax, getAmount) => {
    resultTax = getAmount - (getAmount / (getTax + 100) * 100)
    resultAmout = getAmount / (getTax + 100) * 100
    return [resultTax, resultAmout] 
}


const createAmountString = (resultAmout, taxType) => {
    let resultAmoutYenStyle = resultAmout.toLocaleString()
    let resultAmoutYenStyleArray = [resultAmout, 
                                    resultAmoutYenStyle,
                                    `\xA5${resultAmoutYenStyle}.-`,
                                    `\xA5${resultAmoutYenStyle}(${taxType})`,
                                    `${resultAmoutYenStyle}円(${taxType})`,
                                    ]

    let resultAmountArray = []
    for (i in resultAmoutYenStyleArray) {
        resultAmountArray.push(resultAmoutYenStyleArray[i])
        console.log(resultAmountArray[i])

    }

    return resultAmountArray 

}


const appdata = {
    data() {
        return {
            sourceCharacter: "",
            resultCharacter: "",
            styleHiraganaKatakana: false,
            styleKatakanaSize: false,
            styleKatakana: "zenkaku",
            styleEisuu: "hankaku",
            styleSpace: "hankaku",
        }
        },
    methods:{
        characterConversion(event){
            let sourceString = this.sourceCharacter

            if (this.styleHiraganaKatakana == true) {
                sourceString = hiragana2katakana(sourceString)
            }

            if (this.styleKatakana == "zenkaku") {
                sourceString = hankana2Zenkana(sourceString)
            }

            if (this.styleKatakana == "hankaku") {
                sourceString = zenkana2Hankana(sourceString)
            }

            if (this.styleEisuu == "zenkaku") {
                sourceString = zenkaku2Hankaku(sourceString)
            }

            if (this.styleEisuu == "hankaku") {
                sourceString = hankaku2Zenkaku(sourceString)
            }

            if (this.styleSpace == "zenkaku") {
                sourceString = hanspace2Zenspace(sourceString)
            }

            if (this.styleSpace == "hankaku") {
                sourceString = zenspace2Hanspace(sourceString)
            }

            if (this.styleKatakanaSize == true) {
                sourceString = smalleKana2largeKana(sourceString)
            }

            this.resultCharacter = sourceString
        },













        taxCalc(event){
            this.amount = amountValidation(String(this.amount)) 
            if (event.target.id == 'out-tax') {
                result = outTaxCalc(this.taxRate, this.amount)
                this.resultTax = (Math.floor(result[0] * 100)) / 100
                this.resultAmout = (Math.floor(result[1] * 100)) / 100
                this.resultTaxOutAmoutStyleArray = createAmountString(this.resultAmout, '税別')
                this.resultTaxInAmoutStyleArray = createAmountString(this.resultAmout + this.resultTax, '税込')
            } else if (event.target.id == 'in-tax') {
                result = inTaxCalc(this.taxRate, this.amount)
                this.resultTax = (Math.floor(result[0] * 100)) / 100
                this.resultAmout = (Math.floor(result[1] * 100)) / 100
                this.resultTaxOutAmoutStyleArray = createAmountString(this.resultAmout, '税別')
                this.resultTaxInAmoutStyleArray = createAmountString(this.amount, '税込')
            } 
            },
        copyToClipboard(text) {
            navigator.clipboard.writeText(text)
            .then(() => {
                console.log("copied!")
                console.log(text)
            })
            .catch(e => {
                console.error(e)
            })
        }


        

        }
    }


let app = Vue.createApp(appdata).mount('#app')


