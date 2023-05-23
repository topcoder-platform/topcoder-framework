import challenges from "../mocks/challenge2.json";
import { testCreateSNSTopic } from "./create-topic";
import { Publisher, PublishInput, EventType } from "../src/publisher";

async function publishChallenge() {
  try {
    const topicArn = await testCreateSNSTopic();
    if (!topicArn) {
      throw new Error("Failed to create SNS topic");
    }

    const publisher = new Publisher(topicArn);

    const challenge = challenges[0];
    const message: PublishInput = {
      source: "my-app",
      event: EventType.CREATE,
      payload: challenge,
    };

    await publisher.publish(message);
    console.log("Challenge published successfully");
  } catch (error) {
    console.error("Error publishing challenge:", error);
  }
}

publishChallenge().catch(console.error);
