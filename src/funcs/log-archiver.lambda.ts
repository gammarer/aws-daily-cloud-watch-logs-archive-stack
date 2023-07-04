import { CloudWatchLogsClient, CreateExportTaskCommand } from '@aws-sdk/client-cloudwatch-logs';
import { Context } from 'aws-lambda';

export class EnvironmentVariableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EnvironmentVariableError';
  }
}

export class InputVariableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InputVariableError';
  }
}

export interface EventInput {
  readonly logGroupName?: string;
  readonly destinationPrefix?: string;
}

export const handler = async (event: EventInput, context: Context): Promise<string | undefined> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);

  // do validation
  if (!process.env.BUCKET_NAME) {
    throw new EnvironmentVariableError('BUCKET_NAME environment variable not set.');
  }
  if (!event.logGroupName) {
    throw new InputVariableError('event input logGroupName environment variable not set.');
  }
  if (!event.destinationPrefix) {
    throw new InputVariableError('event input destinationPrefix variable not set.');
  }
  const now = new Date();
  const targetFromTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0).getTime() - (1000 * 60 * 60 * 24);
  const targetToTime = targetFromTime + (1000 * 60 * 60 * 24);
  const targetDate = new Date(targetFromTime);
  const y = targetDate.getFullYear();
  const m = ('00' + (targetDate.getMonth() + 1)).slice(-2);
  const d = ('00' + (targetDate.getDate())).slice(-2);


  const cwLogsClient = new CloudWatchLogsClient({});

  const params = {
    destination: process.env.BUCKET_NAME,
    logGroupName: event.logGroupName,
    from: targetFromTime,
    to: targetToTime,
    destinationPrefix: `${event.destinationPrefix}/${y}/${y}-${m}/${m}-${d}`,
  };
  console.log(`CommandParams: ${JSON.stringify(params, null, 2)}`);

  const result = await cwLogsClient.send(new CreateExportTaskCommand(params));
  console.log(`CommandResult: ${JSON.stringify(result, null, 2)}`);

  return result.taskId;
};

