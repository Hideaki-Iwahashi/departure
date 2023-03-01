<?php
$file = 'csv/TimeTable.csv';
$file2 = 'csv/NGY.csv';
if(isset($_POST["stasele"])) {
    // セレクトボックスで選択された値を受け取る
    $stationselect = $_POST["stasele"];
  
    // 受け取った値を画面に出力
   // echo $stationselect;
    $file=$stationselect;
  }
   if($file=='csv/JRS1.csv'){
    $file2='csv/JRS2.csv';
  }else if($file=='csv/TimeTable.csv'){
    $file2='csv/NGY.csv';
  }
$json_array = "0";
$json_array2 = "0";
$list = fopen($file, 'r');
$h = 0;
while ($array = fgetcsv($list, 1000, ",")) {
    for ($i = 0; $i < count($array); $i++) {
        $newarray[$h][$i] = $array[$i];
    }
    $h++;
}
$json_array = json_encode($newarray); //$newarrayはcsvデータをPHP配列に入れたもの
function gcsv($file, $json_array)
{
    return;
}

$list2 = fopen($file2, 'r');
$h2 = 0;
while ($array2 = fgetcsv($list2, 1000, ",")) {
    for ($i = 0; $i < count($array2); $i++) {
        $newarray2[$h2][$i] = $array2[$i];
    }
    $h2++;
}
$json_array2 = json_encode($newarray2); //$newarrayはcsvデータをPHP配列に入れたもの
function gcsv2($file, $json_array)
{
    return;
}
//gcsv($file1,$json_array1);
//echo $newarray[1][1];
?>
<script>
    var TimeTableJS = JSON.parse('<?php echo $json_array; ?>'); //csvデータがPHPからjavascriptへ
    var TimeTableJS2 = JSON.parse('<?php echo $json_array2; ?>'); //csvデータがPHPからjavascriptへ
    let title = TimeTableJS[0][0].split(" ");
    let title2 = TimeTableJS2[0][0].split(" ");
    let station = title[1];
    let station2 = title2[1];
    let stationN=station.slice(0,-1);
    let stationN2=station2.slice(0,-1);
    let dir = title[2].substr(0, 2);
    let dir2 = title2[2].substr(0, 2);
    console.log(title[2].substr(0, 2));
    console.log(TimeTableJS[51][1]);
    console.log(TimeTableJS2[51][1]);
    
</script>