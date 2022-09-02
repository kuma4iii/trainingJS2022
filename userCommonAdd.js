//ユーザーの追加
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
  var input_text = document.createElement("button");
  input_text.setAttribute(
    "class",
    "edit_btn btn btn-light bi bi-pencil-square"
  );
  input_text.setAttribute("onclick", "showEditDialog(event)");
  input_text.setAttribute("id", user_json.id);
  input_text.dataset.user_id = user_json.id;
  mycell7.appendChild(input_text);
  mytr.appendChild(mycell7);
  document.querySelector(".edit_btn").innerHTML = "編集";
}

//入力欄のクリア
function clearInput() {
  const input_last_name_user = document.getElementById("last_name_user");
  const input_first_name_user = document.getElementById("first_name_user");
  const input_age_user = document.getElementById("age_user");
  const input_gender_user = document.getElementById("gender_user");
  const input_address_user = document.getElementById("address_user");
  const input_search_address = document.getElementById("search_address");
  const input_last_name_edit = document.getElementById("last_name_edit");
  const input_first_name_edit = document.getElementById("first_name_edit");
  const input_age_edit = document.getElementById("age_edit");
  const input_gender_edit = document.getElementById("gender_edit");
  const input_address_edit = document.getElementById("address_edit");
  const input_search_address_edit = document.getElementById(
    "search_address_edit"
  );

  input_last_name_user.value = "";
  input_first_name_user.value = "";
  input_age_user.value = "";
  input_gender_user.value = "";
  input_address_user.value = "";
  input_search_address.value = "";
  input_last_name_edit.value = "";
  input_first_name_edit.value = "";
  input_age_edit.value = "";
  input_gender_edit.value = "";
  input_address_edit.value = "";
  input_search_address_edit.value = "";

  for (var element of document.getElementsByClassName("alert")) {
    element.style.display = "none";
  }
}
