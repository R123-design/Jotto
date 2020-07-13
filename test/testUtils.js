import checkPropTypes from "check-prop-types";
import { createStore } from 'redux';
import reducer from '../src/reducers'

export const storeFactory = (initialState) => {
  return createStore(reducer, initialState);
}


export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propsError).toBeUndefined();
};
