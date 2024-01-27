const mqtt = require('mqtt');

const brokerUrl = 'mqtt://broker.hivemq.com';
const topic = 'sensores/voltagem';

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Publisher connected to broker');
  
  setInterval(() => {
    const message = `Voltagem --> ${randomInt(100,127)}`;
    client.publish(topic, message);
    console.log(`Published: ${message}`);
  }, 2000);
});


function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}