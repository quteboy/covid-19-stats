import React, { Component } from "react";
import { fetchData } from "./api";

//comps
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Charts from "./components/Charts/Charts";
//css
import styles from "./App.module.css";
import Covid19img from './images/image.png'

//
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  // await needs to be wrapped in a function so by asymc before
  //parenthesis but in lifecycle its done by writing ahead of componentdidmount
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.img} src={Covid19img} alt="COVID-19"/>
        {/* <Cards data={this.state.data}/>  traditional way of doing*/}
        <Cards data={data} />
        <Charts data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
