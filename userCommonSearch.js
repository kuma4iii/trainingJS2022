//登録ダイアログ郵便番号取得
function searchAddress() {
  let search_address = document.getElementById("search_address");
  let address_user = document.getElementById("address_user");
  let error_a = document.getElementById("error_a");
  commonSearch(search_address, address_user, error_a);
}

//編集ダイアログ郵便番号取得
function searchAddressEdit() {
  let search_address_edit = document.getElementById("search_address_edit");
  let address_edit = document.getElementById("address_edit");
  let error_b = document.getElementById("error_b");
  commonSearch(search_address_edit, address_edit, error_b);
}

function commonSearch(aaa, bbb, eee) {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let param = aaa.value.replace("-", ""); //入力された郵便番号から「-」を削除
  let url = api + param;

  for (var element of document.getElementsByClassName("alert")) {
    element.style.display = "none";
  }

  fetchJsonp(url, {
    timeout: 10000, //タイムアウト時間
  })
    .then((response) => {
      eee.textContent = ""; //HTML側のエラーメッセージ初期化
      return response.json();
    })
    .then((data) => {
      if (data.status === 200) {
        if (data.results !== null) {
          bbb.value =
            data.results[0].address1 +
            data.results[0].address2 +
            data.results[0].address3;
        } else {
          eee.textContent = "郵便番号から住所が見つかりませんでした。";
          for (var element of document.getElementsByClassName("error")) {
            element.style.display = "block";
          }
          totalCheck = false;
        }
      } else if (data.status === 400) {
        eee.textContent = data.message;
        for (var element of document.getElementsByClassName("error")) {
          element.style.display = "block";
        }
        totalCheck = false;
      } else {
        eee.textContent = "予期せぬ処理が起こりました。";
        for (var element of document.getElementsByClassName("error")) {
          element.style.display = "block";
        }
        totalCheck = false;
      }
    })
    .catch((ex) => {
      //例外処理
      console.log(ex);
    });
}
false;
