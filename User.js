window.onload = function() {
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
        "gender" : 0,
        "birth_date" : "1999-01-01",
        "address" : "東京都"
    },
    {
        "id" : 2,
        "last_name" : "佐藤",
        "first_name" : "花子",
        "gender" : 1,
        "birth_date" : "1995-01-01",
        "address" : "埼玉県"
    },
    {
        "id" : 3,
        "last_name" : "伊藤",
        "first_name" : "二郎",
        "gender" : 0,
        "birth_date" : "1997-01-01",
        "address" : "北海道"
    },
    {
        "id" : 4,
        "last_name" : "小林",
        "first_name" : "優子",
        "gender" : 2,
        "birth_date" : "1989-01-01",
        "address" : "千葉県"
    }
]

function addUser(user_json){
    console.log(user_json.last_name + user_json.first_name);
    console.log(user_json.birth_date);
    console.log(user_json.gender);
    console.log(user_json.address);

    // 誕生日を保持したDateインスタンスを生成
	var birthday = new Date(user_json.birth_date);
	
	// 今日の日付を保持したDateインスタンスを生成
	var today = new Date();

	// 現在の年から誕生年を減算
	var age = today.getFullYear() - birthday.getFullYear();

	// 現在の年で誕生日が来ていなければ減算
	if ( today < birthday.setFullYear( today.getFullYear() ) ){
	    age--;
	}


    // 性別の判定
    var gender_show;
    if(user_json.gender == 0){
        gender_show = "男";
    }else if(user_json.gender == 1){
        gender_show = "女";
    }else{
        gender_show = "その他";
    }
    
    var mytable = document.getElementById("tbl");
    var mytr = mytable.insertRow(1);
 
    //セルの追加
    var mycell1 = mytr.insertCell(0);
    var mycell2 = mytr.insertCell(1);
    var mycell3 = mytr.insertCell(2);
    var mycell4 = mytr.insertCell(3);
    var mycell5 = mytr.insertCell(4);

    mycell1.innerHTML = user_json.last_name;
    mycell2.innerHTML = user_json.first_name;
    mycell3.innerHTML = age;
    mycell4.innerHTML = gender_show;
    mycell5.innerHTML = user_json.address;

    var mycell6 = document.createElement("td");
    var input_text = document.createElement("input");
    input_text.setAttribute("type", "button");
    input_text.setAttribute("value", "編集");
    input_text.setAttribute("onclick", "showEditDialog(event)");
    input_text.setAttribute("id", user_json.id);
    input_text.dataset.user_id = user_json.id;
    mycell6.appendChild(input_text);
    mytr.appendChild(mycell6);
}

//ユーザー登録ダイアログ
function showCreateDialog(button) {
    
    dialog = document.getElementById('dialog'); // ダイアログ要素取得

    // ダイアログ表示
    dialog.showModal();
}

//ユーザー登録okボタン
function okDialog(button) {

    const input_last_name = document.getElementById('last_name');
    const input_first_name = document.getElementById('first_name');
    const input_age = document.getElementById('age');
    const input_gender = document.getElementById('gender');
    const input_address = document.getElementById('address');

    console.log(input_last_name.value + input_first_name.value + input_age.value + input_gender.value + input_address.value);

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
    var mycell5 = mytr.insertCell(4);
 
    mycell1.innerHTML = input_last_name.value;
    mycell2.innerHTML = input_first_name.value;
    mycell3.innerHTML = age;
    mycell4.innerHTML = input_gender.value;
    mycell5.innerHTML = input_address.value;

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
    const input_last_name = document.getElementById('last_name');
    const input_first_name = document.getElementById('first_name');
    const input_age = document.getElementById('age');
    const input_gender = document.getElementById('gender');
    const input_address = document.getElementById('address');
    const input_last_name2 = document.getElementById('last_name2');
    const input_first_name2 = document.getElementById('first_name2');
    const input_age2 = document.getElementById('age2');
    const input_gender2 = document.getElementById('gender2');
    const input_address2 = document.getElementById('address2');

    input_last_name.value = "";
    input_first_name.value = "";
    input_age.value = "";
    input_gender.value = "";
    input_address.value = "";
    input_last_name2.value = "";
    input_first_name2.value = "";
    input_age2.value = "";
    input_gender2.value = "";
    input_address2.value = "";

}

var user_editting;

//編集ダイアログ
function showEditDialog(event) {
    const input_last_name2 = document.getElementById('last_name2');
    const input_first_name2 = document.getElementById('first_name2');
    const input_age2 = document.getElementById('age2');
    const input_gender2 = document.getElementById('gender2');
    const input_address2 = document.getElementById('address2');

    const user_id = event.target.dataset.user_id;
    var user = user_data.find((v) => v.id == user_id);
    user_editting = user;
    input_last_name2.value = user.last_name;
    input_first_name2.value = user.first_name;
    input_age2.value = user.birth_date;
    input_gender2.selectedIndex = user.gender;
    input_address2.value = user.address;


    dialog2 = document.getElementById('dialog2'); // ダイアログ要素取得

    // ダイアログ表示
    dialog2.showModal();

}

//編集okボタン
function ok2Dialog(button) {
    const input_last_name2 = document.getElementById('last_name2');
    const input_first_name2 = document.getElementById('first_name2');
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

    console.log(user_editting);   

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