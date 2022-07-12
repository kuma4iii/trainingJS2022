window.onload = function() {

}

let dialog; // ダイアログ要素
let message_dialog; // メッセージ

function showEditDialog(button) {
    
    const tr = button.closest('tr');

    const array = [tr.cells[0].textContent, tr.cells[1].textContent, tr.cells[2].textContent, tr.cells[3].textContent];

    dialog = document.getElementById('dialog'); // ダイアログ要素取得
    // ダイアログ内の入力フォームにテーブルの値を入れる
    const input_name = document.getElementById('name');
    const input_age = document.getElementById('age');
    const input_gender = document.getElementById('gender');
    const input_address = document.getElementById('address');

    input_name.value = array[0];
    input_age.value = array[1];
    input_gender.value = array[2];
    input_address.value = array[3];

    // ダイアログ表示
    dialog.showModal();
}

function showCreateDialog(button) {
    
    dialog = document.getElementById('dialog'); // ダイアログ要素取得

    // ダイアログ表示
    dialog.showModal();
}

function okDialog(button) {
    const input_name = document.getElementById('name');
    const input_age = document.getElementById('age');
    const input_gender = document.getElementById('gender');
    const input_address = document.getElementById('address');

    console.log =(input_name.value + input_age.value + input_gender.value + input_address.value);

    dialog.close();
}

function cancelDialog() {

    console.log = "キャンセルボタンが押下されました。";

    dialog.close();
}