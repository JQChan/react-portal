import * as React from "react";
import { render } from "react-dom";
import Portal from "./Portal";

import "./styles.css";

class App extends React.Component {
  componentDidMount() {
    console.log("父组件渲染完成");
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Portal
          container={document.body}
          onRendered={() => console.log("渲染完成")}
        >
          <div>123</div>
        </Portal>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
