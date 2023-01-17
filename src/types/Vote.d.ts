export {};

interface ReactEnv {
    REACT_APP_APIHOSTPORT: string;
}

declare global {
  interface Window {
    _env_: ReactEnv;
  }
}
