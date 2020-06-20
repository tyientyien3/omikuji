'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '末吉'];
     // randomについてはメモにまとめてある     ↓ここは3とか数字でもいいけど変更があるたびに変えると面倒なのでresultsの配列の長さで取得。
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];


    // 出る確率を操作する　（上記だと全て平等な確率で出るようになっている）
    // const n = Math.random();
    //   if (n < 0.05) {
    //     btn.textContent = '大吉'; // 5%
    //   } else if (n < 0.2) {
    //     btn.textContent = '中吉'; // 15%
    //   } else {
    //     btn.textContent = '今日'; // 80%
    //   }
    



    // もっと簡単な書き方は下のやつ
    // switch (n) {
    //   case 0:
    //     btn.textContent = "大吉";
    //     break;
    //   case 1:
    //     btn.textContent = "中吉";
    //     break;
    //   case 2:
    //     btn.textContent = "小吉";
    //     break;

    // ↓

    // const results = ['大吉', '中吉', '小吉'];
    // btn.textContent results[n];
    // }


  });
}

