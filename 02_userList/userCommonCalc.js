//誕生日から年齢を計算
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

//idの付与
function getUniqueId() {
  for (let i = 1; i < 9; i++) {
    user = user_data.find((v) => v.id == i);
    if (user === undefined) {
      return i;
    }
  }
}
