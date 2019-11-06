{
  function initMap() {
    //------------------マップの表示------------------
    let LatLng = new google.maps.LatLng(35.649625, 139.709088);
    let Options = {
      zoom: 18,      //地図の縮尺値
      center: LatLng,    //地図の中心座標
      mapTypeId: 'roadmap'   //地図の種類
    };
    let map = new google.maps.Map(document.getElementById('map'), Options);
    //google.maps.Map関数。id='map'にoptionsを追加して表示する

    //------------------マーカーの表示------------------
    let markerOptions = {
      position: latlng, //マーカーを立てる位置
      map: map //マーカーを立てるマップ
    };
    let marker = new google.maps.Marker(markerOptions);
  };

}
