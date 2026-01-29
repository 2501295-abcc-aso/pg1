// 各種魚の釣った数を管理する変数
let bassCount = 0;
let tunaCount = 0;
let ajiCount = 0;


// 初期化関数
function initializeCounts() {
    // ローカルストレージからデータを取得(取得できない場合は初期値を設定)
    bassCount = Number(localStorage.getItem("bassCount"));
    if (bassCount == null) {
        bassCount = 0;
        localStorage.setItem("bassCount", 0);
    }
    tunaCount = Number(localStorage.getItem("tunaCount"));
    if (tunaCount == null) {
        tunaCount = 0;
        localStorage.setItem("tunaCount", 0);
    }
    ajiCount = Number(localStorage.getItem("ajiCount"));
    if (ajiCount == null) {
        ajiCount = 0;
        localStorage.setItem("ajiCount", 0);
    }

    updateDisplay();
}

// 釣った数を表示
function updateDisplay() {
    document.getElementById("totalCount").textContent =
        "合計釣果:"+(bassCount+ tunaCount + ajiCount)+"匹";
    document.getElementById("bassCount").textContent =
        "ブラックバス:"+ bassCount +"匹";
    document.getElementById("tunaCount").textContent =
        "マグロ:"+ tunaCount +"匹";
    document.getElementById("ajiCount").textContent =
        "アジ:"+ ajiCount +"匹";
}


// 釣竿を投げる関数
function fishingRod() {
    // 選択されたエサの種類を取得
    const baitSelect = document.getElementById("baitSelect");
    const selectedBait = baitSelect.options[baitSelect.selectedIndex].value;

    // 現在の日時を取得
    const now = new Date();
    console.log("釣った時間:", now.toLocaleString());

    // 未選択の場合はアラートを表示する
    if (selectedBait === "") {
        alert("エサを選択してください");
        return;
    }

    // 今日の釣果を更新
    if(selectedBait == "bass"){
        bassCount++;
        localStorage.setItem("bassCount", bassCount);
    }else if (selectedBait == "tuna"){
        tunaCount++;
        localStorage.setItem("tunaCount", tunaCount);
    } else if (selectedBait == "aji"){
        ajiCount++;
        localStorage.setItem("ajiCount", ajiCount);
    }

    //表示を更新
    updateDisplay();
}

// リセット(リリース)関数
function releaseFish() {
    if(confirm("本当に釣った魚をリリースしますか?")){
        // ローカルストレージのデータを0に更新
        localStorage.setItem("bassCount", 0);
        localStorage.setItem("tunaCount", 0);
        localStorage.setItem("ajiCount", 0);
        // 釣った魚の数を0に更新
        bassCount = 0;
        tunaCount = 0;
        ajiCount  = 0;

        updateDisplay();
    }
}
