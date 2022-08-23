window.onload = function () {
  //課題１
  //拡張For文を使って「apple」だけをコンソールに出力してください。
  let fluits = ["banana", "lemmon", "apple", "grape", "banana"];
  console.log("-----------------------kadai1-----------------------");
  //ここに課題１のソースコード記載↓
  for (var fluit of fluits) {
    if (fluit == fluits[2]) {
      console.log(fluit);
    }
  }

  //課題２
  //拡張For文を使って「banana」を２回コンソールに出力してください。
  console.log("-----------------------kadai2-----------------------");
  //ここに課題２のソースコード記載↓
  for (var fluit of fluits) {
    if (fluit == "banana") {
      console.log(fluit);
    }
  }

  //課題３
  //拡張For文を使って「idが3のユーザの氏名」をコンソールに出力してください。
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
  console.log("-----------------------kadai3-----------------------");
  //ここに課題３のソースコード記載↓
  for (var user of user_json_list) {
    if (user.id == 3) {
      console.log(user.last_name + user.first_name);
    }
  }

  //課題４
  //拡張For文とoutputFirstNameを使って男性のユーザのファーストネームだけをコンソールに出力してください。
  function outputFirstName(user_json) {
    console.log(user_json.first_name);
  }
  console.log("-----------------------kadai4-----------------------");
  //ここに課題４のソースコード記載↓
  for (var user_json of user_json_list) {
    if (user_json.gender == 1) {
      outputFirstName(user_json);
    }
  }
};
