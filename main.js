
predictionnumberone = ""
predictionnumbersecond = ""


Webcam.set ({

    width: 350,
    hight: 300,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById("camera")
Webcam.attach('#camera')


function Snapshot (){

    Webcam.snap(function (data_uri){

        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });

}


clasifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/017Lv2D2F/model.json",modelloaded)


function modelloaded(){

    console.log("model is loaded")
    
}


function speak(){

    var synth = window.speechSynthesis
    speakdataone = "the first prediction"+predictionnumberone
    speakdatatwo = "the second prediction"+predictionnumbersecond
    utterthis = new SpeechSynthesisUtterance(speakdataone+speakdatatwo)
    synth.speak(utterthis)
}

function check (){

  
    img = document.getElementById("capture_image")
    clasifier.classify(img, gotresults)

}

function gotresults (error, results){

    if(error){

        console.error(error)
        
    }
    else {
        console.log(results)
        document.getElementById("result-emotion-name").innerHTML=results[0].label
        document.getElementById("result-emotion-name2").innerHTML=results[1].label
        predictionnumberone = results[0].label
        predictionnumbersecond = results[1].label
        speak()
        if (results[0].label == "happy"){

            document.getElementById("update-emoji").innerHTML = "😀"
        }
        if (results[0].label == "sad"){

            document.getElementById("update-emoji").innerHTML = "😢"
        
        }
        if (results[0].label == "angry"){

            document.getElementById("update-emoji").innerHTML = "😡"
        }
////ggghhghghghhghghghghghghghghgh
        if (results[1].label == "happy"){

            document.getElementById("update-emoji2").innerHTML = "😀"
        }
        if (results[1].label == "sad"){

            document.getElementById("update-emoji2").innerHTML = "😢"
        
        }
        if (results[1].label == "angry"){

            document.getElementById("update-emoji2").innerHTML = "😡"
        }
    }
}































































































































































































































































































































































































































































































