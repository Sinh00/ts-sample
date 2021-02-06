// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("helloooooo   hahaha");
// // world.Koncha(root)
// world.sayHello(root);

// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic';
import { default as unknown } from "./basic/unknown";

// primitiveSample();
// notExistSample();
// anySample();
// unknown.unknownSample();

// import { logMessage } from './function/basic';
import * as log from "./function/basic";
import * as param from "./function/parameters";
// import * as objectsmaple from './object/object';
import objectSample from "./object/object";

// log.logMessage('Helo----');
// log.logMessage2('Helo----2');
// log.logMessage3('Helo----3');
// log.logMessage4('Helo----4');

// param.isUserSingleIn2('ABC');
// param.isUserSingleIn2('DEF');

// const sum = param.restParam(1, 2, 3, 4, 5, 6);
// console.log('sum = ', sum);

// const sum = param.restParam2([1, 2, 3, 4, 5, 6]);
// console.log('sum = ', sum);

objectSample();
