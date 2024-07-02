/// <reference types="react-scripts" />
interface Window {
    ethereum: {
      isMetaMask?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeListener: (event: string, callback: (...args: any[]) => void) => void;
    };
}


declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}


declare module '../../fonts' {
  export const golos_text: { className: string };
}