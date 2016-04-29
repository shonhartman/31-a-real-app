class LocationService {
  constructor($q, $firebaseAuth, $firebaseArray) {
    this._$q = $q;
    this._$firebaseArray = $firebaseArray;
    this.ref = new Firebase("https://30-register-login.firebaseio.com/");
    this.auth = $firebaseAuth(this.ref);
  }

  login(user) {
    this.locations = this._$firebaseArray(this.ref.child('users').child(user.uid).child('locations'));
    return this.locations;
  }

  /* // Return an object representing a "new" location object with space for address, city, and state //*/
  new() {
    return {
      street: "",
      city: "",
      state: ""
    }
  }

  all() {
    return this.locations;
  }

  /*// function to save location ////////////////////////////////////*/
  addLocation(location) {
    this.locations.$add(location);
  }
}

export default LocationService;
