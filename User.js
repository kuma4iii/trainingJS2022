window.onload = function() {

}

let dialog; // ダイアログ要素
let message_dialog; // メッセージ
let user_data = [  
    {
        "id" : 1,
        "last_name" : "田中",
        "first_name" : "太郎",
        "gender" : 1,
        "birth_date" : "1999/01/01",
        "address" : "東京都"
    },
    {
        "id" : 2,
        "last_name" : "佐藤",
        "first_name" : "花子",
        "gender" : 2,
        "birth_date" : "1995/01/01",
        "address" : "埼玉県"
    },
    {
        "id" : 3,
        "last_name" : "伊藤",
        "first_name" : "二郎",
        "gender" : 1,
        "birth_date" : "1997/01/01",
        "address" : "北海道"
    },
    {
        "id" : 4,
        "last_name" : "小林",
        "first_name" : "優子",
        "gender" : 2,
        "birth_date" : "1989/01/01",
        "address" : "千葉県"
    }
]

//ユーザー登録ダイアログ
function showCreateDialog(button) {
    
    dialog = document.getElementById('dialog'); // ダイアログ要素取得

    // ダイアログ表示
    dialog.showModal();
}

//ユーザー登録okボタン
function okDialog(button) {
    const input_name = document.getElementById('name');
    const input_age = document.getElementById('age');
    const input_gender = document.getElementById('gender');
    const input_address = document.getElementById('address');

    console.log(input_name.value + input_age.value + input_gender.value + input_address.value);

    var mytable = document.getElementById("tbl");
 
    var mytr = mytable.insertRow(1);
 
    //セルの追加
    var mycell1 = mytr.insertCell(0);
    var mycell2 = mytr.insertCell(1);
    var mycell3 = mytr.insertCell(2);
    var mycell4 = mytr.insertCell(3);
 
    //textContentでもいいしinnnerHTMLでもいいし
    mycell1.innerHTML = input_name.value;
    mycell2.innerHTML = input_age.value;
    mycell3.innerHTML = input_gender.value;
    mycell4.innerHTML = input_address.value;

    // touroku

    dialog.close();
}

//ユーザー登録キャンセルボタン
function cancelDialog() {
    const input_name = document.getElementById('name');
    const input_age = document.getElementById('age');
    const input_gender = document.getElementById('gender');
    const input_address = document.getElementById('address');

    input_name.value = "";
    input_age.value = "";
    input_gender.value = "";
    input_address.value = "";

    console.log ("キャンセルボタンが押下されました。");

    dialog.close();
}

//編集ダイアログ
function showEditDialog(button) {
    const input_name = document.getElementById('name2');
    const input_age = document.getElementById('age2');
    const input_gender = document.getElementById('gender2');
    const input_address = document.getElementById('address2');
 

    // 親要素
    var parent = button.parentNode;

    var address = parent.previousElementSibling;
    console.log('address2', address.innerText);
    var gender = address.previousElementSibling;
    console.log('gender2', gender.innerText);
    var age = gender.previousElementSibling;
    console.log('age2', age.innerText);
    var name = age.previousElementSibling;
    console.log('name2', name.innerText);

    input_name.value = name.innerText;
    input_age.value = age.innerText;
    input_gender.value = gender.innerText;
    input_address.value = address.innerText;

    dialog2 = document.getElementById('dialog2'); // ダイアログ要素取得

    // ダイアログ表示
    dialog2.showModal();

}

//編集okボタン
function ok2Dialog(button) {
    const input_name = document.getElementById('name2');
    const input_age = document.getElementById('age2');
    const input_gender = document.getElementById('gender2');
    const input_address = document.getElementById('address2');

    console.log(input_name.value + input_age.value + input_gender.value + input_address.value);

    

    // touroku

    dialog2.close();
}

//編集キャンセルボタン
function cancel2Dialog() {
    const input_name = document.getElementById('name2');
    const input_age = document.getElementById('age2');
    const input_gender = document.getElementById('gender2');
    const input_address = document.getElementById('address2');

    input_name.value = "";
    input_age.value = "";
    input_gender.value = "";
    input_address.value = "";

    console.log ("キャンセルボタンが押下されました。");

    dialog2.close();
}