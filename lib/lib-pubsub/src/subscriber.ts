import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns";
import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs";
import { SNSTopic } from "./sns";

export interface SubscribeInput {
  topicArn: string;
  protocol: "sms" | "email";
  endpoint: string;
  queueUrl: string;
}

export class Subscriber {
  private subscriptionArn?: string;

  constructor(private readonly subscribeInput: SubscribeInput) {}

  async subscribe(): Promise<any> {
    const snsClient = new SNSClient({});
    const subscribeCommand = new SubscribeCommand({
      TopicArn: this.subscribeInput.topicArn,
      Protocol: this.subscribeInput.protocol,
      Endpoint: this.subscribeInput.endpoint,
    });
    const result = await snsClient.send(subscribeCommand);
    this.subscriptionArn = result.SubscriptionArn;

    // Create an SQS client and receive a message from the queue
    const sqsClient = new SQSClient({});
    const receiveMessageCommand = new ReceiveMessageCommand({
      QueueUrl: this.subscribeInput.queueUrl,
    });
    const receiveMessageResult = await sqsClient.send(receiveMessageCommand);

    const message = receiveMessageResult.Messages?.[0];

    if (!message) {
      throw new Error("No message received from queue.");
    }

    // Return the message body
    return message.Body;
  }
}
