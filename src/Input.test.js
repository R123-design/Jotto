import React from 'react';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from './Input';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setUp = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store}/>)
    console.log(wrapper.debug());
}

setUp();

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders the component without errors', () => {

        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

        });
    })
    describe('word has been guessed', () => {
        test('renders the component without errors', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submit button', () => {

        });
    })
});

describe('updating', () => {

});