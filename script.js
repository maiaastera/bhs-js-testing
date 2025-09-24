/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

function sleep_in(weekday,vacation){
    if(weekday == true && vacation == false){
        return false;
    } else {
        return true;
    }
} 

function string_times(str,num){
    var answer = "";
    for(let i   = 0; i < num; i++){
        answer += str ;
    }
    return answer;
}

function monkey_trouble(a_smile, b_smile){
    if((a_smile == true && b_smile == true) || (a_smile == false && b_smile == false)){
        return true;
    } else {
        return false;
    }
}

function front_times(str, num){
    var answer = "";
    for(let i = 1; i <= num; i++){
        answer += str.substring(0,3);
    }
    return answer;
}

function string_bits(str){
    var answer = str.substring(0,1);
    for(let i = 2; i < str.length; i = i+2){
        answer += str.substring(i,i+1);
    }
    return answer;
}

function caughtSpeeding(int, birthday){
    var result = "";
    if(birthday){
        if(int <=65){
        result = 0;
        } else if(int > 65 && int <= 85){
        result = 1;
        } else {
        result = 2;
        }
    } else {
        if(int <=60){
            result = 0;
        } else if(int > 60 && int <= 80){
            result = 1;
        } else {
            result = 2;
        }
    }
    return result;
}

function fizz_buzz(int){
    var answer = int;
    if(int % 3 === 0 && int % 5 === 0){
        answer = "FizzBuzz";
    } else if(int % 3 === 0){
        answer = "Fizz";
    } else if(int % 5 === 0){
        answer = "Buzz";
    } else {
        answer += "!";
    }
    return answer;
}

function specialEleven(int){
    if(int % 11 === 0 || int % 11 === 1){
        return true;
    } else {
        return false;
    }
}

function withoutDoubles(int, int2, nodouble){
    var answer = int;
    if(nodouble){
        if(int === int2){
            if(int === 6){
                answer = 1 + int;
            } else {
                answer = int + int2 + 1;
            }
        } else{
            answer = int + int2;
        }
    } else{
        answer = int + int2;
    }
    return answer;
}

function left2(word){
    var left = word.substring(0,2);
    var answer = "";
    answer = word.substring(2) + left;
    return answer;
}

function firstLast6(array){
    if(array[0] === 6 || array[array.length - 1] === 6){
        return true;
    } else{
        return false;
    }
}

function has23(array){
    if((array[0] === 2||array[0]===3)||(array[1]===2 || array[1]===3)){
        return true;
    } else{
        return false;
    }
}

function fix23(a){
    var check = a.lastIndexOf(2);
    var three = a.indexOf(3);
    if(check > -1 && three > -1 && check === three - 1){
        a.splice(three, 1, 0);
        return a;
    } else{
        return a;
    }
}

function countYZ(str){
    var ySearch = (str.toUpperCase()).match(/Y \b/g) || [];
    var zSearch = (str.toUpperCase()).match(/Z \b/g) || []; 

    if((str.toUpperCase()).endsWith("Y")){
        ySearch = ySearch + 1;
    } else if((str.toUpperCase()).endsWith("Z")){
        zSearch = zSearch + 1;
    }
    return ySearch.length + zSearch.length;
}

function endOther(str, str2){
    if((str.toLowerCase()).endsWith(str2.toLowerCase()) || (str2.toLowerCase()).endsWith(str.toLowerCase())){
        return true;
    } else {
        return false;
    }
}

function starOut(str){
    var answer = "";
    var star = 0;
    var x = 0;
    for(let i = 0; i < str.length; i++){
        if((str.substring(i-1, i+2)).includes("*")){
        } else{
            answer += str.substring(i, i+1);
        }
    }
    return answer;
}

function getSandwich(str){
    if((str.match(/bread/g))){
        let ans = str.slice(str.indexOf("bread")+5, str.lastIndexOf("bread"));
        return ans;
    } else{
        return "";
    }
}

function canBalance(a){
    var total = 0;
    var left = 0;
    function box(val){total = total + val}
    a.forEach(box) //gets the total
    if(total % 2 === 0){
        for(let i = 0; i < a.length; i++){
            if(left === total-left){

            } else {
                left += a[i]
            }
        }
        if(left === total - left){
            return true;
        }else{
            return false;
        }
    } else{
        return false;
    }
}

function countClumps(a){
    var count = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i]===a[i-1] && a[i] !== a[i+1]){
            count = count+1;
        }
    }
    return count;
}

function sameEnds(str){
    var right = "";
    var left = "";
    var ans = "";
    if(str.length % 2 === 1){
        for(let i = 0; i < (str.length/2)-.5; i++){
            left = str.substring(0, i+1);
            right = str.substring(str.length-(i+1));
            if(left===right){
                ans=right;
            }
        }
    } else{
        for(let i = 0; i < str.length/2; i++){
            left = str.substring(0, i+1);
            right = str.substring(str.length-(i+1));
            if(left===right){
                ans=right;
            }
        }
    }
    return ans;
}