export const logMessage = (message: string): void => {
  console.log("Fuction basic sample 1: ", message);
};

export function logMessage2(message: string): void {
  console.log("Fuction basic sample 2: ", message);
}

export const logMessage3 = function (message: string): void {
  console.log("Fuction basic sample 3: ", message);
};

export const logMessage4 = (message: string): void =>
  console.log("Fuction basic sample 4: ", message);

export const alwaysTrhowErrow = (message: string): never => {
  throw new Error(message);
};

type LogMessage = (message: string) => void;
export const LogMessage6: LogMessage = (message) => {
  console.log("Fuction basic sample 6: ", message);
};

type FullLogMessage = {
  (message: string): void;
};
export const LogMessage7: FullLogMessage = (message) => {
  console.log("Fuction basic sample 7: ", message);
};
