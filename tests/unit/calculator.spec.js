import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });

  it('adding returns correct total', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 1;
    wrapper.vm.add('4');
    expect(wrapper.vm.runningTotal).to.equal(5);
  });

  it('subtracting returns correct total', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });

  it('multiplying returns correct total', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15);
  });

  it('dividing returns correct total', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3);
  });



})
