import angular from 'angular';

import config from './config';
import locationController from './controller';
import service from './service';

let location = angular.module('tiy.location', []);

location.config(config);
location.controller('LocationController', locationController);
location.service('LocationService', service);

export default location
