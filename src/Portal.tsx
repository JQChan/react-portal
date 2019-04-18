import * as React from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactElement<any>;
  container: Element;
  onRendered?: () => void;
}

export default class Portal extends React.Component<IPortalProps, {}> {
  public container: null | Element = null;

  public portalRef = React.createRef();

  constructor(props: IPortalProps) {
    super(props);
    const { container } = this.props;
    this.container = container;
    this.getContainer = this.getContainer.bind(this);
  }

  /**
   * 组件出现
   */
  public componentDidMount() {
    console.log(this.portalRef);
    if (this.props.onRendered) {
      this.props.onRendered();
    }
  }

  /**
   * 组件移除
   */
  public componentWillUnmount() {
    this.container = null;
  }

  /**
   * 获取container
   */
  public getContainer() {
    return this.container;
  }

  public render() {
    const { children } = this.props;
    // return this.container ? createPortal(children, this.container) : null;
    return this.container
      ? createPortal(
          React.cloneElement(children, {
            ref: this.portalRef
          }),
          this.container
        )
      : null;
  }
}
