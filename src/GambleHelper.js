import React from "react";
import { ReactDOM } from "react";

// function GambleGame(){

//     return GameOptions();
// }

// function GameOptions(){
//     return EnterTeams();
// }

// function EnterTeams(){
//     return (
//         <div className="container">
//             <AddTeams/>

//         </div>


//     ) ;
// }

// class AddTeams extends React.Component() {

//     constructor(props){
//         super(props);
//         this.state = {
//             arr : [],
//         }
//     }

//     update(){
//         this.setState({arr : []})
//     }
//     SetTeams(data){
//         this.setState({ arr : this.state.arr.concat(data)})
//     }
//     render(){
//         return (

//             <Teams submitTeams= {this.SetTeams}/>


//         )
//     }


// }
//     //adds arrays of [a,b] to main array
//     //two inputs
//     //allow blanks
//     //if 

//     //both inputs blanks
   


// class Teams extends React.Component() {

//     constructor(props){
//         super(props);
//         this.state = {
//             arr : [],
//             HomeTeam : "",
//             AwayTeam : ""
//         }
//     }
  
//     submitTeams = () => {   
//         let result = [];
//         let home = this.state.HomeTeam.trim();
//         let away = this.state.AwayTeam.trim();
//         if((home !== "" || away !== "") &&
//          (home.length >0 || away.length >0)){
//         result.push(home,away);
//         this.setState({arr: result});
//          }
//          return this.state.arr;

//     }

//     render(){
//         return (
//         <>
//         <div class="row">

//                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
//                     <label htmlFor="input-0">Enter Team 1 (Home)</label>
//                     <input className="Form-Control Input" name="input-0" id="input-0" onChange={(e)=>this.setState({HomeTeam: e.target.value})} value={this.state.HomeTeam}></input>
//                 </div>

//                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
//                     <label htmlFor="input-1">Enter Team 2 (Away)</label>
//                     <input className="Form-Control Input" name="input-1" id="input-1" onChange={(e)=>this.setState({AwayTeam: e.target.value})} value={this.state.AwayTeam}></input>
//                 </div>
//             </div><div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                     <button type="submit" onClick={this.submitTeams}></button>

//                 </div>
                
//                 </>

        
//         )


// }}


// function Continue() {
//     return  ;
//     //Pick Teams options selected

//     //If single team selected or nothing seldected
// }

function ShowOutcomes(){


   let items =  [
    
    ['Team A', 'Team B'],
     ['Team C', 'Team D'], 
     ['Team E', 'Team F' ], 
     ['Team G', 'Team H'],
     ['CHELSEA'],
     ['BARCELONA'], 
     ['REAL'], 
     ['CITY'], 
     ['BAYERN'], 
     ['LIVERPOOL'], 
     ['ARSENAL'],
     ['SPURS'] 



];
   
   let items2 =  getItemsToUpper(items);
   
   let outcomes = GetOutcomes(items2).map(c=> c + " ");
 

   const divStyle = {
    color: 'blue',
    border: '1px',
  };
   
return ( 
 outcomes.map(element => {
    return( 
    <div className="outcome" style={divStyle}>{element}</div>   
    )

}
));
    

}


function getItemsToUpper(items = []) {
    var result =     (items).map((i) => i.map(j => j.toUpperCase()));
return result;     
}


function GetOutcomes(items) {
    let result = items.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
    return result;

}

function GetCount() {
    let count = 0;
    let outcomes = document.querySelectorAll(".outcome");
    count = outcomes.length;

    return (

        <div>Count is {count}</div>

    )
    
}

export {ShowOutcomes, GetCount}