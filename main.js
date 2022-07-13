var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
}
recognition.onresult=function(event){
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "take my collage") {
        speak();
    }
};
Webcam.set({
    width:400,
    height:300,
    image_format : 'jpeg',
    jpeg_quality:90
});


var camera = document.getElementById("camera");
function speak(){
     
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function(){
        image_id = "selfie1";
        take_snapshot();
        speak_data = "Taking selfie in 10 sec";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function(){
        image_id = "selfie2";
        take_snapshot();
        speak_data = "Taking selfie in 15 sec";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function(){
         image_id = "selfie3";
        take_snapshot();
        speak_data = "Taking selfie in 20 sec";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
}

function take_snapshot() {
    console.log("image_id");
        Webcam.snap(function(data_uri){
            if (image_id == "selfie1"){
                document.getElementById("result1").innerHTML='<img id="image1" class="selfies" src="'+data_uri+'">'
            }

            if (image_id == "selfie2"){
                document.getElementById("result2").innerHTML='<img id="image2" class="selfies" src="'+data_uri+'">'
            }

            if (image_id == "selfie3"){
                document.getElementById("result3").innerHTML='<img id="image3" class="selfies" src="'+data_uri+'">'
            }
        })
    
    
}
