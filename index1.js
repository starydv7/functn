function equilibrium(arr, n)
{
         var i, j;
         var leftsum, rightsum;
         for(i = 0; i < n; ++i)
         {
             leftsum = 0;
              for(let j = 0; j < i; j++)
              leftsum += arr[j];
              rightsum = 0;
              for(let j = i + 1; j < n; j++)
              rightsum += arr[j];   
              if(leftsum == rightsum)
                 return i;
         }
          
        
            return -1;
}
 var arr = new Array(-7,1,5,2,-4,3,0);
n = arr.length;
console.log(equilibrium(arr, n));