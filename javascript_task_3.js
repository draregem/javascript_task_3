Function wholenumber(number) 
{ let array=[];

    for(i=1; i<= number; i==){

     If(i%2==0 && i%3==0 && i%5==0){
        array.push("yu-gi-oh")}
          else if(i%3==0 && i%5==0){
            array.push("gi-oh");}

            else if(i%2==0 && i%5==0){
                array.push("yu-oh");}

              else if(i%2==0 && i%3==0){
                  array.push("yu-gi");}

                else if(i%5==0){
                    array.push("oh");}

                  else if(i%3==0){
                      array.push("gi");}

                    else if(i%2==0){
                        array.push("yu")}

                      else(array.push(i))
                         return array
                         console.log(array)
