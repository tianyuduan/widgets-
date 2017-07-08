import React from 'react';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    // console.log('hello');
    this.state = { weather: null};
    this.queryAPI = this.queryAPI.bind(this);
    // this.weather =
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.queryAPI(position.coords.latitude, position.coords.longitude);
    });
  }

  queryAPI(lat, long){
    console.log(lat);
    console.log(long);
    let url = 'http://api.openweathermap.org/data/2.5/weather';
    let apiKey = "8819c83b8ca997c888c3549e10ff85a3";
    url += (`?lat=${lat}`+ `&lon=${long}`);
    url += `&APPID=${apiKey}`;
    console.log(url);

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE){
        const data = JSON.parse(xmlhttp.responseText);
        console.log(data);
        this.setState({weather: data});
        console.log(this.state.weather.main.temp);
      }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();

    // $.ajax({
    //   url: "http://api.openweathermap.org/data/2.5/weather",
    //   data: {lat: lat, long: long, APPID: "8819c83b8ca997c888c3549e10ff85a3"},
    //   context: document.body,
    //   success: function(data){
    //     data.lat = lat;
    //     data.long = long;
    //     this.setState({weather: data});
    //   }
    // });
  }

  render(){
    let content = <div></div>;

    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp.toFixed(1)} degrees</p>
                </div>;
    } else {
      content = <div className='loading'>loading weather...</div>;
    }
    return (
      <div>
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </div>
    );
  }
}
