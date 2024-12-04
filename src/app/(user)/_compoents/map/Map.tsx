"use client"

import { useState, useEffect } from "react"

export default function Map() {
  const [map, setMap] = useState<naver.maps.Map | null>(null)
  const [currentLocation, setCurrentLocation] =
    useState<naver.maps.LatLng | null>(null)

  useEffect(() => {
    const initializeMap = () => {
      // 제주도의 중심 위도, 경도 좌표
      const jejuCenter = new naver.maps.LatLng(33.4996, 126.5312)

      const mapOptions = {
        center: jejuCenter, // 제주도 중심 좌표로 초기화
        zoom: 15
      }

      const newMap = new naver.maps.Map("map", mapOptions)
      setMap(newMap)

      const radius = 50 // 반경 설정

      new naver.maps.Circle({
        map: newMap,
        center: jejuCenter, // 중심 좌표
        radius: radius, // 반지름
        strokeColor: "#FF0000", // 테두리 색
        strokeOpacity: 1, // 테두리 불투명도
        strokeWeight: 2, // 테두리 두께
        fillColor: "#FF0000", // 원 내부 색
        fillOpacity: 0.3 // 원 내부 불투명도
      })

      const marker = new naver.maps.Marker({
        position: jejuCenter,
        map: newMap,
        title: "제주도 중심"
      })

      // marker 클릭 시 나타나는 정보
      const infoWindow = new naver.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-size: 14px; color: black;">
            <strong>위치</strong><br />
            제주도
          </div>
        `
      })

      // marker 클릭 이벤트
      naver.maps.Event.addListener(marker, "click", () => {
        if (infoWindow.getMap()) {
          infoWindow.close()
        } else {
          infoWindow.open(newMap, marker)
        }
      })

      // 현재 위치 가져오기
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = new naver.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            )
            setCurrentLocation(location)
          },
          error => {
            console.error("Geolocation Error:", error)
          }
        )
      } else {
        console.error("Geolocation is not supported by this browser.")
      }
    }

    const script = document.createElement("script")
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`
    script.onload = () => initializeMap()
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const moveToCurrentLocation = () => {
    if (map && currentLocation) {
      // 지도 중심을 현재 위치로 이동
      map.setCenter(currentLocation)
    }
  }

  return (
    <main>
      <div
        id="map"
        style={{ width: "100%", height: "300px" }}>
        <button
          onClick={moveToCurrentLocation}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "10px",
            borderRadius: "10px",
            zIndex: 1,
            border: "none",
            cursor: "pointer"
          }}>
          현재 위치로 이동
        </button>
      </div>
    </main>
  )
}
