//登録ダイアログ郵便番号取得
function searchAddress(button) {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

  let search_address = document.getElementById("search_address");
  let address_user = document.getElementById("address_user");

  let param = search_address.value.replace("-", ""); //入力された郵便番号から「-」を削除
  let url = api + param;

  fetchJsonp(url, {
    timeout: 10000, //タイムアウト時間
  })
    .then((response) => {
      //error.textContent = ""; //HTML側のエラーメッセージ初期化
      return response.json();
    })
    .then((data) => {
      for (var element of document.getElementsByClassName("alert")) {
        element.style.display = "none";
      }
      var totalCheck = true;

      if (data.status === 400) {
        for (var element of document.getElementsByClassName(
          "address_error_alert"
        )) {
          element.style.display = "block";
        }
        totalCheck = false;
      } else if (data.results === null) {
        for (var element of document.getElementsByClassName(
          "address_defind_alert"
        )) {
          element.style.display = "block";
        }
        totalCheck = false;
      } else {
        address_user.value =
          data.results[0].address1 +
          data.results[0].address2 +
          data.results[0].address3;
      }
    });
}
false;

//編集ダイアログ郵便番号取得
function searchAddressEdit(button) {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let search_address_edit = document.getElementById("search_address_edit");
  let address_edit = document.getElementById("address_edit");
  let param = search_address_edit.value.replace("-", ""); //入力された郵便番号から「-」を削除
  let url = api + param;

  fetchJsonp(url, {
    timeout: 10000, //タイムアウト時間
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (var element of document.getElementsByClassName("alert")) {
        element.style.display = "none";
      }
      var totalCheck = true;

      if (data.status === 400) {
        for (var element of document.getElementsByClassName(
          "address_error_alert"
        )) {
          element.style.display = "block";
        }
        totalCheck = false;
      } else if (data.results === null) {
        for (var element of document.getElementsByClassName(
          "address_defind_alert"
        )) {
          element.style.display = "block";
        }
        totalCheck = false;
      } else {
        address_edit.value =
          data.results[0].address1 +
          data.results[0].address2 +
          data.results[0].address3;
      }
    });
}
false;
