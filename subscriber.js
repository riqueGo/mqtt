const mqtt = require('mqtt');

const brokerUrl = 'mqtt://broker.hivemq.com';
const topic = 'sensores/voltagem';

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Subscriber connected to broker');
  client.subscribe(topic);
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});
