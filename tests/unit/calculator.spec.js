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

  it('multiple number clicks are concatenated', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('1');
    wrapper.vm.numberClick('2');
    wrapper.vm.numberClick('3');
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(12345);
  });

  it('multiple operations are chained together', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick('10');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('10');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(30);
  });

  it('clear click should clear total without affecting', () => {
    const wrapper = shallowMount(App);
    wrapper.vm.previousTotal = 10;
    wrapper.vm.add('2');
    wrapper.vm.clearClick();
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(50);
  });

})
