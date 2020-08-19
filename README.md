# eNanoAi - A Simple Demo

## Features

A Single Page Application:

This project is a quick prototype prepared for eNanoAi without backend functionalities. To develop this demo I used mocked static data. The uploading and downloading of the models are mocked as well and have no real functionality for now.

- Upload the model - using react-dropzone to drag and drop the model.
- Setting of the required parameters - using material-ui components as radio button and Checkbox to select the desire parameters.
- Display the Model Analysis - using react-vis a composable charting library. The compressed models will be display on a chart and by clicking on each model user can see more details and download it.
- Responsive - since the demo is a targeted for desktop computers (different screen sizes), however, the mobile is not supported.

http://enanoai.com.s3-website.eu-central-1.amazonaws.com/

## Installation

Install dependencies

```
npm install
```

Run local development server

```
npm start
```

## Tech

- react
- react-dropzone
- react-vis
- material-ui
- css
- Amazon S3
