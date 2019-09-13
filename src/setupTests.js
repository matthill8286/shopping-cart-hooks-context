import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/* Globals only for tests */
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
