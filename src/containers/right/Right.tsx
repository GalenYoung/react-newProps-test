import React, { PureComponent } from "react";
// import ConsumerComponents from "components/consumerComponents/ConsumerComponents";
import Style from "./right.less";

const rightData = [1, 2, 3, 4];

export default class Right extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    [].forEach(elem => { if (this[elem]) this[elem] = this[elem].bind(this) }, this);
  }

  render() {

    return (
      <article className={Style['right']}>
      <ul>
          {rightData.map(item => { return <li key={item}>{item}</li> })}
      </ul>
      {/* <ConsumerComponents/> */}
  </article>
    )
  }
}