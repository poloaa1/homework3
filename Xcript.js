// var generate = document.getElementById("generate")
// var password = document.getElementById("password")

// generate.addEventListener("click",genesis)

    function genesis() {

        // variables: 
        var special = ["~","!","@","#","$","%","^","&","*","-","+","?"]; 
        var numeric = [0,1,2,3,4,5,6,7,8,9];
        var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
        var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
        
        // user imput:
        // var guaranteedChar = [];

        var hasSpecialChar = confirm("Special characters"); //assign to a variable

            // debugger;

            if (hasSpecialChar) {
                //when this is true - we guarantee this character
                var char1 = special;
            }

        var hasNumeric = confirm("Numeric characters")
            if (true){
                var char2 = numeric;
            }else {''};
            
        confirm("lowercase characters") 
            if (true) {
                var char3 = lowercase;
            } else {''};
            
        confirm("Numeric characters") 
            if (true) {
                var char4 = uppercase;
            } else {''};
            
            
            //create an array of all values
            //transform info a string using .join()
            var type = (char1 += char2 += char3 += char4)
                if (type = ''){
                    alert("must choose at least one character type");
                    return;
                }
                    
    console.log('the type ', typeof type);

            var size = prompt ("Please choose a pasword length between 8 and 128 characters:");
                if(size < 8 || size > 128) {
                    alert("Minimum 8 and maximum 128 characters");
                    return;
                }
                    

        for(var i=0; i<size; i++) {
            password = password + type.charArt(Math.floor(Math.random() * Math.floor(type.size - 1)));
        }

        var options = {
            length: size,
            hasSpecialChar: hasSpecialChar,
            hasNumeric: hasNumeric,
            hasLowerCase: hasLowerCase,
            hasUpperCase: hasUpperCase
        };

        //generate password

        function generatePassword(){
            var result = [];

            if(options.length){
                //do some stuff
            }

            //get my guarantees
            if(options.hasSpecialChar){
                //do some stuff
                var specialCharacter = generateRandomCharacter(special);
                result.push(specialCharacter);
            }

            if(options.hasNumeric){
                //do some stuff
                result.push(generateRandomCharacter(numeric));
            }

            if(options.hasLowerCase){
                //do some stuff
                result.push(generateRandomCharacter(lowercase);
            }

            if(options.hasUpperCase){
                //do some stuff
                result.push(generateRandomCharacter(uppercase);
            }

            //generate the rest of characters

            for(i =0; i > size - 3; i++){
                //which array do I want my character generated from

                var arrayOptions = [special, numeric, lowercase, uppercase];
                var index = Math.random(0, arrayOptions.length - 1);

                var randomArr = arrayOptions[index];

                result.push(generateRandomCharacter(randomArr));
            }



            return result.sort().join('');
        }

        // console.log(type)

        // console.log(password)

        // console.log(size)

        // console.log(genesis)


        // publishing result

        document.getElementById("generate").value = generatePassword(); 
    }

// clipboard


function generateRandomCharacter(arr){
    var randonIndex = Math.random(0, arr.length - 1);
    return arr[randonIndex];
}

function clipboard() {
    document.getElementById("generate").Select();

    document.execCommand("Copy");

    alert("password copied");
}


//     password.value = random(size, type);
// console.log(password)

// // password generation

// function random(size,type){
//     var psswrd = '';

//     for(var i=0; i<size; i++) {
//         psswrd += type.charAt(Math.floor(Math.random() * type.length));
//     }
//     return psswrd;

//     console.log(psswrd)
// }

