window.onload = function () {
  //課題5
  //アロー関数は通常の関数式を簡易的に表示するものです。
  //以下の二つの処理に違いはありません。(正確には少しあります。課題6に記述)
  //プログラミングの考え方として、基本的には短く簡易的なコードが望まれるので、積極的に使用して慣れましょう。
  //記述なしの課題、読んで理解
  console.log("-----------------------kadai5-----------------------");
  let fluits = ["banana", "lemmon", "apple", "grape", "banana"];
  fluits.map((fluit) => {
    if (fluit == "lemmon") {
      console.log("出力1: " + fluit);
    }
  });
  fluits.map(function (fluit) {
    if (fluit == "lemmon") {
      console.log("出力2: " + fluit);
    }
  });

  //課題6
  //アロー関数で大きく異なるのはthisの参照先です。（ちょっと難しいので完全に理解しなくても大丈夫です。）
  //記述なしの課題、読んで理解
  console.log("-----------------------kadai6-----------------------");
  //グローバル変数
  window.color = "red";

  //アロー関数
  let arrowFunc = (tag) => {
    console.log(tag + this.color);
  };
  let obj1 = {
    color: "yellow",
    func: arrowFunc,
  };
  arrowFunc(
    "直接呼び出したアロー関数の場合、this.colorはグローバル関数のred（２７行目）を参照: "
  );
  obj1.func(
    "Objectを指定したアロー関数の場合、this.colorはグローバル関数のred（２７行目）を参照: "
  );

  //通常の関数
  let sampleFunc = function (tag) {
    console.log(tag + this.color);
  };
  let obj2 = {
    color: "yellow",
    func: sampleFunc,
  };
  sampleFunc(
    "直接呼び出した通常関数の場合、this.colorはグローバル関数のred（２７行目）を参照: "
  );
  obj2.func(
    "Objectを指定した通常関数の場合、this.colorはyellow（４９行目）を参照: "
  );

  //課題7
  //以下のfind処理は通常関数を使用してidが1のユーザを検索し、コンソールに表示しているものです。
  //アロー関数を使用した、簡易版を記述してください。
  console.log("-----------------------kadai7-----------------------");
  var user_json_list = [
    {
      id: 1,
      last_name: "田中",
      first_name: "太郎",
      gender: 1,
      birth_date: "1999-01-01",
      address: "東京都",
    },
    {
      id: 2,
      last_name: "佐藤",
      first_name: "花子",
      gender: 2,
      birth_date: "1995-01-01",
      address: "埼玉県",
    },
    {
      id: 3,
      last_name: "伊藤",
      first_name: "二郎",
      gender: 1,
      birth_date: "1997-01-01",
      address: "北海道",
    },
    {
      id: 4,
      last_name: "山田",
      first_name: "優子",
      gender: 3,
      birth_date: "1989-01-01",
      address: "千葉県",
    },
    {
      id: 5,
      last_name: "山田",
      first_name: "一郎",
      gender: 1,
      birth_date: "1999-01-01",
      address: "東京都",
    },
  ];
  //通常関数でのfind
  function isId1(user_json) {
    return user_json.id == 1;
  }
  var user = user_json_list.find(isId1);
  console.log(user);
  //ここに課題7のソースコード記載↓

  var user = user_json_list.find((v) => v.id == 1);
  console.log(user);

  //課題8、9
  //window.onloadの外に記載

  //課題１０
  //id="kadaiC"のボタン押下で、valueとidをコンソールに出力する関数を"addEventListenerを使用して"作成してください。
  //addEventListener参考↓
  //https://www.javadrive.jp/javascript/event/index2.html
  //ここに課題10のソースコード記載↓
  let buttonC = document.getElementById("kadaiC");
  buttonC.addEventListener("click", buttonClick(buttonC));

  function buttonClick(button) {
    //let value = button.getAttribute("CCCC");
    //let id = document.getElementById("kadaiC");
    console.log("-----------------------kadai10,11-----------------------");
    console.log(
      "課題１０，１１: value = " + button.value + ", id = " + button.id
    );
  }
  //関数内に入れてください
  //詰まったのでいったん保留

  //課題１１
  let buttonD = document.getElementById("kadaiD");
  buttonD.addEventListener("click", buttonClick(buttonD));
};

//課題8
//以下は呼び出されたら第一引数であるvalueをコンソール出力する関数
//HTML側のボタンクリックで呼び出し
let clickSampleKadai8 = (value) => {
  //引数については「,」区切りで複数指定できる
  console.log("-----------------------kadai8 sample-----------------------");
  console.log(value);
};
//id="kadaiA"のボタン押下で、valueとidをコンソールに出力する関数を作成してください。
//条件：引数２つ
//ここに課題8のソースコード記載↓
let kadai8btn = (value, id) => {
  console.log("-----------------------kadai8-----------------------");
  console.log("課題８: value = " + value + ", id =" + id);
}; //関数内に入れてください

//課題9
//id="kadaiB"のボタン押下で、valueとidをコンソールに出力する関数を作成してください。
//条件：引数１つ
//ここに課題9のソースコード記載↓

let kadai9btn = (button) => {
  console.log("-----------------------kadai9-----------------------");
  console.log(button.value + button.id);
};
//関数内に入れてください
//引数１つで呼び出す方法がわからなかったため保留
