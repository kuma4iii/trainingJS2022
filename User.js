window.onload = function() {
    var fruits = ['apple','orange','grape']
    for (var user_json of user_data) {

        addUser(user_json)

    }
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

function addUser(user_json){
    console.log(user_json.last_name + user_json.first_name);
    console.log(user_json.birth_date);
    console.log(user_json.gender);
    console.log(user_json.address);

    // 誕生日を保持したDateインスタンスを生成
	var birthday = new Date(user_json.value);
	
	// 今日の日付を保持したDateインスタンスを生成
	var today = new Date();

	// 現在の年から誕生年を減算
	var age = today.getFullYear() - birthday.getFullYear();

	// 現在の年で誕生日が来ていなければ減算
	if ( today < birthday.setFullYear( today.getFullYear() ) ){
	    age--;
	}

    if(user_json.gender == 1){
        user_json.gender = "男";
    }else if(user_json.gender == 2){
        user_json.gender = "女";
    }else{
        user_json.gender = "その他";
    }
    
    var mytable = document.getElementById("tbl");
    var mytr = mytable.insertRow(1);
 
    //セルの追加
    var mycell1 = mytr.insertCell(0);
    var mycell2 = mytr.insertCell(1);
    var mycell3 = mytr.insertCell(2);
    var mycell4 = mytr.insertCell(3);
 
    mycell1.innerHTML = user_json.last_name + user_json.first_name;
    mycell2.innerHTML = user_json.birth_date;
    mycell3.innerHTML = user_json.gender;
    mycell4.innerHTML = user_json.address;
}

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

    // 誕生日を保持したDateインスタンスを生成
	var birthday = new Date(input_age.value);
	
	// 今日の日付を保持したDateインスタンスを生成
	var today = new Date();

	// 現在の年から誕生年を減算
	var age = today.getFullYear() - birthday.getFullYear();

	// 現在の年で誕生日が来ていなければ減算
	if ( today < birthday.setFullYear( today.getFullYear() ) ){
	    age--;
	}

    var mytable = document.getElementById("tbl");
 
    var mytr = mytable.insertRow(1);
 
    //セルの追加
    var mycell1 = mytr.insertCell(0);
    var mycell2 = mytr.insertCell(1);
    var mycell3 = mytr.insertCell(2);
    var mycell4 = mytr.insertCell(3);
 
    mycell1.innerHTML = input_name.value;
    mycell2.innerHTML = age;
    mycell3.innerHTML = input_gender.value;
    mycell4.innerHTML = input_address.value;

    clearInput()

    // touroku

    dialog.close();
}

//ユーザー登録キャンセルボタン
function cancelDialog() {

    clearInput()

    console.log ("キャンセルボタンが押下されました。");

    dialog.close();
}

function clearInput(){
    const input_name = document.getElementById('name');
    const input_age = document.getElementById('age');
    const input_gender = document.getElementById('gender');
    const input_address = document.getElementById('address');
    const input_name2 = document.getElementById('name2');
    const input_age2 = document.getElementById('age2');
    const input_gender2 = document.getElementById('gender2');
    const input_address2 = document.getElementById('address2');

    input_name.value = "";
    input_age.value = "";
    input_gender.value = "";
    input_address.value = "";
    input_name2.value = "";
    input_age2.value = "";
    input_gender2.value = "";
    input_address2.value = "";

}

//編集ダイアログ
function showEditDialog(button) {
    const input_name2 = document.getElementById('name2');
    const input_age2 = document.getElementById('age2');
    const input_gender2 = document.getElementById('gender2');
    const input_address2 = document.getElementById('address2');
 
    // 親要素
    var parent = button.parentNode;

    var address = parent.previousElementSibling;
    console.log('address', address.innerText);
    var gender = address.previousElementSibling;
    console.log('gender', gender.innerText);
    var age = gender.previousElementSibling;
    console.log('age', age.innerText);
    var name = age.previousElementSibling;
    console.log('name', name.innerText);

    input_name2.value = name.innerText;
    input_age2.value = age.innerText;
    input_gender2.value = gender.innerText;
    input_address2.value = address.innerText;

    dialog2 = document.getElementById('dialog2'); // ダイアログ要素取得

    // ダイアログ表示
    dialog2.showModal();

}

//編集okボタン
function ok2Dialog(button) {
    const input_name2 = document.getElementById('name2');
    const input_age2 = document.getElementById('age2');
    const input_gender2 = document.getElementById('gender2');
    const input_address2 = document.getElementById('address2');

    // 誕生日を保持したDateインスタンスを生成
	var birthday = new Date(input_age2.value);
	
	// 今日の日付を保持したDateインスタンスを生成
	var today = new Date();

	// 現在の年から誕生年を減算
	var age2 = today.getFullYear() - birthday.getFullYear();

	// 現在の年で誕生日が来ていなければ減算
	if ( today < birthday.setFullYear( today.getFullYear() ) ){
	    age2--;
	}

    console.log(input_name2.value + age2 + input_gender2.value + input_address2.value);   

    clearInput()

    // touroku

    dialog2.close();
}

//編集キャンセルボタン
function cancel2Dialog() {

    console.log ("キャンセルボタンが押下されました。");

    clearInput();

    dialog2.close();
}