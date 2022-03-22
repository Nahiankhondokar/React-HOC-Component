import React, { Component } from 'react';

const CounterManage = (GetComponent) => {


    class HOCCounter extends Component{

        constructor(){
            super()

            this.state = {
                counter : 0
            }

        }


        render(){

            // Distectureing
            let { counter } = this.state;

            const handleIncrement = () => {
                this.setState( (prevState) => ({
                    counter : prevState.counter + 1
                }));
            }

            const handleDecrement = () => {
                this.setState( (prevState) => ({
                    counter : prevState.counter - 1
                }));
            }


            return (
                <GetComponent counter={ counter } increment = { handleIncrement } decrement = { handleDecrement }/>
            );
        }

    }




  return HOCCounter;
};

export default CounterManage;