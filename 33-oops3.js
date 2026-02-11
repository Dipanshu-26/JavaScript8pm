//method overloading vs method overriding

//Method Overloading -- Same method name, same class, but different method signatures (number/type of parameters).

// import java.util.*;

// public class Main {
//     public static void main(String[] args) {
//       System.out.println("java code!");
//       addition(1,2);
//       addition(1,2,3);
//       addition(1,2,3,4);
//       addition("dipanshu");
      
//     }
    
//     public static void addition(int a,int b){
//       System.out.println(a+b);
//     }
    
//     public static void addition(int a,int b,int c){
//       System.out.println(a+b+c);
//     }
    
//     public static void addition(int a,int b,int c,int d){
//       System.out.println(a+b+c+d);
//     }
    
//      public static void addition(String x){
//       System.out.println(x);
//     }
// }

//------------------------------------------------------
// class calc {
//     add(a,b){
//         console.log(a+b)
//     }
//     add(a,b,c){
//         console.log(a+b+c)
//     }
// }//not allowed js

//------------------------------------------------------

class calc{
    addition(a=undefined,b=undefined,c=undefined,d=undefined){
        if(a!=undefined && b!=undefined && c!=undefined && d!=undefined){
            console.log(a+b+c+d)
        }

        else if(a!=undefined && b!=undefined && c!=undefined){
            console.log(a+b+c)
        }

        else if(a!=undefined && b!=undefined){
            console.log(a+b)
        }
        else {
            console.log("2 values required for addition")
        }
    }
}
let ob = new calc()
console.log("------------")
ob.addition(1,2)
console.log("------------")
ob.addition(1,2,3)

ob.addition(1,2,3,4)

ob.addition(1)

//------------------------------------------------------------------------------