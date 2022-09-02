window.onload = function () {
  for (var user_json of user_data) {
    addUser(user_json);
  }

  for (var element of document.getElementsByClassName("redisplay")) {
    element.style.display = "none";
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

  for (var element of document.getElementsByClassName("redisplay")) {
    element.style.display = "block";
  }
  totalCheck = false;

  document.getElementById("redisplay_btn").innerHTML = input_text;
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

//検索条件削除機能
function redisplay() {
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

  for (var element of document.getElementsByClassName("redisplay")) {
    element.style.display = "none";
  }

  const input_search_form = document.getElementById("search_form");
  input_search_form.value = "";
}
