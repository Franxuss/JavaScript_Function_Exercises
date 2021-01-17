
   // From this line up Do not change code below
 /*  let str = "John";
   let resultado
   const rapid = (str) => resultado = str.replace(/o/g, '').toUpperCase();
    
console.log(rapid("John"));*/

const rapid = (x) => {
    
    var vocals = ["a","A","E","e","I","i","O","o","U","u"];
    var result = "";

        for(var i=0; i<x.length ; i++){
        var palabra=x[i];    
            for(var j=0; j<vocals.length;j++){
                if(x[i]===vocals[j]){
                    palabra="";                
                } 
            }
        result+=palabra; 
        }
    return result.toUpperCase();
};

let str = "John";
console.log(rapid(str));

 /*   
for(var i = 0; i<str.length ; i++){
       if(str.charAt(i) == 1){
           console.log("");
       }else{
           var string = ""
           string =+ str.charAt(i);
           
       }
      return string;
    }
*/

// for(var i=0; i<x.length; i++){
    //     if(vocals.includes(x[i])){
    //         result+="";
    //     }else{
    //         result+=x[i];
    //     }
    // }return result.toUpperCase();