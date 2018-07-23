///<reference path='./../../../node_modules/immutable/dist/immutable.d.ts'/>
import React, { Component } from "react";
import { connect } from "react-redux";
import appStore, { layoutAction } from "store/index";
import { is } from 'immutable';
import Left from 'containers/left/Left';
import Right from 'containers/right/Right';
import Style from "./layout.less";

const rightData = [1, 2, 3, 4];

interface LayoutProps {
  layout: any
}

class Layout extends Component<LayoutProps>{
  constructor(props) {
    super(props);

    this.state = {};
  }

  shouldComponentUpdate(nextProps = {}, nextState = {}) {
    //React 中规定 state 和 props 只能是一个普通对象，所以比较时要比较对象的 value
    const thisProps = this.props || {}, thisState = this.state || {};

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }

    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true;
      }
    }

    for (const key in nextState) {
      if (thisState[key] !== nextState[key] && !is(thisState[key], nextState[key])) {
        return true;
      }
    }
    return false;
  }

  choiceEvent(e) {
    if (e.target.nodeName == 'LI') {
      const dataId = Number(e.target.getAttribute('data-id'));
      appStore.dispatch(layoutAction.changeTab(dataId))
    }
  }

  render() {
    const { layout } = this.props;

    return (
      <div className={Style['layoutBox']}>
        <Left
          dispatch={appStore.dispatch}
          layout={layout} />
        <Right />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const layout = state.get('layout');
  return { layout };
}

export default connect(mapStateToProps)(Layout);