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