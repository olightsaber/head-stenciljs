/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyHeader {
    'fbIcon': string;
    'homeIcon': string;
    'homeUrl': string;
    'theTitle': string;
    'twitIcon': string;
  }
}

declare global {


  interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {}
  var HTMLMyHeaderElement: {
    prototype: HTMLMyHeaderElement;
    new (): HTMLMyHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'my-header': HTMLMyHeaderElement;
  }
}

declare namespace LocalJSX {
  interface MyHeader {
    'fbIcon'?: string;
    'homeIcon'?: string;
    'homeUrl'?: string;
    'theTitle'?: string;
    'twitIcon'?: string;
  }

  interface IntrinsicElements {
    'my-header': MyHeader;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-header': LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
    }
  }
}


