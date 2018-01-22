import chai from 'chai';
chai.use(require('sinon-chai'));
chai.use(require('chai-enzyme')());

global.expect = chai.expect;
const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);
global.mountPoint = mountPoint;
