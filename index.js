window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.743834, lng: -74.0449368 },
      zoom: 10
    });
  
    const malls = [
      { label: "모마박물관", name: "3일차 / 뉴욕의 대표적인 현대미술관 / 운영시간 매일 10:30~17:30 / 입장료 28달러 ", lat: 40.7614327, lng: -73.9776216 },
      { label: "덤보", name: "4일차 / 브루클린 hot 포토존 / 운영시간 매일 / 입장 무료 ", lat: 40.7035051, lng: -73.9895256 },
      { label: "브루클린브릿지", name: "4일차 / 세계최초 현수교 / 운영시간 매일 / 입장 무료 ", lat: 40.7063225, lng: -73.9972511 },
      { label: "월가", name: "4일차 / 세계경제의 중심 / 운영시간 상기 / 입장료 상기", lat: 40.7060361, lng: -74.0088256 },
      { label: "써밋", name: "5일차 / 뉴욕의 스카이라인을 한눈에 / 운영시간 매일 9:00~ 22:30 ", lat: 40.752764, lng: -73.9787461 },
      { label: "센트럴파크", name: "7일차 / 뉴욕의 도심속 거대한 공원 / 운영시간 매일 / 입장 무료 ", lat:40.7825547 , lng: -73.9655834 },
      { label: "베슬", name: "8일차 / 현대적 건축물 / 운영시간 매일 / 입장 불가 ", lat: 40.7538073, lng: -74.0021537 },
      { label: "하이라인", name: "8일차 / 폐선로를 이용한 건물사이 공원 / 운영시간 매일 / 입장 무료 ", lat: 40.7479925, lng:-74.0047649  },
      { label: "자연사박물관", name: "9일차 / 지구의 역사를 볼 수 있는곳 / 운영시간 매일 10:00 ~ 17:30 / 입장료 40달러 ", lat: 40.7813241, lng: -73.9739882 },
      { label: "첼시마켓", name: "10일차 / 복합문화 건물 / 운영시간 매일 8:00~ 22:00 / 입장 무료 ", lat: 40.7424396, lng: -74.0061439 },
      { label: "911박물관", name: "16일차 / 911테러에 관한 박물관 / 운영시간 9:00~19:00 / 입장 33달러 ", lat: 40.7115776, lng: -74.0133362 },
    ];
  
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
  
    malls.forEach(({ label, name, lat, lng }) => {
      const marker = new google.maps.Marker({
        position: { lat, lng },
        label,
        map
      });
      bounds.extend(marker.position);
  
      marker.addListener("click", () => {
        map.panTo(marker.position);
        infoWindow.setContent(name);
        infoWindow.open({
          anchor: marker,
          map
        });
      });
    });
  
    map.fitBounds(bounds);
  };
