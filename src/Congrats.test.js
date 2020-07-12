import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../test/testUtils";
import Congrats from './Congrats';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setUp = (props={}) => {
    return shallow(<Congrats {...props}/>)
}

test('renders without errors', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
});

test('renders no text when `success` prop is false',() => {
    const wrapper = setUp({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('')


});

test('renders non-empty congrats message when `succcess` prop is true',() => {
    const wrapper = setUp({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});