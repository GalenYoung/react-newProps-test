import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import appStore from "./store/index";
import Layout from "./containers/layout/Layout"
import '!style-loader!css-loader!less-loader!./assets/sal-common.less';

render(
    <Provider store={appStore}>
        <Layout />
    </Provider>,
    document.getElementById("app")
);