import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    // first grab the text from the box
    // second we're going to forward the url
    console.log('You changed the URL.')
    const storeId = this.storeInput.value;
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* JSX Comment */ }
        <h2>Please Enter A Store</h2>
        <input type="text" ref={(input)=> {this.storeInput = input}} required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes =  {
  router: React.PropTypes.object
}

export default StorePicker;
