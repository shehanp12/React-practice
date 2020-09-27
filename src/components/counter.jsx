import React ,{Component} from "react";

class Counter extends  Component{

       state={
           counter:0
       };

       render() {
           return(
               <div>
                  <span>{this.formatCount()}</span>
                   <button>Increment</button>
               </div>
           )
       }

       formatCount(){
           
       }
}

export  default  Counter;
