import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { SNSTopic } from "./sns";

export enum EventType {
  CREATE = "create",
  UPDATE = "update",
}

export interface PublishInput {
  source: string;
  event: EventType;
  payload: any;
}

export class Publisher {
  constructor(private readonly topicArn: string) {}

  async publish(input: PublishInput): Promise<void> {
    const snsClient = new SNSClient({});
    const publishCommand = new PublishCommand({
      TopicArn: this.topicArn,
      Message: JSON.stringify(input),
    });
    await snsClient.send(publishCommand);
  }
}
