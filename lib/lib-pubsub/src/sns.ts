import {
  SNSClient,
  CreateTopicCommand,
  CreateTopicResponse,
} from "@aws-sdk/client-sns";

export interface SNSTopic {
  TopicArn: string;
}

export async function createSNSTopic(topicName: string): Promise<SNSTopic> {
  const snsClient = new SNSClient({});
  const createTopicCommand = new CreateTopicCommand({ Name: topicName });
  const result: CreateTopicResponse = await snsClient.send(createTopicCommand);
  return { TopicArn: result.TopicArn! };
}
