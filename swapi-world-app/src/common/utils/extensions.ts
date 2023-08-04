/* eslint-disable no-extend-native */
import { format } from './stringUtils';

// eslint-disable-next-line func-names
String.prototype.format = function () {
  // eslint-disable-next-line prefer-rest-params
  const args: IArguments = arguments;
  return format(args, this);
};
