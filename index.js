/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from './src/app/contextAPI/contextProvider'

AppRegistry.registerComponent(appName, () => Provider);
