# rn-ui-libs

<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
        <img src="https://image.flaticon.com/icons/svg/3281/3281284.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">rn-ui-libs</h3>
  <p align="center">
    <a href="https://github.com/othneildrew/Best-README-Template">Run examples</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Contribue</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Tested UI libraries ](#tested-ui-libraries)
- [Run examples](#run-examples)
- [Screenshots](#screenshots)
- [Render time](#render-time)
- [Components availability](#components-availability)
- [Contributing](#contributing)
  <!-- ABOUT THE PROJECT -->

## About The Project

[product-screenshot]
This project aim to help you finding the best ui library for your next react native app, by giving you a detailed benchmark about the most popular react-native ui libraries, their best use cases, their limits, as well as their performance.
You will find all the needed information in this page, also you can clone the project and see how these libraries works in real life by running the samples under the "packages" folder.

### Tested UI libraries

Below is a list of the tested ui libraries in this project :

- [React Native Elements](https://react-native-elements.github.io/react-native-elements/) : Cross Platform React Native UI Toolkit
- [React Native Paper](https://callstack.github.io/react-native-paper/) : Cross-platform Material Design for React Native
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) : React Native UI Library based on Eva Design System
- [Ant Design Mobile](https://mobile.ant.design/) : A UI component library based on Preact / React / React Native
- [Shoutem](https://shoutem.github.io/docs/ui-toolkit/introduction) : UI toolkit enables you to build professionally looking React Native apps with ease.
- [Teaset](https://github.com/rilyu/teaset) : A UI library for react native, provides 20+ pure JS(ES6) components, focusing on content display and action control.
- [NativeBase](https://nativebase.io/) : Cross-platform UI components for React Native & Vue Nativ
- [Material Kit](https://demos.creative-tim.com/material-kit-react-native/docs/?_ga=2.146360692.1129554279.1597731518-51190660.1597731518#/) : Free react native app template for building e-commerce mobile applications.

## Run examples

The example apps are creates as packages under this project, and we are using [Lerna](https://github.com/lerna/lerna) to manage these packages.
So if you want to test one of these apps, you can use this command :
```
npx lerna --socpe=<PackageName> yarn start 
```
expamle :
```
// To run the react-native-elements example app 
npx lerna --scope=Elements yarn start
```
## Screenshots
- React Native Elements 
![react-native-elements](https://miro.medium.com/max/1200/0*n8UTS0aLvo1pn4He.gif)
- React Native Paper 
![react-native-paper](https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2020/02/reactuikitten.png?resize=730%2C337&ssl=1)
- Ui kitten 
![react-native-paper](https://madewithnetwork.ams3.cdn.digitaloceanspaces.com/spatie-space-production/2713/react-native-ui-kitten-3.jpg)
- [Ant design mobile](https://user-images.githubusercontent.com/25769573/38863111-4a1e94ae-4269-11e8-8e20-97c014551dc6.png)
- [NativeBase](https://miro.medium.com/max/368/1*3OepjeZE7Pv5Uep_Rpz3Ow.png)
- [MaterialKit](https://demos.creative-tim.com/material-kit-pro-react-native/assets/img/iphonex.png)
- [Teaset](https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2020/02/teaset.png?resize=645%2C548&ssl=1)
- [Shoutem](https://images.shoutem.com/wp-content/uploads/2016/11/27140754/feature-image-4-1170x655.jpg)

## Render time

A list of the most used components and their render time in the different UI libraries
| Components | Elements | Paper | Kitten | Ant | Shoutem | Teaset | NativeBase | MaterialKit |
| -------------- | :-----------: | -----: | ------------: | -----: | ------------: | -----: | ------------: | -------: |
| Button | 138.06 ms | 140.04 ms | 139.12 ms | 138 ms| 139.5 ms | 138.2 ms | 137.5 ms | 140.2 ms |
| Check Box | 120 ms | 120.2 ms | 120.7 | 126.9| NA | 121 ms | 120.44 ms | NA |
| Picker | NA| NA | NA | 145 ms | 142.3 ms | 144 ms | 148 ms | NA |
| Card | 165 ms | 165.2 ms| 165.9 ms | 164.1 ms| 167.6 ms | NA | 161 ms | NA |
| List | 110 ms | 112 ms | 111.22 ms | 112.8 ms |109.3 ms | 114.6 ms |108.6 ms | NA |
| Layout | NA | NA  | 178.5 ms|  180 ms |  NA | NA | NA | NA |

## Components availability

Before choosing your ui library you may want to know what libraries contains the most of what you need for your new project.
The table below is an availability of the most used components in the libraries we tested.

| Components | Elements | Paper | Kitten | Ant | Shoutem | Teaset | NativeBase | MaterialKit |
| -------------- | :-----------: | -----: | ------------: | -----: | ------------: | -----: | ------------: | -------: |
| Button | yes | yes| yes | yes | yes | yes | yes | yes |
| Check Box | yes | yes | yes | yes | no | yes | yes | no |
| Picker | no | no | no |yes | yes | yes | yes | no |
| Avatar |  yes | yes | yes |no| no | no | no | no |
| Layout |  no | no | yes |yes | no | no | no | no |
| Card |  yes | yes | yes |yes| yes | no | yes | no |
| Slider |  yes | no | no | yes | no | no | no | no |
| List |  yes | yes | yes |yes| yes | yes | yes | no |
| DataTabel |  no | yes | no |no| no | no | no | no |


<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
