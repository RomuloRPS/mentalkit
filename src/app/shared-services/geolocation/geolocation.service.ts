import { Injectable } from '@angular/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

export class GeolocationResource {
    public latitude: string;
    public longitude: string;
    public valid: boolean;
    public accuracy: number;
}

@Injectable({
    providedIn: 'root'
})

export class GeolocationService {
  private watchPosition;
  private imgIsSelected;

  private savedGeolocation = {
      latitude: null,
      longitude: null,
      valid: false,
      accuracy: null
  };

  private actualGeolocation = {
      latitude: null,
      longitude: null,
      valid: false,
      accuracy: null
  };

  public constructor(
    private locationAccuracy: LocationAccuracy,
    private geoLocation: Geolocation
  ) {

  }

  public askToTurnOnGPS(address) {
      return new Promise((resolve, reject) => {
          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
              async () => {
                  // When GPS Turned ON call method to get Accurate location coordinates
                  await this.startGetLocation(address, resolve);
              },
              (error) => {
                  const response = {
                      latitude: null,
                      longitude: null,
                      valid: false,
                      accuracy: null
                  };

                  this.savedGeolocation = response;
                  reject();
              }
          );
      });
  }

  public startGetLocation(address, resolve) {
      const posOptions = {
          enableHighAccuracy: true,
          timeout: 60000,
          maximumAge: 0
      };

      let response = {
          latitude: null,
          longitude: null,
          valid: false,
          accuracy: null
      };

      this.watchPosition = this.geoLocation.watchPosition(posOptions).subscribe((resp: Geoposition) => {
          const coords = resp.coords;

          response.latitude = coords.latitude;
          response.longitude = coords.longitude;
          response.accuracy = coords.accuracy;

          const pi = Math.PI;
          const addressLat = Number(address.latitude * (pi / 180));
          const addressLng = Number(address.longitude * (pi / 180));
          const currentLat = Number(response.latitude * (pi / 180));
          const currentLng = Number(response.longitude * (pi / 180));
          const difLng = addressLng - currentLng;
          const distSin = Math.sin(currentLat) * Math.sin(addressLat);
          const distCos = (Math.cos(currentLat) * Math.cos(addressLat)) * (Math.cos(difLng));
          let dist = distSin + distCos;

          dist = Math.acos(dist) * 6371;

          const radiusKm = address.radius / 1000;

          if (dist < radiusKm) {
              response.valid = true;
          } else {
              response.valid = false;
          }

          if (response) {
              if (!this.imgIsSelected && response && response.accuracy <= 70) {
                  resolve();

                  if (!this.savedGeolocation) {
                      this.actualGeolocation = JSON.parse(JSON.stringify(response));
                      this.savedGeolocation = JSON.parse(JSON.stringify(response));
                  }

                  if (this.checkDistance(response) > 50) {
                      this.savedGeolocation = JSON.parse(JSON.stringify(response));
                      this.actualGeolocation = JSON.parse(JSON.stringify(response));
                  } else {
                      if (this.actualGeolocation && response.accuracy < this.actualGeolocation.accuracy) {
                          this.actualGeolocation = JSON.parse(JSON.stringify(response));
                          this.savedGeolocation = JSON.parse(JSON.stringify(response));
                      } else {
                          console.log('erro de geolocation');
                          this.actualGeolocation = JSON.parse(JSON.stringify(response));
                      }
                  }
              } else {
                  console.log('erro de localização');
              }
          }
      });
  }

  public stopGeolocation() {
      if (this.watchPosition) {
          this.watchPosition.unsubscribe();
      }
  }

  public checkDistance(currentAddress) {
      const pi = Math.PI;
      const addressLat = Number(currentAddress.latitude * (pi / 180));
      const addressLng = Number(currentAddress.longitude * (pi / 180));
      const currentLat = Number(this.savedGeolocation.latitude * (pi / 180));
      const currentLng = Number(this.savedGeolocation.longitude * (pi / 180));
      const difLng = addressLng - currentLng;
      const distSin = Math.sin(currentLat) * Math.sin(addressLat);
      const distCos = (Math.cos(currentLat) * Math.cos(addressLat)) * (Math.cos(difLng));
      let dist = distSin + distCos;

      return dist = Math.acos(dist) * 6371;
  }

  public getGeolocation() {
      return this.savedGeolocation;
  }

  public setImgSelect(option) {
      this.imgIsSelected = option;
  }

  public reset() {
      this.watchPosition = null;
      this.imgIsSelected = false;

      this.actualGeolocation = {
          latitude: null,
          longitude: null,
          valid: false,
          accuracy: null
      };

      this.savedGeolocation = {
          latitude: null,
          longitude: null,
          valid: false,
          accuracy: null
      };
  }
}
