import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

//consumer group Id
//each consumer has group Id
const consumer = kafka.consumer({ groupId: "my-app3" });

async function main() {
  await consumer.connect();
  await consumer.subscribe({
    topic: "payment-done",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message?.value?.toString(),
      });
    },
  });
}

main();
