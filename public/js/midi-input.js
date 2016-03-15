function onMIDISuccess(e){b_HasMidi=!0,midi=e;for(var a=midi.inputs.values(),t=a.next();t&&!t.done;t=a.next())t.value.onmidimessage=onMIDIMessage,listInputs(t);midi.onstatechange=onStateChange}function onMIDIMessage(e){switch(data=e.data,cmd=data[0]>>4,channel=15&data[0],type=240&data[0],note=data[1],velocity=data[2],type){case 144:noteOn(note,velocity);break;case 128:noteOff(note,velocity)}console.log(keyData,"key data",data)}function listInputs(e){var a=e.value;console.log("Input port : [ type:'"+a.type+"' id: '"+a.id+"' manufacturer: '"+a.manufacturer+"' name: '"+a.name+"' version: '"+a.version+"']")}function noteOn(e,a){var t=0;switch(e){case 36:t=68;break;case 38:t=69;break;case 40:t=82;break;case 41:t=84;break;case 43:t=65;break;case 45:t=83;break;case 47:t=87;break;case 48:t=70}animationController.trigger(t)}function logger(e){console.log(" [channel: "+(15&e[0])+", cmd: "+(e[0]>>4)+", type: "+(240&e[0])+" , note: "+e[1]+" , velocity: "+e[2]+"]")}var AudioContext=AudioContext||webkitAudioContext,context=new AudioContext,data,cmd,channel,type,note,velocity,b_HasMidi=!1;navigator.requestMIDIAccess?navigator.requestMIDIAccess({sysex:!1}).then(onMIDISuccess,onMIDIFailure):console("No MIDI support in your browser.");