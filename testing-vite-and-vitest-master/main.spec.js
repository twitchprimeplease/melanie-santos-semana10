import {getData} from './main.js';
import {organiceData} from './main.js'
import {testProducts} from './test-producs.js'

describe('filter', ()=> {
    it('organiceData function with no category', ()=> {
        
        const elem = document.createElement('div');
        elem.setAttribute('id', 'products-container');

        organiceData(testProducts);

        expect(elem.querySelector()).toEqual('');

    
    })
});