function signUp(){

    for (var element of document.getElementsByClassName("alert")) {
        element.style.display = "none";
      }

        var db = OpenMyDatabase();
        SelectAllRecord(db);
        }

        function OpenMyDatabase() {
        var dbsize = 1000;
        var dbname = "qaDB";
        var dbversion = "1.0";
        var dbdescription = "QandAdatabase"
        var db = window.openDatabase(dbname, dbversion, dbdescription, dbsize);
        if (db == null) {
        alert("データベースが開けませんでした。");
        }
        return db;
        }

        function SelectAllRecord(dbobj){
        dbobj.transaction(
            function loginDb(transact) {
               transact.executeSql("SELECT * FROM user_info", [],
                   function getLoginUser(rt, rs) {
                        var login_user = document.getElementById("user_id");
                        var login_pass = document.getElementById("user_password");
                        var user_id = login_user.value;
                        var user_password = login_pass.value;
                        var id_pass_set = [user_id, user_password];

                          for (var i = 0; i < rs.rows.length; i++) {
                            var row = rs.rows.item(i);
                            var row_set = [row.login_id, row.login_password];
                            for (var element of document.getElementsByClassName("alert")) {
                                element.style.display = "none";
                              }

                            if(JSON.stringify(id_pass_set) === JSON.stringify(row_set)){
                            //画面遷移
                                break;
                            }else if(JSON.stringify(id_pass_set) !== JSON.stringify(row_set)){
                                for (var element of document.getElementsByClassName("alert")) {
                                     element.style.display = "block";
                                  }
                            }
                        }


                        function message() { alert("ERROR"); }
                    }
        );
    }
);
}

