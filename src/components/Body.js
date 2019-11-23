import React, { Component } from 'react';

class Body extends Component {
  
  render() {
    console.log(this.props);

    // const { data } = this.props;
    return (
      <div>
        <h2>Aqui la lista</h2>
        {/* {data.map(data => {
          return (
            <div>
              <p>{data.title}</p>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Body;
