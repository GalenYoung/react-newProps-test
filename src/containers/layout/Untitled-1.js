import React, { PureComponent } from "react";
import { connect } from "react-redux";
import appStore, { layoutAction } from "store/index";
import Immutable from 'immutable';
import Style from "./layout.less";

const leftData = ["A", "B", "C", "D"];
const rightData = [1, 2, 3, 4];

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {};

    [
      'choiceEvent'
    ].forEach(elem => { if (this[elem]) this[elem] = this[elem].bind(this) }, this);
  }

  // shouldComponentUpdate(newProps/* , newState */){
  //   const $$newProps = Immutable.fromJS(newProps);
  //   const $$props = Immutable.fromJS(this.props);

  //   return !Immutable.is($$newProps,$$props);
  // } 

  choiceEvent(e) {
    if (e.target.nodeName == 'LI') {
      const dataId = Number(e.target.getAttribute('data-id'));
      appStore.dispatch(layoutAction.changeTab(dataId))
    }
  }

  render() {
    const { layout } = this.props;
    console.log(layout, "layout");
    return (
      <div className={Style['layout']}>
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
        </aside>
        <article className={Style['right']}>
          <ul>
            {rightData.map(item => { return <li key={item}>{item}</li> })}
          </ul>
        </article>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const layout = state.get('layout');
  console.log(layout,"layout");
  return { layout };
}

export default connect(mapStateToProps)(Layout);