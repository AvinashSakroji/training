import React from 'react'
import Counter from './Counter'

import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {create} from 'react-test-renderer'

configure({adapter: new Adapter()});

describe("Counter Tests",()=>{

    it("should be created",()=>{
        const container = mount(<Counter/>);
        const instance = container.instance();
        expect(instance).toBeTruthy();
    });

    it("should have state count as 10",()=>{
        const container = mount(<Counter/>);
        const state = container.state();
        expect(state.count).toBe(10);
    });

    it("should increment count by 1",()=>{
        const container = mount(<Counter/>);  
        const instance = container.instance();
        instance.inc();

        const state = container.state();
        expect(state.count).toBe(11);
    });

    it("should increment count by 1 by button click",()=>{
        const container = mount(<Counter/>); 
        const button = container.find("#incBtn");
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        
        const state = container.state();
        expect(state.count).toBe(13);
    });

    it("snapshot",()=>{

        const container = create(<Counter/>);
        expect(container.toJSON()).toMatchSnapshot();

    })
});