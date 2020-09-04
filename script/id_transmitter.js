/* .transmitter_screen */
$('#askProfile').hide()
$('#askMore').hide()
$("#goBtn").show()
$('#showBar').hide()



const greekAlpha = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω",]

const EngAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const mathSymbols = ['+','-','*','/','^','√']

//  EQUATIONS CONSIST OF
// numbers1n100 mathSymbols numbers1n100 mathSymbols numbers1n100 solution

const a = 0
const b = 0
const c = 0
const d = 0

const makeAdditionEquationAND = function(base=11, symI){
    let aVar = 0;
    let bVar = 0;
    let cVar = 0;
    
    let add = mathSymbols[0];
    // let sub = mathSymbols[1];
    // let mult = mathSymbols[2];
    // let div = mathSymbols[3]
    let cSym = mathSymbols[symI]
    let cFloor = Math.fround()


    for (let i=1; i<base; i++){
        aVar = Math.floor(Math.random()*base);
        bVar = Math.floor(Math.random()*base);
        cVar = Math.floor(Math.random()*base); 
    }

    if (symI === 0){
        let eQNoC = `${aVar}${add}${bVar}`
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar +cVar;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu})
        $('#bubble').append(`<p #bubEQ>${eQNoC} (?) =  ${cSolu}</p>`);
        const a = `${aVar}`
        const b = `${bVar}`
        const c = `${cVar}`
        const d = `${cSolu}`
        console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);



    }else if (symI === 1){
        let eQNoC = `${aVar}${add}${bVar}`
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar - cVar;
        console.log(`Bubble: ${eQNoC} = ${cSolu}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, cSolu});
        $('#bubble').append(`<p #bubEQ>${eQNoC} (?)  = ${cSolu}</p>`);
        const a = `${aVar}`
        const b = `${bVar}`
        const c = `${cVar}`
        const d = `${cSolu}`
        console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);


    }else if (symI === 2){
        let eQNoC = `${aVar}${add}${bVar}`
        let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
        let cSolu = aVar + bVar
        let answer = cSolu * cVar;
        console.log(`Bubble: ${eQNoC} = ${answer}`)
        console.log(`Can you find the missing code?`)
        console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
        console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
        console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
        console.log({eQDisplay, answer})
        $('#bubble').append(`<p #bubEQ>${eQNoC} (?)  = ${answer}</p>`);
        const a = `${aVar}`
        const b = `${bVar}`
        const c = `${cVar}`
        const d = `${answer}`
        console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);
    }
}   
    

// const basic1add = makeAdditionEquationAND(15, 0)        


let compIdChecks = 0;
let compMissions = 0

//find button for YES I want to play
$('#playbtn').click(function(event){
    // alert( event.currentTarget === this ); // true
    // link this to the start button in the left column
    // create bar on transmitter & change color on click
    
    // MAYBE CREATE LISTENER FOR WIRE CONNECTION?
    
    $('#startBar').css("background-color","var(--backgr)")
    if ($('compIdChecks')===0){
        const basic1add = makeAdditionEquationAND(15, 0)     //if compIdChecks ===0 =>()
    } else if ($('compIdChecks')===1){
        const basic1sub = makeAdditionEquationAND(15, 1)     //if compIdChecks ===1 =>()
    } else if ($('compIdChecks')===2){
        const basic1mult = makeAdditionEquationAND(15, 2)    //if compIdChecks ===2 =>()
    }else if ($('compIdChecks')===3){
        // const basic1div = makeAdditionEquationAND(15, 3)     //if compIdChecks ===3 =>()
        const basic1add = makeAdditionEquationAND(20, 0)
    }else if ($('compIdChecks')===4){
        const basic1sub = makeAdditionEquationAND(20, 1)
    }else if ($('compIdChecks')===5){
        const basic1mult = makeAdditionEquationAND(20, 2)
    }else if ($('compIdChecks')===6){
        // const basic1div = makeAdditionEquationAND(15, 3)     //if compIdChecks ===3 =>()
        const basic1add = makeAdditionEquationAND(25, 0)
    }else if ($('compIdChecks')===7){
        const basic1sub = makeAdditionEquationAND(25, 1)
    }else if ($('compIdChecks')===8){
        const basic1sub = makeAdditionEquationAND(25, 1)
        const basic1mult = makeAdditionEquationAND(25, 2)
        const basic1add = makeAdditionEquationAND(25, 0)
    }
    // $('.fa-wave-square').slideToggle();
});





let $newEQs = ``
let $newPEQ = ``
let $displayPEQ = ``
let evalEq= []

// THIS LISTENS FOR A CLICK ON THE TRANSMITTER- DISPLAYS IT FIRST IN THE INPUT THEN ON THE LINE BELOW THE INPUT WHEN = IS CLICKED
$( ".symButt_left,.numButt,.symButt_right,.bigBtnProb,.bigBtnSolu,#btnEquals" ).click(function( event ) {
    console.log("number & symbol buttons work");

    if ($(this).attr('id') !== 'btnEquals'){
        const inputvalue = $('input.newEQ').first().val()
        $('input.newEQ').first().val(inputvalue + $(this).text())
        console.log($('input.newEQ'));
    }
    else {    
            console.log('equals button works')
        $newEQs = $('input.newEQ').val()      // grab value of input
        $newPEQ = $('#newEQul').prepend(`<li>${$newEQs}</li>`)        // add the new li to user screen
            console.log($newPEQ);
            // console.log('trying to put eq on line')
        $('input.newEQ').val(``);                                       // reset the input to clear
            // formula to check cVar
        $displayPEQ = $('#idchecker__screen').prepend(`<li .newEQ>${$newEQs}</li>`)   // add the new li to idchk screen
            // console.log($displayPEQ);
            // console.log($newEQs)
        evalEq.push($newEQs)
        console.log(`evalEq is:  ${evalEq}`)
        }
});
    
console.log(`This is $newEQs.$newEQs`);
// console.log(`This is $newEQs.join():`, $newEQs.join());

//check if c is equal to input

// $newEQs

// display color change approve/deny
// add points to both spots on deviant
// 




// newEQul






    // alert( event.currentTarget === this ); // true








// 
// 
// 
// 
// 


//     start button display  id="start"






// I'd like further clarification on <u>how to play?</u></p>
// 
// make alert after 5 minutes to set up user name
// 
// player clicks Yes- to 'Do you want to play?'





// DIVISION ATTEMPTS

// else if(symI === 3){
    //     let eQNoC = `${aVar}${add}${bVar}`
    //     let eQDisplay = `(${aVar}${add}${bVar})${cSym}(${cVar})`;
    //     let cSolu = aVar + bVar 
    //     let answer = cSolu / cVar
    //     console.log(`Bubble: ${eQNoC} = ${cSolu}`)
    //     console.log(`Can you find the missing code?`)
    //     console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code. NEW RULE: if number is decimal round to the nearest whole number.`)
    //     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
    //     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
    //     console.log({eQDisplay, cSolu})
    //     $('#bubble').append(`<p #bubEQ>${eQNoC} (?)  = ${answer}</p>`);
    //     const a = `${aVar}`
    //     const b = `${bVar}`
    //     const c = `${cVar}`
    //     const d = `${answer}Math.round(Math.floor(Math.random()*base))`
    //     console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);

    // }  

    // const a = `${aVar}`
    // const b = `${bVar}`
    // const c = `${cVar}`
    // const d = `${cSolu}`
    // console.log(`These are the variables for this round:  ${a} ${b} ${c} ${d}`);





// CHECK FOR missions
        // function isInt(d){
        //     if (d %1===0){
        //         const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
        //     }
        //     else {
        //         const d = `${cSolu}Math.round(Math.floor(Math.random()*base))`
        //     }
        // }
        
        
        // if (a % 2 === 0 && b % 2 === 0){
            // const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
        // }else if ((a + b)% 2 === 0) {
        //     const basic1div = makeAdditionEquationAND(11, 3)     //if compMissions ===3 =>()
        // }else if 
    







//     }
//     if (symI === add){
//         addition()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }else if (symI === sub){
//         subtraction()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }else if (symI === mult){
//         multiplication()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }else if(symI === div){
//         division()
//         console.log(`Bubble: ${eQNoC} = ${cSolu}`)

//     }

//     console.log(`Can you find the missing code?`)
//     console.log(`1st: type the symbol. 2nd: try using parenthesis. 3rd: input equation for the missing code.`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
// console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)



//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)


// const basic1sub = makeAdditionEquationAND(11, 4) /* a+b to pow of c */
// const basic1sub = makeAdditionEquationAND(11, 4) /* a+b  */

// const makeSubtractionEquationAND = function(base=11, symI){
//     let a = 0;
//     let add = mathSymbols[1];
//     let b = 0;
//     let c = 0;
//     let cSym = mathSymbols[symI]
    
//     for (let i=1; i<base; i++){
//         a = Math.floor(Math.random()*base);
//         b = Math.floor(Math.random()*base);
//         c = Math.floor(Math.random()*11); 
//         /* modify base for C to change second  */
//     }
//     let equationNoC = `${a}${add}${b}`
//     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
//     let solutionDisplay = a + b + c
//     // console.log(equationDisplay)
//     // console.log(solutionDisplay)
//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
//     console.log(`Can you find the missing code?`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
// }


// const basic2add = makeAdditionEquationAND(11, 0)
// const basic2sub = makeAdditionEquationAND(11, 1)
// const basic2mult = makeAdditionEquationAND(11, 2)
// const basic2div = makeAdditionEquationAND(11, 3)


// const makeMultiplicationEquationAND = function(base=11, symI){
//     let a = 0;
//     let add = mathSymbols[2];
//     let b = 0;
//     let c = 0;
//     let cSym = mathSymbols[symI]
    
//     for (let i=1; i<base; i++){
//         a = Math.floor(Math.random()*base);
//         b = Math.floor(Math.random()*base);
//         c = Math.floor(Math.random()*11); 
//         /* modify base for C to change second  */
//     }
//     let equationNoC = `${a}${add}${b}`
//     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
//     let solutionDisplay = a + b + c
//     // console.log(equationDisplay)
//     // console.log(solutionDisplay)
//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
//     console.log(`Can you find the missing code?`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)
// }


// const basic3add = makeAdditionEquationAND(11, 0)
// const basic3sub = makeAdditionEquationAND(11, 1)
// const basic3mult = makeAdditionEquationAND(11, 2)
// const basic3div = makeAdditionEquationAND(11, 3)



// const makeDivisionEquationAND = function(base=11, symI){
//     let a = 0;
//     let add = mathSymbols[3];
//     let b = 0;
//     let c = 0;
//     let cSym = mathSymbols[symI]
    
//     for (let i=1; i<base; i++){
//         a = Math.floor(Math.random()*base);
//         b = Math.floor(Math.random()*base);
//         c = Math.floor(Math.random()*11); 
//         /* modify base for C to change second  */
//     }
//     let equationNoC = `${a}${add}${b}`
//     let equationDisplay = `${a}${add}${b}${cSym}(${c})`
//     let solutionDisplay = a + b + c
//     // console.log(equationDisplay)
//     // console.log(solutionDisplay)
//     console.log({equationDisplay, solutionDisplay})
//     console.log(`Bubble: ${equationNoC} = ${solutionDisplay}`)
//     console.log(`Can you find the missing code?`)
//     console.log(`Once you've figured it out, how many equations can you write that equal that number?`)
//     console.log(`Hurry! The time is running. Remember the quicker you execute the missing code the quicker you'll be approved. The more equations you write before the time runs out the higher your score.`)

// }


// const basic4add = makeAdditionEquationAND(11, 0)
// const basic4sub = makeAdditionEquationAND(11, 1)
// const basic4mult = makeAdditionEquationAND(11, 2)
// const basic4div = makeAdditionEquationAND(11, 3)






/* These are grouped click events */

// player clicks Yes- to 'Do you want to play?'
$('#goBtn').click(function(){
    $('#goBtn').hide(); 
    $('#startBar').show();
    $('#dontPlay').hide();
    $('#askProfile').show(); // show buttons to set up profile
    $('#challengeQs').hide();
    $('#askProfile').prepend(`<h4 #askQs>Great let's go! But first...Would you like to set up your profile?</h4>`).show();
 })

// player clicks No- to 'Do you want to play?'
$('#dontPlay').click(function(){
    $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 300)
    $('#askPlay').append(`<h4 #askQs>Would you like to set up your profile?</h4>`)
    $('#askProfile').show() // show buttons to set up profile
    $('#askPlay').hide()
    // $('#challenge').hide()
})
// $("gameChoiceButtons")
// player clicks Yes to setUpProfile & profile section border lights up
$('#setUpProfile').click(function(){
    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 3000)
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','none')}, 3000))
    $('#askProfile').hide()
})
// player clicks No to profile, shows gif, shows more options
$('#gif2').click(function(){
    // $("#gif1").effect("shake", {direction: "up", times:4, distance: 10}, 100)

    setInterval(function(){$("#deviant").css('border','3px groove cyan')}, 3000)
    $('#more').show()
    clearInterval(setInterval(function(){$("#deviant").css('border','none')}, 3000))    // highlights borders of info buttons
    $('#askProfile').hide()
})
// player clicks Later, entire section disappears
$('#later').click(function(){
    $('#askPlay').append(`<h4 #askQs>Would you like to set up your profile?</h4>`)
})
// player clicks Not Sure and is prompted & foot print icon highlights
$('#helpQ').click(function(){
    setInterval(function(){$('.highlightHelpI').css('border','3px groove cyan')}, 3000)
    clearInterval(setInterval(function(){$('.highlightHelpI').css('border','none')}, 3000));
    $('#askPlay').append(`<h4 #askQs>Look for the footprints for help.</h4>`)
})
// + Info was clicked, h5 is appended to clarify
$('#goHelp').click(function(){
    $('#askMore').append(`<h5 #moreInfo .askQs>I'd like further clarification on <u>how to play?</u></h5>`);
    
})
// Player clicks new prompt and ? icon highlights
$('#moreInfo').click(function(){
    setInterval(function(){$('.highlightHelpI').css('border','3px groove cyan')}, 3000)
    clearInterval(setInterval(function(){$('.highlightHelpI').css('border','none')}, 3000));
    $('#gameChoiceButtons').hide()
    $('#askPlay').append(`<h4 #askQs>Look for the ? for more info.</h4>`)
})
