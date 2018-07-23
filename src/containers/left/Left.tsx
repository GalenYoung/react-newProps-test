import React, { PureComponent } from "react";
import { layoutAction } from "store/index";
import ProviderComponents from "components/providerComponents/ProviderComponents";
import Style from "./left.less";

const leftData = ["A", "B", "C", "D"];

interface LeftProps {
  layout: any,
  dispatch: any
}

export default class Left extends PureComponent<LeftProps> {
  constructor(props) {
    super(props);

    this.state = {};

    [
      'choiceEvent'
    ].forEach(elem => { if (this[elem]) this[elem] = this[elem].bind(this) }, this);
  }

  choiceEvent(e) {
    const { dispatch } = this.props;
    if (e.target.nodeName == 'LI') {
      const dataId = Number(e.target.getAttribute('data-id'));
      dispatch(layoutAction.changeTab(dataId))
    }
  }

  render() {
    const { layout } = this.props;

    return (
      <aside className={Style['left']}>
        <nav>
          <ul onClick={this.choiceEvent}>
            {leftData.map((item, index) => {
              return index === layout.get('activeTab') ?
                <li key={item} data-id={index} className={Style['active']}>{item}</li> :
                <li key={item} data-id={index}>{item}</li>
            })
            }
          </ul>
        </nav>
        <ProviderComponents />
      </aside>
    )
  }
}