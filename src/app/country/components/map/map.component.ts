import { Component } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  ngAfterViewInit(): void {
    const map = new Map('map').setView([35.6785, 139.7502], 13);
    tileLayer(
      'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
      {
        maxZoom: 20,
        attribution:
          '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ).addTo(map);
    const marketItem = marker([51.5, -0.09])
      .addTo(map)
      .bindPopup('Londres marcador');

    map.fitBounds([[marketItem.getLatLng().lat, marketItem.getLatLng().lng]]);
  }
}
