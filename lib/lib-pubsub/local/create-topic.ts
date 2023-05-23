import { createSNSTopic, SNSTopic } from "../src/sns";
import { SNSClient } from "@aws-sdk/client-sns";

export async function testCreateSNSTopic(): Promise<string> {
  try {
    const snsClient = new SNSClient({
      region: "us-east-1",
      endpoint: "http://localhost:4566",
    });
    const topicName = "test-topic";
    const topic: SNSTopic = await createSNSTopic(topicName);
    console.log("Created SNS topic:", topic);
    return topic.TopicArn;
  } catch (error) {
    console.error("Error creating SNS topic:", error);
    throw error;
  }
}
