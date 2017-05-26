const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzzer Test',function(){
  it('return fizz, buzz, fizz-buzz if divisible by 3, 5, 15 respectively',function(){
    const numArray= [
      {num:15, expected:'fizz-buzz'},
      {num:30, expected:'fizz-buzz'},
      {num:45, expected:'fizz-buzz'},
      {num:3, expected:'fizz'},
      {num:6, expected:'fizz'}, 
      {num:24, expected:'fizz'}, 
      {num:5, expected:'buzz'},  
      {num:20, expected:'buzz'},
      {num:25, expected:'buzz'},     
    ];
    numArray.forEach(input=>{
      const answer = fizzBuzz(input.num);
      answer.should.equal(input.expected);
    });
  });
});

