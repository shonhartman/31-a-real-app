class LocationController {
  constructor(LocationService, UserService) {
    this._UserService = UserService;
    this._LocationService = LocationService;
    this.location = LocationService.new();

    this._UserService
    .isLoggedIn()
      .then((response) => {
        this.user = response;
        this.locations = LocationService.login(response);
      })
      .catch((error) => {
        this._$state.go("login");
      });

  }

  addLocation() {
    this._LocationService.addLocation(this.location);
    this.location = this._LocationService.new();
  }

}

export default LocationController;
