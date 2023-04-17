

const quiz=[
    {
        question:'日本人の血液型で一番多いのはA型です。では、世界的に見た場合に一番多いのは何型でしょうか？',
        answers:['A型',
        'B型',
        'O型',
        'AB型'
        ],
        correct:'O型'

    },{
        question:'コオロギの耳はどこにあるでしょうか？',
        answers:['顔の横',
        '頭頂部',
        'お尻',
        '足'
        ],
        correct:'足'
    },{
        question:'「学ラン」の「ラン」とはなんでしょうか？',
        answers:['花のラン',
        'オランダ',
        'ランダム',
        'ランキング'
        ],
        correct:'オランダ'

    },{
        question:'かつて、地震はある生き物によって引き起こされると信じられていました。その生き物とはなんでしょうか？',
        answers:['ナマズ',
        'ゴリラ',
        'ダチョウ',
        'カマキリ'
        ],
        correct:'ナマズ'

    },{
        question:'世界一高いティッシュボックス、その1箱の値段はいくらでしょうか？',
        answers:['700円',
        '5000円',
        '1万円',
        '10万円'

        ],
        correct:'1万円'
    },{
        question:'カップ麺に入っている「かやく」を漢字で書くとどうなるでしょうか？',
        answers:['火薬',
        '化薬',
        '加薬',
        '科薬'

        ],
        correct:'加薬'


    },{
        question:'牛乳を温めた時にできる膜の正体はなんでしょうか？',
        answers:['タンパク質',
        '砂糖',
        'カルシウム',
        '正体不明'

        ],
        correct:'タンパク質'

    },{
        question:'フルーツサンド発祥の国はどこでしょうか？',
        answers:['日本',
        'アメリカ',
        'フランス',
        'イタリア'

        ],
        correct:'日本'


    },{
        question:'海上自衛隊は、毎週金曜日に必ずあるものを食べています。それはなんでしょうか？？',
        answers:['クリームシチュー',
        'ハヤシライス',
        'カレー',
        'ハッシュドビーフ'
        

        ],
        correct:'カレー'



    },{
        question:'｢女の子だって暴れたい｣というコンセプトのもとで始まった女の子向けの大人気アニメシリーズはなんでしょうか？',
        answers:['プリキュア',
        'セーラームーン',
        'アイカツ',
        'たまごっち'
        

        ],
        correct:'プリキュア'

    },{
        question:'中学生からの人気が最も高い部活はなんでしょうか？',
        answers:['テニス',
        'バスケットボール',
        '卓球',
        '陸上'],
        correct:'テニス'


        
    },{
        question:'塾に通っている中学生の割合はどのくらいでしょうか？',
        answers:['約10%',
        '約30%',
        '約50%',
        '約70%'],
        correct:'約50%'


    },{
        question:'大人気漫画「鬼滅の刃」にて、藤の花は鬼にも有効な毒として描かれています。では、現実の藤の花の毒はどの程度の強さでしょうか？',
        answers:['人間には一切効かない',
        '摂りすぎると眩暈や吐き気がする',
        '少量でも人間の命に関わる',
        '毒は一切ない'],
        correct:'摂りすぎると眩暈や吐き気がする'

    },{
        question:'「中二病」という言葉を初めて使ったのは、ある芸能人です。それは誰でしょうか？',
        answers:['タモリ',
        '伊集院光',
        '久本雅美',
        '黒柳徹子'],
        correct:'伊集院光'

    },{
        question:'現在発売されている漫画雑誌の中で、最も長く続いているものはどれでしょうか？',
        answers:['週刊少年ジャンプ',
        '週刊少年マガジン',
        'りぼん',
        'なかよし'],
        correct:'なかよし'

    },{
        question:'大人気漫画「ワンピース」に登場するキャラクター「サンジ」は当初は違う名前になる予定だったそうです。予定ではどんな名前だったでしょうか？',
        answers:['メンマ',
        'チャーシュー',
        'ニタマゴ',
        'ナルト'],
        correct:'ナルト'

    },{
        question:'国民的アニメ「サザエさん」には、意外にも原作には登場していないキャラクターが多く登場しています。次のうち、原作にも登場した人物は誰でしょうか？',
        answers:['伊佐坂先生',
        '花沢さん',
        'サブちゃん',
        'アナゴさん'],
        correct:'伊佐坂先生'

    },{
        question:'NHKのマスコットキャラクター「どーもくん」は、ウサギのキャラクターの家に居候しています。そのウサギの名前はなんでしょうか？',        
        answers:['うさお',
        'うさみ',
        'うさじい',
        'うさぱあ'],
        correct:'うさじい'

    },{
        question:'東京ディズニーリゾートには、全部でいくつの隠れミッキーがあるでしょうか？',
        answers:['3個',
        '77個',
        '300個',
        '総数はわからない'],
        correct:'総数はわからない'
    }

    

    
]


const quizeLength=quiz.length;
let quizeIndex=0;
let score =0;






// const question='ゲーム市場、もっとも売れたゲーム機';

// const answers=['superfamicon',
// 'ps5',
// 'xbox',
// 'nds'
// ];

// const correct='nds';


//console.log(document.getElementsByTagName('div'));

//console.log(document.getElementById('js-question').textContent=question);

// document.getElementsByTagName('button')[0].textContent=answers[0];
// document.getElementsByTagName('button')[1].textContent=answers[1];
// document.getElementsByTagName('button')[2].textContent=answers[2];
// document.getElementsByTagName('button')[3].textContent=answers[3];
const $button=document.getElementsByTagName('button');
const buttonLength=$button.length;


const setupQuiz=()=>{

    document.getElementById('js-question').textContent=quiz[quizeIndex].question;
    let buttonIndex=0;
    //console.log(answers.length);
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent=quiz[quizeIndex].answers[buttonIndex];
        buttonIndex++;
    } 
}

setupQuiz();

// $button[0].textContent=answers[0];
// $button[1].textContent=answers[1];
// $button[2].textContent=answers[2];
// $button[3].textContent=answers[3];

// let buttonIndex=0;
// console.log(answers.length);
// while(buttonIndex<answers.length){
//     $button[buttonIndex].textContent=answers[buttonIndex];
//     buttonIndex++;
// }


const clickHandler=(e)=>{
    if(e.target.textContent===quiz[quizeIndex].correct){
        window.alert('correct');
        score++;

    }else{
        window.alert('false');
    }

    quizeIndex++;
    if(quizeIndex<quizeLength){
        setupQuiz();


    }else{
        window.alert('finish quiz あなたの正解数'+score+'/'+quizeLength+'です');
    }
}





// $button[0].addEventListener('click',(e)=>{
//     if(e.target.textContent===correct){
//         window.alert('correct');
//     }else{
//         window.alert('false');
//     }
// });

// $button[0].addEventListener('click',(e)=>{
//     clickHandler(e);
// });

// document.getElementsByTagName('button')[1].addEventListener('click',(e)=>{
//     clickHandler(e);
// });

// document.getElementsByTagName('button')[2].addEventListener('click',(e)=>{
//     clickHandler(e);
// });

// document.getElementsByTagName('button')[3].addEventListener('click',(e)=>{
//     clickHandler(e);
// });

const hantei=()=>{
    let handlerIndex=0;

    while(handlerIndex<buttonLength){
        $button[handlerIndex].addEventListener('click',(e)=>{
            clickHandler(e);
        });
        handlerIndex++;


    }
}

hantei();


