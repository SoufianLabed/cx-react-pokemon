let tab  = [3,-4,0,0,1,0,0,-7,6,0,2,0,0,0,0,0,0,1,0,0,-7,0,6,0,2,0]   // 0,3,-4,1,-7,6,2,-1,0,0,0,0    let i = 0;   while(i<tab.length-1){       let y = 0             while (y<tab.length-1){           if(tab[y] == 0){           var x = tab[y+1]          tab[y+1] = tab[y]          tab[y] = x                    }           y++      }        i++  }   console.log(tab)
let tab  = [3,-4,0,0,1,0,0,-7,6,0,2,0,0,0,0,0,0,1,0,0,-7,0,6,0,2,0]

 // 0,3,-4,1,-7,6,2,-1,0,0,0,0


 let i = 0;

 while(i<tab.length-1){

     let y = 0 

     while (y<tab.length-1){

         if(tab[y] == 0){

         var x = tab[y+1]
         tab[y+1] = tab[y]
         tab[y] = x

         }

         y++
     }


     i++
 }

 console.log(tab)