import React, { Component } from "react";
import UploadModel from "./UploadModel";
import ParameterSelection from "./ParameterSelection";
import Chart from "./Chart";
import "./Button.css";

export class CompressionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  handelChange = (e) => {
    // this.setState();
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return <UploadModel nextStep={this.nextStep} />;
      case 2:
        return <ParameterSelection nextStep={this.nextStep} />;
      case 3:
        return <Chart nextStep={this.nextStep} />;
    }
  }
}

export default CompressionPage;
