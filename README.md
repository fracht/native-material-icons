<p align="center">
  <img src="./assets/Media%20Preview.jpg" alt="Native Material Icons - Tiny Material Design icons for React Native." />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/native-material-icons">
    <img  alt="Package version" src="https://img.shields.io/npm/v/native-material-icons">
  </a>
  <a href="https://www.npmjs.com/package/native-material-icons">
    <img alt="Package downloads" src="https://img.shields.io/npm/dw/native-material-icons" />
  </a>
  <a href="https://www.npmjs.com/package/native-material-icons">
    <img alt="Vulnerabilities" src="https://img.shields.io/snyk/vulnerabilities/npm/native-material-icons">
  </a>
  <a  href="https://github.com/ArtiomTr/native-material-icons/issues">
    <img alt="issues" src="https://img.shields.io/github/issues/ArtiomTr/native-material-icons" />
  </a>
</p>

<p align="center">
  <a href="#installation">Installation</a> | 
  <a href="#usage">Usage</a> |
  <a href="#examples">Examples</a> |  
  <a href="#browse-icons">Browse icons</a>
</p>

## Why this library?

Because it is:
* 📦 Tiny - each downloaded svg is optimized by [svgo](https://github.com/svg/svgo#readme) and minified. This results in **0.5 kilobytes** icon size in average.
* 🌳 Tree shakable - your app won't grow dramatically, metro will automatically throw out unused icons from the bundle, resulting in small bundle size.
* 💪 Strongly typed - comes with TypeScript declarations, which will help you avoid common mistakes.
* 👋 Developer-friendly - doesn't require any additional configuration - simply install [react-native-svg](https://github.com/react-native-svg/react-native-svg#readme) as well as this package, and instantly begin using awesome icons.

## Installation

Install `react-native-svg` as well as this package:

```
npm i react-native-svg native-material-icons
```

Or with yarn:

```
yarn add react-native-svg native-material-icons
```

## Usage

```jsx
// Filled style
import { LightbulbIcon } from 'native-material-icons';

// Outlined style
import { LightbulbOutlinedIcon } from 'native-material-icons';

// Rounded style
import { LightbulbRoundIcon } from 'native-material-icons';

// Sharp style
import { LightbulbSharpIcon } from 'native-material-icons';

// Two tone style
import { LightbulbTwoToneIcon } from 'native-material-icons';
```

Or:

```jsx
// Filled style
import LightbulbIcon from 'native-material-icons/LightbulbIcon';

// Outlined style
import LightbulbOutlinedIcon from 'native-material-icons/LightbulbOutlinedIcon';

// Rounded style
import LightbulbRoundIcon from 'native-material-icons/LightbulbRoundIcon';

// Sharp style
import LightbulbSharpIcon from 'native-material-icons/LightbulbSharpIcon';

// Two tone style
import LightbulbTwoToneIcon from 'native-material-icons/LightbulbTwoToneIcon';
```

## Examples

Usage with [Native Base](https://github.com/GeekyAnts/nativebase#readme):

```jsx
import { Icon } from 'native-base';
import LightbulbIcon from 'native-material-icons/LightbulbIcon';

const App = () => {
    return (
        <Icon
            /* Specify icon component */
            as={LightbulbIcon}
            /* Supports color */
            color="gray.500"
            /* Supports sizes */
            size="md"
        />
    );
};
```

## Browse icons

Icons are downloaded from [Google Fonts](https://fonts.google.com/icons?selected=Material+Icons), so you can find all icons there.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT © [Artiom Tretjakovas](https://github.com/ArtiomTr)
