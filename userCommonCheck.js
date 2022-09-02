// 性別の判定
function genderJudge(gender_num) {
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

//エラー判定
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

  //氏の長さ判定
  if (last_name.length > 10) {
    for (var element of document.getElementsByClassName("last_name_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //氏未入力判定
  if (last_name.length == 0) {
    for (var element of document.getElementsByClassName(
      "last_name_none_alert"
    )) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //名の長さ判定
  if (first_name.length > 10) {
    for (var element of document.getElementsByClassName("first_name_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //名未入力判定
  if (first_name.length == 0) {
    for (var element of document.getElementsByClassName(
      "first_name_none_alert"
    )) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //性別未入力判定
  if (gender == 0) {
    for (var element of document.getElementsByClassName("gender_none_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //20歳未満登録判定
  if (age < 20) {
    for (var element of document.getElementsByClassName("age_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //年齢未入力判定
  if (user_json.birth_date == "") {
    for (var element of document.getElementsByClassName("age_none_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //住所の長さ判定
  if (address.length > 100) {
    for (var element of document.getElementsByClassName("address_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  //住所未入力判定
  if (address.length == 0) {
    for (var element of document.getElementsByClassName("address_none_alert")) {
      element.style.display = "block";
    }
    totalCheck = false;
  }

  return totalCheck;
}

//誕生日ソート
function compareBirthDate(a, b) {
  var r = 0;
  if (a.birth_date < b.birth_date) {
    r = -1;
  } else if (a.birth_date > b.birth_date) {
    r = 1;
  }

  return r;
}

//idソート
function compareId(a, b) {
  var r = 0;
  if (a.id < b.id) {
    r = -1;
  } else if (a.id > b.id) {
    r = 1;
  }

  return r;
}

//性別ソート
function compareGender(a, b) {
  var r = 0;
  if (a.gender < b.gender) {
    r = -1;
  } else if (a.gender > b.gender) {
    r = 1;
  }

  return -1 * r;
}
