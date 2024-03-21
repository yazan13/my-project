
import React, {Component} from "react";


class App extends Component{

    constructor(){
        super()
        this.state = { answer: 'Yes'}
    }


    render(){
        return(

            <h1>
              Do you Love me ? {this.state.answer} 
            </h1>
        )
    }
 }

    

export default App












// import React, {Component} from "react";
// import File from './File'



// class App extends Component{
//     render(){
//         return(

//             <div>
//                 <File name ="Yazan" name2="Monther" />
//                 <File name ="Yazan" name2="Monther"  />
//                 <File name ="Yazan" name2="Monther"  />
//             </div>
//         )
//     }
//  }

    

// export default App