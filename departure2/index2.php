<!DOCTYPE html>
<html>
<head>
<title>発車標</title>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="banner.css">
<?php
  require_once('getCSV.php');
?>
<script type="text/javascript" src="js/detailset/detailset.js"></script>
<!--<script type="text/javascript" src="js/jsfileimport.js"></script>-->
<!--<script type="text/javascript" src="js/detailset/detailcenter.js"></script>-->
<script type="text/javascript" src="js/variable.js"></script>
</head>
<body>
 <table>
<caption><p1><p2 id="Tstation"></p2><p2 id="kn"></p2>発車案内　現在時刻:<span id="TTime"></span></p1></caption>
    <tr>
      <th width="10%">時刻</th>
      <th width="15%"> 種別</th>
      <th width="20%">行先</th>
      <th width="5%">のりば</th>
      <th width="50%">案内</th>
    </tr>
    <p1>
    <tr>
      <td><p2 id="TFirHour"></p2>:<p2 id="TFirMin"></p2></td>
      <td class="shubetu"><p2 id="TFirType"></p2></td>
      <td><p2 id="TFirDes"></p2></td>
      <td class="railnumber" id="TFirNum"></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TFirDetail">本日の運転は終了しました</p2></p3></td>
      
    </tr>
    <tr>
      <td><p2 id="TSecHour"></p2>:<p2 id="TSecMin"></p2></td>
      <td class="shubetu"><p2 id="TSecType"></p2></td>
      <td><p2 id="TSecDes"></p2></td>
      <td class="railnumber" id="TSecNum"></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TSecDetail"></p3></td>
    </tr>
    <tr>
      <td><p2 id="TThiHour"></p2>:<p2 id="TThiMin"></p2></td>
      <td class="shubetu"><p2 id="TThiType"></p2></td>
      <td><p2 id="TThiDes"></p2></td>
      <td class="railnumber" id="TThiNum"></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TThiDetail"></p3></td>
    </tr>
    </p1>
  </table>
  <input id="btn" type="button" value="タイマー停止" />
  <input type="button"  value="更新" onclick="koshin()">
  <form action="index2.php" method = "POST">
    <select name= "stasele">
      <option value = "csv/TimeTable.csv">pattern1</option>
      <option value = "csv/JRS1.csv">北新地駅</option>
    </select>
    <input type="submit"name="submit"value="駅変更"/>
  </form>
<!--ここから2つ目の表-->
  <table>
<caption><p1><p2 id="Tstation2"></p2><p2 id="kn2"></p2>発車案内</p1></caption>
    <tr>
      <th width="10%">時刻</th><!--10,15,20,5,50 -->
      <th width="15%"> 種別</th>
      <th width="20%">行先</th>
      <th width="5%">のりば</th>
      <th width="50%">案内</th>
    </tr>
    <p1>
    <tr>
      <td><p2 id="TFirHour2"></p2>:<p2 id="TFirMin2"></p2></td>
      <td class="shubetu"><p2 id="TFirType2"></p2></td>
      <td><p2 id="TFirDes2"></p2></td>
      <td class="railnumber" id="TFirNum2"></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TFirDetail2"></p2></p3></td>
      
    </tr>
    <tr>
      <td><p2 id="TSecHour2"></p2>:<p2 id="TSecMin2"></p2></td>
      <td class="shubetu"><p2 id="TSecType2"></p2></td>
      <td><p2 id="TSecDes2"></p2></td>
      <td class="railnumber" id="TSecNum2"></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TSecDetail2"></p3></td>
    </tr>
    <tr>
      <td><p2 id="TThiHour2"></p2>:<p2 id="TThiMin2"></p2></td>
      <td class="shubetu"><p2 id="TThiType2"></p2></td>
      <td><p2 id="TThiDes2"></p2></td>
      <td class="railnumber" id="TThiNum2"></td>
      <td class="news-banner"><p3 class="news-banner__content"><p2 id="TThiDetail2"></p3></td>
    </tr>
    </p1>
  </table>
  
  <!--反対方面入れたい -->
  <!--ここから内部のこと-->
  

<script type="text/javascript" src="js/function1.js"></script>
<script type="text/javascript" src="js/Time.js"></script>
<script type="text/javascript" src="js/Timer.js"></script>
<script type="text/javascript" src="js/TimeShow.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/variable2.js"></script>
<script type="text/javascript" src="js/typeColor.js"></script>
<script type="text/javascript" src="js/detailStation.js"></script>
<script type="text/javascript" src="js/detailshow.js"></script>

</body>
</html>