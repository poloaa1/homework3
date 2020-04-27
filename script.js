function genesis() {
        
    // variables: 
    var special = ["~","!","@","#","$","%","^","&","*","-","+","?"]; 
    var numeric = [0,1,2,3,4,5,6,7,8,9];
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
    var type = [];
    var size = [];
    
    // user imput:
    
    function charType () {

    specialChar = confirm("Special characters")
        if (specialChar==true) {
            type.push(special);
        } else {''};

    numChar = confirm("Numeric characters")
        if (numChar==true){
            type.push(numeric);
        }else {''};
        
    lowChar = confirm("lowercase characters") 
        if (lowChar==true) {
            type.push(lowercase);
        } else {''};
        
    uppChar = confirm("Numeric characters") 
        if (uppChar==true) {
            type.push(uppercase);
        } else {''};
        
    var type = []
        if (type = ''){
            alert("must choose at least one character type");
            return;
        }
    
    var myJSON = JSON.stringify(type);
    return type.sort().join('');
    
    }
        
    console.log(charType)
        
    var size = prompt ("Please choose a pasword length between 8 and 128 characters:");
    if(size < 8 || size > 128) {
        alert("Minimum 8 and maximum 128 characters");
        return;
    }
                

    for(var i=0; i<size; i++) {
        password = password + type.charArt(Math.floor(Math.random() * Math.floor(type.size - 1)));
    }

    // publishing result

    document.getElementById("generate").value = password; 
}

// clipboard

function clipboard() {
    document.getElementById("generate").Select();

    document.execCommand("Copy");

    alert("password copied");
}