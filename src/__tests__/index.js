import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import RandomSquaresAvatar from '../index';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to have one svg', () => {
        const wrapper = shallow(<RandomSquaresAvatar height={100} width={50} />);
        expect(wrapper.find('svg')).to.have.length(1);
    });

});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<RandomSquaresAvatar height={100} width={50} rotate={10} />);
        expect(wrapper.props().height).to.equal(100);
        expect(wrapper.props().width).to.equal(50);
        expect(wrapper.props().rotate).to.equal(10);
        wrapper.setProps({ height: 200 });
        expect(wrapper.props().height).to.equal(200);
        wrapper.setProps({ width: 250 });
        expect(wrapper.props().width).to.equal(250);
        wrapper.setProps({ rotate: 50 });
        expect(wrapper.props().rotate).to.equal(50);
    });

});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {

    it('renders one svg', () => {
        const wrapper = render(<RandomSquaresAvatar height={100} width={50} />);
        expect(wrapper.find('svg').length).to.equal(1);
    });

});
