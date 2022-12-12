var CM; //CHOSEN MODEL
var NICE;
var SC; //SELECTED CAPACITY
var IPHONE;
var CC = ""; //CHOSEN COLOR

//#CYC = CHOOSE YOUR COLOR -> ADD -16 NEGATIVE MARGIN FOR 13 MINI, ADD -10 NEGATIVE MARGIN FOR 13/13 PRO, ADD -6 NEGATIVE MARGIN FOR 13 PRO MAX

//#CCH = COLOR CHOOSER -> SAME BUT -MT instead of -MB

function CHOOSE(Model) {

    CM = Model;

    if (Model == "13-MINI") {

        $("#CYC").addClass("-mb-16");
        $(".CCH").addClass("-mt-6");

    } else if (Model == "13" || Model == "13-PRO") {

        $("#CYC").addClass("-mb-10");
        $(".CCH").addClass("-mt-4");

    } else if (Model == "13-PRO-MAX") {

        $("#CYC").addClass("-mb-6");
        $(".CCH").addClass("-mt-3");

    }

    if (Model == "13" || Model == "13-MINI") {

        CC = "Pink";

        IPHONE = "13";

        const words = Model.toLowerCase().split("-");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        NICE = words.join(" ");

        //$("#PRE").addClass("w-4/6");

        $("#PRE").attr("src", CM + "/PINK.png");

        //BLACK.png = "Phantom Black" = rgb(45, 41, 38) = radio1
        //GREEN.png = "Phantom Green" = rgb(56, 74, 70) = radio2
        //SILVER.png = "Phantom Silver" = rgb(202, 198, 196) = radio3


    } else if (Model == "13-PRO" || Model == "13-PRO-MAX") {

        CC = "Sierra Blue";

        const words = Model.toLowerCase().split("-");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        NICE = words.join(" ");

        IPHONE = "13-PRO"

        //$("#PRE").addClass("w-5/6")

        $("#PRE").attr("src", CM + "/BLUE.png");

        //BLACK.png = "Phantom Black" = radio4
        //CREAM.png = "Cream" = radio5
        //GREEN.png = "Green" = radio6
        //LAVENDER.png = "Lavender" = radio7


    }

    $(".S1").fadeOut(1000, function() {

        $(".CUS").text("Customize your iPhone " + NICE + "!")
        
        $(".S2").fadeIn(1000);

        $(".COLORS-" + IPHONE).fadeIn(1000);
    
    })
}

$("input[name='radio1']").click(function() {

    //alert("FOLD");

    switch (this.id) {
        case "radio1":
            $("#PRE").attr("src", CM + "/PINK.png");
            CC = "Pink";
            break;
        case "radio2":
            $("#PRE").attr("src", CM + "/BLUE.png");
            CC = "Blue";
            break;
        case "radio3":
            $("#PRE").attr("src", CM + "/MIDNIGHT.png");
            CC = "Midnight";
            break;
        case "radio4":
            $("#PRE").attr("src", CM + "/STARLIGHT.png");
            CC = "Starlight";
            break;
        case "radio5":
            $("#PRE").attr("src", CM + "/PRODUCT-RED.png");
            CC = "(PRODUCT)RED";
            break;
    }

});

$("input[name='radio2']").click(function() {

    //alert("FLIP");

    switch (this.id) {
        case "radio6":
            $("#PRE").attr("src", CM + "/BLUE.png");
            CC = "Sierra Blue";
            break;
        case "radio7":
            $("#PRE").attr("src", CM + "/SILVER.png");
            CC = "Silver";
            break;
        case "radio8":
            $("#PRE").attr("src", CM + "/GOLD.png");
            CC = "Gold";
            break;
        case "radio9":
            $("#PRE").attr("src", CM + "/GRAPHITE.png");
            CC = "Graphite";
            break;
    }

});

function CONTINUE2() {

    //HIDE CAPACITY, SHOW EMAIL

    $(".CAPACITY-" + IPHONE).fadeOut(1000);
    $(".CUS").fadeOut(1000)
    $(".S2").fadeOut(1000);

    setTimeout(function() {
        if (CM == "13-MINI") {

            $(".CUS").addClass("-mb-16");
            $(".SUMMARY-" + IPHONE).addClass("-mt-4");
        
        } else if (CM == "13" || CM == "13-PRO") {
        
            $(".CUS").addClass("-mb-10");
            $(".SUMMARY-" + IPHONE).addClass("-mt-4");
        
        } else if (CM == "13-PRO-MAX") {
        
            $(".CUS").addClass("-mb-6");
            $(".SUMMARY-" + IPHONE).addClass("-mt-3");
        
        }
        $(".CUS").text("Your iPhone " + NICE + ":")
        if (CM == "13-MINI") {

            $(".SD").text("5.4-inch OLED")
        
        } else if (CM == "13") {
        
            $(".SD").text("6.1-inch OLED")
        
        } else if (CM == "13-PRO") {
        
            $(".SD").text("6.1-inch ProMotion OLED")
        
        } else if (CM == "13-PRO-MAX") {
        
            $(".SD").text("6.7-inch ProMotion OLED")
        
        }
        $(".CUS").fadeIn(1000);
        $("#PRE").fadeIn(1000);
        $(".SC").text(SC);
        $(".CC").text(CC);
        $(".SUMMARY-" + IPHONE).fadeIn(1000);
        $(".S3").fadeIn(1000);
    }, 1111)

}

function CONTINUE() {

    //HIDE COLORS, SHOW CAPACITY CHOOSING

    $(".COLORS-" + IPHONE).fadeOut(1000);
    $(".CB").fadeOut(1000, function() {

        $(".CAPACITY-" + IPHONE).fadeIn(1000);

        $("#CYC").text("Choose your capacity");

    });
    //$(".S2").fadeOut(1000);

}

function CAPA(xD, CAP) {

    SC = CAP;
    //console.log(xD);
    //console.log($(xD));
    //$("xD")
    $(".CA").not(xD).css("opacity", 0.4).removeClass("border-2").addClass("border").removeClass("border-black").addClass("border-gray-500");
    $(xD).css("opacity", 1).removeClass("border").addClass("border-2").removeClass("border-gray-500").addClass("border-black");

    $(".CAPAB").removeClass("opacity-50").prop("disabled", false);
}

function FINISH() {

    if ($("#EMAIL").val() == "") {
        
        alert("Type in your Email address.");

    } else {
        
        $(".EMAIL").text($("#EMAIL").val());

        $("." + CM + "-SUMMARY").fadeOut(1000);
        
        $(".S3").fadeOut(1000, function() {
    
            $(".S4").fadeIn(1000);
    
        })

    }

}