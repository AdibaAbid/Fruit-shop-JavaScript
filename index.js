const remainingBalance = document.querySelectorAll('.remaining-balance h2 > span')
const totalBalance = document.querySelectorAll('.remaining-balance h2')

let balance = 0,
    bill = 0,
    apple = 0,
    mango = 0,
    banana = 0,
    cherry = 0,
    strawberry = 0,
    pulm = 0,
    orange = 0,
    grapes = 0,
    pom = 0,
    remainingBalanceWallet = 0

const applePrice = 10,
    mangoPrice = 15,
    cherryPrice = 25,
    strawberryPrice = 15,
    pomPrice = 20,
    orangePrice = 8,
    grapesPrice = 12,
    bananaPrice = 12,
    pulmPrice = 10


function showCart() {
    document.querySelector('.hidden').style.display = 'flex';
}
// Wallet balance
function wallet() {
    let inputValue = document.getElementById('amount').value

    remainingBalanceWallet += inputValue
        // debugger
    if (inputValue === '') {

        swal({
            text: "Your Wallet is Empty!",
            icon: 'warning'
        });
        remainingBalance[0].innerHTML = 'RS ' + balance
        totalBalance[0].style.display = 'block'
        remainingBalance[1].innerHTML = 'Rs ' + balance
        totalBalance[1].style.display = 'block'
    } else {
        inputValue = parseInt(inputValue)
        balance += inputValue
            // remainingBalanceWallet -= inputValue

        swal({
            text: "Hurrah! Your Ready to go!",
            icon: 'success',
            button: 'Thank You'
        });
        remainingBalance[0].innerHTML = 'RS ' + balance
        totalBalance[0].style.display = 'block'
        remainingBalance[1].innerHTML = 'RS ' + (balance - bill)
        totalBalance[1].style.display = 'block'
    }


}

//Add Button

function addItem(item) {

    // debugger
    if (remainingBalanceWallet == 0 || remainingBalanceWallet <= 0) {
        swal({
            title: 'Looks Like You do not have enough Balance',
            text: "Bill Has Exceeded the Limit!",
            icon: 'error',
            button: 'Ooppss!'
        });
    } else {
        switch (item) {
            case 'apple':
                if (remainingBalanceWallet >= 10) {
                    apple += 1
                    document.getElementById("appleQuantity").innerHTML = apple;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You donot have Enough Budget",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case 'mango':
                if (remainingBalanceWallet >= 15) {
                    mango += 1
                    document.getElementById("mangoQuantity").innerHTML = mango;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break

            case 'orange':
                if (remainingBalanceWallet >= 8) {
                    orange += 1
                    document.getElementById("orangeQuantity").innerHTML = orange;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break
            case 'banana':
                if (remainingBalanceWallet >= 12) {
                    banana += 1
                    document.getElementById("bananaQuantity").innerHTML = banana;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break

            case 'grapes':
                if (remainingBalanceWallet >= 12) {
                    grapes += 1
                    document.getElementById("grapesQuantity").innerHTML = grapes;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break
            case 'strawberry':
                if (remainingBalanceWallet >= 15) {
                    strawberry += 1
                    document.getElementById("strawberryQuantity").innerHTML = strawberry;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break
            case 'java-pulm':
                if (remainingBalanceWallet >= 10) {
                    pulm += 1
                    document.getElementById("javaQuantity").innerHTML = pulm;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break

            case 'cherry':
                if (remainingBalanceWallet >= 25) {
                    cherry += 1
                    document.getElementById("cherryQuantity").innerHTML = cherry;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break
            case 'pomegranate':
                if (remainingBalanceWallet >= 10) {
                    pom += 1
                    document.getElementById("pomQuantity").innerHTML = pom;
                    //Set Bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set remainingBalance
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "Looks Like You do not have enough Balance",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break
        }

    }
}


// Remove Button
function removeItem(item) {
    // debugger
    if (bill === 0) {
        swal({
            text: "There is NO more Quantity Left",
            icon: 'error',
            button: 'Ooppss!'
        });
    } else {
        switch (item) {
            case "apple":
                // decrement quantity
                if (apple != 0) {
                    apple -= 1;
                    document.getElementById("appleQuantity").innerHTML = apple;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "mango":
                // decrement quantity
                if (mango != 0) {
                    mango -= 1;
                    document.getElementById("mangoQuantity").innerHTML = mango;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "orange":
                // decrement quantity
                if (orange != 0) {
                    orange -= 1;
                    document.getElementById("orangeQuantity").innerHTML = orange;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "grapes":
                // decrement quantity
                if (grapes != 0) {
                    grapes -= 1;
                    document.getElementById("grapesQuantity").innerHTML = grapes;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "banana":
                // decrement quantity
                if (banana != 0) {
                    banana -= 1;
                    document.getElementById("bananaQuantity").innerHTML = banana;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "strawberry":
                // decrement quantity
                if (strawberry != 0) {
                    strawberry -= 1;
                    document.getElementById("strawberryQuantity").innerHTML = strawberry;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "java-pulm":
                // decrement quantity
                if (pulm != 0) {
                    pulm -= 1;
                    document.getElementById("javaQuantity").innerHTML = pulm;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "cherry":
                // decrement quantity
                if (cherry != 0) {
                    cherry -= 1;
                    document.getElementById("cherryQuantity").innerHTML = cherry;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;

            case "pomegranate":
                // decrement quantity
                if (pom != 0) {
                    pom -= 1;
                    document.getElementById("pomQuantity").innerHTML = pom;

                    // set bill
                    bill =
                        apple * applePrice +
                        mango * mangoPrice +
                        banana * bananaPrice +
                        orange * orangePrice +
                        strawberry * strawberryPrice +
                        pulm * pulmPrice +
                        cherry * cherryPrice +
                        grapes * grapesPrice +
                        pom * pomPrice;
                    // set amount
                    remainingBalanceWallet = balance - bill
                    remainingBalance[1].innerHTML = 'RS ' + remainingBalanceWallet
                } else {
                    swal({
                        text: "There is NO more Quantity Left",
                        icon: 'error',
                        button: 'Ooppss!'
                    });
                }
                break;
        }
    }
}