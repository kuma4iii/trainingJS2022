window.onload = function () {
  for (var user_json of user_data) {
    addUser(user_json);
  }

  let select = document.getElementById("list_sort");
  select.onchange = (event) => {
    if (select.selectedIndex == 0) {
      user_data.sort(compareId);
    }

    if (select.selectedIndex == 1) {
      user_data.sort(compareGender);
    }

    if (select.selectedIndex == 2) {
      user_data.sort(compareBirthDate);
    }

    for (var user of user_data) {
      //tbody要素にある最後の行（tr要素）を削除
      var tableElem = document.getElementById("tbl");
      tableElem.tBodies[0].deleteRow(-1);

      //追加
      addUser(user);
    }
  };
};

function escapeHTML(string) {
  return string
    .replace(/&/g, "&lt;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

var dialog; // ダイアログ要素
var message_dialog; // メッセージ
var user_data = [
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

function searchList() {
  var input_search = document.getElementById("search_form");
  var input_text = input_search.value;
  var searchUser = user_data;
  var result = searchUser.filter((user) => {
    return user.last_name === input_text || user.first_name === input_text;
  });

  console.log(result);

  // 一覧の削除
  var row = tbl.rows.length;
  for (let i = 1; i < row; i++) {
    //tbody要素にある最後の行（tr要素）を削除
    var tableElem = document.getElementById("tbl");
    tableElem.tBodies[0].deleteRow(-1);
  }

  // 検索結果のみ表示
  for (var user of result) {
    addUser(user);
  }
}

function getUniqueId() {
  for (let i = 1; i < 9; i++) {
    user = user_data.find((v) => v.id == i);
    if (user === undefined) {
      return i;
    }
  }
}

function birthdayCalc(birthday_text) {
  // 誕生日を保持したDateインスタンスを生成
  var birthday = new Date(birthday_text);

  // 今日の日付を保持したDateインスタンスを生成
  var today = new Date();

  // 現在の年から誕生年を減算
  var age = today.getFullYear() - birthday.getFullYear();

  // 現在の年で誕生日が来ていなければ減算
  if (today < birthday.setFullYear(today.getFullYear())) {
    age--;
  }
  return age;
}

function genderJudge(gender_num) {
  // 性別の判定
  var gender_show;
  if (gender_num == 0) {
    gender_show = "未選択";
  } else if (gender_num == 1) {
    gender_show = "男";
  } else if (gender_num == 2) {
    gender_show = "女";
  } else {
    gender_show = "その他";
  }
  return gender_show;
}

function addUser(user_json) {
  console.log(user_json.last_name + user_json.first_name);
  console.log(user_json.birth_date);
  console.log(user_json.gender);
  console.log(user_json.address);

  var mytable = document.getElementById("tbl");
  var mytr = mytable.insertRow(1);

  //セルの追加
  var mycell1 = document.createElement("td");
  var input_text = document.createElement("input");
  input_text.setAttribute("type", "checkbox");
  input_text.setAttribute("value", user_json.id);
  input_text.setAttribute("class", "delete_checkbox");
  input_text.dataset.id = user_json.id;
  mycell1.appendChild(input_text);
  mytr.appendChild(mycell1);

  var mycell2 = mytr.insertCell(1);
  var mycell3 = mytr.insertCell(2);
  var mycell4 = mytr.insertCell(3);
  var mycell5 = mytr.insertCell(4);
  var mycell6 = mytr.insertCell(5);

  mycell2.innerHTML = escapeHTML(user_json.last_name);
  mycell3.innerHTML = escapeHTML(user_json.first_name);
  mycell4.innerHTML = birthdayCalc(user_json.birth_date);
  mycell5.innerHTML = genderJudge(user_json.gender);
  mycell6.innerHTML = escapeHTML(user_json.address);

  var mycell7 = document.createElement("td");
  var input_text = document.createElement("input");
  input_text.setAttribute("type", "button");
  input_text.setAttribute("value", "編集");
  input_text.setAttribute("onclick", "showEditDialog(event)");
  input_text.setAttribute("id", user_json.id);
  input_text.dataset.user_id = user_json.id;
  mycell7.appendChild(input_text);
  mytr.appendChild(mycell7);
}

//ユーザー登録ダイアログ
function showCreateDialog(button) {
  dialog_user = document.getElementById("dialog_user"); // ダイアログ要素取得

  // ダイアログ表示
  dialog_user.showModal();
}

//ユーザー登録okボタン
function okDialog(button) {
  const input_last_name_user = document.getElementById("last_name_user");
  const input_first_name_user = document.getElementById("first_name_user");
  const input_age_user = document.getElementById("age_user");
  const input_gender_user = document.getElementById("gender_user");
  const input_address_user = document.getElementById("address_user");

  console.log(
    input_last_name_user.value +
      input_first_name_user.value +
      input_age_user.value +
      input_gender_user.value +
      input_address_user.value
  );

  var obj = {
    id: getUniqueId(),
    last_name: input_last_name_user.value,
    first_name: input_first_name_user.value,
    gender: input_gender_user.selectedIndex,
    birth_date: input_age_user.value,
    address: input_address_user.value,
  };

  var flag = validationCheck(obj);
  if (flag) {
    user_data.push(obj);
    addUser(obj);

    clearInput();

    dialog_user.close();
  }
}

//ユーザー登録キャンセルボタン
function cancelDialog() {
  clearInput();

  console.log("キャンセルボタンが押下されました。");

  dialog_user.close();
}

function validationCheck(user_json) {
  var totalCheck = true;
  var last_name = user_json.last_name;
  var first_name = user_json.first_name;
  var gender = user_json.gender;
  var age = birthdayCalc(user_json.birth_date);
  var address = user_json.address;

  for (var element of document.getElementsByClassName("alert")) {
    element.style.display = "none";
  }

  //氏の長さエラー
  if (last_name.length > 10) {
    for (var element of document.getElementsByClassName("last_name_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //氏未入力エラー
  if (last_name.length == 0) {
    for (var element of document.getElementsByClassName(
      "last_name_none_alert"
    )) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //名の長さエラー
  if (first_name.length > 10) {
    for (var element of document.getElementsByClassName("first_name_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //名未入力エラー
  if (first_name.length == 0) {
    for (var element of document.getElementsByClassName(
      "first_name_none_alert"
    )) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //性別未入力エラー
  if (gender == 0) {
    for (var element of document.getElementsByClassName("gender_none_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //20歳未満登録エラー
  if (age < 20) {
    for (var element of document.getElementsByClassName("age_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //年齢未入力エラー
  if (user_json.birth_date == "") {
    for (var element of document.getElementsByClassName("age_none_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //住所の長さエラー
  if (address.length > 100) {
    for (var element of document.getElementsByClassName("address_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //住所未入力エラー
  if (address.length == 0) {
    for (var element of document.getElementsByClassName("address_none_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  return totalCheck;
}

function clearInput() {
  const input_last_name_user = document.getElementById("last_name_user");
  const input_first_name_user = document.getElementById("first_name_user");
  const input_age_user = document.getElementById("age_user");
  const input_gender_user = document.getElementById("gender_user");
  const input_address_user = document.getElementById("address_user");
  const input_last_name_edit = document.getElementById("last_name_edit");
  const input_first_name_edit = document.getElementById("first_name_edit");
  const input_age_edit = document.getElementById("age_edit");
  const input_gender_edit = document.getElementById("gender_edit");
  const input_address_edit = document.getElementById("address_edit");

  input_last_name_user.value = "";
  input_first_name_user.value = "";
  input_age_user.value = "";
  input_gender_user.value = "";
  input_address_user.value = "";
  input_last_name_edit.value = "";
  input_first_name_edit.value = "";
  input_age_edit.value = "";
  input_gender_edit.value = "";
  input_address_edit.value = "";

  for (var element of document.getElementsByClassName("alert")) {
    element.style.display = "none";
  }
}

var user_editting;

//編集ダイアログ
function showEditDialog(event) {
  const input_last_name_edit = document.getElementById("last_name_edit");
  const input_first_name_edit = document.getElementById("first_name_edit");
  const input_age_edit = document.getElementById("age_edit");
  const input_gender_edit = document.getElementById("gender_edit");
  const input_address_edit = document.getElementById("address_edit");

  const user_id = event.target.dataset.user_id;
  var user = user_data.find((v) => v.id == user_id);
  user_editting = user;
  input_last_name_edit.value = user.last_name;
  input_first_name_edit.value = user.first_name;
  input_age_edit.value = user.birth_date;
  input_gender_edit.selectedIndex = user.gender;
  input_address_edit.value = user.address;

  dialog_edit = document.getElementById("dialog_edit"); // ダイアログ要素取得

  // ダイアログ表示
  dialog_edit.showModal();
}

//編集okボタン
function ok2Dialog(button) {
  //各入力欄の要素を取得
  const input_last_name_edit = document.getElementById("last_name_edit");
  const input_first_name_edit = document.getElementById("first_name_edit");
  const input_age_edit = document.getElementById("age_edit");
  const input_gender_edit = document.getElementById("gender_edit");
  const input_address_edit = document.getElementById("address_edit");

  var obj = {
    id: getUniqueId(),
    last_name: input_last_name_edit.value,
    first_name: input_first_name_edit.value,
    gender: input_gender_edit.selectedIndex,
    birth_date: input_age_edit.value,
    address: input_address_edit.value,
  };

  var flag = validationCheck(obj);
  if (flag) {
    //showEditDialogでとっておいたuser_editting(編集中のユーザ)の値を変更
    user_editting.last_name = input_last_name_edit.value;
    user_editting.first_name = input_first_name_edit.value;
    user_editting.birth_date = input_age_edit.value;
    user_editting.gender = input_gender_edit.selectedIndex;
    user_editting.address = input_address_edit.value;

    // 一覧の再表示
    for (var user of user_data) {
      //tbody要素にある最後の行（tr要素）を削除
      var tableElem = document.getElementById("tbl");
      tableElem.tBodies[0].deleteRow(-1);

      //追加
      addUser(user);
    }
    clearInput();
    dialog_edit.close();
  }
}

//編集キャンセルボタン
function cancel2Dialog() {
  console.log("キャンセルボタンが押下されました。");

  clearInput();

  dialog_edit.close();
}

function compareBirthDate(a, b) {
  var r = 0;
  if (a.birth_date < b.birth_date) {
    r = -1;
  } else if (a.birth_date > b.birth_date) {
    r = 1;
  }

  return r;
}

function compareId(a, b) {
  var r = 0;
  if (a.id < b.id) {
    r = -1;
  } else if (a.id > b.id) {
    r = 1;
  }

  return r;
}

function compareGender(a, b) {
  var r = 0;
  if (a.gender < b.gender) {
    r = -1;
  } else if (a.gender > b.gender) {
    r = 1;
  }

  return -1 * r;
}

function userDelete() {
  var checkboxes = document.getElementsByClassName("delete_checkbox");
  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      var searchId = user_data;
      var result = searchId.filter((user) => {
        return user.id !== Number(checkbox.value);
      });
      console.log(result);
      user_data = result;
    }
  }

  //一覧の削除
  var tbl = document.getElementById("tbl");
  var row = tbl.rows.length;
  for (let i = 1; i < row; i++) {
    //tbody要素にある最後の行（tr要素）を削除
    var tableElem = document.getElementById("tbl");
    tableElem.tBodies[0].deleteRow(-1);
  }

  for (var user_json of user_data) {
    addUser(user_json);
  }
}
