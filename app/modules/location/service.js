class LocationService {
  constructor($q, $firebaseAuth) {
    this._$q = $q;

    /* STEP 1 - ADD YOUR URL HERE */
    this.ref = new Firebase("https://30-register-login.firebaseio.com/");
    this.auth = $firebaseAuth(this.ref);
  }

  isLoggedIn() {
    return this.auth.$requireAuth();
  }


  /* // Return an object representing a "new" location object with space for address, city, and state //*/
  new() {
    return {
      street: "",
      city: "",
      state: ""
    }
  }

  /*// function to save location ////////////////////////////////////*/
  addLocation() {
      this.location.$add({
        street: this.street,
        city: this.city,
        state: this.state
      });
    }
}

export default LocationService;
