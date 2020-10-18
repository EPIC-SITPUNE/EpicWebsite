import React, { Component, Fragment } from 'react';
import spinner from '../../assets/img/loading.gif';



export class Spinner extends Component {
  render() {
    return (
       <Fragment>
           <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
       </Fragment>
    );
  }
}



export default Spinner;