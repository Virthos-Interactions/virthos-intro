const clc = require('cli-color');

exports.introduce = function (options) {
    console.clear()
    console.log("\n\n")
    console.log("                                                      ###          ##")
    console.log("                                                      ##.          ##")
    console.log("                                                      ##.          ##")
    console.log("                                                      ##/          ##")
    console.log("@##              *#*     ##      *#.  (#####/    *############(.   ##  ,#########(           *###/   ,/           (#########/ ")
    console.log("  /#/           (#.      ##      *###(                ##.          ####,          ##      *#(          ,#(      ##           #(")
    console.log("   .#(         ##        ##      *#,                  ##.          ##              ##    (#    "+clc.red(",#####")    +"    *#.    ##             ")
    console.log("     ##       #(         ##      *#                   ##.          ##              ##   ,#    "+clc.red("########.")+"   ##      (#######(,")
    console.log("      (#    .#(          ##      *#                   ##.          ##              ##   .#    "+clc.red("########")+"    #(                *##*")
    console.log("           *#*           ##      *#                   ##.          ##              ##    (#     "+clc.red("(###*")+"    /#    ,              ##")
    console.log("          (#             ##      *#                    ##,         ##              ##                  /#/     /#(           (##")
    console.log("          (              ##      /#.                     ######/   ##              ##        .#########           ###########&@")
    console.log("\n\n                                      2020 Virth"+clc.red("o")+"s Interactions. All rights reserved. \n\n")
    console.log(`Service: ${options.serviceName}`)
    console.log(`Port: ${options.port}`)
    console.log("\n\n")
}